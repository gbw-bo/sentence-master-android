/* 句式大师 · 内容库 C（高中重点 · 1.1 新增 37-86）
   覆盖高考高分作文与读后续写的实用高级句型。stage 标记用于「学习阶段选择」。
   其余句式库（A/B）内容保持不变，运行时统一归类为「通用基础」。 */
window.SENTENCES_C = [
/* ============ 读后续写 · 情绪描写 ============ */
{
  id: "s37", cn: "a wave of + 情绪 + swept over", cat: "读后续写·情绪", level: 2, stage: "高中重点",
  en: "A wave of + 情绪名词(sadness / relief / pride ...) + swept over + 某人",
  core: "把某种情绪比作「浪」，突然把人淹没。比直接写 feel 生动十倍，是读后续写描写心理的万能起手式。",
  mnemonic: "「情绪像海浪，啪一下拍过来」——swept over 就是被浪拍倒。",
  points: [
    "情绪名词常用：sadness, relief, pride, guilt, panic, excitement, loneliness。",
    "sweep 过去式 swept，over 别漏，表示「漫过、淹没」。",
    "可加地点：A wave of warmth swept over her heart."
  ],
  ex: [
    { en: "A wave of relief swept over her the moment she saw her lost dog.", cn: "看到走失的狗的那一刻，一股如释重负的暖流淹没了她。", use: "找回/团聚类结局的高光句。" },
    { en: "A wave of guilt swept over him when he realized what he had done.", cn: "当他意识到自己做了什么时，一阵愧疚涌上心头。", use: "犯错后心理转折。" }
  ],
  drills: [
    { q: "得知考试通过后，一阵喜悦涌上她的心头。", a: "A wave of joy swept over her heart when she learned she had passed the exam.", tip: "情绪名词 joy + swept over + 身体部位 heart。" }
  ],
  topics: ["读后续写", "情感", "成长"],
  examTip: "放在段落开头一句，立刻把读者拉进角色的内心。整篇用 1-2 次即可，用多了廉价。"
},
{
  id: "s38", cn: "tears welled up in one's eyes", cat: "读后续写·情绪", level: 1, stage: "高中重点",
  en: "Tears welled up in + 某人的 + eyes",
  core: "well up 是「涌出、充盈」，比 cry 含蓄克制，最适合描写「强忍着没哭出来」的瞬间，张力十足。",
  mnemonic: "「井水(well)往上涌」——well up 就是眼泪在眼眶里打转。",
  points: [
    "well 的过去式 welled，up 表「往上」。",
    "常配合 but she didn't cry / fighting back tears 制造克制感。",
    "升级：Tears of gratitude welled up in her eyes."
  ],
  ex: [
    { en: "Tears welled up in the old man's eyes as his son walked through the door.", cn: "当儿子走进门时，老人眼眶里涌出了泪水。", use: "亲情重逢经典画面。" },
    { en: "She bit her lip, but tears still welled up in her eyes.", cn: "她咬着嘴唇，眼泪却还是涌了上来。", use: "克制情绪的挣扎感。" }
  ],
  drills: [
    { q: "听到这个好消息，他眼眶里涌出了泪水。", a: "Hearing the good news, tears welled up in his eyes.", tip: "用现在分词作状语开头更地道。" }
  ],
  topics: ["读后续写", "亲情", "感动"],
  examTip: "比直接写 he cried 高级太多，是阅卷老师眼中的「画面感」加分项。"
},
{
  id: "s39", cn: "a surge of + 情绪 + washed over", cat: "读后续写·情绪", level: 2, stage: "高中重点",
  en: "A surge of + 情绪 + washed over + 某人",
  core: "surge 是「一阵猛涌」，比 wave 更强烈，描写瞬间爆发的情绪（恐惧、释然、狂喜）特别带感。",
  mnemonic: "「浪头(surge)拍岸，比 wave 更猛」——wash over 洗过全身。",
  points: [
    "surge 名词，a surge of + 情绪，washed 是 wash 过去式。",
    "常见：a surge of fear / relief / excitement / anger。",
    "与 s37 的 wave 相比，surge 更突然、更强烈。"
  ],
  ex: [
    { en: "A surge of fear washed over me as the lights went out.", cn: "灯灭的瞬间，一阵恐惧席卷了我。", use: "恐怖/紧张场景。" },
    { en: "A surge of excitement washed over the crowd when the fireworks lit up the sky.", cn: "烟花照亮夜空时，人群爆发出一阵兴奋。", use: "欢庆场面。" }
  ],
  drills: [
    { q: "得知自己获奖时，一阵难以置信的喜悦涌遍全身。", a: "A surge of disbelief and joy washed over her when she was told she had won the prize.", tip: "连用两个情绪词 disbelief and joy 更细腻。" }
  ],
  topics: ["读后续写", "紧张", "惊喜"],
  examTip: "用于情绪转折最强烈的那一拍，和 s37 的 wave 交替使用，避免重复。"
},
{
  id: "s40", cn: "one's heart sank / pounded", cat: "读后续写·情绪", level: 1, stage: "高中重点",
  en: "One's heart sank (心一沉) / One's heart pounded wildly (心狂跳)",
  core: "用心脏的生理反应代指心情，比直接说 nervous/scared 更形象，是续写心理描写的常客。",
  mnemonic: "「心会说话」——sank 表失望害怕，pounded 表紧张激动。",
  points: [
    "heart sank：表示希望落空、害怕，主语 heart 用单数。",
    "heart pounded：表示紧张、激动，常加 wildly / violently。",
    "升级：His heart missed a beat.（心脏漏跳一拍）"
  ],
  ex: [
    { en: "My heart sank when I saw the empty seat where my friend should have been.", cn: "当我看到本该有朋友的空座位时，我的心一沉。", use: "失落、担忧。" },
    { en: "His heart pounded wildly as he approached the stage.", cn: "走向舞台时，他的心狂跳不止。", use: "紧张、期待。" }
  ],
  drills: [
    { q: "看到眼前的庞然大物，我的心猛地一沉。", a: "My heart sank at the sight of the huge creature before me.", tip: "at the sight of 表「一看到」。" }
  ],
  topics: ["读后续写", "恐惧", "紧张"],
  examTip: "一句话带出心理状态，省掉大段心理独白，节奏更紧凑。"
},
{
  id: "s41", cn: "so + 形容词/副词 + that 结果状语从句", cat: "读后续写·情绪", level: 2, stage: "高中重点",
  en: "So + adj./adv. + that + 句子（如此……以至于……）",
  core: "so 修饰形容词或副词，强调程度之深导致一个结果。续写里常用来放大情绪或状态。",
  mnemonic: "「so 修饰形副，that 接结果」——和 such 不同，such 修饰名词。",
  points: [
    "so + 形容词 + a/an + 单数名词 也可：so brave a boy that...",
    "so 在句首需部分倒装：So excited was she that she jumped.（高级写法）",
    "别和 such 混：such + (a/an) + 形容词 + 名词。"
  ],
  ex: [
    { en: "He was so exhausted that he fell asleep the moment his head touched the pillow.", cn: "他累得头一沾枕头就睡着了。", use: "疲惫到极致。" },
    { en: "So moved was she that she could hardly utter a word.", cn: "她感动得几乎说不出一句话。", use: "so 倒装，情绪放大。" }
  ],
  trap: {
    bad: "Such tired was he that he slept.",
    good: "So tired was he that he slept.",
    why: "tired 是形容词，要用 so 修饰；such 只能修饰名词（such a tired man）。"
  },
  drills: [
    { q: "她如此害怕，以至于一动也不敢动。", a: "She was so frightened that she dared not move a bit.", tip: "frightened 形容词，用 so。" }
  ],
  topics: ["读后续写", "程度", "结果"],
  examTip: "放句首用倒装版（So + adj + was/were + 主语）能瞬间拉高句式复杂度评分。"
},
{
  id: "s42", cn: "it was... that 强调情绪瞬间", cat: "读后续写·情绪", level: 2, stage: "高中重点",
  en: "It was + 时间/动作/原因 + that + 句子其余",
  core: "强调句在读后续写里用来「定格」那个改变一切的关键瞬间，让高潮更突出。",
  mnemonic: "「聚光灯打在哪一刻，哪一刻就是重点」——It was that 把瞬间拎出来。",
  points: [
    "去掉 It was...that 后句子仍完整，这是检验标准。",
    "强调时间状语也用 that，不用 when。",
    "可强调动作：It was at that moment that everything changed."
  ],
  ex: [
    { en: "It was at that moment that she realized how much her mother loved her.", cn: "正是在那一刻，她才意识到母亲有多爱她。", use: "顿悟时刻。" },
    { en: "It was his encouraging smile that gave me the courage to go on.", cn: "正是他鼓励的微笑，给了我继续前行的勇气。", use: "强调某个细节的力量。" }
  ],
  drills: [
    { q: "正是那个拥抱，化解了他们之间的所有误会。", a: "It was that hug that dissolved all the misunderstanding between them.", tip: "强调宾语 that hug，用 that 不用 which。" }
  ],
  topics: ["读后续写", "顿悟", "亲情"],
  examTip: "全文用一次足矣，放在情节转折或升华处，比平铺直叙有力得多。"
},
/* ============ 读后续写 · 动作描写 ============ */
{
  id: "s43", cn: "doing..., 主语 + 谓语（分词作状语）", cat: "读后续写·动作", level: 2, stage: "高中重点",
  en: "V-ing, + 主语 + 谓语（伴随 / 先后动作）",
  core: "用现在分词把次要动作「打包」成状语，主句放主要动作，一写就是流畅的动作链，告别一堆 and。",
  mnemonic: "「分词当配角，主句当主角」——doing 的那个动作轻，主句动作重。",
  points: [
    "分词动作与主句主语是主动关系才用 -ing。",
    "可表同时（伴随）或先后（做完分词动作再做主句动作）。",
    "多个动作链：Hesitating for a second, he took a deep breath and stepped forward."
  ],
  ex: [
    { en: "Hearing the cry for help, he rushed out without a second thought.", cn: "听到呼救声，他想都没想就冲了出去。", use: "紧急救援场景。" },
    { en: "Smiling, she handed the letter to the old man.", cn: "她微笑着把信递给了老人。", use: "温柔动作描写。" }
  ],
  drills: [
    { q: "深吸一口气，他推开了那扇门。", a: "Taking a deep breath, he pushed the door open.", tip: "先深吸气(taking)再推门，分词表先后。" }
  ],
  topics: ["读后续写", "动作", "连贯"],
  examTip: "动作链是续写的核心，每写 2-3 个动作就用一次分词，行文立刻丝滑。"
},
{
  id: "s44", cn: "without hesitation / without a word", cat: "读后续写·动作", level: 1, stage: "高中重点",
  en: "Without + 名词/动名词, + 主句（毫不犹豫地……）",
  core: "用 without 介词短语一笔带过「没犹豫、没多说」，衬托人物的果断或默契，比写 he didn't hesitate 高级。",
  mnemonic: "「without 一甩，干脆利落」——省掉心理描写，直接行动。",
  points: [
    "without hesitation = 毫不犹豫；without a word = 一言不发。",
    "后可接动名词：Without thinking twice, he...",
    "放句首作状语，主句动词要干脆。"
  ],
  ex: [
    { en: "Without hesitation, the stranger jumped into the river to save the drowning child.", cn: "陌生人毫不犹豫地跳进河里救起溺水的孩子。", use: "见义勇为。" },
    { en: "Without a word, she wrapped her arms around her trembling little brother.", cn: "她一言不发地搂住了颤抖的小弟弟。", use: "无声的安慰。" }
  ],
  drills: [
    { q: "他毫不犹豫地把自己的外套脱下来披在我身上。", a: "Without hesitation, he took off his coat and put it over my shoulders.", tip: "without hesitation 放句首最自然。" }
  ],
  topics: ["读后续写", "果断", "助人"],
  examTip: "用来表现人物性格（果断、善良）的高效短句，几乎不占字数却能立人设。"
},
{
  id: "s45", cn: "with + 宾语 + 宾语补足语（with 复合结构）", cat: "读后续写·动作", level: 3, stage: "高中重点",
  en: "With + 名词 + 形容词/副词/介词短语/分词, + 主句",
  core: "with 复合结构像一台「场景摄像机」，一口气交代伴随的人、物、状态，是环境+动作融合的王者句型。",
  mnemonic: "「with 带着一票人马入场」——宾语 + 补语，把背景一次拍全。",
  points: [
    "补语可为：形容词(with the door open)、分词(with tears streaming)、介词短语(with a book in hand)。",
    "主动进行用现在分词，被动完成用过去分词(with the work finished)。",
    "与主句主语不同时必须用 with 复合，否则变成分词状语会出错。"
  ],
  ex: [
    { en: "With the wind howling outside, the two children huddled together for warmth.", cn: "外面狂风呼啸，两个孩子挤在一起取暖。", use: "环境+动作融合。" },
    { en: "With tears streaming down her face, she nodded and accepted the gift.", cn: "泪流满面，她点头收下了礼物。", use: "情绪+动作。" }
  ],
  trap: {
    bad: "With the sun rose, they set off.",
    good: "With the sun rising, they set off.",
    why: "太阳自己升起是主动，要用现在分词 rising；rose 是谓语形式，不能作补语。"
  },
  drills: [
    { q: "手里的灯亮着，他小心翼翼地走上楼梯。", a: "With the lamp in his hand, he climbed the stairs carefully.", tip: "with + 名词 + 介词短语(in his hand) 作伴随。" }
  ],
  topics: ["读后续写", "环境", "画面"],
  examTip: "续写几乎每段都能塞一个 with 复合，是稳定提分的「万能支架」。"
},
{
  id: "s46", cn: "dash / rush / make one's way toward", cat: "读后续写·动作", level: 1, stage: "高中重点",
  en: "He dashed / rushed / made his way toward + 目的地",
  core: "用动态的「冲、奔、艰难前行」替代普通的 go，让动作有速度和方向感。",
  mnemonic: "「走(walk)太平淡，冲(dash)才有戏」——方向感动词更抓人。",
  points: [
    "dash 表猛冲，rush 表匆忙赶，make one's way 表艰难移动。",
    "可加副词：dashed forward / rushed out / made his way slowly。",
    "配目的状语：made his way to the door."
  ],
  ex: [
    { en: "He dashed toward the burning house to rescue the trapped girl.", cn: "他冲向着火的房子去救被困的女孩。", use: "救援紧张感。" },
    { en: "She made her way through the crowd and finally found her mother.", cn: "她穿过人群，终于找到了妈妈。", use: "寻人场景。" }
  ],
  drills: [
    { q: "他一把抓起书包，冲出了教室。", a: "He grabbed his bag and rushed out of the classroom.", tip: "grab + rush 连写两个动作，节奏快。" }
  ],
  topics: ["读后续写", "动作", "紧急"],
  examTip: "避免通篇 walk/go，每隔一段换一个方向动词，画面立刻活起来。"
},
{
  id: "s47", cn: "trembling with + 情绪/寒冷", cat: "读后续写·动作", level: 2, stage: "高中重点",
  en: "Trembling with + fear / cold / excitement, + 主句",
  core: "用 trembling with 把「发抖」具体成某种原因，是恐惧/寒冷/激动描写的精准表达。",
  mnemonic: "「抖(tremble)也要抖出原因」——with 后面接怕、冷、激动。",
  points: [
    "tremble 现在分词作状语，表伴随状态。",
    "原因多为 fear / cold / excitement / nervousness。",
    "可加地点：trembling with cold, he hugged himself."
  ],
  ex: [
    { en: "Trembling with fear, the little boy hid behind his mother's legs.", cn: "小男孩吓得发抖，躲到妈妈腿后。", use: "恐惧描写。" },
    { en: "Trembling with excitement, she opened the envelope with shaking hands.", cn: "她激动得发抖，用颤抖的手拆开信封。", use: "期待揭晓。" }
  ],
  drills: [
    { q: "冻得发抖，他把自己缩成了一团。", a: "Trembling with cold, he curled himself into a ball.", tip: "curl into a ball 表蜷缩，画面感强。" }
  ],
  topics: ["读后续写", "恐惧", "寒冷"],
  examTip: "把抽象情绪落成身体反应，是续写「细节得分」的关键技巧。"
},
{
  id: "s48", cn: "hardly... when / no sooner... than", cat: "读后续写·动作", level: 3, stage: "高中重点",
  en: "Hardly had + 主语 + done... when + 过去式 / No sooner had + 主语 + done... than + 过去式",
  core: "「一……就……」的高级倒装版，前半句过去完成且倒装，后半句一般过去，强调两个动作衔接极快。",
  mnemonic: "「hardly-when，sooner-than，两对死搭档」——前倒后不倒。",
  points: [
    "前句必须 had done 且倒装，后句一般过去时。",
    "hardly 配 when，no sooner 配 than，绝不串。",
    "否定词在句首，主句部分倒装 had 提前。"
  ],
  ex: [
    { en: "Hardly had he sat down when the phone rang.", cn: "他刚坐下，电话就响了。", use: "巧合/转折。" },
    { en: "No sooner had she closed her eyes than she fell into a deep sleep.", cn: "她刚闭上眼就沉沉地睡去。", use: "疲惫入睡。" }
  ],
  trap: {
    bad: "No sooner he had arrived than it began to rain.",
    good: "No sooner had he arrived than it began to rain.",
    why: "no sooner 在句首必须倒装，had 提到主语前。"
  },
  drills: [
    { q: "他刚出门，天就下起了大雨。", a: "Hardly had he left home when it began to rain heavily.", tip: "had left 倒装，when 接 began。" }
  ],
  topics: ["读后续写", "衔接", "倒装"],
  examTip: "全文用一次，位置放在两个动作紧接处，倒装本身就是一个语法亮点。"
},
/* ============ 读后续写 · 环境与过渡 ============ */
{
  id: "s49", cn: "a sense of + 抽象名词 + filled the air", cat: "读后续写·环境", level: 2, stage: "高中重点",
  en: "A sense of + 名词(loneliness / peace / tension ...) + filled the air",
  core: "不写具体景物，直接写「空气里弥漫着某种感觉」，用氛围替你说话，是高级的环境渲染。",
  mnemonic: "「空气会呼吸情绪」——a sense of 把氛围具象化。",
  points: [
    "名词常用：loneliness, peace, tension, joy, mystery, awkwardness。",
    "filled the air 表「弥漫、充满」。",
    "可换 filled his heart / crept over him。"
  ],
  ex: [
    { en: "A sense of peace filled the air as the sunset painted the sky orange.", cn: "夕阳把天空染成橘色，空气中弥漫着宁静。", use: "温馨收尾。" },
    { en: "A sense of tension filled the room before the announcement.", cn: "宣布之前，房间里弥漫着紧张。", use: "悬念铺垫。" }
  ],
  drills: [
    { q: "一种莫名的孤独感弥漫在空荡荡的房间里。", a: "A sense of loneliness filled the empty room.", tip: "loneliness 配 empty room，氛围拉满。" }
  ],
  topics: ["读后续写", "氛围", "环境"],
  examTip: "开篇或转场时用，几秒钟把读者拽进场景，比堆形容词高效。"
},
{
  id: "s50", cn: "the moment / the instant + 从句", cat: "读后续写·环境", level: 2, stage: "高中重点",
  en: "The moment / The instant + 主语 + 谓语, + 主句（一……就……）",
  core: "用名词短语当连词，引导时间状语从句，比 as soon as 更书面、更紧凑。",
  mnemonic: "「那一刻(the moment)一到，主句就发生」——名词当连词用。",
  points: [
    "the moment / the instant / the minute 均可引导时间状语从句。",
    "后接完整句子（主谓），不是短语。",
    "等于 as soon as，但更文学化。"
  ],
  ex: [
    { en: "The moment she saw the gift, a smile lit up her face.", cn: "她一看到礼物，脸上就绽开笑容。", use: "惊喜瞬间。" },
    { en: "The instant the bell rang, the students rushed out of the classroom.", cn: "铃声一响，学生们就冲出教室。", use: "放学场景。" }
  ],
  drills: [
    { q: "他一接到电话，脸色就变了。", a: "The moment he answered the call, his face changed.", tip: "the moment 后接 he answered 完整从句。" }
  ],
  topics: ["读后续写", "时间", "衔接"],
  examTip: "用来卡节奏，把两个紧挨的动作写得干净利落，避免用 and then。"
},
{
  id: "s51", cn: "地点状语前置的部分倒装", cat: "读后续写·环境", level: 3, stage: "高中重点",
  en: "介词短语(地点) + 谓语 + 主语（全部倒装）",
  core: "把地点状语甩到句首，整个句子主谓倒装，像镜头从远拉近，画面感极强，是续写环境描写的炫技句。",
  mnemonic: "「地点站到最前，主谓翻个跟头」——状语前置，全倒装。",
  points: [
    "谓语多为 be 动词或不及物动词(came, lay, stood, sat)。",
    "主语必须是名词（不能是人称代词），才全倒装。",
    "例：In the corner stood a small wooden box."
  ],
  ex: [
    { en: "In front of the house stood an old tree, its branches reaching to the sky.", cn: "房子前立着一棵老树，枝干伸向天空。", use: "场景定格。" },
    { en: "On the desk lay a letter that would change everything.", cn: "桌上躺着一封信，它将改变一切。", use: "悬念铺垫。" }
  ],
  trap: {
    bad: "In the room sat he, reading a book.",
    good: "In the room sat a boy, reading a book.",
    why: "全倒装的主语必须是名词，人称代词 he 不能倒装（应说 In the room he sat）。"
  },
  drills: [
    { q: "小路边开着一大片野花。", a: "By the side of the path grew a sea of wild flowers.", tip: "地点 by the path 前置，grew 谓语提前，主语 a sea of flowers。" }
  ],
  topics: ["读后续写", "环境", "倒装"],
  examTip: "整篇用 1 次就足够惊艳，放在写景段落开头，阅卷老师一眼看到倒装亮点。"
},
{
  id: "s52", cn: "dawn / dusk broke, casting...", cat: "读后续写·环境", level: 2, stage: "高中重点",
  en: "Dawn / Dusk broke, casting + 名词（晨曦/暮色降临，洒下……）",
  core: "用 break 写天色破晓或入暮，后接 casting 分词描写光线，是时间推移+环境融合的优雅写法。",
  mnemonic: "「天色会『破』(break)」——casting 把光洒下来。",
  points: [
    "dawn broke 拂晓，dusk fell/broke 黄昏。",
    "cast 现在分词表自然伴随的结果（洒下光辉）。",
    "升级：Dawn broke, casting a warm glow over the hills."
  ],
  ex: [
    { en: "Dawn broke, casting a golden glow over the peaceful village.", cn: "黎明破晓，金色的光辉洒在宁静的村庄上。", use: "新开始/希望。" },
    { en: "Dusk fell, casting long shadows across the quiet street.", cn: "暮色降临，长长的影子投在安静的街道上。", use: "收尾/沉思。" }
  ],
  drills: [
    { q: "天亮了，晨光洒在窗台上。", a: "Dawn broke, casting soft light on the windowsill.", tip: "cast light on 把光投在……上。" }
  ],
  topics: ["读后续写", "时间", "环境"],
  examTip: "用于段落间的自然过渡，暗示时间流逝，比写 then morning came 高级。"
},
{
  id: "s53", cn: "an awkward silence fell (upon)", cat: "读后续写·环境", level: 2, stage: "高中重点",
  en: "An awkward / heavy silence fell (upon + 地点)",
  core: "用 silence fell 把「冷场」写成一个有重量的事件，比说 they stopped talking 更有戏剧张力。",
  mnemonic: "「沉默会『落下』(fall)」——awkward 让尴尬有了体积。",
  points: [
    "fall 过去式 fell，silence 作主语是拟物写法。",
    "可加 upon the room / between them。",
    "打破沉默：The silence was broken by..."
  ],
  ex: [
    { en: "An awkward silence fell between the two old friends who had not met for years.", cn: "两位多年未见的老友之间陷入了尴尬的沉默。", use: "重逢的复杂情绪。" },
    { en: "A heavy silence fell upon the classroom after the teacher's words.", cn: "老师的话音落下后，教室里一片死寂。", use: "震撼/责备之后。" }
  ],
  drills: [
    { q: "听到这个消息，一阵令人窒息的沉默笼罩了房间。", a: "Hearing the news, a suffocating silence fell upon the room.", tip: "suffocating 窒息的，加重氛围。" }
  ],
  topics: ["读后续写", "氛围", "情绪"],
  examTip: "写人物冲突或尴尬时极好用，一个静态画面胜过一堆解释。"
},
{
  id: "s54", cn: "what surprised / touched me most was...", cat: "读后续写·过渡", level: 2, stage: "高中重点",
  en: "What + 动词(surprised / touched / impressed) + me most was (that) + 句子",
  core: "用 what 主语从句收束一段，点出最打动你的那个细节，是续写抒情和议论的天然过渡句。",
  mnemonic: "「把『最__的是』用 what 兜住」——was 后面接核心。",
  points: [
    "what 引导主语从句，was 后接名词或 that 从句。",
    "动词可换：touched, impressed, struck, moved。",
    "后接 that 从句时 that 可省。"
  ],
  ex: [
    { en: "What touched me most was that he never gave up on his dream despite all the setbacks.", cn: "最让我感动的是，尽管屡遭挫折，他从未放弃梦想。", use: "升华人物品质。" },
    { en: "What surprised me most was her calm smile in the face of danger.", cn: "最让我惊讶的是她在危险面前冷静的微笑。", use: "突出人物特质。" }
  ],
  drills: [
    { q: "最让我印象深刻的，是她眼里的那束光。", a: "What impressed me most was the light in her eyes.", tip: "was 后接名词短语 the light in her eyes。" }
  ],
  topics: ["读后续写", "抒情", "过渡"],
  examTip: "放在段末做小结，自然引出下一段的议论或主题，结构清晰。"
},
/* ============ 读后续写 · 主题升华 ============ */
{
  id: "s55", cn: "the experience taught me that...", cat: "读后续写·升华", level: 2, stage: "高中重点",
  en: "The experience / That day taught me (that) + 道理",
  core: "用 taught me 把故事收束成一个「我学到的道理」，是续写主题升华的标准出口，避免空洞喊口号。",
  mnemonic: "「经历当老师，道理当作业」——taught me 引出感悟。",
  points: [
    "主语可为 The experience / That day / The incident。",
    "后接 that 从句讲具体道理，越具体越打动人。",
    "避免说教，用亲身感悟的语气。"
  ],
  ex: [
    { en: "The experience taught me that a small act of kindness can make a big difference.", cn: "那次经历让我明白，一个小小的善举也能带来巨大的改变。", use: "善良主题。" },
    { en: "That day taught me that true courage is not the absence of fear, but facing it.", cn: "那天让我懂得，真正的勇气不是没有恐惧，而是直面它。", use: "成长主题。" }
  ],
  drills: [
    { q: "这次经历教会我，坚持终会开花结果。", a: "The experience taught me that persistence will eventually pay off.", tip: "pay off 表「得到回报/开花结果」。" }
  ],
  topics: ["读后续写", "成长", "感悟"],
  examTip: "结尾段首句用，紧接着展开 1-2 句，升华自然不突兀。"
},
{
  id: "s56", cn: "it turned out that...", cat: "读后续写·升华", level: 2, stage: "高中重点",
  en: "It turned out that + 句子（结果是…… / 原来……）",
  core: "用 turned out 写出「真相揭晓」的戏剧性转折，是续写结尾揭示谜底的高频句。",
  mnemonic: "「剧情反转用 turn out」——it turned out that 亮底牌。",
  points: [
    "turn out 无被动，用 it turned out that 或 sb turned out to be。",
    "表「结果是、原来是」，常带意外感。",
    "升级：He turned out to be the missing boy's father."
  ],
  ex: [
    { en: "It turned out that the stranger who helped me was my new neighbor.", cn: "原来那个帮我的陌生人竟是我的新邻居。", use: "巧合揭晓。" },
    { en: "It turned out that her silence was not pride but shyness.", cn: "结果她的沉默不是骄傲，而是害羞。", use: "误会解除。" }
  ],
  drills: [
    { q: "原来那封信是寄给她的。", a: "It turned out that the letter was addressed to her.", tip: "addressed to 寄给……。" }
  ],
  topics: ["读后续写", "反转", "真相"],
  examTip: "在临近结尾处用，轻轻一转解开前文悬念，余味十足。"
},
{
  id: "s57", cn: "not until... did... 强调未及早", cat: "读后续写·升华", level: 3, stage: "高中重点",
  en: "Not until + 时间/事件 + did + 主语 + 谓语",
  core: "「直到……才……」的强调倒装版，用来突出某个迟来的领悟或行动，语气比 until 更强。",
  mnemonic: "「not until 站句首，did 翻跟头」——前否后倒。",
  points: [
    "not until 在句首，主句部分倒装(did / would)。",
    "until 后接时间点或从句。",
    "正常语序：He didn't realize until later."
  ],
  ex: [
    { en: "Not until the train pulled away did she realize how much she would miss him.", cn: "直到火车开走，她才意识到自己会多想他。", use: "离别感悟。" },
    { en: "Not until that moment did I understand my father's love.", cn: "直到那一刻我才懂父亲的爱。", use: "亲情顿悟。" }
  ],
  trap: {
    bad: "Not until he came, I noticed the change.",
    good: "Not until he came did I notice the change.",
    why: "not until 在句首，主句必须部分倒装，加 did 并把 notice 变原形。"
  },
  drills: [
    { q: "直到考试结束，他才发现自己漏了一道题。", a: "Not until the exam was over did he find that he had missed a question.", tip: "主句 did find，exam 用 was over 被动。" }
  ],
  topics: ["读后续写", "顿悟", "倒装"],
  examTip: "全文 1 次足矣，放在「迟来领悟」处，倒装本身即亮点。"
},
{
  id: "s58", cn: "from that day on / from then on", cat: "读后续写·升华", level: 1, stage: "高中重点",
  en: "From that day on / From then on, + 主句（从那天起……）",
  core: "用一个时间短语收束，表示「从此改变」，干净利落地交代后续影响，是结尾过渡的省力句。",
  mnemonic: "「from that day on，人生分水岭」——从此不一样。",
  points: [
    "from that day on 更具体，from then on 更泛。",
    "后接一般过去或现在完成，讲改变后的状态。",
    "可加 ever since 同义替换。"
  ],
  ex: [
    { en: "From that day on, he made it a rule to help others whenever he could.", cn: "从那天起，他定下规矩，力所能及地帮助他人。", use: "善行延续。" },
    { en: "From then on, I learned to cherish every moment with my family.", cn: "从那以后，我学会珍惜与家人在一起的每一刻。", use: "成长改变。" }
  ],
  drills: [
    { q: "从那以后，她再也没忘记带上那把伞。", a: "From then on, she never forgot to take that umbrella with her.", tip: "never forgot 强调习惯改变。" }
  ],
  topics: ["读后续写", "改变", "结尾"],
  examTip: "放在结尾段开头，1 句话把「故事影响」说清，不必再啰嗦。"
},
{
  id: "s59", cn: "it was not... but... that...", cat: "读后续写·升华", level: 3, stage: "高中重点",
  en: "It was not + A + but + B + that + 句子其余",
  core: "强调句 + 转折，把「不是 A 而是 B」一并强调，用来点明真正重要的东西，极具力量。",
  mnemonic: "「聚光灯打在『不是A而是B』上」——强调+对比一次搞定。",
  points: [
    "强调句结构 It was... that 包住 not A but B。",
    "A、B 结构要对称（都是名词/短语）。",
    "去掉 It was...that 仍完整：Not money but love mattered."
  ],
  ex: [
    { en: "It was not the prize but the journey that truly mattered.", cn: "真正重要的不是奖项，而是过程。", use: "价值观升华。" },
    { en: "It was not what he said but what he did that moved everyone.", cn: "打动所有人的不是他说的话，而是他做的事。", use: "行动胜言语。" }
  ],
  drills: [
    { q: "真正关键的不是输赢，而是我们是否拼尽全力。", a: "It was not winning or losing but whether we had tried our best that really mattered.", tip: "not A but B 中 A、B 都用动名词短语对称。" }
  ],
  topics: ["读后续写", "价值观", "升华"],
  examTip: "结尾点题神句，把主题用强调+对比钉死，阅卷老师印象深刻。"
},
{
  id: "s60", cn: "little did sb know / realize", cat: "读后续写·升华", level: 3, stage: "高中重点",
  en: "Little did + 主语 + know / realize + that + 句子（他丝毫不知道……）",
  core: "否定词 little 置首的部分倒装，表达「当时完全没想到」，自带悬念和宿命感，续写伏笔利器。",
  mnemonic: "「little 打头阵，did 翻跟头」——毫不知情的反差。",
  points: [
    "little 在句首，主句部分倒装 did know / did realize。",
    "后接 that 从句讲「不知道的事」。",
    "常与后文反转呼应，制造悬念。"
  ],
  ex: [
    { en: "Little did she know that this chance meeting would change her whole life.", cn: "她丝毫不知道，这次偶遇将改变她的一生。", use: "命运伏笔。" },
    { en: "Little did they realize the danger that lay ahead.", cn: "他们完全没意识到前方的危险。", use: "紧张铺垫。" }
  ],
  trap: {
    bad: "Little she knew that he was watching.",
    good: "Little did she know that he was watching.",
    why: "little 在句首必须部分倒装，加 did 并把 know 变原形。"
  },
  drills: [
    { q: "他哪里知道，那封信里藏着一个秘密。", a: "Little did he know that a secret was hidden in that letter.", tip: "little did he know 后接 that 从句。" }
  ],
  topics: ["读后续写", "悬念", "倒装"],
  examTip: "放在故事中段或开头，先埋「不知情」，结尾揭晓时反差最强。"
},
/* ============ 高考写作 · 开头与现象 ============ */
{
  id: "s61", cn: "recently the phenomenon... has aroused wide concern", cat: "高考写作·现象", level: 2, stage: "高中重点",
  en: "Recently the phenomenon of + 名词 + has aroused wide concern",
  core: "作文开头交代「某现象引发广泛关注」，是现象类、议论文开头的稳妥起手，比直接说 many people 正式。",
  mnemonic: "「现象(phenomenon)一出场，concern 跟上」——aroused wide concern 表引发关注。",
  points: [
    "phenomenon 复数 phenomena，但作主语常用单数现象。",
    "arouse concern / attention / interest 都可替换。",
    "recently 决定用现在完成时 has aroused。"
  ],
  ex: [
    { en: "Recently the phenomenon of students relying heavily on smartphones has aroused wide concern.", cn: "近来学生过度依赖手机的现象引发了广泛关注。", use: "科技利弊类开头。" },
    { en: "Recently the phenomenon of 'lying flat' has aroused heated discussion.", cn: "近来「躺平」现象引发了热烈讨论。", use: "社会现象类。" }
  ],
  drills: [
    { q: "近来青少年近视率上升的现象引发了广泛关注。", a: "Recently the phenomenon of rising nearsightedness among teenagers has aroused wide concern.", tip: "rising nearsightedness 上升的近视率。" }
  ],
  topics: ["高考写作", "现象", "开头"],
  examTip: "现象类作文首段第一句，正式且切题，比 I think 开头得分高。"
},
{
  id: "s62", cn: "with the rapid development of...", cat: "高考写作·现象", level: 1, stage: "高中重点",
  en: "With the rapid development of + 名词, + 主句",
  core: "用 with 复合交代时代背景，是科技、社会类作文最百搭的开头，几乎不会出错。",
  mnemonic: "「with 时代列车，development 当引擎」——背景一句带过。",
  points: [
    "名词常为 technology / economy / society / education / internet。",
    "可换 with the advance of / with the popularity of。",
    "后接主句讲影响。"
  ],
  ex: [
    { en: "With the rapid development of artificial intelligence, our lives have been greatly changed.", cn: "随着人工智能的快速发展，我们的生活发生了巨大改变。", use: "科技类开头。" },
    { en: "With the popularity of short videos, reading habits are shifting.", cn: "随着短视频的流行，阅读习惯正在改变。", use: "媒体类。" }
  ],
  drills: [
    { q: "随着电子商务的快速发展，购物方式变了。", a: "With the rapid development of e-commerce, the way we shop has changed.", tip: "e-commerce 电子商务。" }
  ],
  topics: ["高考写作", "背景", "开头"],
  examTip: "几乎所有议论文都能用，放在首句交代背景，安全又得体。"
},
{
  id: "s63", cn: "when it comes to...", cat: "高考写作·现象", level: 1, stage: "高中重点",
  en: "When it comes to + 名词/动名词, + 主句（说到……，就……）",
  core: "用 when it comes to 自然引出话题，比 speaking of 更书面，是分段过渡和组织论点的好帮手。",
  mnemonic: "「话题一上手，when it comes to 先说」——引出讨论对象。",
  points: [
    "to 是介词，后接名词或动名词，不能接动词原形。",
    "常放段首引出该段论点。",
    "可换 As for / As regards。"
  ],
  ex: [
    { en: "When it comes to protecting the environment, every small action counts.", cn: "说到环保，每一个小小的行动都很重要。", use: "环保类论点引出。" },
    { en: "When it comes to learning English, persistence matters more than talent.", cn: "说到学英语，坚持比天赋更重要。", use: "学习方法类。" }
  ],
  drills: [
    { q: "说到健康饮食，均衡比节食更重要。", a: "When it comes to healthy eating, balance matters more than dieting.", tip: "to 后接动名词 eating/dieting。" }
  ],
  topics: ["高考写作", "过渡", "论点"],
  examTip: "每个主体段开头用一次，结构立刻清晰，老师一眼看到你的逻辑。"
},
{
  id: "s64", cn: "it is widely believed that...", cat: "高考写作·现象", level: 1, stage: "高中重点",
  en: "It is widely believed / acknowledged that + 句子",
  core: "用被动句式引出「人们普遍认为」，给观点垫一层客观性，比 I think 更有分量。",
  mnemonic: "「widely believed 是民意背书」——it is...that 把观点客观化。",
  points: [
    "可换 acknowledged / accepted / held。",
    "that 后接公认观点，通常不是你自己的独创。",
    "后常接 However, I hold a different view 形成转折。"
  ],
  ex: [
    { en: "It is widely believed that reading broadens the mind.", cn: "人们普遍认为阅读能开阔思维。", use: "引出共识。" },
    { en: "It is widely acknowledged that education is the key to a better future.", cn: "人们普遍承认教育通向更好未来的关键。", use: "教育类。" }
  ],
  drills: [
    { q: "人们普遍认为，运动对身心健康至关重要。", a: "It is widely believed that exercise is vital to both physical and mental health.", tip: "vital to 对……至关重要。" }
  ],
  topics: ["高考写作", "共识", "引出"],
  examTip: "开头或段首用，先立一个共识再展开你的看法，论证更稳。"
},
/* ============ 高考写作 · 观点表达 ============ */
{
  id: "s65", cn: "from my perspective / as far as I am concerned", cat: "高考写作·观点", level: 1, stage: "高中重点",
  en: "From my perspective / As far as I am concerned, + 句子（在我看来……）",
  core: "两种地道的「我认为」升级说法，避免通篇 I think，书面感立刻上来。",
  mnemonic: "「perspective 是视角，concerned 是就我而言」——替换 I think。",
  points: [
    "from my perspective 偏理性视角，as far as I'm concerned 偏个人立场。",
    "都放句首，后接逗号再写观点。",
    "可换 In my view / Personally。"
  ],
  ex: [
    { en: "From my perspective, we should strike a balance between study and rest.", cn: "在我看来，我们应在学习与休息间取得平衡。", use: "建议类。" },
    { en: "As far as I am concerned, technology is a double-edged sword.", cn: "就我而言，科技是一把双刃剑。", use: "利弊类。" }
  ],
  drills: [
    { q: "在我看来，志愿服务能培养责任感。", a: "From my perspective, volunteer work can foster a sense of responsibility.", tip: "foster 培养，比 develop 更书面。" }
  ],
  topics: ["高考写作", "观点", "个人立场"],
  examTip: "每段亮明立场时用，替换 I think 三连，书面分蹭蹭涨。"
},
{
  id: "s66", cn: "while some argue that..., i hold the opposite view", cat: "高考写作·观点", level: 2, stage: "高中重点",
  en: "While some argue that + 观点A, I hold the opposite view that + 观点B",
  core: "用 while 让步先立对方观点，再转自己的立场，是「驳论」的标准骨架，逻辑显得周全。",
  mnemonic: "「while 先让一步，opposite 再翻回来」——先礼后兵的论证。",
  points: [
    "while 此处表「尽管/虽然」，引导让步，不表时间。",
    "some argue that 引出对立面，显客观。",
    "I hold the opposite view / I beg to differ 表转折立场。"
  ],
  ex: [
    { en: "While some argue that the internet isolates us, I hold the opposite view that it connects the world.", cn: "尽管有人认为网络让我们孤立，我却认为它连接了世界。", use: "利弊驳论。" },
    { en: "While some argue that competition is harmful, I believe it drives us to improve.", cn: "尽管有人认为竞争有害，我却相信它推动我们进步。", use: "竞争类。" }
  ],
  drills: [
    { q: "尽管有人认为金钱带来幸福，我却认为真情才是。", a: "While some argue that money brings happiness, I hold the opposite view that true affection does.", tip: "does 替代 brings happiness，避免重复。" }
  ],
  topics: ["高考写作", "驳论", "对比"],
  examTip: "第二段用此句立驳论，展现思辨，是高分作文的标配结构。"
},
{
  id: "s67", cn: "there is no denying that...", cat: "高考写作·观点", level: 2, stage: "高中重点",
  en: "There is no denying that + 句子（不可否认……）",
  core: "用双重否定强调一个事实，语气坚定又不失礼貌，是承认某点的高级写法。",
  mnemonic: "「denying 是否认，no denying 就是铁事实」——双重否定表肯定。",
  points: [
    "there is no denying = it cannot be denied。",
    "that 后接你承认的事实（常为对方也有理的点）。",
    "后可接 however 转自己的重点。"
  ],
  ex: [
    { en: "There is no denying that technology has made our lives more convenient.", cn: "不可否认，科技让生活更便利。", use: "先承认便利。" },
    { en: "There is no denying that reading enriches our inner world.", cn: "不可否认，阅读丰富了我们的内心世界。", use: "读书类。" }
  ],
  drills: [
    { q: "不可否认，社交媒体改变了我们交流的方式。", a: "There is no denying that social media has changed the way we communicate.", tip: "the way we communicate 我们交流的方式。" }
  ],
  topics: ["高考写作", "承认", "强调"],
  examTip: "常放在让步段，先 no denying 再 however，体现辩证思维。"
},
{
  id: "s68", cn: "as the proverb goes, ...", cat: "高考写作·观点", level: 1, stage: "高中重点",
  en: "As the proverb / saying goes, + 引语（俗话说……）",
  core: "用谚语/名言做论据的「开场白」，让引用有据可依，比直接甩一句名言更规范。",
  mnemonic: "「proverb 是谚语，goes 是说」——as...goes 引出处。",
  points: [
    "proverb 谚语，saying 俗语，可互换。",
    "后接直接引语，常加引号。",
    "经典：As the proverb goes, 'Practice makes perfect.'"
  ],
  ex: [
    { en: "As the proverb goes, 'Where there is a will, there is a way.'", cn: "俗话说：「有志者事竟成。」", use: "励志类论据。" },
    { en: "As an old saying goes, 'A friend in need is a friend indeed.'", cn: "古语云：「患难见真情。」", use: "友谊类。" }
  ],
  drills: [
    { q: "俗话说：「熟能生巧。」", a: "As the proverb goes, 'Practice makes perfect.'", tip: "practice 练习，perfect 完美。" }
  ],
  topics: ["高考写作", "引用", "论据"],
  examTip: "放在段首引出名言，立刻显得有文化底蕴，但别堆太多，1 次足够。"
},
{
  id: "s69", cn: "it is high time that... (did)", cat: "高考写作·观点", level: 3, stage: "高中重点",
  en: "It is high time that + 主语 + 动词过去式（是时候……了）",
  core: "用 high time 虚拟语气呼吁行动，语气比 we should 紧迫有力，适合建议段收尾。",
  mnemonic: "「high time 敲警钟，动词要用过去式」——虚拟表「早该」。",
  points: [
    "that 从句谓语必须用过去式（虚拟），不是 should do。",
    "表「早该做某事」，带紧迫感。",
    "可换 It is time we took action."
  ],
  ex: [
    { en: "It is high time that we took effective measures to protect the environment.", cn: "是我们采取有效环保措施的时候了。", use: "环保呼吁。" },
    { en: "It is high time that we attached greater importance to mental health.", cn: "是我们更重视心理健康的时候了。", use: "健康类。" }
  ],
  trap: {
    bad: "It is high time that we take action.",
    good: "It is high time that we took action.",
    why: "high time 后的 that 从句必须用过去式虚拟（took），不能用原形 take。"
  },
  drills: [
    { q: "是我们学会合理使用手机的时候了。", a: "It is high time that we learned to use smartphones wisely.", tip: "learned 用过去式虚拟，非 learn。" }
  ],
  topics: ["高考写作", "呼吁", "虚拟"],
  examTip: "建议段结尾用，紧迫感+虚拟语气双重加分，但全篇别超过 1 次。"
},
/* ============ 高考写作 · 论证与举例 ============ */
{
  id: "s70", cn: "a case in point is...", cat: "高考写作·论证", level: 2, stage: "高中重点",
  en: "A case in point is + 名词/例子（一个恰当的例子是……）",
  core: "用 a case in point 引出例证，比 for example 更正式书面，是论证段的「点例」连接词。",
  mnemonic: "「case in point 就是『点题之例』」——引出支撑论点的例子。",
  points: [
    "a case in point is 后接单数名词或名词性例子。",
    "比 for example 更学术化。",
    "可换 A good illustration is..."
  ],
  ex: [
    { en: "A case in point is the story of Helen Keller, who achieved greatness despite blindness.", cn: "一个恰当的例子是海伦·凯勒，她虽失明却成就非凡。", use: "励志例证。" },
    { en: "A case in point is Finland, whose education system is admired worldwide.", cn: "一个恰当的例子是芬兰，其教育体系举世称赞。", use: "教育例证。" }
  ],
  drills: [
    { q: "一个恰当的例子是钟南山，他在疫情中挺身而出。", a: "A case in point is Zhong Nanshan, who stepped forward during the epidemic.", tip: "who 引导定语从句补充人物事迹。" }
  ],
  topics: ["高考写作", "举例", "论证"],
  examTip: "论证段用，先讲道理再甩 this case，理例结合最稳。"
},
{
  id: "s71", cn: "the reason why... is that...", cat: "高考写作·论证", level: 2, stage: "高中重点",
  en: "The reason why + 结果 + is that + 原因（……的原因是……）",
  core: "用主语从句讲清因果，比 because 引导的解释更正式，是分析类作文的骨架句。",
  mnemonic: "「reason why 抛结果，is that 给原因」——主系表讲因果。",
  points: [
    "why 引导定语从句修饰 reason，is that 后接原因。",
    "避免 The reason is because（中式英语），要用 is that。",
    "that 可省略。"
  ],
  ex: [
    { en: "The reason why we should read widely is that it broadens our horizons.", cn: "我们该广泛阅读的原因，是它能开阔视野。", use: "读书类论证。" },
    { en: "The reason why he succeeded is that he never gave up.", cn: "他成功的原因，是他从不放弃。", use: "成功类。" }
  ],
  trap: {
    bad: "The reason why he failed is because he was lazy.",
    good: "The reason why he failed is that he was lazy.",
    why: "reason 后接表语用 is that，不能用 because（重复表原因）。"
  },
  drills: [
    { q: "我们该锻炼的原因是它能增强体质。", a: "The reason why we should exercise is that it strengthens our body.", tip: "strengthen 增强，is that 不用 because。" }
  ],
  topics: ["高考写作", "因果", "论证"],
  examTip: "分析原因时用，is that 收尾，比 because 句更显逻辑严密。"
},
{
  id: "s72", cn: "compared with...", cat: "高考写作·论证", level: 1, stage: "高中重点",
  en: "Compared with / to + A, + B + 比较（与……相比）",
  core: "用过去分词 compared 引出比较基准，是图表、对比类作文的高频起手，客观又清晰。",
  mnemonic: "「compared 是『被比较』，with 后接标杆」——引出参照物。",
  points: [
    "compared with 和 compared to 基本通用。",
    "compared 是分词作状语，主句主语是被比较对象。",
    "可放句首或句中。"
  ],
  ex: [
    { en: "Compared with last year, our reading time has increased significantly.", cn: "与去年相比，我们的阅读时间显著增加。", use: "数据对比。" },
    { en: "Compared to his brother, he is more outgoing.", cn: "与他哥哥相比，他更外向。", use: "人物对比。" }
  ],
  drills: [
    { q: "与城市相比，乡村生活更宁静。", a: "Compared with cities, life in the countryside is more peaceful.", tip: "countryside 乡村，peaceful 宁静。" }
  ],
  topics: ["高考写作", "对比", "图表"],
  examTip: "对比/图表作文首句必用，先立基准再展开差异，条理分明。"
},
{
  id: "s73", cn: "only by... can we...", cat: "高考写作·论证", level: 3, stage: "高中重点",
  en: "Only by + 动名词/名词 + can we + 动词原形（只有……我们才能……）",
  core: "only by 置首的部分倒装，用来强调「达成目标的唯一途径」，语气坚定，是建议段的高光句。",
  mnemonic: "「only by 站前，can we 翻跟头」——唯一途径+倒装。",
  points: [
    "only by 后接动名词或名词短语。",
    "主句必须部分倒装：can we / will we。",
    "动词用原形（在 can 后）。"
  ],
  ex: [
    { en: "Only by persevering can we overcome the difficulties ahead.", cn: "只有坚持不懈，我们才能克服前方的困难。", use: "励志建议。" },
    { en: "Only by reading extensively can we acquire a broad vision.", cn: "只有广泛阅读，我们才能拥有开阔的视野。", use: "读书建议。" }
  ],
  trap: {
    bad: "Only by working hard we can succeed.",
    good: "Only by working hard can we succeed.",
    why: "only by 在句首，主句必须倒装，can 提到 we 前面。"
  },
  drills: [
    { q: "只有团结一致，我们才能赢得这场比赛。", a: "Only by uniting as one can we win the game.", tip: "unite as one 团结一致，can we 倒装。" }
  ],
  topics: ["高考写作", "建议", "倒装"],
  examTip: "建议段用 1 次，倒装+only 双重语法点，老师想不给分都难。"
},
{
  id: "s74", cn: "not only... but also...（正常语序版）", cat: "高考写作·论证", level: 1, stage: "高中重点",
  en: "Not only + A, but (also) + B（不仅……而且……）",
  core: "并列递进结构，一句顶两句，是论证「双重好处」最直接的方式（置于句中时不倒装）。",
  mnemonic: "「not only A，but also B，A、B 对称站好」——递进并列。",
  points: [
    "A、B 结构要对称（都名/都动/都句）。",
    "句中不倒装；只有 not only 置句首才倒装（见 s02）。",
    "also 可省，but 后直接接 B。"
  ],
  ex: [
    { en: "Reading not only enriches our knowledge but also shapes our character.", cn: "阅读不仅丰富知识，还塑造品格。", use: "读书双重好处。" },
    { en: "Volunteering brings not only joy but also a sense of achievement.", cn: "志愿活动带来的不仅是快乐，还有成就感。", use: "实践类。" }
  ],
  drills: [
    { q: "运动不仅强身，还能减压。", a: "Exercise not only builds our body but also relieves stress.", tip: "builds 与 relieves 两个动词对称。" }
  ],
  topics: ["高考写作", "递进", "并列"],
  examTip: "论证段随手用，一词带出两点，信息密度高且不显堆砌。"
},
{
  id: "s75", cn: "what really matters is...", cat: "高考写作·论证", level: 2, stage: "高中重点",
  en: "What really matters is + 名词/that 从句（真正重要的是……）",
  core: "用 what 主语从句点出核心，是收束论点、升华主题的万能句，比 the most important thing 简洁有力。",
  mnemonic: "「what matters 把『要紧事』兜成主语」——is 后点核心。",
  points: [
    "what 引导主语从句，is 后接核心内容。",
    "可接名词或 that 从句。",
    "常放段末或结尾点题。"
  ],
  ex: [
    { en: "What really matters is not the result but the effort we put in.", cn: "真正重要的不是结果，而是我们付出的努力。", use: "价值观点题。" },
    { en: "What really matters is that we never stop trying.", cn: "真正重要的是我们从未停止尝试。", use: "坚持主题。" }
  ],
  drills: [
    { q: "真正重要的，是我们是否对他人心怀善意。", a: "What really matters is whether we hold kindness in our hearts for others.", tip: "whether 引导表语从句。" }
  ],
  topics: ["高考写作", "点题", "升华"],
  examTip: "结尾段用，一句话钉死主题，干净利落不拖泥带水。"
},
/* ============ 高考写作 · 建议与号召 ============ */
{
  id: "s76", cn: "it is our responsibility to...", cat: "高考写作·建议", level: 2, stage: "高中重点",
  en: "It is our responsibility / duty to + 动词原形（……是我们的责任）",
  core: "用形式主语 it 引出「责任」，比 we should 更有担当感，是建议、倡议类作文的得体表达。",
  mnemonic: "「it 是占位，responsibility 是担当」——真正主语是不定式。",
  points: [
    "真正主语是后面的 to do，it 是形式主语。",
    "可换 duty / obligation。",
    "后接具体该做的事。"
  ],
  ex: [
    { en: "It is our responsibility to protect the environment for future generations.", cn: "为子孙后代保护环境，是我们的责任。", use: "环保倡议。" },
    { en: "It is our duty to respect and care for the elderly.", cn: "尊敬和关爱老人，是我们的义务。", use: "敬老类。" }
  ],
  drills: [
    { q: "帮助有困难的人是我们的责任。", a: "It is our responsibility to help those in need.", tip: "those in need 有困难的人。" }
  ],
  topics: ["高考写作", "责任", "倡议"],
  examTip: "倡议信/演讲稿用，体现公民担当，语气得体有分量。"
},
{
  id: "s77", cn: "it is advisable to...", cat: "高考写作·建议", level: 2, stage: "高中重点",
  en: "It is advisable / recommended to + 动词原形（建议……）",
  core: "用 advisable 提建议，比 you should 委婉正式，是建议信、议论文的安全写法。",
  mnemonic: "「advisable 是可取，recommended 是推荐」——委婉给建议。",
  points: [
    "it 形式主语，真正主语是 to do。",
    "比 should 温和，适合给对方提建议。",
    "可换 It is suggested that..."
  ],
  ex: [
    { en: "It is advisable to balance study with proper exercise.", cn: "建议在学习与适度锻炼间取得平衡。", use: "学习建议。" },
    { en: "It is recommended to limit screen time to protect our eyes.", cn: "建议限制屏幕时间以保护眼睛。", use: "健康建议。" }
  ],
  drills: [
    { q: "建议每天留出时间阅读。", a: "It is advisable to set aside some time for reading every day.", tip: "set aside 留出，每天阅读。" }
  ],
  topics: ["高考写作", "建议", "委婉"],
  examTip: "建议信主体段用，比 should 更显礼貌与成熟度。"
},
{
  id: "s78", cn: "let's take action before it's too late", cat: "高考写作·号召", level: 1, stage: "高中重点",
  en: "Let's take action / make a difference before it is too late（趁早行动起来）",
  core: "用 let's 祈使句号召行动，加 before it's too late 制造紧迫，是结尾呼吁的经典收束。",
  mnemonic: "「let's 一起上，before too late 别等迟」——号召+紧迫。",
  points: [
    "let's 引导祈使，直接呼吁读者。",
    "before it's too late 增强紧迫感。",
    "可换 Let's join hands to..."
  ],
  ex: [
    { en: "Let's take action to protect our planet before it is too late.", cn: "趁还来得及，让我们行动起来保护地球。", use: "环保号召。" },
    { en: "Let's make a difference in others' lives starting today.", cn: "从今天起，让我们为他人带来改变。", use: "公益号召。" }
  ],
  drills: [
    { q: "让我们携起手来，在一切太迟之前守护传统文化。", a: "Let's join hands to preserve traditional culture before it is too late.", tip: "join hands 携起手来，preserve 守护。" }
  ],
  topics: ["高考写作", "号召", "结尾"],
  examTip: "结尾段最后一句用，情绪推到高点，整篇收得有力。"
},
{
  id: "s79", cn: "where there is..., there is...", cat: "高考写作·号召", level: 2, stage: "高中重点",
  en: "Where there is + A, there is + B（哪里有……，哪里就有……）",
  core: "仿拟谚语「有志者事竟成」的结构，用来表达「希望/爱/机会无处不在」，是结尾升华的金句模板。",
  mnemonic: "「where there is A，there is B，对仗出金句」——地点状语从句表「有A就有B」。",
  points: [
    "where 引导地点状语从句，主句 there be 对称。",
    "A、B 多为抽象名词（hope, love, will）。",
    "经典原型：Where there is a will, there is a way."
  ],
  ex: [
    { en: "Where there is love, there is warmth and hope.", cn: "哪里有爱，哪里就有温暖与希望。", use: "亲情/公益升华。" },
    { en: "Where there is a dream, there is a way forward.", cn: "哪里有梦想，哪里就有前行的路。", use: "励志结尾。" }
  ],
  drills: [
    { q: "哪里有信任，哪里就有真正的友谊。", a: "Where there is trust, there is true friendship.", tip: "trust 信任，friendship 友谊，对仗。" }
  ],
  topics: ["高考写作", "升华", "金句"],
  examTip: "结尾用此对仗句，文采与哲理兼得，阅卷老师最吃这套。"
},
{
  id: "s80", cn: "every effort counts / every little helps", cat: "高考写作·号召", level: 1, stage: "高中重点",
  en: "Every effort counts. / Every little bit helps.（每一点努力都算数）",
  core: "用极简短句强调「积少成多、人人有责」，是环保、公益类作文的暖心收尾。",
  mnemonic: "「effort 努力，counts 算数」——短句有力。",
  points: [
    "count 此处作「重要、算数」解。",
    "可放段末独立成句，短促有力。",
    "同义：Every little bit helps."
  ],
  ex: [
    { en: "Do not underestimate your power—every effort counts.", cn: "别低估你的力量——每一点努力都算数。", use: "环保/公益。" },
    { en: "Every little bit helps when it comes to saving energy.", cn: "说到节能，点滴之力亦有裨益。", use: "节能类。" }
  ],
  drills: [
    { q: "在保护环境的路上，每一点努力都重要。", a: "On the road to protecting the environment, every effort counts.", tip: "count 此处指「重要/有意义」。" }
  ],
  topics: ["高考写作", "鼓励", "结尾"],
  examTip: "结尾独立短句，节奏一变，余韵悠长，比长句收尾更抓人。"
},
/* ============ 读后续写 · 感官与细节 ============ */
{
  id: "s81", cn: "the sweet smell of... filled the air", cat: "读后续写·感官", level: 2, stage: "高中重点",
  en: "The sweet smell of + 名词 + filled the air（空气中弥漫着……的甜香）",
  core: "用嗅觉细节打开场景，比直接说 it smelled good 更有画面，是感官描写的入门金句。",
  mnemonic: "「smell 是嗅觉，filled the air 弥漫」——用气味铺场景。",
  points: [
    "smell 可换 scent / aroma（更雅）。",
    "filled the air 表弥漫，可换 reached my nose。",
    "常配 baking / flowers / rain 等具体气味源。"
  ],
  ex: [
    { en: "The sweet smell of freshly baked bread filled the air of the little shop.", cn: "刚烤好的面包的甜香弥漫在小店的空气里。", use: "温馨场景。" },
    { en: "The fresh smell of rain filled the air after the storm.", cn: "暴雨后，空气中弥漫着清新的雨味。", use: "雨后清新。" }
  ],
  drills: [
    { q: "花园里弥漫着玫瑰的芬芳。", a: "The sweet scent of roses filled the air in the garden.", tip: "scent 比 smell 更雅致。" }
  ],
  topics: ["读后续写", "嗅觉", "细节"],
  examTip: "用五感之一（嗅觉）替代笼统形容，是续写「细节得分」的入门招。"
},
{
  id: "s82", cn: "a sudden thought struck sb", cat: "读后续写·感官", level: 2, stage: "高中重点",
  en: "A sudden thought / idea struck + 某人（某人突然想到……）",
  core: "用 struck 把「灵光一现」写成被想法「击中」，比 I suddenly thought 生动，是续写转折的触发句。",
  mnemonic: "「thought 当闪电，struck 当击中」——灵感和闪电一样劈下来。",
  points: [
    "strike 过去式 struck，主语是 thought / idea。",
    "后常接 when / that 从句讲想到了什么。",
    "可换 An idea occurred to me."
  ],
  ex: [
    { en: "A sudden thought struck her: she could call the police for help.", cn: "她突然想到：可以打电话报警求助。", use: "危机脱困。" },
    { en: "A brilliant idea struck him as he watched the sunset.", cn: "看着夕阳，一个绝妙的主意突然闪现。", use: "创意诞生。" }
  ],
  drills: [
    { q: "他突然想到一个救人的办法。", a: "A sudden idea struck him about how to save the person.", tip: "about how to 引出具体想法。" }
  ],
  topics: ["读后续写", "灵感", "转折"],
  examTip: "在情节卡住时用，一个想法让故事峰回路转，推进自然。"
},
{
  id: "s83", cn: "his/her eyes met... filled with...", cat: "读后续写·感官", level: 2, stage: "高中重点",
  en: "One's eyes met + 某人's, filled with + 情绪（目光相遇，满是……）",
  core: "用「目光相遇」+ filled with 写无声的情感交流，是亲情、羁绊类续写最戳心的细节。",
  mnemonic: "「eyes meet 目光撞上，filled with 装满情绪」——无声胜有声。",
  points: [
    "eyes met 表四目相对，的主语常为 his/her eyes。",
    "filled with 后接 emotion（love, tears, relief）。",
    "可加 and they smiled 收尾。"
  ],
  ex: [
    { en: "Her eyes met his across the room, filled with unshed tears.", cn: "隔着房间，她的目光与他的相遇，满是未落的泪。", use: "重逢/和解。" },
    { en: "The mother's eyes met her son's, filled with pride and love.", cn: "母亲的目光与儿子的相遇，满是骄傲与爱。", use: "亲情。" }
  ],
  drills: [
    { q: "两人的目光相遇，眼里满是难以置信。", a: "Their eyes met, filled with disbelief.", tip: "filled with disbelief 满是难以置信。" }
  ],
  topics: ["读后续写", "目光", "情感"],
  examTip: "用眼神代替长篇抒情，一瞬定情，是「留白」式高分写法。"
},
{
  id: "s84", cn: "the air was filled with...", cat: "读后续写·感官", level: 1, stage: "高中重点",
  en: "The air was filled with + 名词（空气中充满了……）",
  core: "用 be filled with 写氛围/声音/气味铺满空间，是环境描写的基础支架，稳妥不出错。",
  mnemonic: "「air 被 fill，空间被占据」——filled with 装进氛围。",
  points: [
    "可接声音(laughter/screams)、气味、情绪。",
    "比 full of 更书面。",
    "可换 The room echoed with..."
  ],
  ex: [
    { en: "The air was filled with the children's laughter.", cn: "空气中充满了孩子们的笑声。", use: "欢乐场景。" },
    { en: "The air was filled with tension as the game reached its climax.", cn: "比赛进入高潮，空气中弥漫着紧张。", use: "紧张时刻。" }
  ],
  drills: [
    { q: "花园里充满了花香。", a: "The air was filled with the fragrance of flowers.", tip: "fragrance 芳香，比 smell 雅。" }
  ],
  topics: ["读后续写", "氛围", "环境"],
  examTip: "写景段随手用，把抽象氛围落到实处，比堆形容词自然。"
},
{
  id: "s85", cn: "time seemed to stand still", cat: "读后续写·感官", level: 2, stage: "高中重点",
  en: "Time seemed to stand still（时间仿佛静止了）",
  core: "用 time stood still 写「那一刻太重要，连时间都停了」，是定格高潮瞬间的诗意表达。",
  mnemonic: "「time stand still 时间刹车」——重要到时间停摆。",
  points: [
    "stand still 静止不动，seemed to 表主观感受。",
    "常放在关键瞬间前，拉长情绪。",
    "可加 as / when 引导那一刻。"
  ],
  ex: [
    { en: "Time seemed to stand still the moment she said yes.", cn: "她说「我愿意」的那一刻，时间仿佛静止了。", use: "感动/浪漫瞬间。" },
    { en: "Time seemed to stand still as they watched the sunset together.", cn: "一起看夕阳时，时间仿佛静止了。", use: "宁静美好。" }
  ],
  drills: [
    { q: "看到孩子迈出第一步时，时间仿佛静止了。", a: "Time seemed to stand still when she saw her child take the first step.", tip: "first step 第一步，定格瞬间。" }
  ],
  topics: ["读后续写", "定格", "抒情"],
  examTip: "放在高潮前一刻，制造「慢镜头」效果，情绪张力拉满。"
},
{
  id: "s86", cn: "with a gentle smile / a nod of...", cat: "读后续写·感官", level: 1, stage: "高中重点",
  en: "With a gentle smile / a nod of approval, + 主句（带着温柔的微笑/赞许地点头）",
  core: "用 with 介词短语速写人物的神态动作，一笔带过表情，让角色有温度，避免干巴巴的 he was happy。",
  mnemonic: "「with 一个表情，人物就活了」——神态速写。",
  points: [
    "with a gentle smile 温柔一笑，with a nod 点头。",
    "可作句首状语，主句接动作。",
    "可换 with tears of joy / with a sigh of relief。"
  ],
  ex: [
    { en: "With a gentle smile, the old man handed the child a warm bun.", cn: "老人带着温柔的微笑，递给孩子一个热乎的包子。", use: "温情画面。" },
    { en: "With a nod of approval, the teacher encouraged him to continue.", cn: "老师赞许地点点头，鼓励他继续。", use: "鼓励场景。" }
  ],
  drills: [
    { q: "她如释重负地叹了口气，坐了下来。", a: "With a sigh of relief, she sat down.", tip: "a sigh of relief 如释重负的一声叹息。" }
  ],
  topics: ["读后续写", "神态", "温度"],
  examTip: "每写一段人物互动，塞一个 with 神态短语，角色立刻有血有肉。"
}
];
