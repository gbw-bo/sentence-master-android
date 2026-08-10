/* 句式大师 · 优秀作文模板库 */
window.TEMPLATES = [
{
  id: "t01", name: "观点论证型议论文", exam: "四六级 / 考研 / 高考", type: "议论文",
  scene: "题目给出一个观点或现象，要求你表明立场并论证。最通用的作文类型。",
  slots: ["s01", "s07", "s02", "s24", "s36"],
  outline: [
    { part: "第一段 · 引入 + 亮明观点（3句）", tips: "背景铺垫 → 争议存在 → 我的立场", text: "With the rapid advance of [话题领域], the issue of [核心议题] has sparked heated discussion. While some contend that [对立观点], I firmly believe that [我的观点]. It is [关键因素] rather than [次要因素] that ultimately determines [结果]." },
    { part: "第二段 · 论点一 + 论据（4句）", tips: "分论点 → 解释 → 举例 → 小结", text: "To begin with, [分论点一]. Not only does [主语] [好处一], but it also [好处二]. A case in point is [具体例子/数据]. This clearly demonstrates that [回扣分论点]." },
    { part: "第三段 · 论点二 + 让步（4句）", tips: "分论点 → 让步 → 转折驳回", text: "Furthermore, [分论点二]. There is no denying that [对方合理之处]; however, [你的反驳]. Given that [前提事实], the argument that [对方观点] hardly holds water." },
    { part: "第四段 · 总结升华（3句）", tips: "重申立场 → 提出行动 → 排比收尾", text: "In conclusion, [重申观点]. It is high time that we [具体行动]. Only when individuals [行动一], when society [行动二], and when institutions [行动三] can we truly [美好愿景]." }
  ],
  words: "约 180-220 词",
  boost: "第一段末尾的强调句 + 最后一段的排比句，是全篇的两个记分点，务必写好。"
},
{
  id: "t02", name: "利弊分析型（双边论证）", exam: "四六级 / 雅思 Task 2", type: "议论文",
  scene: "题目问\"XX 的优点和缺点是什么\"或\"你在多大程度上同意\"，要求呈现两面。",
  slots: ["s32", "s10", "s17", "s26", "s14"],
  outline: [
    { part: "第一段 · 引入争议（3句）", tips: "现象描述 → 双方分歧 → 我的倾向", text: "[话题] has become an integral part of modern life, yet opinions on it remain sharply divided. While proponents highlight [好处方向], critics warn of [坏处方向]. In my view, the benefits outweigh the drawbacks, provided that [前提条件]." },
    { part: "第二段 · 优势面（4句）", tips: "总起 → 展开 → 例证", text: "On the positive side, [优点一]. What truly matters is that [深层价值]. Moreover, [优点二], which in turn [连带好处]. Statistics show that [数据支撑]." },
    { part: "第三段 · 弊端面（4句）", tips: "让步 → 具体弊端 → 深层剖析", text: "Convenient as [话题] is, it is not without its downsides. [弊端一]. The problem is not so much [表层问题] as [深层问题]. If left unaddressed, it may [恶果]." },
    { part: "第四段 · 平衡结论（3句）", tips: "承认两面 → 给出解法 → 收尾", text: "In sum, [话题] is a double-edged sword. Effective measures should be taken to [解决路径], so as to maximize its merits while minimizing its harms. Nothing is more important than striking a sensible balance." }
  ],
  words: "约 200-250 词",
  boost: "第三段的 not so much A as B 是全篇的思辨制高点，一定要用上。"
},
{
  id: "t03", name: "问题解决型（现象-原因-对策）", exam: "四六级 / 考研", type: "议论文",
  scene: "题目描述一个社会问题，要求分析原因并提出解决办法。",
  slots: ["s15", "s23", "s31", "s26", "s05"],
  outline: [
    { part: "第一段 · 现象描述（3句）", tips: "背景 → 现状 → 引出问题", text: "With [背景变化] gaining momentum, [问题现象] has become increasingly conspicuous. Recent reports indicate that [数据/事实]. This phenomenon deserves our serious attention." },
    { part: "第二段 · 原因剖析（4句）", tips: "总起 → 原因一 → 原因二 → 根源", text: "The causes of this phenomenon range from [原因一] to [原因二]. The reason why [现象] persists is that [核心原因]. In addition, [次要原因] also plays a part. What lies behind all this is [深层根源]." },
    { part: "第三段 · 对策建议（4句）", tips: "多主体分层给方案", text: "To tackle this problem, concerted efforts are required. First, effective measures should be taken by the government to [对策一]. Second, greater emphasis should be placed on [对策二]. Last but not least, individuals ought to [对策三] so as to [目的]." },
    { part: "第四段 · 收束呼吁（2句）", tips: "呼吁 + 展望", text: "It is high time that all parties took action. Only in this way can we [美好前景]." }
  ],
  words: "约 200-230 词",
  boost: "对策段的 First / Second / Last but not least 三层结构，是逻辑分的保障；配合被动语态显得客观。"
},
{
  id: "t04", name: "图表作文（柱状图/折线图/饼图）", exam: "四六级 / 雅思 Task 1", type: "图表作文",
  scene: "给出图表数据，要求描述趋势、比较数据并给出分析。",
  slots: ["s25", "s12", "s09", "s23"],
  outline: [
    { part: "第一段 · 图表总述（2句）", tips: "改写题目 + 概括总趋势，不要出现具体数字", text: "The [chart/graph/table] provided illustrates the changes in [主题] over the period from [起始年] to [结束年]. Overall, a marked upward/downward trend can be observed, with [最显著特征]." },
    { part: "第二段 · 数据细节（4-5句）", tips: "分组描述，先大后小，用倍数和百分比", text: "As is clearly shown, [项目A] rose steadily from [数值] to [数值], an increase of [百分比]. By contrast, [项目B] witnessed a sharp decline, dropping by nearly [百分比]. Notably, the figure for [项目C] in [年份] was almost three times as large as that in [年份], reaching a record high of [数值]." },
    { part: "第三段 · 原因分析（3句）", tips: "解释数据背后的原因", text: "Several factors account for these changes. The reason why [项目A] surged is that [原因]. Meanwhile, the decline of [项目B] can be attributed to [原因]." },
    { part: "第四段 · 结论预测（2句）", tips: "总结 + 谨慎预测", text: "In conclusion, the data reflects [核心结论]. Should this trend continue, it is reasonable to predict that [预测]." }
  ],
  words: "约 180-200 词",
  boost: "数据描述最忌流水账。用 by contrast、meanwhile、notably 做连接，用倍数句式做对比，档次立分高下。"
},
{
  id: "t05", name: "书信 · 建议信 / 请求信", exam: "四六级 / 考研小作文", type: "应用文",
  scene: "给某人写信提建议、提请求或表达意见。格式分不能丢。",
  slots: ["s24", "s26", "s13"],
  outline: [
    { part: "称呼 + 第一段 · 说明来意（2句）", tips: "开门见山，一句说清身份和目的", text: "Dear [Sir/Madam / 姓名],\n\nI am [身份, e.g. a sophomore majoring in English at your university]. I am writing to [express my concern about / offer some suggestions on / apply for] [具体事项]." },
    { part: "第二段 · 具体内容（4句）", tips: "分点写，每点一句，条理清晰", text: "The following suggestions may be of some help. To begin with, it would be advisable to [建议一], so as to [目的]. Furthermore, greater emphasis should be placed on [建议二]. Last but not least, [建议三]." },
    { part: "第三段 · 结尾致谢（2句）", tips: "表达期待 + 感谢", text: "I would be more than grateful if you could take my suggestions into consideration. Thank you for your time and I am looking forward to your early reply." },
    { part: "落款", tips: "考试统一用 Li Ming，不要写真名", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "书信最大的丢分点是格式：称呼后逗号、段落空行、落款位置。内容再好，格式错了直接降档。"
},
{
  id: "t06", name: "对比选择型（两者选其一）", exam: "四六级 / 高考", type: "议论文",
  scene: "题目给出两个选项（如\"大城市还是小城镇\"），要求你选择并说明理由。",
  slots: ["s32", "s08", "s06", "s01"],
  outline: [
    { part: "第一段 · 引出两难（3句）", tips: "描述两个选项 → 分歧 → 表态", text: "When it comes to [话题], people are divided into two camps. Whereas some prefer [选项A], others favor [选项B]. As far as I am concerned, [选项X] is the wiser choice." },
    { part: "第二段 · 支持我选的理由（4句）", tips: "两个理由 + 例证", text: "What makes [选项X] appealing is primarily [理由一]. The more [变量A], the more [变量B]. Besides, [理由二]. My own experience testifies to this: [简短例子]." },
    { part: "第三段 · 承认对方 + 反驳（3句）", tips: "让步 → 转折 → 站稳立场", text: "Admittedly, [选项Y] does have its merits, such as [对方优点]. However, these advantages are outweighed by [对方缺点]. It is long-term growth rather than short-term comfort that should guide our decision." },
    { part: "第四段 · 结论（2句）", tips: "重申 + 收尾", text: "To sum up, I would choose [选项X] without hesitation. After all, [一句金句收尾]." }
  ],
  words: "约 180-200 词",
  boost: "第三段的\"让步-反驳\"是拉开差距的地方。只夸自己选的、不提对方，是低分作文的通病。"
},
{
  id: "t07", name: "谚语/名言评论型", exam: "四六级 / 考研", type: "议论文",
  scene: "题目给出一句谚语或名言，要求解释含义并结合实际论证。",
  slots: ["s27", "s21", "s09", "s30", "s36"],
  outline: [
    { part: "第一段 · 释义（3句）", tips: "引用 → 字面意思 → 深层含义", text: "As the saying goes, \"[谚语原文]\". Literally, it means that [字面含义]. What it truly conveys, however, is that [深层道理]." },
    { part: "第二段 · 论证一（4句）", tips: "道理论证 + 类比", text: "The wisdom of this proverb is self-evident. [论点一]. [核心概念] is to [对象A] what [类比物] is to [对象B]. Having witnessed countless examples, we can hardly deny its truth." },
    { part: "第三段 · 论证二（4句）", tips: "举例论证", text: "History offers ample evidence. Take [人物/事件] as an example: [简述经历]. Had he/she [反面假设], he/she would never have [成就]. The importance of [核心品质] cannot be overemphasized." },
    { part: "第四段 · 联系自身（3句）", tips: "落到自己 + 排比收尾", text: "As a college student, I am deeply inspired by this saying. It reminds me to [行动一], to [行动二], and to [行动三]. Only in this way can I [目标]." }
  ],
  words: "约 200-230 词",
  boost: "第二段的类比句（A is to B what C is to D）是这类作文的\"文学分\"来源，提前背 2 个万能类比。"
},
{
  id: "t08", name: "个人经历 + 感悟型", exam: "高考 / 雅思 / 申请文书", type: "读后续写",
  scene: "讲述一段个人经历并提炼感悟，需要画面感和真情实感。",
  slots: ["s33", "s20", "s09", "s04", "s14"],
  outline: [
    { part: "第一段 · 场景切入（3句）", tips: "直接进入场景，不要空泛开头", text: "It was a [天气/时间] afternoon in [季节] when [事件起点]. I still remember [一个具体细节]. Little did I know that this ordinary day would change [某方面]." },
    { part: "第二段 · 事件发展（4句）", tips: "冲突 + 转折，用时间连接词", text: "Hardly had I [动作一] when [意外发生]. Faced with [困境], I felt [情绪]. [挣扎过程]. After several attempts, I finally [突破]." },
    { part: "第三段 · 顿悟时刻（3句）", tips: "把感悟写得具体，别喊口号", text: "It suddenly occurred to me that [领悟]. If I had given up at that moment, I would not be [现在的状态] today. That experience taught me more than any textbook ever could." },
    { part: "第四段 · 升华（2句）", tips: "从个人扩展到普遍", text: "Looking back, I realize that nothing is more valuable than the courage to [品质]. It is not the destination but the journey that shapes who we are." }
  ],
  words: "约 180-220 词",
  boost: "记叙文最忌\"我很感动、我明白了很多道理\"这种空话。感悟必须具体到一件事、一个动作。"
},
{
  id: "t09", name: "现象评述型（新事物/新趋势）", exam: "四六级 / 考研", type: "议论文",
  scene: "对某个新兴现象（如网红经济、AI、躺平）进行评述。",
  slots: ["s15", "s35", "s28", "s32", "s05"],
  outline: [
    { part: "第一段 · 现象呈现（3句）", tips: "背景 → 现象 → 引出评述", text: "With [背景] sweeping across the country, [新现象] has emerged as a striking social phenomenon. There is a growing tendency among [人群] to [行为]. This trend, though seemingly trivial, merits closer scrutiny." },
    { part: "第二段 · 正面解读（4句）", tips: "先看到合理性", text: "There exist legitimate reasons behind this trend. Given that [社会背景], it is hardly surprising that [人群] choose to [行为]. To some extent, it reflects [积极意义]. Viewed in this light, the phenomenon is not entirely negative." },
    { part: "第三段 · 隐忧剖析（4句）", tips: "指出问题", text: "While the trend has its rationale, the potential risks should not be overlooked. [隐患一]. What is more worrying is that [隐患二]. Should this continue unchecked, [严重后果]." },
    { part: "第四段 · 理性建议（3句）", tips: "给出平衡的态度", text: "Therefore, a rational attitude is called for. It is high time that both individuals and society [具体行动]. Only by [路径] can we ensure that [美好结果]." }
  ],
  words: "约 210-240 词",
  boost: "评述型最忌一边倒。先说\"为什么会这样\"（理解），再说\"问题在哪\"（批判），这个顺序显示成熟度。"
},
{
  id: "t10", name: "万能开头 + 结尾句速查", exam: "全考型通用", type: "通用",
  scene: "考场上没思路时的应急弹药库，直接套。",
  slots: ["s01", "s07", "s13", "s14", "s36"],
  outline: [
    { part: "开头 · 背景铺垫型（4选1）", tips: "适合所有话题", text: "1. With the rapid development of [领域], [话题] has aroused widespread concern.\n2. We are living in an era in which [特征] is reshaping every aspect of our lives.\n3. Nowadays, it is not uncommon to see [现象] in our daily life.\n4. Faced with [挑战], people from all walks of life have begun to rethink [议题]." },
    { part: "开头 · 争议引入型（3选1）", tips: "适合有对立观点的题目", text: "1. When it comes to [话题], opinions vary from person to person.\n2. There is no denying that [事实]; however, whether [争议] remains highly debatable.\n3. While some hold that [观点A], others argue that [观点B]." },
    { part: "结尾 · 呼吁行动型（3选1）", tips: "对策类文章结尾", text: "1. It is high time that we took concrete measures to [行动].\n2. Only when everyone [行动] can we [愿景].\n3. Concerted efforts from all parties are urgently needed if we are to [目标]." },
    { part: "结尾 · 价值升华型（3选1）", tips: "议论文/名言类结尾", text: "1. Nothing is more rewarding than [价值], for it shapes not only what we do but who we become.\n2. In the final analysis, it is [核心品质] that carries us through the storms of life.\n3. After all, the journey of a thousand miles begins with a single step." }
  ],
  words: "背熟即可，考场直接填空",
  boost: "开头和结尾各背 2 组就够了。切忌每篇都用同一句，阅卷老师一天看几百份，眼熟的模板反而扣分。"
},

/* ============ 应用文 · 各类信件（每类 1 个优秀模板） ============ */
{
  id: "t11", name: "道歉信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "因某事向对方道歉，说明原因并请求谅解。真诚 + 具体原因 + 补救，三者缺一不可。",
  slots: ["s24", "s13", "s26"],
  outline: [
    { part: "称呼 + 第一段 · 直接致歉（2句）", tips: "开门见山说清错在哪", text: "Dear [姓名],\n\nI am writing to express my sincere apology for [具体过错, 如 failing to keep our appointment / breaking your vase]. I feel terribly sorry about it." },
    { part: "第二段 · 解释原因（不推卸，4句）", tips: "诚实说明 + 本该做到 + 造成的不便", text: "The reason why it happened is that [诚实的原因]. I should have [本该做到的事], but [客观或主观原因]. Please accept my apology for any inconvenience this may have caused you." },
    { part: "第三段 · 提出补救（2句）", tips: "用行动弥补，而非空口", text: "To make up for it, I would like to [补救措施, 如 treat you to dinner / redo the work]. I sincerely hope you can forgive me." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "道歉信核心是真诚。只写一句 sorry 不解释，显得敷衍；说清原因 + 补救，才有挽回的余地。"
},
{
  id: "t12", name: "申请信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "申请某个职位、项目或学校，展示资格与动机。要写\"我适合\"也要写\"我渴望\"。",
  slots: ["s32", "s15", "s26", "s14"],
  outline: [
    { part: "称呼 + 第一段 · 表明目的（2句）", tips: "说清申请什么、从哪得知", text: "Dear [Sir/Madam],\n\nI am writing to apply for [申请的职位 / 项目]. I learned about this opportunity from [来源]." },
    { part: "第二段 · 资格与优势（4句）", tips: "经历 + 独特之处", text: "I believe I am well qualified for this position. Not only have I [相关经历 / 技能], but I also [另一优势]. What sets me apart is [独特之处]." },
    { part: "第三段 · 动机与承诺（3句）", tips: "为什么想来 + 能贡献什么", text: "I am strongly motivated because [动机]. If given the chance, I will [承诺]. Thank you for considering my application." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "申请信不是简历复述，而是论证\"为什么我适合这个岗位\"，突出匹配度比罗列经历更重要。"
},
{
  id: "t13", name: "感谢信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "感谢对方的帮助、礼物或款待。重点在\"对方的帮助对你意味着什么\"，越具体越打动人。",
  slots: ["s24", "s26", "s13"],
  outline: [
    { part: "称呼 + 第一段 · 致谢（2句）", tips: "点明感谢的事", text: "Dear [姓名],\n\nI am writing to express my heartfelt thanks for [具体帮助 / 礼物]." },
    { part: "第二段 · 说明影响（3句）", tips: "没有它会怎样 + 评价", text: "Your [帮助] meant a great deal to me. Without it, [如果没有会怎样]. It was [评价, 如 incredibly kind / timely] of you." },
    { part: "第三段 · 回报意愿（2句）", tips: "礼尚往来", text: "I would like to reciprocate your kindness by [回报方式]. Thank you again for your generosity." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "感谢信最忌空洞的 thank you。把\"对方行为对你的具体影响\"写出来，才显真诚。"
},
{
  id: "t14", name: "邀请信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "邀请某人参加活动、聚会或讲座。信息要全：时间、地点、为什么邀请他。",
  slots: ["s24", "s26", "s13"],
  outline: [
    { part: "称呼 + 第一段 · 发出邀请（2句）", tips: "活动名 + 时间地点", text: "Dear [姓名],\n\nI am delighted to invite you to [活动名称], to be held on [时间] at [地点]." },
    { part: "第二段 · 介绍活动（3句）", tips: "内容 + 邀请理由", text: "The event will feature [活动内容]. It would be a great pleasure to have you there, as [邀请理由, 如 you are an expert in this field]." },
    { part: "第三段 · 确认与期待（2句）", tips: "请回复 + 表达期待", text: "Please let me know if you can make it by [截止日期]. We are looking forward to your presence." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "邀请信信息不全对方无法决定。时间地点 + 邀请理由，两条缺一不可。"
},
{
  id: "t15", name: "投诉信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "对商品或服务不满，要求解决。事实 + 影响 + 明确诉求，情绪化指责反而削弱说服力。",
  slots: ["s23", "s31", "s26"],
  outline: [
    { part: "称呼 + 第一段 · 说明问题（2句）", tips: "什么 + 何时", text: "Dear [Sir/Madam],\n\nI am writing to complain about [产品 / 服务] that I [购买 / 体验] on [日期]." },
    { part: "第二段 · 具体缺陷（3句）", tips: "问题 + 与宣传不符 + 影响", text: "To my disappointment, [具体问题]. This is far from what was advertised, and it has caused [影响]." },
    { part: "第三段 · 明确诉求（2句）", tips: "要什么结果", text: "I would appreciate it if you could [退换 / 退款 / 赔偿]. I look forward to your prompt reply." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "投诉信要冷静讲事实。只发泄情绪不给方案，对方难以处理；说清诉求，解决才快。"
},
{
  id: "t16", name: "求职信", exam: "四六级 / 考研小作文", type: "应用文",
  scene: "应聘具体岗位，附简历前的前置信。论证\"为什么我适合这个岗位\"，突出匹配度。",
  slots: ["s32", "s14", "s26", "s15"],
  outline: [
    { part: "称呼 + 第一段 · 应聘岗位（2句）", tips: "岗位 + 渠道", text: "Dear [Hiring Manager],\n\nI am writing to apply for the position of [岗位] advertised on [渠道]." },
    { part: "第二段 · 相关经验（3句）", tips: "专业 + 经验 + 技能", text: "I graduated from [学校] with a major in [专业], and have [年数] years of experience in [领域]. My previous role taught me [技能]." },
    { part: "第三段 · 匹配与加入意愿（2句）", tips: "背景契合 + 贡献意愿", text: "I am confident that my background aligns with your needs. I am eager to contribute to [公司 / 团队]." },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 100-120 词",
  boost: "求职信不是简历复述。用一两句点明\"我的背景与岗位需求的高度匹配\"，比堆经历更抓人。"
},
{
  id: "t17", name: "祝贺信", exam: "高考 / 四六级小作文", type: "应用文",
  scene: "祝贺对方升学、获奖或取得成就。要点出对方\"为何值得\"，空洞的恭喜显得客套。",
  slots: ["s24", "s13", "s26"],
  outline: [
    { part: "称呼 + 第一段 · 祝贺（2句）", tips: "点明成就", text: "Dear [姓名],\n\nI was thrilled to learn that you [成就, 如 won the scholarship / got admitted]. Congratulations!" },
    { part: "第二段 · 肯定努力（2句）", tips: "成功非偶然", text: "Your success comes as no surprise, for [肯定其努力 / 品质]. You truly deserve it." },
    { part: "第三段 · 祝福（2句）", tips: "未来祝福 + 庆祝", text: "I wish you even greater achievements in the future. Let us celebrate soon!" },
    { part: "落款", tips: "考试统一用 Li Ming", text: "Yours sincerely,\nLi Ming" }
  ],
  words: "约 80-100 词",
  boost: "祝贺信要\"点出对方为何值得\"。结合对方的具体付出来说，比泛泛的 congratulations 真诚得多。"
},

/* ============ 读后续写 · 5 套优秀模板 ============ */
{
  id: "t18", name: "读后续写 · 情感升华型", exam: "高考读后续写", type: "读后续写",
  scene: "通过人物情感变化收尾，适合温情、成长、亲情类故事。结尾用一句感悟点题是拉开分差的关键。",
  slots: ["s20", "s09", "s04", "s14"],
  outline: [
    { part: "第一段 · 承接上文动作", tips: "从所给段落最后一句自然接起", text: "As [上文最后动作], I could feel [情绪]. [人物] looked at me, eyes filled with [情绪]. Slowly, [进一步动作]." },
    { part: "第二段 · 情感转折", tips: "情绪由紧张到松弛", text: "It was at that moment that I realized [领悟]. Tears welling up, [人物] [反应]. The silence between us spoke more than words." },
    { part: "第三段 · 升华结尾", tips: "点出成长 / 改变", text: "From then on, [改变]. I came to understand that [主题, 如 kindness / courage matters]. That day became a turning point in my life." },
    { part: "第四段 · 点题收束", tips: "一句金句收尾", text: "Looking back, nothing is more precious than [价值]." }
  ],
  words: "两段续写，约 150 词",
  boost: "读后续写最忌情节平淡无升华。结尾用一句感悟点题，比单纯写完故事高一个档次。"
},
{
  id: "t19", name: "读后续写 · 悬念反转型", exam: "高考读后续写", type: "读后续写",
  scene: "适合带谜团、误会或冲突的故事，用反转制造张力。反转要前文有伏笔，后文才合理。",
  slots: ["s15", "s35", "s28", "s05"],
  outline: [
    { part: "第一段 · 营造悬念", tips: "看似要结局，却出意外", text: "Just as we thought [以为的结局], something unexpected happened. A sudden [转折事件] froze us in place." },
    { part: "第二段 · 揭开真相", tips: "误会与真实的对照", text: "It turned out that [真相]. What we had mistaken for [误解] was actually [真实]. The truth hit us like a wave." },
    { part: "第三段 · 人物反应", tips: "错位后的行动", text: "Speechless, [人物] [反应]. [另一人物] stepped forward and [行动]." },
    { part: "第四段 · 收尾点题", tips: "教训 / 感悟", text: "In the end, [结局]. We learned never to judge too quickly." }
  ],
  words: "两段续写，约 150 词",
  boost: "反转要\"前文有伏笔，后文才合理\"。硬转折会显得突兀，续写前先回看原文线索再下笔。"
},
{
  id: "t20", name: "读后续写 · 动作描写型", exam: "高考读后续写", type: "读后续写",
  scene: "适合冒险、救援、竞赛类，靠连贯动作推进情节。短句 + 具体动词最有画面感。",
  slots: ["s33", "s20", "s09", "s04"],
  outline: [
    { part: "第一段 · 起手动作", tips: "毫不犹豫地行动", text: "Without hesitation, [人物] [动作]. Heart pounding, he [连续动作]. Every second counted." },
    { part: "第二段 · 高潮动作", tips: "关键一搏", text: "Just then, [关键动作]. Muscles straining, [人物] [努力]. The world seemed to slow down." },
    { part: "第三段 · 结果", tips: "尘埃落定", text: "At last, [结果]. Exhausted but relieved, [人物] [反应]. Cheers broke out." },
    { part: "第四段 · 收束感悟", tips: "喘定后的领悟", text: "Breathing heavily, he realized [感悟]." }
  ],
  words: "两段续写，约 150 词",
  boost: "动作描写用短句加具体动词最带感。避免一堆 was / were，多用实义动词让画面动起来。"
},
{
  id: "t21", name: "读后续写 · 环境烘托型", exam: "高考读后续写", type: "读后续写",
  scene: "用自然景物渲染气氛，适合抒情、回忆类。景物变化对应人物心情变化，才显高级。",
  slots: ["s15", "s09", "s21", "s30"],
  outline: [
    { part: "第一段 · 以景起笔", tips: "景物映射心情", text: "The [天气 / 景物] seemed to mirror my mood. [景物描写], as if [拟人]. A cold wind whispered through [景物]." },
    { part: "第二段 · 景随情变", tips: "心情好转，景物转晴", text: "As [事情好转], the [景物] brightened. Sunlight pierced the clouds, casting [光影]." },
    { part: "第三段 · 情景交融", tips: "物我合一", text: "Standing there, I felt [情绪]. The [景物] around me no longer felt [之前感受] but [之后感受]." },
    { part: "第四段 · 收尾", tips: "以景喻理", text: "Perhaps, like the weather, life has its storms before the calm." }
  ],
  words: "两段续写，约 150 词",
  boost: "环境描写要\"为情服务\"，别堆辞藻。让景物变化跟着人物心情走，比孤立写景高级得多。"
},
{
  id: "t22", name: "读后续写 · 哲理感悟型", exam: "高考读后续写", type: "读后续写",
  scene: "通过一件事提炼人生道理，适合励志、成长类。从小事引出，落到大道理，别喊口号。",
  slots: ["s27", "s21", "s09", "s36"],
  outline: [
    { part: "第一段 · 事件回顾", tips: "简述那件事", text: "What happened that day stayed with me. [简述事件]. At the time, I only saw [表面]." },
    { part: "第二段 · 渐悟", tips: "由表及里", text: "Years later, I came to see that [深层道理]. It is not [表面] but [本质] that truly matters." },
    { part: "第三段 · 普遍意义", tips: "推及众人", text: "This lesson applies to all of us: [普适道理]. Only when we [行动] can we [结果]." },
    { part: "第四段 · 收尾", tips: "点明成长", text: "After all, the real growth lies not in [外在] but in [内在]." }
  ],
  words: "两段续写，约 150 词",
  boost: "哲理要\"从小事引出，落到大道理\"。用具体事件托住抽象感悟，比空喊口号有力量得多。"
}
];
