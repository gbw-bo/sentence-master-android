/* ============ 句式大师 1.0 · 渲染层逻辑 ============ */
var api = window.api;
function pad(n) { n = String(n); return n.length < 2 ? '0' + n : n; }
const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const yKey = (off = 0) => { const d = new Date(); d.setDate(d.getDate() + off); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

let DATA = null, SENTENCES = [], TEMPLATES = [], byId = {};
let currentPage = 'learn';
let learnState = { sentenceId: null, step: 0, creative: '' };
let reviewState = null;
let updateState = { checking: false, dev: false, available: null, progress: null, downloaded: null, noUpdate: false, error: null };
let CURRENT_VER = '';
const STAGES = ['all', '通用基础', '高中重点'];
function stageOf(s) { return s.stage || '通用基础'; }
function applyTheme(isDark) { document.documentElement.dataset.theme = isDark ? 'dark' : 'light'; }
async function setThemeMode(mode) {
  DATA.settings.theme = mode; await save();
  const sysDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme(mode === 'dark' || (mode === 'system' && sysDark));
  try { api.applyTheme(mode); } catch (e) {}
  const seg = document.getElementById('setTheme');
  if (seg) Array.prototype.slice.call(seg.querySelectorAll('button')).forEach(b => b.classList.toggle('active', b.dataset.v === mode));
}

/* ---------- 工具 ---------- */
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
}
function getSentence(id) { return byId[id]; }
function prog(id) { return DATA.progress[id] || {}; }
function learnedCount() { return SENTENCES.filter(s => (DATA.progress[s.id] || {}).status === 'learned').length; }
function dueCards() {
  const now = Date.now();
  return SENTENCES.filter(s => {
    const p = DATA.progress[s.id];
    return p && p.status === 'learned' && p.due && p.due <= now;
  });
}
async function save() { await api.writeData(DATA); }

function copyText(txt) {
  try {
    const ta = document.createElement('textarea'); ta.value = txt;
    ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
    toast('已复制到剪贴板 ✔');
  } catch (e) { toast('复制失败，请手动选择'); }
}

/* ---------- 每日计划 ---------- */
function ensureTodayPlan() {
  const t = todayKey();
  if (!DATA.todayPlan || DATA.todayPlan.date !== t) DATA.todayPlan = { date: t, ids: [], doneIds: [] };
  const goal = DATA.settings.dailyGoal || 1;
  const stage = DATA.settings.stage || 'all';
  const inStage = s => stage === 'all' || stageOf(s) === stage;
  let ids = (DATA.todayPlan.ids || []).filter(id => byId[id] && inStage(byId[id]));
  const done = (DATA.todayPlan.doneIds || []).filter(id => ids.indexOf(id) >= 0);
  if (ids.length < goal) {
    const isLearned = id => (DATA.progress[id] || {}).status === 'learned';
    const pool = SENTENCES.filter(s => ids.indexOf(s.id) < 0 && inStage(s)).sort((a, b) => {
      const la = isLearned(a.id) ? 1 : 0, lb = isLearned(b.id) ? 1 : 0;
      if (la !== lb) return la - lb;
      const pa = DATA.progress[a.id], pb = DATA.progress[b.id];
      return ((pa && pa.due) ? pa.due : 0) - ((pb && pb.due) ? pb.due : 0);
    });
    while (ids.length < goal && pool.length) ids.push(pool.shift().id);
  }
  DATA.todayPlan.ids = ids;
  DATA.todayPlan.doneIds = done;
}

function stageSelector(cur) {
  const opts = STAGES.map(s => `<option value="${s}" ${s === cur ? 'selected' : ''}>${s === 'all' ? '全部阶段' : s}</option>`).join('');
  return `<div class="stage-sel"><span class="stage-lab">学习阶段</span><select id="stageSel" onchange="changeStage(this.value)">${opts}</select></div>`;
}
function changeStage(v) {
  DATA.settings.stage = v; save(); ensureTodayPlan(); renderSidebar();
  const main = $('#main');
  if (currentPage === 'learn') main.innerHTML = renderLearn();
  else if (currentPage === 'library') main.innerHTML = renderLibrary();
}

function markLearned(id, writing, creative) {
  const now = Date.now();
  const p = Object.assign({}, DATA.progress[id] || {}, { status: 'learned', learnedAt: now, ease: 2.5, interval: 1, reps: 1, lapses: 0, due: now + 86400000, lastReview: now });
  if (creative && creative.trim()) p.creative = creative.trim();
  DATA.progress[id] = p;
  if (writing && writing.trim()) DATA.writings[id] = writing.trim();
  if (DATA.todayPlan.doneIds.indexOf(id) < 0) DATA.todayPlan.doneIds.push(id);
  updateStreak();
}
function updateStreak() {
  const t = todayKey();
  if ((DATA.todayPlan.doneIds || []).length < (DATA.settings.dailyGoal || 1)) return;
  const st = DATA.streak;
  if (st.lastDate === t) return;
  st.current = (st.lastDate === yKey(-1)) ? (st.current + 1) : 1;
  st.lastDate = t;
  if (st.current > (st.best || 0)) st.best = st.current;
}

/* ---------- SM-2 复习 ---------- */
function reviewSM2(p, q) {
  p = Object.assign({ ease: 2.5, interval: 0, reps: 0, lapses: 0 }, p);
  const now = Date.now();
  if (q < 3) {
    p.reps = 0; p.interval = 1; p.lapses += 1;
  } else {
    if (p.reps === 0) p.interval = 1;
    else if (p.reps === 1) p.interval = 6;
    else p.interval = Math.round(p.interval * p.ease);
    p.reps += 1;
    p.ease = p.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (p.ease < 1.3) p.ease = 1.3;
  }
  p.due = now + p.interval * 86400000;
  p.lastReview = now;
  return p;
}

/* ============ 初始化 ============ */
async function init() {
  DATA = await api.readData();
  SENTENCES = (window.SENTENCES_A || []).concat(window.SENTENCES_B || [], window.SENTENCES_C || []);
  TEMPLATES = window.TEMPLATES || [];
  byId = {}; SENTENCES.forEach(s => byId[s.id] = s);
  if (!DATA.writeHistory) DATA.writeHistory = {};
  try { CURRENT_VER = await api.version(); } catch (e) {}
  ensureTodayPlan(); await save();

  $('#btnMin').onclick = () => api.minimize();
  $('#btnClose').onclick = () => api.close();
  // 禁止 F11：本软件已禁用最大化，拦截 F11 以防任何意外触发最大化/全屏，保证 acrylic 毛玻璃常驻。
  window.addEventListener('keydown', e => {
    if (e.key === 'F11' || (e.key && e.key.toLowerCase && e.key.toLowerCase() === 'f11') || e.code === 'F11') {
      e.preventDefault();
      e.stopPropagation();
    }
  });
  document.querySelectorAll('.nav-item').forEach(n => n.onclick = () => navigate(n.dataset.page));
  api.onNav(page => navigate(page));

  // 更新事件监听（全局注册一次，由主进程转发）
  api.onUpdateAvailable(d => { updateState.available = d; renderUpdateStatus(); });
  api.onUpdateProgress(p => { updateState.progress = p; renderUpdateStatus(); });
  api.onUpdateDownloaded(d => { updateState.downloaded = d; renderUpdateStatus(); });
  api.onUpdateError(e => { updateState.error = e; renderUpdateStatus(); });

  // 每日催促弹窗（主进程在提醒时发送 'nag'）
  api.onNag(() => openNag());

  // 主题：以用户保存的偏好为准（system 时跟随系统），并同步给主进程让窗口 Mica 一致
  const themeMode = DATA.settings.theme || 'system';
  const sysDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  applyTheme(themeMode === 'dark' || (themeMode === 'system' && sysDark));
  try { api.applyTheme(themeMode); } catch (e) {}
  // 同步启动静默检查可能已完成的更新状态
  try {
    const us = await api.getUpdateState();
    if (us) {
      updateState.dev = !!us.dev;
      if (us.available) updateState.available = { version: us.version, notes: us.notes };
      if (us.downloaded) updateState.downloaded = { version: us.version };
      if (us.error) updateState.error = { message: us.error };
    }
  } catch (e) {}
  api.onTheme(isDark => applyTheme(isDark));

  // 启动时恢复已保存的打卡提醒（通知 / 日历）
  try {
    if (DATA.settings.remindEnabled && DATA.settings.remindChannel
        && DATA.settings.remindChannel !== 'none') {
      api.setReminder({ enabled: true, time: DATA.settings.remindTime || '20:00',
                        channel: DATA.settings.remindChannel });
    }
  } catch (e) {}

  navigate('learn');
}

