/* 句式大师 · 内容库 A（基础提分层 01-18） */
window.SENTENCES_A = [
{
  id: "s01", cn: "强调句型", cat: "强调结构", level: 1,
  en: "It is / was + 被强调成分 + that / who + 句子其余部分",
  core: "把你最想让阅卷老师看到的那个成分，从句子里\"拎\"出来放到 It is 后面，剩下的全部塞进 that 从句。被强调的可以是主语、宾语、状语，唯独不能是谓语动词。",
  mnemonic: "「It is ___ that ___」= 舞台聚光灯，你把谁推到灯下，谁就是重点。",
  points: [
    "去掉 It is...that 后，剩下的部分必须仍是一个完整正确的句子——这是检验强调句的黄金标准。",
    "被强调的是人时，that 可换成 who；其余一律用 that，不能用 which/when/where。",
    "强调时间/地点状语时也用 that，不用 when/where，这是最高频失分点。"
  ],
  ex: [
    { en: "It is perseverance rather than talent that ultimately determines one's success.", cn: "最终决定一个人成功的是毅力，而非天赋。", use: "议论文核心论点句，rather than 一起用可同时完成\"对比+强调\"双重动作。" },
    { en: "It was not until I began to live independently that I realized how much my parents had sacrificed.", cn: "直到开始独立生活，我才意识到父母付出了多少。", use: "记叙文/书信中的顿悟时刻，not until 与强调句合体，气势直接翻倍。" },
    { en: "It is in the digital age that information literacy becomes an indispensable survival skill.", cn: "正是在数字时代，信息素养成为一项不可或缺的生存技能。", use: "科技类话题开头，强调时代背景。" }
  ],
  trap: {
    bad: "It was in the park where I met my old friend.",
    good: "It was in the park that I met my old friend.",
    why: "强调地点状语时用 that，不是 where。这是强调句，不是定语从句——初中生和高分作文的分水岭就在这一个词。"
  },
  drills: [
    { q: "正是持续的努力，而不是运气，造就了他今天的成就。", a: "It is sustained effort, rather than luck, that has made him what he is today.", tip: "先想\"聚光灯打给谁\"→ sustained effort；再把剩下的话塞进 that。" },
    { q: "直到失去健康，我们才懂得健康的价值。", a: "It is not until we lose our health that we come to appreciate its value.", tip: "记住固定搭配：It is not until ... that ..." }
  ],
  topics: ["教育", "个人成长", "科技", "社会现象"],
  examTip: "全文用 1-2 次最佳。放在第二段首句点明核心论点，或结尾段升华，效果最好。用滥了反而显得刻意。"
},
{
  id: "s02", cn: "not only 置于句首的部分倒装", cat: "倒装结构", level: 2,
  en: "Not only + 助动词/be + 主语 + 谓语, but (also) + 主语 + 谓语",
  core: "把 not only 提到句首，它后面那半句必须\"倒过来\"——助动词跑到主语前面；but also 后面那半句保持正常语序。前倒后不倒，这是唯一要记的规则。",
  mnemonic: "「前半句摔个跟头，后半句站直了走」——not only 倒装，but also 正常。",
  points: [
    "句中若无助动词，需借用 do / does / did，并把原动词还原为原形。",
    "but also 中的 also 可省略，也可换成 but ... as well 收尾。",
    "not only A but also B 要求 A、B 结构对称：都是动词短语，或都是名词短语。"
  ],
  ex: [
    { en: "Not only does reading broaden our horizons, but it also cultivates independent thinking.", cn: "阅读不仅开阔视野，还培养独立思考能力。", use: "论证\"一件事的双重好处\"，一句话顶两句，极其高效。" },
    { en: "Not only has technology reshaped the way we work, but it has also redefined the meaning of leisure.", cn: "科技不仅重塑了我们的工作方式，也重新定义了休闲的含义。", use: "科技类话题主题句，两个 reshape/redefine 动词递进有力。" },
    { en: "Not only should schools impart knowledge, but they should also nurture character.", cn: "学校不仅应传授知识，更应塑造品格。", use: "教育类建议句，情态动词 should 直接前移即可。" }
  ],
  trap: {
    bad: "Not only reading broadens our horizons, but it also cultivates thinking.",
    good: "Not only does reading broaden our horizons, but it also cultivates thinking.",
    why: "忘了倒装 = 白写。句首 not only 后必须借助动词 does，且 broadens 变回原形 broaden。"
  },
  drills: [
    { q: "运动不仅增强体质，还能缓解压力。", a: "Not only does exercise strengthen the body, but it also relieves stress.", tip: "无助动词 → 借 does → 动词变原形。" },
    { q: "他不仅完成了任务，还超出了所有人的预期。", a: "Not only did he accomplish the task, but he also exceeded everyone's expectations.", tip: "过去时 → 借 did → accomplish 用原形。" }
  ],
  topics: ["教育", "科技", "健康", "文化"],
  examTip: "适合放在正文段的\"分论点句\"位置。写议论文时，只要你想说\"不但…而且…\"，就立刻改成这个倒装，几乎稳赚一个亮点分。"
},
{
  id: "s03", cn: "Only 引导的部分倒装", cat: "倒装结构", level: 2,
  en: "Only + 状语(从句) + 助动词/情态动词 + 主语 + 谓语",
  core: "Only 后面跟状语（副词、介词短语、或整个从句）放到句首时，主句要倒装。注意：倒装的是主句，不是 only 后面那个从句。",
  mnemonic: "「Only 开头，主句翻身」——only 管的那段照常写，后面的主句才倒装。",
  points: [
    "Only when / Only after / Only if / Only by / Only through / Only in this way 都触发倒装。",
    "从句部分不倒装，倒装的永远是主句：Only when he came did I leave.（came 不倒，did I leave 倒）",
    "Only 后跟主语时不倒装：Only he knows the truth.（这里 only 修饰主语，不倒装）"
  ],
  ex: [
    { en: "Only when we step out of our comfort zone can we discover our true potential.", cn: "只有走出舒适区，我们才能发现自己真正的潜力。", use: "个人成长类金句，可直接当结尾段升华句。" },
    { en: "Only by working together can humanity address the challenges of climate change.", cn: "唯有携手合作，人类才能应对气候变化的挑战。", use: "环保/全球议题类结论句，by + doing 结构简洁有力。" },
    { en: "Only in this way can we strike a balance between economic growth and environmental protection.", cn: "只有这样，我们才能在经济增长与环境保护之间取得平衡。", use: "提出对策后的收束句，承上启下的万能句式。" }
  ],
  trap: {
    bad: "Only when we work hard we can succeed.",
    good: "Only when we work hard can we succeed.",
    why: "主句 we can succeed 必须倒装成 can we succeed。从句 we work hard 保持原样——很多人两边都倒或者都不倒，都是错的。"
  },
  drills: [
    { q: "只有通过不断反思，我们才能真正取得进步。", a: "Only through constant reflection can we make genuine progress.", tip: "Only through + 名词 → 主句 can we 倒装。" },
    { q: "只有当政府和公民共同努力时，这个问题才能得到解决。", a: "Only when the government and citizens work together can this problem be settled.", tip: "从句正常，主句 can this problem be settled 倒装。" }
  ],
  topics: ["个人成长", "环保", "社会治理", "教育"],
  examTip: "结尾段的\"神器\"。写完对策后来一句 Only in this way can we ...，收尾干净利落，阅卷老师看到就知道你会倒装。"
},
{
  id: "s04", cn: "虚拟条件句（错综时间）", cat: "虚拟语气", level: 3,
  en: "If + 主语 + had done, 主语 + would / could / might + do (now)",
  core: "条件是对\"过去\"的假设，结果落在\"现在\"，两半句时间错开，所以叫错综时间条件句。这是虚拟语气里最能体现功力的一种。",
  mnemonic: "「过去种因用 had done，现在结果用 would do」——因在昨天，果在今天。",
  points: [
    "纯过去虚拟：If had done, would have done（因果都在过去）。",
    "错综时间：If had done, would do + now/today（因在过去，果在现在）。",
    "省略 if 的倒装写法：Had I known ... 比 If I had known ... 高级一档。"
  ],
  ex: [
    { en: "If he had seized that opportunity ten years ago, he would be a leading figure in the field now.", cn: "如果十年前他抓住了那个机会，他现在已是该领域的领军人物。", use: "写\"错失机会\"的反思，时间跨度感极强。" },
    { en: "Had we taken environmental protection seriously decades ago, we would not be facing such a severe crisis today.", cn: "倘若几十年前我们就重视环保，今天就不会面临如此严峻的危机。", use: "环保话题的\"痛心疾首\"式论证，倒装 + 错综时间双重加分。" },
    { en: "If I had not developed the habit of reading in childhood, I would not be who I am today.", cn: "若非童年养成阅读习惯，我不会成为今天的自己。", use: "个人经历类文章的点睛之笔。" }
  ],
  trap: {
    bad: "If he had studied harder, he would have got a good job now.",
    good: "If he had studied harder, he would have a good job now.",
    why: "有 now 就说明结果在现在，主句只能用 would + 动词原形，不能用 would have done。时间标记词是判断依据。"
  },
  drills: [
    { q: "如果当初我选择了另一条路，我现在的生活会完全不同。", a: "If I had chosen a different path back then, my life would be completely different now.", tip: "back then → had chosen；now → would be。" },
    { q: "要是人们早点意识到这个问题，我们今天就不会如此被动。", a: "Had people realized this problem earlier, we would not be so passive today.", tip: "用倒装 Had people... 省掉 if，档次立刻提升。" }
  ],
  topics: ["个人成长", "环保", "历史反思", "社会问题"],
  examTip: "议论文中用来做\"反面假设\"论证特别有说服力。但别整篇都虚拟，全文出现 1 次即可，多了显得飘。"
},
{
  id: "s05", cn: "It is high time that + 过去式", cat: "虚拟语气", level: 2,
  en: "It is (high / about) time that + 主语 + 动词过去式 (或 should + do)",
  core: "\"是时候该做某事了\"——从句里必须用过去式，虽然说的是现在和将来的事。这是虚拟语气的固定用法，专门用来表达紧迫感和呼吁。",
  mnemonic: "「该动手了却还没动」——用过去式表达\"本该早就做了\"的埋怨感。",
  points: [
    "从句谓语用一般过去式最地道；用 should + do 也对，但 should 不能省略。",
    "绝对不能用现在时：It is high time that we take action ✗",
    "high 表示\"早就该了\"，about 表示\"差不多该了\"，语气强度不同。"
  ],
  ex: [
    { en: "It is high time that we took concrete measures to curb air pollution.", cn: "我们早该采取具体措施遏制空气污染了。", use: "环保话题的呼吁句，几乎是万能结尾。" },
    { en: "It is high time that the whole society paid due attention to teenagers' mental health.", cn: "全社会早该对青少年心理健康给予应有的重视了。", use: "社会问题类文章的收束呼吁。" },
    { en: "It is about time that we rethought the relationship between technology and privacy.", cn: "我们也差不多该重新思考科技与隐私的关系了。", use: "科技伦理话题，about 让语气更委婉。" }
  ],
  trap: {
    bad: "It is high time that we take action to solve this problem.",
    good: "It is high time that we took action to solve this problem.",
    why: "take 必须变 took。这个句式的全部难点就在这一个词形上，考官盯的也正是这里。"
  },
  drills: [
    { q: "是时候让教育回归它的本质了。", a: "It is high time that education returned to its essence.", tip: "returned，不是 returns。" },
    { q: "我们早就该重新审视这种传统观念了。", a: "It is high time that we re-examined this traditional notion.", tip: "\"早就该\"= high time，动词一律过去式。" }
  ],
  topics: ["环保", "教育", "社会问题", "科技伦理"],
  examTip: "结尾段呼吁的首选句式，比 We should... 高出好几个档次。记得配一个具体措施，不要空喊。"
},
{
  id: "s06", cn: "the + 比较级, the + 比较级", cat: "比较结构", level: 1,
  en: "The + 比较级 + 主语 + 谓语, the + 比较级 + 主语 + 谓语",
  core: "\"越…就越…\"，表示两个变量同步变化。写起来简单，但很多人漏掉 the，或者比较级位置放错——比较级必须紧跟在 the 后面，哪怕它修饰的名词在后面。",
  mnemonic: "「两个 the，两个更」——像跷跷板，一边动另一边跟着动。",
  points: [
    "比较级必须紧跟 the，被修饰的名词一起前移：The more books you read, ...（不是 The more you read books）。",
    "两个分句都可以省略 be 动词：The sooner, the better.",
    "谓语部分可以整体后置，但主谓顺序不倒装。"
  ],
  ex: [
    { en: "The more challenges we embrace, the more resilient we become.", cn: "我们迎接的挑战越多，就变得越坚韧。", use: "个人成长类论证，因果关系呈现得非常干脆。" },
    { en: "The more dependent we are on smartphones, the less capable we are of deep thinking.", cn: "我们越依赖智能手机，深度思考的能力就越弱。", use: "科技负面影响论证，more/less 反向搭配显得思辨。" },
    { en: "The earlier children develop reading habits, the greater benefits they will reap in later life.", cn: "孩子越早养成阅读习惯，日后受益越大。", use: "教育类话题，配合将来时表达长远影响。" }
  ],
  trap: {
    bad: "The more you read books, the more you will know.",
    good: "The more books you read, the more you will know.",
    why: "more 修饰 books，必须把 books 一起提到 the more 后面。这是中式英语最常见的漏洞之一。"
  },
  drills: [
    { q: "一个人接触的文化越多样，思维就越开阔。", a: "The more diverse cultures one is exposed to, the broader one's mind becomes.", tip: "diverse cultures 整体前移。" },
    { q: "我们对自然索取得越多，付出的代价就越大。", a: "The more we take from nature, the higher price we will pay.", tip: "第二个分句 higher price 整体跟在 the 后。" }
  ],
  topics: ["教育", "科技", "环保", "个人成长"],
  examTip: "最容易上手的高分句，写观点句和过渡句都合适。缺点是太常见，所以要在内容上出新，比如用 more/less 反向搭配制造思辨感。"
},
{
  id: "s07", cn: "There is no denying that ...", cat: "地道套语", level: 1,
  en: "There is no denying / doubt that + 完整句子",
  core: "\"不可否认…\"，用来引出一个大家公认的事实，然后你可以顺着说也可以转折。这是一个 There be + no + 动名词的固定结构，后接 that 从句。",
  mnemonic: "「先认账，再说话」——先承认对方有理，接着 However 一转，思辨感立现。",
  points: [
    "同族句式：There is no denying / no doubt / no question that ...",
    "另一变体：It is undeniable that ... / It cannot be denied that ...",
    "最佳用法是配合转折：There is no denying that A. However, B."
  ],
  ex: [
    { en: "There is no denying that the internet has revolutionized the way we acquire knowledge.", cn: "不可否认，互联网彻底改变了我们获取知识的方式。", use: "科技话题让步段开头。" },
    { en: "There is no denying that economic development matters; however, it should never come at the cost of the environment.", cn: "不可否认经济发展很重要，但绝不应以环境为代价。", use: "让步+转折一句成型，是双边论证的模板句。" },
    { en: "There is no doubt that a sound education system serves as the cornerstone of national prosperity.", cn: "毫无疑问，健全的教育体系是国家繁荣的基石。", use: "教育类首段的定调句。" }
  ],
  trap: {
    bad: "There is no denying the fact that people should to protect environment.",
    good: "There is no denying that people should protect the environment.",
    why: "两个毛病：should to 是硬伤；environment 前必须加 the。另外 the fact that 可省，句子更利落。"
  },
  drills: [
    { q: "不可否认，社交媒体已经深刻改变了人际交往的方式。", a: "There is no denying that social media has profoundly transformed the way people interact.", tip: "the way people interact 是高频搭配，记牢。" },
    { q: "毫无疑问，阅读是通往智慧最经济的途径。", a: "There is no doubt that reading is the most economical path to wisdom.", tip: "no doubt 与 no denying 可互换。" }
  ],
  topics: ["科技", "教育", "社会现象", "文化"],
  examTip: "开头段第二句的黄金位置。但别在同一篇文章里用两次，也别一上来就用——先有背景描述，再用它切入观点更自然。"
},
{
  id: "s08", cn: "What 引导的主语从句", cat: "名词性从句", level: 2,
  en: "What + 主语 + 谓语 + is / lies in / matters ... ",
  core: "用 what 从句当主语，是把\"…的东西/事情\"整体做主语。它的高级之处在于把抽象概念前置，比 The thing that... 干净，比 It is... 灵活。",
  mnemonic: "「What 打头，先设悬念，is 之后揭晓答案」。",
  points: [
    "What 从句作主语时，主句谓语通常用单数：What matters is ...",
    "常见搭配：What matters most is / What counts is / What we need is / What lies behind ... is",
    "可与强调配合：What really matters is not A but B."
  ],
  ex: [
    { en: "What truly matters in education is not the accumulation of facts but the cultivation of curiosity.", cn: "教育真正重要的不是知识的堆砌，而是好奇心的培养。", use: "教育类核心论点句，not A but B 让观点极其鲜明。" },
    { en: "What lies behind this phenomenon is a profound shift in social values.", cn: "这一现象背后是社会价值观的深刻变迁。", use: "分析原因段的开头，从现象跳到本质。" },
    { en: "What we urgently need is not more regulations but stronger enforcement.", cn: "我们迫切需要的不是更多规定，而是更有力的执行。", use: "对策段的犀利表达。" }
  ],
  trap: {
    bad: "What matters are the attitude you hold towards life.",
    good: "What matters is the attitude you hold towards life.",
    why: "What 从句作主语视为单数概念，谓语用 is。除非后接明确的复数表语，否则一律单数。"
  },
  drills: [
    { q: "真正决定一个人未来的，是他面对失败时的态度。", a: "What truly determines one's future is his attitude towards failure.", tip: "What 从句 + is，主句谓语单数。" },
    { q: "这个社会现象背后反映的是年轻人日益增长的焦虑。", a: "What this social phenomenon reflects is the growing anxiety among young people.", tip: "What ... reflects is ... 是分析型句式。" }
  ],
  topics: ["教育", "社会现象", "价值观", "职场"],
  examTip: "分析\"本质/原因\"时的利器。配上 not A but B，一句话就能展示你的思辨深度。"
},
{
  id: "s09", cn: "现在分词作状语", cat: "非谓语动词", level: 2,
  en: "Doing ..., 主语 + 谓语 / 主语 + 谓语, doing ...",
  core: "用 -ing 短语代替一个完整的从句，让句子更紧凑。核心铁律：分词的逻辑主语必须和主句主语一致，否则就是垂悬分词错误。",
  mnemonic: "「-ing 前后一家人」——分词动作的发出者，必须就是主句的主语。",
  points: [
    "前置表原因/条件/时间；后置多表结果或伴随。",
    "表主动用 doing，表被动用 done，动作已完成用 having done。",
    "结果状语用现在分词时，常表自然而然的结果：..., thus leading to ..."
  ],
  ex: [
    { en: "Confronted with fierce competition, many graduates choose to pursue further education.", cn: "面对激烈竞争，许多毕业生选择继续深造。", use: "过去分词表被动，社会现象类开头利器。" },
    { en: "Technology has permeated every corner of our lives, reshaping the way we communicate and learn.", cn: "科技已渗透生活的每个角落，重塑着我们交流与学习的方式。", use: "后置分词表结果，让长句自然延展。" },
    { en: "Having experienced numerous setbacks, he finally came to understand the true meaning of perseverance.", cn: "在经历无数挫折之后，他终于领悟了坚持的真正含义。", use: "having done 表明动作先于主句发生，时间层次清晰。" }
  ],
  trap: {
    bad: "Walking on the street, a wallet was found by me.",
    good: "Walking on the street, I found a wallet.",
    why: "分词 walking 的执行者是\"我\"，主句主语却是 a wallet——钱包不会走路。垂悬分词是阅卷老师一眼就抓的错误。"
  },
  drills: [
    { q: "由于缺乏实践经验，许多学生毕业后难以适应职场。", a: "Lacking practical experience, many students find it hard to adapt to the workplace after graduation.", tip: "Lacking 的主语是 students，一致。" },
    { q: "网络购物迅速普及，极大地改变了传统零售业。", a: "Online shopping has spread rapidly, greatly transforming the traditional retail industry.", tip: "后置 -ing 表结果。" }
  ],
  topics: ["社会现象", "科技", "职场", "个人经历"],
  examTip: "长短句搭配的关键工具。一段里如果全是简单句，插入一个分词状语，节奏立刻好看。但一段最多用两次。"
},
{
  id: "s10", cn: "as / though 引导的倒装让步", cat: "让步状语", level: 3,
  en: "形容词 / 副词 / 名词 / 动词原形 + as / though + 主语 + 谓语, 主句",
  core: "把表语或状语提到句首，后接 as 或 though，表示\"尽管…\"。这是让步状语从句的高阶写法，比 Although... 高出一个档次，因为大多数考生不会。",
  mnemonic: "「先亮态度，再让一步」——把最关键的词甩到最前面，as 一转折。",
  points: [
    "名词提前时，前面不加冠词：Child as he is, ...（不是 A child as he is）",
    "as 引导倒装让步时，不能换成 although；though 可以，but 绝对不行。",
    "动词提前时用原形：Try as he might, ...（尽管他很努力）"
  ],
  ex: [
    { en: "Difficult as the task may seem, it is by no means impossible.", cn: "尽管这项任务看似艰巨，却绝非不可能。", use: "让步段开头，为下文\"但我们能做到\"铺路。" },
    { en: "Convenient as online learning is, it can hardly replace face-to-face interaction.", cn: "在线学习虽便利，却难以取代面对面的交流。", use: "科技/教育类双边论证的经典句。" },
    { en: "Try as we might, we cannot turn back the clock of environmental degradation overnight.", cn: "纵使竭尽全力，我们也无法一夜之间逆转环境恶化。", use: "动词原形提前，语气极具感染力。" }
  ],
  trap: {
    bad: "Although difficult as the task is, but we must finish it.",
    good: "Difficult as the task is, we must finish it.",
    why: "三重错误：already 有 as 就不能再加 although；中文\"虽然…但是…\"在英语里只能留一个连词，but 必须删掉。"
  },
  drills: [
    { q: "尽管他很年轻，却展现出了非凡的领导力。", a: "Young as he is, he has shown remarkable leadership.", tip: "形容词 Young 打头，as 紧随。" },
    { q: "这个方案虽然吸引人，实施起来却困难重重。", a: "Appealing as the proposal is, it is fraught with difficulties in implementation.", tip: "Appealing 前置，主句正常语序。" }
  ],
  topics: ["科技", "教育", "社会问题", "人物评价"],
  examTip: "让步段的\"高级替换\"。全文只要出现一次，就能证明你的语法储备超出平均水平。注意后半句别再加 but。"
},
{
  id: "s11", cn: "so / such ... that 结果状语", cat: "结果状语", level: 1,
  en: "so + 形容词/副词 + that ... / such + (a) + 形容词 + 名词 + that ...",
  core: "\"如此…以至于…\"。so 后跟形容词或副词，such 后跟名词短语。区分口诀：so 管形容词，such 管名词。so 放句首时主句要倒装，这是提分点。",
  mnemonic: "「so 抱形容词，such 抱名词」——认准后面接什么，就用哪个。",
  points: [
    "特殊情况：so + many / much / few / little + 名词（数量词归 so 管）。",
    "So + adj 置于句首时倒装：So fascinating was the book that I read it twice.",
    "such 后有名词单数可数时需加 a/an：such an important issue that ..."
  ],
  ex: [
    { en: "The pace of technological change is so rapid that many traditional skills are becoming obsolete.", cn: "科技变革的速度如此之快，以至于许多传统技能正在被淘汰。", use: "科技类论证，体现变化剧烈程度。" },
    { en: "So profound is the impact of social media that it has reshaped an entire generation's worldview.", cn: "社交媒体的影响如此深远，以至于重塑了整整一代人的世界观。", use: "倒装版，气势陡增，适合放段首。" },
    { en: "It is such a controversial issue that no consensus has been reached so far.", cn: "这是一个如此有争议的话题，以至于迄今尚无共识。", use: "引出争议性话题的过渡句。" }
  ],
  trap: {
    bad: "It was so beautiful scenery that we stayed for hours.",
    good: "It was such beautiful scenery that we stayed for hours.",
    why: "scenery 是名词，必须用 such。若要用 so，得改成 The scenery was so beautiful that ..."
  },
  drills: [
    { q: "这个问题如此复杂，以至于专家们至今争论不休。", a: "The problem is so complicated that experts are still debating it today.", tip: "complicated 是形容词 → so。" },
    { q: "他的演讲如此鼓舞人心，以至于全场起立鼓掌。", a: "So inspiring was his speech that the whole audience rose to their feet.", tip: "用倒装版更抢眼。" }
  ],
  topics: ["科技", "社会现象", "人物", "文化"],
  examTip: "基础句式，但用倒装版（So + adj + be + 主语 + that）能瞬间拉开档次。建议每篇文章至少倒装一次。"
},
{
  id: "s12", cn: "介词 + which 定语从句", cat: "定语从句", level: 2,
  en: "..., 介词 + which / whom + 主语 + 谓语",
  core: "把介词提到关系代词前面，是书面语的标志性写法。判断该用哪个介词：还原成完整句子看动词或名词跟哪个介词搭配。",
  mnemonic: "「介词前置，书面正装」——口语放句尾，作文提到前面。",
  points: [
    "介词前置时，关系词只能用 which（物）或 whom（人），绝不能用 that 或 who。",
    "常见组合：in which = where，at which = when，for which（原因），without which（否则）。",
    "the extent to which（…的程度）是学术写作高频短语。"
  ],
  ex: [
    { en: "We are living in an era in which information travels faster than ever before.", cn: "我们生活在一个信息传播前所未有之快的时代。", use: "开头背景句，in which 比 where 更正式。" },
    { en: "Education is a lifelong process, without which one can hardly keep pace with a changing world.", cn: "教育是一个终身的过程，没有它，人几乎无法跟上变化的世界。", use: "without which 自带假设意味，一句抵两句。" },
    { en: "The extent to which artificial intelligence will replace human labor remains highly debatable.", cn: "人工智能将在多大程度上取代人类劳动，仍然极具争议。", use: "学术腔十足的主语，直接秒杀普通表达。" }
  ],
  trap: {
    bad: "This is the house in that I lived for ten years.",
    good: "This is the house in which I lived for ten years.",
    why: "介词后面永远不能跟 that。要么 in which，要么把介词放回句尾说 that I lived in。"
  },
  drills: [
    { q: "我们正处在一个人人都能发声的时代。", a: "We are in an age in which everyone can make their voice heard.", tip: "in an age in which = where。" },
    { q: "他提出了一个解决方案，我们都对此表示赞同。", a: "He put forward a solution, with which we all agreed.", tip: "agree with → with which 前置。" }
  ],
  topics: ["科技", "教育", "时代背景", "社会分析"],
  examTip: "开头段写\"我们生活在一个…的时代\"时的标准配置。in which 一出，正式感立刻到位。"
},
{
  id: "s13", cn: "It is universally acknowledged that ...", cat: "地道套语", level: 1,
  en: "It is + 过去分词 (acknowledged / believed / recognized) + that + 从句",
  core: "It 作形式主语，把真正的主语 that 从句放后面。这类被动结构表达\"人们普遍认为\"，客观中立，是议论文开头的经典配置。",
  mnemonic: "「It is ___ed that」= 借全世界的嘴说话，客观又稳当。",
  points: [
    "可替换的过去分词：acknowledged / believed / recognized / reported / assumed / argued",
    "同义变体：It is widely held that ... / Public opinion holds that ...",
    "避免滥用 As we all know，那是初级表达，且带有\"想当然\"的语病感。"
  ],
  ex: [
    { en: "It is universally acknowledged that a healthy lifestyle contributes significantly to longevity.", cn: "人们普遍认为，健康的生活方式对长寿有显著贡献。", use: "健康话题开头定调。" },
    { en: "It is widely believed that early exposure to a second language enhances cognitive flexibility.", cn: "人们普遍相信，早期接触第二语言能增强认知灵活性。", use: "教育类观点引入，带一点学术味。" },
    { en: "It has long been recognized that reading shapes both intellect and character.", cn: "人们早已认识到，阅读塑造智识，也塑造品格。", use: "has long been 强调\"由来已久\"，比一般现在时更有厚度。" }
  ],
  trap: {
    bad: "As we all know that reading is important.",
    good: "It is universally acknowledged that reading is important.",
    why: "As we all know 后面不能跟 that，且这个表达在正式作文中偏幼稚。直接换成 It is ...ed that 结构。"
  },
  drills: [
    { q: "人们普遍认为，团队合作能力在现代职场中至关重要。", a: "It is universally acknowledged that the ability to work in a team is vital in the modern workplace.", tip: "vital / crucial / indispensable 换着用。" },
    { q: "人们早就认识到，环境保护关乎人类的未来。", a: "It has long been recognized that environmental protection concerns the future of mankind.", tip: "has long been 表\"长期以来\"。" }
  ],
  topics: ["健康", "教育", "环保", "职场"],
  examTip: "开头第一句的稳妥选择，但太多人用了。建议改用 It has long been recognized that，或者干脆放到第二段做分论点，避开人群。"
},
{
  id: "s14", cn: "nothing is more ... than 最高级变体", cat: "比较结构", level: 2,
  en: "Nothing is more + 形容词 + than ... / No + 名词 + is more ... than ...",
  core: "用否定 + 比较级表达最高级含义，比直接用 the most 更有力度，也更有文学感。核心逻辑：没有比它更…的，那它就是最…的。",
  mnemonic: "「否定 + 比较 = 最高级」——绕个弯说话，反而更狠。",
  points: [
    "同族表达：Nothing can be more ... / There is nothing more ... than",
    "变体：No other + 单数名词 + is as ... as ...",
    "也可用 never 构成：Never has there been a more urgent need for ..."
  ],
  ex: [
    { en: "Nothing is more precious than the ability to think independently.", cn: "没有什么比独立思考的能力更宝贵。", use: "教育/思维类话题的价值判断句。" },
    { en: "No other factor is as decisive as persistence in the pursuit of long-term goals.", cn: "在追求长期目标的过程中，没有什么因素比坚持更具决定性。", use: "个人成长论证，as...as 结构变体。" },
    { en: "Never has there been a more urgent need for global cooperation on climate issues.", cn: "在气候议题上，全球合作的需求从未如此迫切。", use: "Never 引导倒装，气势最强的一种写法。" }
  ],
  trap: {
    bad: "Nothing is more important than health is.",
    good: "Nothing is more important than health.",
    why: "than 后面直接跟比较对象即可，不用重复 be 动词。多写一个 is 反而显得生硬。"
  },
  drills: [
    { q: "对一个国家而言，没有什么比教育更能决定它的未来。", a: "Nothing determines a nation's future more profoundly than education.", tip: "也可把比较级放在动词后面。" },
    { q: "在信息爆炸的时代，辨别真伪的能力从未如此重要。", a: "Never has the ability to distinguish truth from falsehood been more important than in this age of information explosion.", tip: "Never 开头，助动词 has 前移。" }
  ],
  topics: ["教育", "价值观", "环保", "信息时代"],
  examTip: "结尾升华的好帮手。写\"XX最重要\"时不要写 XX is the most important，换成 Nothing is more important than XX，档次差一大截。"
},
{
  id: "s15", cn: "with 复合结构（独立主格）", cat: "非谓语动词", level: 3,
  en: "with + 名词 + doing / done / to do / 形容词 / 介词短语",
  core: "with 后面跟一个\"小主谓\"，用来补充背景或伴随情况。它不是从句，却能表达从句的信息量，是压缩句子的顶级工具。",
  mnemonic: "「with 带个小尾巴」——名词是小主语，后面是它的状态。",
  points: [
    "名词与后面成分是主动关系用 doing，被动关系用 done。",
    "表示尚未发生的事用 to do：with much work to do。",
    "去掉 with 就是独立主格结构，更高级：All things considered, ..."
  ],
  ex: [
    { en: "With living standards rising steadily, people are placing greater emphasis on the quality of life.", cn: "随着生活水平稳步提高，人们越来越重视生活质量。", use: "背景铺垫句，几乎所有社会话题都能用。" },
    { en: "With the problem left unsolved, social tensions are likely to escalate.", cn: "若问题得不到解决，社会矛盾很可能加剧。", use: "left 表被动，暗含条件意味。" },
    { en: "With so many challenges to tackle, governments must set clear priorities.", cn: "面对如此多亟待解决的挑战，政府必须明确优先次序。", use: "to tackle 表示\"待做\"。" }
  ],
  trap: {
    bad: "With the development of technology is changing our life.",
    good: "With the development of technology, our life is changing.",
    why: "with 结构是状语，不能充当句子主语。后面必须有一个独立完整的主句。这是中式英语的重灾区。"
  },
  drills: [
    { q: "随着人工智能的迅速发展，许多职业正面临被取代的风险。", a: "With artificial intelligence developing rapidly, many professions are at risk of being replaced.", tip: "AI 与 develop 是主动 → developing。" },
    { q: "所有因素都考虑在内，这个方案仍然是最优选择。", a: "All factors considered, this plan remains the best option.", tip: "去掉 with，变成独立主格，更高级。" }
  ],
  topics: ["社会发展", "科技", "经济", "政策"],
  examTip: "开头段做背景铺垫的最佳选择。但切记后面必须接完整主句，这个错误一犯就是语法硬伤。"
},
{
  id: "s16", cn: "同位语从句", cat: "名词性从句", level: 2,
  en: "抽象名词 + that + 完整句子（解释该名词的具体内容）",
  core: "在 fact / idea / belief / notion / conclusion 等抽象名词后加 that 从句，把这个名词的内容说清楚。它和定语从句的区别：同位语从句里 that 不作任何成分，只是引导词。",
  mnemonic: "「名词后跟 that，从句就是它的身份证」——解释这个名词到底指什么。",
  points: [
    "能接同位语从句的名词有限：fact, idea, belief, notion, view, conclusion, doubt, hope, possibility 等。",
    "与定语从句区分：从句成分完整 → 同位语从句；从句缺主语或宾语 → 定语从句。",
    "同位语从句的 that 不能省略（正式写作中）。"
  ],
  ex: [
    { en: "The fact that millions still live below the poverty line demands immediate attention.", cn: "数百万人仍生活在贫困线以下这一事实亟需关注。", use: "把\"事实\"整体做主语，句子重心突出。" },
    { en: "We must abandon the outdated notion that success can be measured solely by wealth.", cn: "我们必须摒弃成功只能用财富衡量这一陈旧观念。", use: "驳论段的标准打法，先立靶再打靶。" },
    { en: "There is growing evidence that excessive screen time impairs children's attention span.", cn: "越来越多的证据表明，过多的屏幕时间会损害儿童的注意力。", use: "引用论据的高级说法，比 Studies show 更书面。" }
  ],
  trap: {
    bad: "The fact which he failed the exam surprised everyone.",
    good: "The fact that he failed the exam surprised everyone.",
    why: "he failed the exam 是完整句，不缺成分，所以是同位语从句，只能用 that。用 which 就变成定语从句了，但从句根本没有空位给 which。"
  },
  drills: [
    { q: "我们必须正视年轻人就业压力日益增大这一现实。", a: "We must face the reality that young people are under mounting employment pressure.", tip: "reality + that + 完整句。" },
    { q: "有充分证据表明，规律运动能显著改善心理健康。", a: "There is ample evidence that regular exercise significantly improves mental health.", tip: "evidence that 是学术写作常用组合。" }
  ],
  topics: ["社会问题", "教育", "健康", "论证"],
  examTip: "写\"…这一事实/观念\"时的标准句式。特别适合驳论：先用 the notion that... 立一个靶子，然后 However 推翻它。"
},
{
  id: "s17", cn: "not so much A as B", cat: "比较结构", level: 3,
  en: "not so much A as B（与其说是 A，不如说是 B）",
  core: "用来做精细的区分和纠偏：否定一个表面答案，给出一个更准确的答案。这是思辨深度的直接体现，用对了非常加分。",
  mnemonic: "「与其说…不如说…」——as 后面的 B 才是你真正想说的。",
  points: [
    "重心在 B，不在 A。翻译时记住\"不如说\"后面的才是答案。",
    "同族表达：less A than B / not A so much as B / rather B than A",
    "A 和 B 必须词性对称：都是名词，或都是形容词。"
  ],
  ex: [
    { en: "The crisis is not so much a technological problem as a moral one.", cn: "这场危机与其说是技术问题，不如说是道德问题。", use: "从表层原因跳到深层原因，思辨感极强。" },
    { en: "What holds most people back is not so much a lack of ability as a lack of courage.", cn: "阻碍多数人的与其说是能力不足，不如说是勇气不够。", use: "配合 What 主语从句，双高级句式叠加。" },
    { en: "Reading is not so much about accumulating information as about reshaping the way we think.", cn: "阅读与其说是积累信息，不如说是重塑我们的思维方式。", use: "about + doing 两边对称。" }
  ],
  trap: {
    bad: "The problem is not so much technology as it is moral.",
    good: "The problem is not so much technological as moral.",
    why: "A 和 B 词性必须一致。technology 是名词，moral 是形容词，不对称。改成两个形容词就顺了。"
  },
  drills: [
    { q: "教育的目的与其说是灌输知识，不如说是点燃热情。", a: "The purpose of education is not so much to impart knowledge as to ignite passion.", tip: "两边都用 to do，对称。" },
    { q: "他的成功与其说源于天赋，不如说源于自律。", a: "His success stems not so much from talent as from self-discipline.", tip: "from 重复出现保持结构对称。" }
  ],
  topics: ["教育", "价值观", "社会分析", "人物评价"],
  examTip: "全文最出彩的一句往往可以交给它。用在\"深层原因分析\"处，能让阅卷老师眼前一亮。"
},
{
  id: "s18", cn: "no matter how / whatever 让步", cat: "让步状语", level: 1,
  en: "No matter how / what / who + 从句, 主句 / Whatever + 从句, 主句",
  core: "\"无论…都…\"。no matter + 疑问词只能引导状语从句；而 whatever / however 既能引导状语从句，也能引导名词性从句。这是两者唯一的实质区别。",
  mnemonic: "「no matter 只能当状语，-ever 词还能当主宾」。",
  points: [
    "No matter how + 形容词/副词 + 主语 + 谓语（形容词紧跟 how，不能分开）。",
    "作主语或宾语时只能用 whatever / whoever，不能用 no matter what。",
    "口语中 whatever 更常见，正式写作两者皆可。"
  ],
  ex: [
    { en: "No matter how advanced technology becomes, it can never replace genuine human connection.", cn: "无论科技多么先进，都无法取代真正的人际联结。", use: "科技类反面论证的经典句。" },
    { en: "Whatever difficulties we may encounter, giving up should never be an option.", cn: "无论遭遇何种困难，放弃都不应成为选项。", use: "励志类收尾，语气坚定。" },
    { en: "However busy modern people are, they should spare time for reflection.", cn: "无论现代人多么忙碌，都应抽出时间反思。", use: "However + 形容词紧邻，注意不要写成 However people are busy。" }
  ],
  trap: {
    bad: "No matter how the task is difficult, we will complete it.",
    good: "No matter how difficult the task is, we will complete it.",
    why: "how 必须和形容词 difficult 紧挨着，中间不能插主语。这是语序问题，也是最高频错误。"
  },
  drills: [
    { q: "无论一个人多么有才华，缺乏努力都难以成功。", a: "No matter how talented a person is, he can hardly succeed without hard work.", tip: "how talented 紧挨。" },
    { q: "无论我们做出何种选择，都必须为之承担后果。", a: "Whatever choice we make, we must bear the consequences.", tip: "Whatever + 名词 choice 直接连用。" }
  ],
  topics: ["科技", "励志", "个人成长", "社会"],
  examTip: "基础但实用，适合放在结尾段前的过渡位置。想再高级一点，就换成第 10 号的 as 倒装让步。"
}
];