/* ============ 导航 ============ */
// 导航栈：侧栏的「今日学习/复习/句式库/模板/我的」是顶层页面；
// 从「我的」进「设置」、从「设置」进「更新」是子层级。进入子层级时把上一级压栈，
// 子页面左上角的「← 返回」按钮调用 navBack() 回到上一级；点侧栏顶层项则清空栈。
let navStack = [];
const TOP_PAGES = ['learn', 'review', 'library', 'template', 'me'];
async function navigate(page, opts) {
  opts = opts || {};
  if (TOP_PAGES.indexOf(page) >= 0) navStack = [];
  else if (!opts.noPush && currentPage) navStack.push(currentPage);
  currentPage = page;
  const act = (page === 'settings' || page === 'update' || page === 'history') ? 'me' : page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.page === act));
  renderSidebar();
  const main = $('#main');
  if (page === 'learn') main.innerHTML = renderLearn();
  else if (page === 'review') main.innerHTML = renderReview();
  else if (page === 'library') main.innerHTML = renderLibrary();
  else if (page === 'template') main.innerHTML = renderTemplate();
  else if (page === 'me') { main.innerHTML = renderMe(); bindMe(); }
  else if (page === 'settings') { main.innerHTML = renderSettings(); bindSettings(); }
  else if (page === 'update') { main.innerHTML = await renderUpdate(); renderUpdateStatus(); }
  else if (page === 'history') { main.innerHTML = renderHistory(); }
  main.scrollTop = 0;
}
function navBack() {
  const prev = navStack.pop();
  if (prev) navigate(prev, { noPush: true });
  else navigate('me');
}

function renderSidebar() {
  $('#streakNum').textContent = DATA.streak.current || 0;
  const plan = DATA.todayPlan || {};
  const goal = DATA.settings.dailyGoal || 1;
  const done = (plan.doneIds || []).length;
  const lb = $('#navLearnBadge'); lb.textContent = `${done}/${goal}`;
  const rb = $('#navReviewBadge'); rb.textContent = dueCards().length;
}

/* ============ 今日学习 ============ */
const STEPS = [
  { key: 'struct', title: '认识结构', desc: '先搞懂这个句式长什么样、怎么搭' },
  { key: 'example', title: '例句精析', desc: '看考场级例句，体会它怎么用' },
  { key: 'create', title: '联想创造', desc: '发挥想象，把句式变成你自己的画面' },
  { key: 'trap', title: '易错辨析', desc: '避开 90% 人会踩的坑' },
  { key: 'drill', title: '仿写练习', desc: '照葫芦画瓢，动手仿写两句' },
  { key: 'write', title: '落地成文', desc: '用它写一句你考试能用上的话' }
];

function renderLearn() {
  ensureTodayPlan();
  const plan = DATA.todayPlan;
  const goal = DATA.settings.dailyGoal || 1;
  const done = (plan.doneIds || []).length;
  const allDone = done >= goal;

  let html = `<div class="page"><h1>今日学习</h1><div class="sub">每天搞定 ${goal} 个高级句式，积少成多，作文自然有亮点。</div>`;
  html += stageSelector(DATA.settings.stage || 'all');

  if (allDone) {
    html += `<div class="card celebrate">
      <div class="confetti" id="confettiBox"></div>
      <div class="mascot">🎓<span class="mascot-pop">🎉</span></div>
      <div class="big">🎊</div>
      <h2>今天的 ${goal} 个句式拿下了！</h2>
      <p>连续打卡 ${DATA.streak.current} 天，别让明天的自己失望。</p>
      <div class="btn-row" style="justify-content:center">
        <button class="btn primary" onclick="goReview()">去复习旧句式 →</button>
        <button class="btn" onclick="goTemplate()">翻翻作文模板</button>
        <button class="btn ghost" onclick="resetToday()">再加练一个</button>
      </div></div>`;
    html += `</div>`;
    setTimeout(spawnConfetti, 30);
    return html;
  }

  const pct = Math.round(done / goal * 100);
  html += `<div class="card progress-head">
    <div class="ring" style="--p:${pct}"><div class="val">${done}<small>/${goal}</small></div></div>
    <div>
      <div style="font-weight:700;font-size:16px">今日目标进度</div>
      <div style="color:var(--ink-soft);font-size:13px;margin-top:4px">已完成 ${done} 个，还差 ${goal - done} 个就达标啦。连续打卡 ${DATA.streak.current} 天 🔥</div>
    </div>
  </div>`;

  // 计划清单
  html += `<div class="plan-list">`;
  plan.ids.forEach((id, i) => {
    const s = byId[id]; if (!s) return;
    const isDone = plan.doneIds.indexOf(id) >= 0;
    const active = (learnState.sentenceId === id);
    html += `<div class="plan-row ${isDone ? 'done' : ''}" ${isDone ? '' : `onclick="pickSentence('${id}')"`} style="${active && !isDone ? 'border-color:var(--accent);box-shadow:var(--shadow)' : ''}">
      <div class="idx">${isDone ? '✓' : i + 1}</div>
      <div class="meta"><div class="t">${esc(s.cn)}</div><div class="d">${esc(s.cat)} · 难度 ${'★'.repeat(s.level || 1)}</div></div>
      ${isDone ? '<div class="chk">已学会</div>' : `<div class="tag">${active ? '学习中' : '待学习'}</div>`}
    </div>`;
  });
  html += `</div>`;

  // 当前句式流程
  if (!learnState.sentenceId || plan.ids.indexOf(learnState.sentenceId) < 0 || plan.doneIds.indexOf(learnState.sentenceId) >= 0) {
    learnState.sentenceId = plan.ids.find(id => !plan.doneIds.indexOf(id) >= 0);
    learnState.step = 0;
  }
  if (learnState.sentenceId) html += renderStepFlow(byId[learnState.sentenceId]);

  html += `</div>`;
  return html;
}

function pickSentence(id) {
  if ((DATA.todayPlan.doneIds || []).indexOf(id) >= 0) return;
  learnState.sentenceId = id; learnState.step = 0;
  $('#main').innerHTML = renderLearn();
}

function renderStepFlow(s) {
  const step = STEPS[learnState.step];
  let stepper = '<div class="stepper">';
  STEPS.forEach((st, i) => {
    const cls = i === learnState.step ? 'active' : (i < learnState.step ? 'done' : '');
    stepper += `<div class="st ${cls}" onclick="jumpStep(${i})" title="跳到这一步"><span class="n">${i < learnState.step ? '✓' : i + 1}</span>${st.title}</div>`;
  });
  stepper += '</div>';

  let body = '';
  if (step.key === 'struct') body = stepStruct(s);
  else if (step.key === 'example') body = stepExample(s);
  else if (step.key === 'create') body = stepCreate(s);
  else if (step.key === 'trap') body = stepTrap(s);
  else if (step.key === 'drill') body = stepDrill(s);
  else if (step.key === 'write') body = stepWrite(s);

  const last = learnState.step === STEPS.length - 1;
  const nav = `<div class="btn-row" style="margin-top:20px;justify-content:space-between">
    <button class="btn" ${learnState.step === 0 ? 'disabled' : ''} onclick="stepGo(-1)">← 上一步</button>
    ${last
      ? `<button class="btn primary" onclick="finishLearn('${s.id}')">✓ 我学会了，完成</button>`
      : `<button class="btn primary" onclick="stepGo(1)">下一步 →</button>`}
  </div>`;

  return `<div class="card step-card" style="margin-top:16px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
      <span class="tag" style="background:var(--accent-soft);color:var(--accent);padding:3px 10px;border-radius:20px;font-size:12px">${esc(s.cat)}</span>
      <span style="font-weight:800;font-size:17px">${esc(s.cn)}</span>
    </div>
    ${stepper}${body}${nav}
  </div>`;
}

function stepStruct(s) {
  let points = (s.points || []).map(p => `<li>${esc(p)}</li>`).join('');
  return `<div class="step-title">🧱 结构公式</div><div class="step-desc">${esc(s.core)}</div>
    <div class="formula">${esc(s.en)}</div>
    ${s.mnemonic ? `<div class="mnemonic"><b>记忆锚点：</b>${esc(s.mnemonic)}</div>` : ''}
    <div style="font-weight:700;margin:16px 0 4px">关键要点</div>
    <ul class="points">${points}</ul>`;
}
function stepExample(s) {
  let ex = (s.ex || []).map(e => `<div class="ex">
    <div class="en">${esc(e.en)}</div>
    <div class="cn">${esc(e.cn)}</div>
    ${e.use ? `<div class="use">💡 ${esc(e.use)}</div>` : ''}
  </div>`).join('');
  return `<div class="step-title">📖 例句精析</div><div class="step-desc">每个例句都标了它在考场上的用法，读的时候想：这一句如果换成简单句，会损失多少分？</div>${ex}`;
}
function stepCreate(s) {
  const topics = (s.topics || []).join('、');
  const prompt = `试着把「${s.cn}」放进一个你熟悉的画面里——可以是${topics || '你生活里的真实场景'}，或某个你崇拜的人做过的事。${s.mnemonic ? '用你自己的话复述这个记忆锚点：' + s.mnemonic : ''} 然后写一句有画面感的英文，让这个句式住进你的记忆。`;
  return `<div class="step-title">🎨 联想创造</div><div class="step-desc">${esc(prompt)}</div>
    <textarea id="creativeInput" placeholder="在这里写一句你创造的、带画面感的句子…">${esc(learnState.creative || '')}</textarea>
    <div style="font-size:12px;color:var(--ink-soft);margin-top:8px">这一步不打分，只帮你把句式“焊”进长期记忆。写完点下一步即可。</div>`;
}
function stepTrap(s) {
  if (!s.trap) return `<div class="step-title">⚠️ 易错辨析</div><div class="step-desc">这个句式比较“乖”，暂时没有高频易错点，直接下一步。</div>`;
  return `<div class="step-title">⚠️ 易错辨析</div><div class="step-desc">下面这句是很多人会写的<b>错误版本</b>，对比正确版本，记住差别在哪。</div>
    <div class="trap">
      <div class="row bad"><span class="lab">✗ 错</span><span class="txt">${esc(s.trap.bad)}</span></div>
      <div class="row good"><span class="lab">✓ 对</span><span class="txt">${esc(s.trap.good)}</span></div>
      <div class="why"><b>为什么：</b>${esc(s.trap.why)}</div>
    </div>`;
}
function stepDrill(s) {
  let drills = (s.drills || []).map((d, i) => `<div class="drill">
    <div class="q">${i + 1}. ${esc(d.q)}</div>
    <button class="btn sm" onclick="revealDrill(${i})">显示参考答案</button>
    <div class="reveal" id="drill${i}">
      <div class="a">${esc(d.a)}</div>
      <div class="tip"><b>技巧：</b>${esc(d.tip || '')}</div>
    </div>
  </div>`).join('');
  return `<div class="step-title">✏️ 仿写练习</div><div class="step-desc">先自己在脑子里翻成英文，再点开看答案对照。模仿是掌握句式最快的路。</div>${drills}`;
}
function stepWrite(s) {
  const hist = (DATA.writeHistory[s.id] || []);
  return `<div class="step-title">🚀 落地成文</div><div class="step-desc">最后一步：用「${esc(s.cn)}」写一个你考试话题里能用上的句子。写下来，这句式就真成你的了。</div>
    <textarea id="writeInput" placeholder="例如：It is the reading habit rather than talent that shapes who we become." oninput="updateWordCount()"></textarea>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
      <span style="font-size:12px;color:var(--ink-soft)">提示结构：${esc(s.en)}</span>
      <span id="wc" style="font-size:12px;color:var(--accent);font-weight:700">0 词</span>
    </div>
    <div class="btn-row" style="margin-top:12px">
      <button class="btn sm" onclick="saveWriteNow('${s.id}')">💾 保存这句</button>
    </div>`;
}
function updateWordCount() {
  const wi = document.getElementById('writeInput'), tip = document.getElementById('wc');
  if (!wi || !tip) return;
  const n = wi.value.trim() ? wi.value.trim().split(/\s+/).length : 0;
  tip.textContent = n + ' 词';
}
async function saveWriteNow(id) {
  const wi = document.getElementById('writeInput'); if (!wi) return;
  const t = wi.value.trim();
  if (!t) { toast('先写一句再保存哦'); return; }
  if (!DATA.writeHistory[id]) DATA.writeHistory[id] = [];
  DATA.writeHistory[id].push({ text: t, ts: Date.now() });
  DATA.writings[id] = t;
  await save();
  toast('已保存到历史 ✔');
}
function fmtDate(ts) {
  const d = new Date(ts);
  function p(n) { n = String(n); return n.length < 2 ? '0' + n : n; }
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}`;
}
/* 查看历史已迁移至「我的 → 历史记录」页，原 per-sentence 弹窗不再需要 */

function revealDrill(i) { $('#drill' + i).classList.add('show'); }
function stepGo(dir) {
  // 离开 create 步时保存创意文本
  if (STEPS[learnState.step].key === 'create') {
    const ci = $('#creativeInput'); if (ci) learnState.creative = ci.value;
  }
  learnState.step = Math.max(0, Math.min(STEPS.length - 1, learnState.step + dir));
  $('#main').innerHTML = renderLearn();
}
function jumpStep(i) {
  if (STEPS[learnState.step].key === 'create') {
    const ci = $('#creativeInput'); if (ci) learnState.creative = ci.value;
  }
  learnState.step = Math.max(0, Math.min(STEPS.length - 1, i));
  $('#main').innerHTML = renderLearn();
}
async function finishLearn(id) {
  if (STEPS[learnState.step].key === 'create') { const ci = $('#creativeInput'); if (ci) learnState.creative = ci.value; }
  const wi = $('#writeInput');
  const writing = wi ? wi.value.trim() : '';
  if (!writing) { toast('先写一句再完成哦～'); if (wi) wi.focus(); return; }
  if (writing.split(/\s+/).length < 4) { toast('句子太短啦，写完整一句（至少 4 个词）'); if (wi) wi.focus(); return; }
  if (!DATA.writeHistory[id]) DATA.writeHistory[id] = [];
  DATA.writeHistory[id].push({ text: writing, ts: Date.now() });
  markLearned(id, writing, learnState.creative);
  await save();
  api.notify('今日句式 +1', `「${byId[id].cn}」已收入囊中，连续打卡 ${DATA.streak.current} 天 🔥`);
  learnState.sentenceId = null; learnState.step = 0; learnState.creative = '';
  toast('学会啦！🎉');
  $('#main').innerHTML = renderLearn();
}
function resetToday() {
  // 加练一个：只往今日计划补一个未学的句式，不改动持久化的每日目标
  const learned = id => (DATA.progress[id] || {}).status === 'learned';
  const pool = SENTENCES.filter(s => DATA.todayPlan.ids.indexOf(s.id) < 0)
    .sort((a, b) => (learned(a.id) ? 1 : 0) - (learned(b.id) ? 1 : 0));
  if (pool.length) DATA.todayPlan.ids.push(pool[0].id);
  save();
  $('#main').innerHTML = renderLearn();
}
function goReview() { navigate('review'); }
function goTemplate() { navigate('template'); }

/* 庆祝彩带动画：在 #confettiBox 里生成若干彩色碎片往下飘 */
function spawnConfetti() {
  const box = document.getElementById('confettiBox');
  if (!box) return;
  const colors = ['#4f46e5', '#06b6d4', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('span');
    c.className = 'confetti-piece';
    c.style.left = Math.random() * 100 + '%';
    c.style.background = colors[i % colors.length];
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.animationDuration = (1.6 + Math.random() * 1.2) + 's';
    c.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    box.appendChild(c);
  }
  setTimeout(() => { if (box) box.innerHTML = ''; }, 3200);
}

/* ============ 智能复习 ============ */
function buildReviewQueue(allMode) {
  let list;
  if (allMode) {
    list = SENTENCES.filter(s => (DATA.progress[s.id] || {}).status === 'learned');
    list.sort((a, b) => (DATA.progress[a.id].due || 0) - (DATA.progress[b.id].due || 0));
  } else {
    list = dueCards().sort((a, b) => {
      const pa = DATA.progress[a.id], pb = DATA.progress[b.id];
      if ((pb.lapses || 0) !== (pa.lapses || 0)) return (pb.lapses || 0) - (pa.lapses || 0);
      if ((pa.ease || 2.5) !== (pb.ease || 2.5)) return (pa.ease || 2.5) - (pb.ease || 2.5);
      return (pa.due || 0) - (pb.due || 0);
    });
  }
  return list.map(s => s.id);
}
function renderReview() {
  const due = dueCards().length;
  let html = `<div class="page"><h1>智能复习</h1><div class="sub">基于记忆曲线（SM-2）：不熟练的优先深度复习，熟练的快速过。今日待复习 ${due} 个。</div>`;
  if (reviewState && reviewState.queue.length) {
    return html + renderReviewCard() + `</div>`;
  }
  html += `<div class="card">
    <div style="font-weight:700;margin-bottom:6px">选择复习方式</div>
    <div style="color:var(--ink-soft);font-size:13px;margin-bottom:16px">不熟练的句式会排在前面，让你把时间花在刀刃上。</div>
    <div class="btn-row">
      ${due > 0 ? `<button class="btn primary" onclick="startReview(false)">🔁 复习到期句式（${due}）</button>` : ''}
      <button class="btn" onclick="startReview(true)">📚 复习全部已学（${learnedCount()}）</button>
      <button class="btn ghost" onclick="startQuick()">⚡ 熟练巩固（快速过）</button>
    </div>`;
  if (due === 0) html += `<div class="note">今天没有到期需要深度复习的句式，说明你对已学内容掌握得不错！可以点“复习全部”温习，或用“快速过”保持手感。</div>`;
  html += `</div></div>`;
  return html;
}
function startReview(allMode) {
  const q = buildReviewQueue(allMode);
  if (!q.length) { toast('还没有已学会的句式可复习'); return; }
  reviewState = { queue: q, idx: 0, quick: false, revealed: false };
  $('#main').innerHTML = renderReview();
}
function startQuick() {
  const q = buildReviewQueue(true);
  if (!q.length) { toast('还没有已学会的句式'); return; }
  reviewState = { queue: q, idx: 0, quick: true, revealed: true };
  $('#main').innerHTML = renderReview();
}
function renderReviewCard() {
  const id = reviewState.queue[reviewState.idx];
  const s = byId[id];
  const total = reviewState.queue.length;
  const pos = reviewState.idx + 1;
  if (reviewState.quick) {
    let ex = (s.ex || []).slice(0, 2).map(e => `<div class="ex"><div class="en">${esc(e.en)}</div><div class="cn">${esc(e.cn)}</div></div>`).join('');
    return `<div class="card review-card">
      <div style="color:var(--ink-soft);font-size:13px">快速巩固 ${pos}/${total}</div>
      <div class="cover-box" style="background:var(--accent-soft)">${esc(s.cn)} · ${esc(s.en)}</div>
      ${ex}
      <div class="btn-row" style="justify-content:center;margin-top:18px">
        <button class="btn primary" onclick="rateCard(4)">已复习 ✓</button>
        <button class="btn ghost" onclick="quitReview()">退出</button>
      </div></div>`;
  }
  let answer = '';
  if (reviewState.revealed) {
    let ex = (s.ex || []).slice(0, 2).map(e => `<div class="ex"><div class="en">${esc(e.en)}</div><div class="cn">${esc(e.cn)}</div></div>`).join('');
    answer = `<div class="cover-box" style="background:var(--accent-soft);margin-top:14px">${esc(s.en)}</div>${ex}
      <div class="rating">
        <button class="rate-btn r1" onclick="rateCard(1)">忘了 😵</button>
        <button class="rate-btn r2" onclick="rateCard(3)">模糊 🤔</button>
        <button class="rate-btn r3" onclick="rateCard(4)">记得 🙂</button>
        <button class="rate-btn r4" onclick="rateCard(5)">流利 🤩</button>
      </div>`;
  }
  return `<div class="card review-card">
    <div style="color:var(--ink-soft);font-size:13px">遮盖回想 ${pos}/${total}</div>
    <div class="review-q">在脑中默写出「<b>${esc(s.cn)}</b>」的结构，并想一个例句</div>
    ${reviewState.revealed ? answer : `<button class="btn primary" style="margin-top:8px" onclick="revealCard()">显示答案</button>`}
    ${reviewState.revealed ? '' : ''}
    <div class="btn-row" style="justify-content:center;margin-top:14px"><button class="btn ghost" onclick="quitReview()">退出复习</button></div>
  </div>`;
}
function revealCard() { reviewState.revealed = true; $('#main').innerHTML = renderReview(); }
async function rateCard(q) {
  const id = reviewState.queue[reviewState.idx];
  DATA.progress[id] = reviewSM2(Object.assign({}, DATA.progress[id]), q);
  await save();
  reviewState.idx++;
  reviewState.revealed = false;
  if (reviewState.idx >= reviewState.queue.length) {
    reviewState = null;
    toast('本轮复习完成 💪');
    $('#main').innerHTML = renderReview();
    renderSidebar();
  } else {
    $('#main').innerHTML = renderReview();
  }
}
function quitReview() { reviewState = null; $('#main').innerHTML = renderReview(); renderSidebar(); }

/* ============ 句式库 ============ */
function renderLibrary() {
  const stage = DATA.settings.stage || 'all';
  const inStage = s => stage === 'all' || stageOf(s) === stage;
  const list = SENTENCES.filter(inStage);
  const cats = {};
  list.forEach(s => { (cats[s.cat] = cats[s.cat] || []).push(s); });
  let html = `<div class="page"><h1>句式库</h1><div class="sub">共 ${SENTENCES.length} 个高级句式（当前阶段显示 ${list.length} 个），已学会 ${learnedCount()} 个。点击任意句式查看完整讲解。</div>`;
  html += stageSelector(stage);
  Object.keys(cats).forEach(cat => {
    html += `<div style="font-weight:800;margin:14px 0 10px;color:var(--ink-soft);font-size:13px">${esc(cat)}</div><div class="grid">`;
    cats[cat].forEach(s => {
      const done = (DATA.progress[s.id] || {}).status === 'learned';
      html += `<div class="tile" onclick="openSentence('${s.id}')">
        ${done ? '<div class="done-badge">已学会</div>' : `<div class="lv">难度 ${'★'.repeat(s.level || 1)}</div>`}
        <span class="cat">${esc(s.cat)}</span>
        <div class="tt">${esc(s.cn)}</div>
        <div class="td">${esc(s.en)}</div>
      </div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}
function openSentence(id) {
  const s = byId[id]; if (!s) return;
  const done = (DATA.progress[s.id] || {}).status === 'learned';
  let points = (s.points || []).map(p => `<li>${esc(p)}</li>`).join('');
  let ex = (s.ex || []).map(e => `<div class="ex"><div class="en">${esc(e.en)}</div><div class="cn">${esc(e.cn)}</div>${e.use ? `<div class="use">💡 ${esc(e.use)}</div>` : ''}</div>`).join('');
  const m = modal(`<div style="display:flex;gap:10px;align-items:center;margin-bottom:10px">
      <span class="tag" style="background:var(--accent-soft);color:var(--accent);padding:3px 10px;border-radius:20px;font-size:12px">${esc(s.cat)}</span>
      <span style="font-weight:800;font-size:19px">${esc(s.cn)}</span>
      ${done ? '<span style="color:var(--good);font-size:13px">✓ 已学会</span>' : ''}
    </div>
    <div class="formula">${esc(s.en)}</div>
    <p style="margin:12px 0;line-height:1.7">${esc(s.core)}</p>
    ${s.mnemonic ? `<div class="mnemonic"><b>记忆锚点：</b>${esc(s.mnemonic)}</div>` : ''}
    <div style="font-weight:700;margin:14px 0 4px">关键要点</div><ul class="points">${points}</ul>
    <div style="font-weight:700;margin:14px 0 4px">例句精析</div>${ex}
    ${s.trap ? `<div style="font-weight:700;margin:14px 0 4px">易错辨析</div><div class="trap">
      <div class="row bad"><span class="lab">✗ 错</span><span class="txt">${esc(s.trap.bad)}</span></div>
      <div class="row good"><span class="lab">✓ 对</span><span class="txt">${esc(s.trap.good)}</span></div>
      <div class="why"><b>为什么：</b>${esc(s.trap.why)}</div></div>` : ''}
    <div class="note" style="margin-top:14px">${esc(s.examTip || '')}</div>
    ${done ? '' : `<div class="btn-row" style="margin-top:16px;justify-content:flex-end"><button class="btn primary" onclick="learnFromLib('${s.id}')">加入今日学习 →</button></div>`}
  `);
}
async function learnFromLib(id) {
  if (DATA.todayPlan.ids.indexOf(id) < 0) DATA.todayPlan.ids.push(id);
  DATA.todayPlan.doneIds = DATA.todayPlan.doneIds.filter(x => x !== id);
  await save(); closeModal();
  learnState.sentenceId = id; learnState.step = 0;
  navigate('learn');
}

/* ============ 作文模板 ============ */
function renderTemplate() {
  const groups = {};
  TEMPLATES.forEach(t => { const k = t.type || '其他'; (groups[k] = groups[k] || []).push(t); });
  const order = ['议论文', '应用文', '读后续写', '图表作文', '通用', '其他'];
  const keys = Object.keys(groups).sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  let html = `<div class="page"><h1>作文模板库</h1><div class="sub">${TEMPLATES.length} 套优秀作文模板，已按文体分类。每个都预留了高级句式插槽 —— 把今天学的句式填进去，就是一篇高分作文。</div>`;
  keys.forEach(k => {
    html += `<div style="font-weight:800;margin:18px 0 10px;color:var(--ink-soft);font-size:14px">📂 ${esc(k)}（${groups[k].length}）</div><div class="grid">`;
    groups[k].forEach(t => {
      const slotInfo = (t.slots || []).map(sid => {
        const s = byId[sid];
        return s ? `<span class="slot-tag">${esc(s.cn)}</span>` : '';
      }).join('');
      html += `<div class="tile" onclick="openTemplate('${t.id}')">
        <div class="tt">${esc(t.name)}</div>
        <div class="td" style="margin-top:8px">${esc(t.scene)}</div>
        <div style="margin-top:10px;color:var(--ink-soft);font-size:12px">${esc(t.exam)} · ${esc(t.words)}</div>
        <div style="margin-top:8px">${slotInfo}</div>
      </div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}
function openTemplate(id) {
  const t = TEMPLATES.find(x => x.id === id); if (!t) return;
  let blocks = (t.outline || []).map(o => {
    const txt = esc(o.text);
    return `<div class="tpl-block">
      <div class="ph">${esc(o.part)}</div>
      <div class="pt">${esc(o.tips || '')}</div>
      <pre>${txt}</pre>
    </div>`;
  }).join('');
  let slotInfo = (t.slots || []).map(sid => {
    const s = byId[sid];
    if (!s) return '';
    const learned = (DATA.progress[sid] || {}).status === 'learned';
    return `<span class="slot-tag" style="${learned ? '' : 'opacity:.55'}">${esc(s.cn)}${learned ? ' ✓' : ' (未学)'}</span>`;
  }).join('');
  modal(`<div style="font-weight:800;font-size:20px">${esc(t.name)}</div>
    <div style="color:var(--ink-soft);font-size:13px;margin:6px 0 12px">${esc(t.exam)} · ${esc(t.words)} · 适用：${esc(t.scene)}</div>
    <div style="font-weight:700;margin-bottom:6px">本模板用到的高级句式</div>
    <div style="margin-bottom:14px">${slotInfo}</div>
    ${blocks}
    <div class="note">${esc(t.boost || '')}</div>
    <div class="btn-row" style="margin-top:16px;justify-content:flex-end">
      <button class="btn" onclick="copyTemplate('${t.id}')">📋 复制全文</button>
    </div>
  `);
}
function copyTemplate(id) {
  const t = TEMPLATES.find(x => x.id === id); if (!t) return;
  let txt = `${t.name}\n（${t.exam} · ${t.words}）\n\n`;
  (t.outline || []).forEach(o => { txt += `【${o.part}】\n${o.text}\n\n`; });
  copyText(txt);
}

/* ============ 设置 ============ */
function renderSettings() {
  const s = DATA.settings;
  const channel = s.remindChannel || (s.remindEnabled ? 'notification' : 'none');
  const notiOn = channel === 'notification' || channel === 'both';
  const calOn = channel === 'calendar' || channel === 'both';
  let html = `<div class="page">
    <div class="page-head"><button class="back-btn" onclick="navBack()">← 返回</button></div>
    <h1>设置</h1><div class="sub">个性化你的学习节奏。改完会自动保存。</div>
  <div class="card">
    <div class="set-row" style="border:0"><div><div class="lab">每日目标</div><div class="desc">每天学会几个句式（默认 1 个，稳扎稳打）</div></div>
      <div class="ctrl"><input type="number" id="setGoal" min="1" max="5" value="${s.dailyGoal || 1}" style="width:80px"></div></div>
  </div>
  <div class="card" style="margin-top:16px">
    <div class="set-row"><div><div class="lab">打卡提醒</div><div class="desc">到时间提醒你完成今日打卡</div></div>
      <div class="ctrl"><input type="checkbox" id="setRemind" ${notiOn || calOn ? 'checked' : ''}></div></div>
    <div class="set-row"><div><div class="lab">提醒时间</div><div class="desc">每天这个时刻提醒你</div></div>
      <div class="ctrl"><input type="time" id="setTime" value="${s.remindTime || '20:00'}" style="width:130px"></div></div>
    <div class="set-row"><div><div class="lab">通知提醒</div><div class="desc">在本机弹出系统通知（Android 13+ 需授权）</div></div>
      <div class="ctrl"><input type="checkbox" id="setNoti" ${notiOn ? 'checked' : ''}></div></div>
    <div class="set-row" style="border:0"><div><div class="lab">写入系统日历</div><div class="desc">在日历里创建每天重复的打卡事件（需日历权限）</div></div>
      <div class="ctrl"><input type="checkbox" id="setCal" ${calOn ? 'checked' : ''}></div></div>
  </div>
  <div class="card" style="margin-top:16px">
    <div class="set-row" style="border:0"><div><div class="lab">外观主题</div><div class="desc">浅色 / 深色 / 跟随系统，实时切换</div></div>
      <div class="ctrl"><div class="seg" id="setTheme">
        <button data-v="light" onclick="setThemeMode('light')">浅色</button>
        <button data-v="dark" onclick="setThemeMode('dark')">深色</button>
        <button data-v="system" onclick="setThemeMode('system')">跟随系统</button>
      </div></div></div>
  </div>
  <div class="card" style="margin-top:16px">
    <div class="set-row" style="border:0"><div><div class="lab">学习数据</div><div class="desc">备份 / 恢复你的学习记录与打卡</div></div>
      <div class="ctrl btn-row">
        <button class="btn sm" onclick="doExport()">导出备份</button>
        <button class="btn sm" onclick="doImport()">导入恢复</button>
      </div></div>
    <div class="note">学习数据只保存在本机，不联网上传；换机时用「导出备份」把文件传到新设备，再点「导入恢复」即可。</div>
    <div class="set-row" style="border:0;cursor:pointer;margin-top:12px" onclick="navigate('update')">
      <div><div class="lab">🚀 检查更新</div><div class="desc">从 GitHub 获取最新版 APK 安装包</div></div>
      <div class="ctrl" style="font-size:20px;color:var(--ink-faint)">›</div>
    </div>
  </div>
  </div>`;
  return html;
}
let _reminderState = { enabled: false, time: '20:00', channel: 'none' };
function currentReminderChannel(noti, cal) { return noti && cal ? 'both' : noti ? 'notification' : cal ? 'calendar' : 'none'; }
function applyReminder() {
  const n = $('#setNoti') ? $('#setNoti').checked : false;
  const c = $('#setCal') ? $('#setCal').checked : false;
  const t = $('#setTime') ? $('#setTime').value : '20:00';
  const enabled = ($('#setRemind') ? $('#setRemind').checked : false) && (n || c);
  const channel = currentReminderChannel(n, c);
  if (!enabled) {
    DATA.settings.remindEnabled = false;
    DATA.settings.remindTime = t;
    DATA.settings.remindChannel = 'none';
    save(); api.cancelReminder();
    toast('已关闭打卡提醒');
    return;
  }
  DATA.settings.remindEnabled = true;
  DATA.settings.remindTime = t;
  DATA.settings.remindChannel = channel;
  save();
  api.requestReminderPermissions();
  api.setReminder({ enabled: true, time: t, channel: channel });
  toast('打卡提醒已开启');
}
async function bindSettings() {
  const g = $('#setGoal'); if (g) g.onchange = async () => {
    let v = Math.max(1, Math.min(5, parseInt(g.value) || 1)); g.value = v;
    DATA.settings.dailyGoal = v; ensureTodayPlan(); await save(); renderSidebar(); toast('每日目标已设为 ' + v);
  };
  const r = $('#setRemind'); if (r) r.onchange = applyReminder;
  const n = $('#setNoti'); if (n) n.onchange = applyReminder;
  const c = $('#setCal'); if (c) c.onchange = applyReminder;
  const t = $('#setTime'); if (t) t.onchange = applyReminder;
  const seg = $('#setTheme');
  if (seg) Array.prototype.slice.call(seg.querySelectorAll('button')).forEach(b => b.classList.toggle('active', b.dataset.v === (DATA.settings.theme || 'system')));
}
/* 原生回调：权限 / 提醒设置结果 */
window.__smPermResult = function (r) {
  if (r && !r.ok) toast('未授予权限，提醒可能无法生效');
};
window.__smReminderResult = function (r) {
  if (r && r.ok) toast(r.msg);
  else if (r && r.msg) toast(r.msg);
};
async function doExport() { const r = await api.exportData(); if (r.ok) toast('已导出到 ' + r.path); else if (!r.ok) toast('已取消导出'); }
async function doImport() { const r = await api.importData(); if (r.ok) { DATA = await api.readData(); ensureTodayPlan(); await save(); toast('导入成功'); navigate('learn'); } else if (r.msg) toast(r.msg); }

/* ============ 我的 ============ */
function renderMe() {
  const histCount = Object.keys(DATA.writeHistory || {}).length;
  return `<div class="page"><h1>我的</h1><div class="sub">学习数据保存在本机，可随时在「设置」中导出备份；换设备（或与电脑端互通）时用备份文件迁移即可，无需联网账号。</div>
  <div class="card" style="margin-top:8px">
    <div class="set-row" style="border:0;cursor:pointer" onclick="navigate('settings')">
      <div><div class="lab">⚙️ 设置</div><div class="desc">学习目标、外观主题、数据备份等</div></div>
      <div class="ctrl" style="font-size:20px;color:var(--ink-faint)">›</div>
    </div>
  </div>
  <div class="card" style="margin-top:12px">
    <div class="set-row" style="border:0;cursor:pointer" onclick="navigate('history')">
      <div><div class="lab">📜 历史记录</div><div class="desc">查看你学过的所有句式与写下的每一句话${histCount ? '（' + histCount + ' 个句式已有写作）' : ''}</div></div>
      <div class="ctrl" style="font-size:20px;color:var(--ink-faint)">›</div>
    </div>
  </div>
  <div class="card" style="margin-top:16px">
    <div class="set-row" style="border:0"><div><div class="lab">关于</div></div></div>
    <div class="note" style="margin:0">句式大师 SentenceMaster · 当前版本 ${esc(CURRENT_VER || '')} · 你的学习数据只保存在本机，不上传任何云端服务器。更新应用时，所有学习数据与设置项（提醒时间、学习阶段等）都会自动保留，更新前还会自动备份一份。</div>
  </div></div>`;
}
function bindMe() { /* 交互均通过内联 onclick 处理，无需额外绑定 */ }

/* ============ 历史记录 ============ */
function renderHistory() {
  const learned = SENTENCES.filter(s => (DATA.progress[s.id] || {}).status === 'learned');
  const writtenIds = Object.keys(DATA.writeHistory || {});
  const ids = new Set(learned.map(s => s.id).concat(writtenIds));
  const list = [];
  ids.forEach(function (id) { const s = byId[id]; if (s) list.push(s); });
  // 排序：按学会时间或最近一次写作时间，新的在前
  list.sort((a, b) => {
    const ta = (DATA.progress[a.id] || {}).learnedAt || (DATA.writeHistory[a.id] && DATA.writeHistory[a.id][0] ? DATA.writeHistory[a.id][0].ts : 0);
    const tb = (DATA.progress[b.id] || {}).learnedAt || (DATA.writeHistory[b.id] && DATA.writeHistory[b.id][0] ? DATA.writeHistory[b.id][0].ts : 0);
    return tb - ta;
  });
  const wh = DATA.writeHistory || {}, whKeys = Object.keys(wh);
  const writeCount = whKeys.reduce((n, k) => n + (wh[k] ? wh[k].length : 0), 0);
  let html = `<div class="page">
    <div class="page-head"><button class="back-btn" onclick="navBack()">← 返回</button></div>
    <h1>历史记录</h1>
    <div class="sub">这里汇总了你学过的所有句式，以及练习时写下的每一句话。共 ${list.length} 个句式、${writeCount} 条写作记录。</div>`;
  if (!list.length) {
    html += `<div class="empty"><div class="big">📭</div>还没有任何学习记录，去「今日学习」完成第一个句式吧～</div></div>`;
    return html;
  }
  list.forEach(s => {
    const p = DATA.progress[s.id] || {};
    const hist = (DATA.writeHistory[s.id] || []);
    const learnedTag = p.status === 'learned'
      ? '<span class="tag good">已学会</span>'
      : '<span class="tag">仅写过</span>';
    const learnedDate = p.learnedAt ? '<span class="hist-date">学会于 ' + fmtDate(p.learnedAt) + '</span>' : '';
    const writes = hist.length
      ? hist.slice().reverse().map((h, i) => `<div class="hist-item">
          <div class="hist-meta"><span class="hist-idx">#${hist.length - i}</span><span class="hist-date">${fmtDate(h.ts)}</span></div>
          <div class="hist-text">${esc(h.text)}</div></div>`).join('')
      : '<div class="note" style="margin:8px 0 0">这一步还没有保存过句子。</div>';
    html += `<div class="card" style="margin-top:14px">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <span class="tag" style="background:var(--accent-soft);color:var(--accent)">${esc(s.cat)}</span>
        <span style="font-weight:800">${esc(s.cn)}</span>
        ${learnedTag} ${learnedDate}
        <span style="margin-left:auto"><button class="btn sm" style="border-color:rgba(209,52,56,.4);color:var(--bad)" onclick="deleteHistory('${s.id}')">🗑 删除</button></span>
      </div>
      <div class="formula" style="margin-top:8px">${esc(s.en)}</div>
      <div style="font-weight:700;margin:14px 0 4px;font-size:14px">✍️ 我的写作（${hist.length}）</div>
      <div class="hist-list" style="max-height:none">${writes}</div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

/* ============ 删除历史数据（三个可独立勾选的选项） ============ */
function deleteHistory(id) {
  const s = byId[id] || {};
  modal(`<div style="text-align:left">
    <h2 style="margin-bottom:4px;font-size:19px">删除历史数据</h2>
    <div style="color:var(--ink-soft);font-size:13px;margin-bottom:6px">「${esc(s.cn || '')}」— 请勾选要删除的内容（可多选）：</div>
    <label class="del-opt"><input type="checkbox" id="delHistRec" checked><span>删除本条历史数据<em class="del-desc">从历史记录中移除该条目</em></span></label>
    <label class="del-opt"><input type="checkbox" id="delHistLearn"><span>删除学习记录<em class="del-desc">该句式将重置为未学习状态</em></span></label>
    <label class="del-opt"><input type="checkbox" id="delHistWrite"><span>仅删除本句的造句<em class="del-desc">清空已保存的句子，可重新造句</em></span></label>
    <div class="btn-row" style="justify-content:flex-end;margin-top:18px">
      <button class="btn" onclick="closeModal()">取消</button>
      <button class="btn" style="background:var(--bad);color:#fff;border-color:var(--bad)" onclick="confirmDeleteHistory('${id}')">确认删除</button>
    </div>
  </div>`);
}
function confirmDeleteHistory(id) {
  const chk = n => { const e = document.getElementById(n); return e ? e.checked : false; };
  const delRec = chk('delHistRec'), delLearn = chk('delHistLearn'), delWrite = chk('delHistWrite');
  if (!delRec && !delLearn && !delWrite) { toast('请至少勾选一项再删除'); return; }
  if (delRec) {
    // 删除本条历史数据：进度 + 写作历史 + 造句 + 今日计划一并移除
    delete DATA.progress[id];
    delete DATA.writeHistory[id];
    delete DATA.writings[id];
    if (DATA.todayPlan) {
      DATA.todayPlan.ids = (DATA.todayPlan.ids || []).filter(x => x !== id);
      DATA.todayPlan.doneIds = (DATA.todayPlan.doneIds || []).filter(x => x !== id);
    }
  } else {
    if (delLearn) {
      // 删除学习记录：该句式重置为未学习
      delete DATA.progress[id];
      if (DATA.todayPlan) DATA.todayPlan.doneIds = (DATA.todayPlan.doneIds || []).filter(x => x !== id);
    }
    if (delWrite) {
      // 仅删除本句的造句
      delete DATA.writeHistory[id];
      delete DATA.writings[id];
    }
  }
  save();
  closeModal();
  renderHistory();
  renderSidebar();
  toast('已删除 ✔');
}

/* ============ 更新 ============ */
async function renderUpdate() {
  const ver = await api.version();
  CURRENT_VER = ver;
  let html = `<div class="page">
    <div class="page-head"><button class="back-btn" onclick="navBack()">← 返回</button></div>
    <h1>更新</h1><div class="sub">保持更新，才能用上更多句式和更好用的功能。更新通过 GitHub 自动推送，点一下就能下载安装。</div>
  <div class="card">
    <div class="ver-box">
      <div class="ver-pill">v${esc(ver)}</div>
      <div><div style="font-weight:700">当前版本</div><div style="color:var(--ink-soft);font-size:13px">句式大师 ${esc(CURRENT_VER)}</div></div>
      <button class="btn primary" style="margin-left:auto" id="checkUpd" onclick="doCheckUpdate()">检查更新</button>
    </div>
    <div id="updResult" style="margin-top:14px"></div>
  </div>
  <div class="card" style="margin-top:16px">
    <div style="font-weight:800;margin-bottom:6px">更新日志</div>
    <div class="changelog"><ul>
      <li><b>v1.4.7</b>（当前）历史数据可删除：在「我的 → 历史记录」的每条句式上点击「🗑 删除」，弹出三个可**独立勾选**的选项——① 删除本条历史数据（移除该条历史记录本身）；② 删除学习记录（该句式重置为未学习状态，可重新学习）；③ 仅删除本句的造句（清空已保存的句子，可重新造句）。三选项可任意多选。电脑端与手机端同步更新，双端版本统一为 1.4.7。</li>
      <li><b>v1.4.6</b>移动端体验升级：① 深色模式全面适配——界面使用显式深色背景与配色，不再受 WebView 白底影响；② 新增打卡提醒——可开启系统通知提醒，或将每日打卡写入系统日历（两种方式可同时开启）；③ 兼容安卓 16（目标 SDK 升至 36）；④ 应用图标换成与电脑端一致的图标。</li>
      <li><b>v1.4.5</b>Android 版适配与设置精简：① 兼容安卓 8 – 安卓 15 安装（升级目标 SDK 至 35）；② 移除仅适用于电脑端的设置项——开机自启动、每日提醒、最小化到托盘、模块透明度等，设置页只保留移动端适用的选项（每日目标 / 外观主题 / 学习数据）；③ 更新改为从 GitHub 获取 APK 安装包，点击即可用浏览器下载安装。</li>
      <li><b>v1.4.4</b>修复白屏与横屏按钮：① 修复部分安卓设备（旧版 WebView）打开后内容空白的问题——兼容了旧版 WebView 的 JS 语法；② 平板横屏时不再显示右上角「最小化 / 关闭」按钮。</li>
      <li><b>v1.4.3</b>新增「历史记录」与更新数据保护：① 将原本放在「学习中」第 6 步的「查看历史」移出，在「我的」页新增独立「历史记录」入口，可查看你学过的全部句式与练习时写下的每一句话；② 强化更新安全——每次更新应用前自动备份学习数据与所有设置项，更新后若本地数据意外丢失 / 损坏会自动从备份恢复，确保提醒时间、学习阶段等设置项与学习进度在更新后完整保留。</li>
      <li><b>v1.4.2</b>撤销云端同步、补全返回按钮：经实测，supabase.co 在中国大陆直连被阻断、且 Supabase 需要实名，你无法稳定使用多端同步；故此版本彻底移除了 Supabase 账号 / 同步 / 代理相关代码，「我的」页回归纯本地（仅含设置与关于）。同时修复导航缺陷——「我的 → 设置 → 更新」每一级左上角均新增「← 返回」按钮，可逐级退回上一级菜单。</li>
      <li><b>v1.4.1</b>修复登录报「Failed to fetch」：App 此前直连 Supabase 服务器，而 supabase.co 在部分网络下被阻断。现新增代理支持——主进程默认走系统代理，并在「我的」页可手动填写本机代理（如 Clash 的 7890 端口）；新增「测试连接」按钮可一键诊断网络是否可达。学习数据仍只存于你自己的 Supabase 免费项目。</li>
      <li><b>v1.4.0</b>新增「云端同步」：接入 Supabase，登录账号后学习数据（进度、打卡、生词本、模板收藏等）可在多台设备间同步。「我的」侧栏整合账号登录、同步与退出登录；原「设置」「更新」调整为「我的」下的子项（设置 → 更新）。另修复深色模式下底部提示弹窗白底白字不可见的问题。</li>
      <li><b>v1.3.5</b>恢复 Acrylic 实时高斯模糊毛玻璃（上一版误改为 Mica，失去了实时模糊身后内容的质感）；并新增「禁止最大化」：移除右上角最大化按钮、禁用 F11、杜绝双击标题栏最大化。原因：桌面 Acrylic 需采样窗口背后可见的桌面，一旦最大化铺满全屏，背后不再有桌面可采，Windows 便回退成黑色兜底、毛玻璃随之消失。禁用最大化后窗口永不铺满全屏，毛玻璃与圆角即可常驻、不再丢失。最大化时四边贴屏幕边缘、原生圆角不可见本就是 Windows 11 的正常行为（所有软件均如此），故直接去掉该功能。</li>
      <li><b>v1.3.4</b>修复 v1.3.3 的三处遗留问题：① 应用内更新在部分网络（代理 / 校园网 / 公司网做 TLS 拦截）下报「unable to verify the first certificate」，现已在更新请求中绕过证书校验；② 主窗口原生圆角在 v1.3.3 丢失，根因是无边框窗口需显式声明「roundedCorners:'on'」才会交给 DWM 渲染原生圆角（之前用 CSS 裁切是假圆角）；③ 主界面 Acrylic 毛玻璃此前完全不显示，根因是窗口底色被设成了不透明色、直接盖死了毛玻璃材质，现已将窗口底色改为透明，让系统实时模糊的桌面真正透出。</li>
      <li><b>v1.3.3</b>界面打磨：主窗口四周原生圆角；主界面背景改为 Win11 Acrylic 毛玻璃；透明度仅作用于主界面背景而非弹窗，弹窗保持实心易读；弹窗右上角新增悬浮关闭按钮，滚动内容时始终停留、可一键关闭任意内容弹窗。</li>
      <li><b>v1.3</b>新增「外观主题」与「模块透明度」设置：支持浅色 / 深色 / 跟随系统一键切换，窗口底色同步变化，修复浅色模式下黑白板块混杂问题；模块透明度可自定义调节。重做应用内更新（直连 GitHub 下载安装包，点击即可更新，不再报错）。作文模板库按文体分类，新增多类应用文信件模板（道歉信 / 申请信 / 感谢信 / 邀请信 / 投诉信 / 求职信 / 祝贺信）与 5 套读后续写模板。</li>
      <li><b>v1.2</b>全新 Fluent / Windows 11 视觉风格：系统级 Mica 半透明背景、圆角卡片与 Segoe UI 系统字体；界面自动跟随系统深浅色切换，整体观感更贴近原生 Windows 11。</li>
      <li><b>v1.1</b>新增 50 个高中重点高级句式（覆盖高考高分作文与读后续写实用句型）；新增「学习阶段选择」可按基础 / 高中重点筛选学习；第五步「落地成文」增加保存与写作历史查看；完成每日打卡播放庆祝彩带动画；每日提醒点击后弹出带催促小宠物的弹窗；六步学习流程优化（步骤可点击跳转、过渡动画）。</li>
      <li><b>v1.0.1</b> 新增自动更新：检查更新后自动从 GitHub 下载安装包、后台静默升级，重启即生效，学习数据原样保留。</li>
      <li><b>v1.0.0</b> 内置 36 个考试高频高级句式 + 10 套优秀作文模板；每日学习目标与开机自启；基于记忆曲线的智能复习；6 步学习流程包（认识结构→例句精析→联想创造→易错辨析→仿写练习→落地成文）；桌面催促提醒；数据备份恢复。</li>
    </ul></div>
  </div></div>`;
  return html;
}
function renderUpdateStatus() {
  const box = document.getElementById('updResult'); if (!box) return;
  const s = updateState;
  if (s.dev) { box.innerHTML = `<div class="note">开发模式下不检查更新。打包后的版本会自动连接 GitHub 更新。</div>`; return; }
  if (s.error) { box.innerHTML = `<div class="note" style="background:var(--panel-2);border-color:rgba(209,52,56,.35);color:var(--bad)">更新出错：${esc((s.error && s.error.message) || s.error)}</div>`; return; }
  if (s.downloaded) {
    box.innerHTML = `<div class="card" style="background:var(--panel-2);border-color:rgba(19,161,14,.35);margin:0">
      <div style="font-weight:700;color:var(--good)">v${esc(s.downloaded.version)} 已下载完成 ✅</div>
      <div style="font-size:13px;color:var(--ink-soft);margin:6px 0">重启应用即可完成升级，你的学习数据会原样保留。</div>
      <button class="btn primary sm" onclick="doInstallUpdate()">立即重启并更新</button>
    </div>`; return;
  }
  if (s.progress) {
    const pct = Math.max(0, Math.min(100, Math.round(s.progress.percent)));
    const speed = s.progress.bytesPerSecond ? (s.progress.bytesPerSecond / 1024 / 1024).toFixed(1) + ' MB/s' : '';
    box.innerHTML = `<div class="card" style="margin:0">
      <div style="font-weight:700">正在下载${s.available ? ' v' + esc(s.available.version) : ''} … ${pct}%</div>
      <div style="height:8px;background:var(--line);border-radius:99px;overflow:hidden;margin-top:8px"><div style="height:100%;width:${pct}%;background:var(--accent);transition:width .3s"></div></div>
      <div style="font-size:12px;color:var(--ink-soft);margin-top:6px">${speed}</div>
    </div>`; return;
  }
  if (s.available) {
    box.innerHTML = `<div class="card" style="margin:0">
      <div style="font-weight:700;color:var(--good)">发现新版本 v${esc(s.available.version)} 🎉</div>
      <div style="font-size:13px;color:var(--ink-soft);margin:6px 0">${esc(s.available.notes || '')}</div>
      <button class="btn primary" onclick="downloadUpdate()">下载并安装 APK</button>
      <div style="font-size:12px;color:var(--ink-soft);margin-top:6px">点击后会用系统浏览器打开下载页，下载完成后点击 APK 文件即可安装（数据不会丢失）。</div>
    </div>`; return;
  }
  if (s.noUpdate) { box.innerHTML = `<div style="color:var(--good);font-weight:600">✓ 已是最新版本（v${esc(CURRENT_VER)}）</div>`; return; }
  if (s.checking) { box.innerHTML = `<div style="color:var(--ink-soft)">正在检查更新…</div>`; return; }
  box.innerHTML = '';
}
async function doCheckUpdate() {
  updateState = { checking: true, dev: false, available: null, progress: null, downloaded: null, noUpdate: false, error: null };
  renderUpdateStatus();
  let r;
  try { r = await api.checkUpdate(); }
  catch (e) { updateState.checking = false; updateState.error = { message: String(e) }; renderUpdateStatus(); return; }
  if (r.dev) { updateState.checking = false; updateState.dev = true; renderUpdateStatus(); return; }
  if (r.ok && r.hasUpdate) {
    // Android 端：拿到 GitHub 最新 APK 信息，等待用户点击下载
    updateState.checking = false;
    updateState.available = { version: r.latest, notes: r.notes, downloadUrl: r.downloadUrl };
    renderUpdateStatus();
  } else if (r.ok && !r.hasUpdate) {
    updateState.checking = false; updateState.noUpdate = true; renderUpdateStatus();
  } else {
    updateState.checking = false; updateState.error = { message: r.msg || '检查失败' }; renderUpdateStatus();
  }
}
function downloadUpdate() {
  const u = updateState.available && updateState.available.downloadUrl;
  if (u) { try { api.openExternal(u); } catch (e) { toast('无法打开下载页'); } }
  else toast('暂未获取到下载地址');
}
function doInstallUpdate() { api.quitAndInstall(); }

/* ============ 弹窗 ============ */
function modal(inner) {
  closeModal();
  const mask = document.createElement('div'); mask.className = 'modal-mask'; mask.id = 'modalMask';
  // 关闭按钮悬浮固定在右上角（在滚动容器之外），内容滚动时始终停留，可关闭任意内容弹窗
  mask.innerHTML = `<div class="modal"><button class="x" onclick="closeModal()" title="关闭">✕</button><div class="modal-scroll">${inner}</div></div>`;
  mask.onclick = e => { if (e.target === mask) closeModal(); };
  document.body.appendChild(mask);
}
function closeModal() { const m = $('#modalMask'); if (m) m.remove(); }

/* 每日催促弹窗：带一个会蹦跶的催促小宠物 */
function openNag() {
  closeModal();
  const mask = document.createElement('div'); mask.className = 'modal-mask nag-mask'; mask.id = 'nagMask';
  const done = (DATA.todayPlan && (DATA.todayPlan.doneIds || []).length >= (DATA.settings.dailyGoal || 1));
  mask.innerHTML = `<div class="nag-pop">
    <div class="nag-pet">
      <div class="pet-body"><div class="pet-eye left"></div><div class="pet-eye right"></div><div class="pet-mouth"></div><div class="pet-cheek l"></div><div class="pet-cheek r"></div></div>
      <div class="pet-arm l"></div><div class="pet-arm r"></div>
      <div class="pet-foot l"></div><div class="pet-foot r"></div>
    </div>
    <div class="nag-bubble">${done
      ? '今天已经搞定啦！🎉<br>要不要再顺手加练一个？'
      : '今天的句式还没学呢～<br>再不学，连续打卡就要断掉啦！<br>快去学一个句式吧！📚'}</div>
    <div class="btn-row" style="justify-content:center;margin-top:18px">
      ${done
        ? `<button class="btn primary" onclick="closeNag()">好呀，随便看看</button>`
        : `<button class="btn primary" onclick="nagGoLearn()">马上去学 →</button><button class="btn ghost" onclick="closeNag()">待会儿再说</button>`}
    </div>
  </div>`;
  mask.onclick = e => { if (e.target === mask) closeNag(); };
  document.body.appendChild(mask);
  setTimeout(() => mask.classList.add('show'), 10);
}
function closeNag() { const m = document.getElementById('nagMask'); if (m) m.remove(); }
function nagGoLearn() { closeNag(); navigate('learn'); }

/* ============ 启动 ============ */
(async () => {
  await init();
})();
