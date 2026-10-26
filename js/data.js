/* ==========================================================
   ★ 朱洋意的资料都改这里（其他文件一般不用动） ★
   双语说明：带 En 后缀的字段是英文版；没有 En 的两种语言共用
   ========================================================== */

const DATA = {

  /* ---------- 首屏打字机轮播 ---------- */
  typingRoles: ["计算机专业本科生", "编程学习者", "AI 辅助项目实践者"],
  typingRolesEn: ["CS Undergraduate", "Programming Learner", "AI-assisted Project Explorer"],

  /* ---------- 技术栈跑马灯（横向滚动条，术语两种语言通用） ---------- */
  marquee: ["C", "C++", "Java", "SQL", "Python", "HTML 基础"],

  /* ---------- 技能版图（深色区） ---------- */
  skills: [{"no": "A.", "title": "编程基础", "titleEn": "Programming Basics", "desc": "能够编写基础代码，正在通过练习巩固。", "descEn": "Able to write basic code; building confidence through practice.", "tags": ["C", "C++", "Java", "Python"]}, {"no": "B.", "title": "数据库与网页基础", "titleEn": "Database & Web Basics", "desc": "能够编写基础 SQL 和 HTML，继续学习实际应用。", "descEn": "Basic SQL and HTML, with practical learning in progress.", "tags": ["SQL 基础", "HTML 基础"]}, {"no": "C.", "title": "AI 辅助项目实践", "titleEn": "AI-assisted Projects", "desc": "以下项目借助 AI 完成，项目采用的技术不等同于本人已经掌握的技能。", "descEn": "Projects built with AI assistance. Their technology stacks do not imply independent proficiency.", "tags": ["AI 辅助开发", "项目学习"]}],

  /* ---------- 项目精选 ----------
     status: "done" 已完成 / "dev" 开发中（黄色角标）
     links 的 label 是 { zh, en } 双语对象 */
  projects: [
{"no": "04", "emoji": "◈", "title": "慢游 · 旅行路线规划", "titleEn": "Manyou · Travel Route Planning", "badge": "AI 辅助实践", "badgeEn": "AI-assisted", "status": "done", "desc": "借助 AI 完成的国内交通路线规划项目。根据预算、赶路时间和中转停留条件比较路线，支持铁路查询与可选的航空接口。项目用于学习实践，航空能力需要另行配置服务账号。", "descEn": "An AI-assisted domestic travel route planning project comparing budget, travel time and stopovers. Supports rail queries and optional flight integration requiring separate provider credentials.", "highlights": ["综合比较票价、中转住宿与赶路时间成本", "支持路线筛选、排序、对比和取消查询", "项目实现借助 AI 完成，相关技术仍在学习中"], "highlightsEn": ["Compares fares, stopover accommodation and travel time costs", "Route filtering, sorting, comparison and query cancellation", "Built with AI assistance; implementation technologies are still being learned"], "tags": ["项目技术：Node.js", "路线规划", "AI 辅助完成"], "links": [{"label": {"zh": "GitHub ↗", "en": "GitHub ↗"}, "href": "https://github.com/wenhulaojiu/manyou"}]},
    {
      no: "01",
      emoji: "◈",
      title: "圈层谣言攻防战",
      titleEn: "Circle Rumor Warfare",
      badge: "已上线",
      badgeEn: "LIVE",
      status: "done",
      desc: "已上线可玩的回合制策略游戏：在兴趣 / 家长 / 职场 / 校园四个交叠社交圈中，选择造谣或辟谣一方，每回合挑选节点、撰写说服话术，与 AI 对手争夺传播面。节点带有怀疑度、从众度等画像，跨圈扩散是胜负手。",
      descEn: "A playable turn-based strategy game about how rumors spread through four overlapping social circles. Pick rumor-maker or debunker, choose three nodes per turn, write your persuasion, and battle an AI opponent across node profiles like skepticism and conformity.",
      highlights: [
        "接入大模型对话术做语义评分，断网自动降级为本地规则引擎",
        "Node 零依赖后端是唯一结算权威，前端只负责提交选择",
        "红绿色盲友好标记 + forced-colors 无障碍支持，附平衡性测试脚本",
      ],
      highlightsEn: [
        "LLM semantic scoring of your wording, with automatic fallback to a local rules engine offline",
        "Zero-dependency Node backend as the single scoring authority — the client only submits choices",
        "Color-blind-safe shape encoding + forced-colors support, with balance test scripts",
      ],
      tags: ["Node.js", "JavaScript", "Canvas 力导向图", "LLM API", "无障碍"],
      links: [
        { label: { zh: "在线试玩 ↗", en: "Play online ↗" }, href: "https://rumor.okethan.com" },
        { label: { zh: "GitHub ↗", en: "GitHub ↗" }, href: "https://github.com/wenhulaojiu/circle-rumor-warfare" },
      ],
    },
    {
      no: "02",
      emoji: "◈",
      title: "刘看山网页助手",
      titleEn: "Liu Kanshan Web Assistant",
      badge: "v1.5.0",
      badgeEn: "v1.5.0",
      status: "done",
      desc: "Chrome / Edge 浏览器扩展（Manifest V3）：一键读取当前网页内容，在侧边栏针对页面多轮追问，还支持划词右键提问和刘看山桌宠动画。用户自配 OpenAI 兼容 API，流式输出回答。",
      descEn: "A Chrome/Edge extension (Manifest V3) that reads the current page and answers your questions in a side panel via any OpenAI-compatible API — with streaming output, selection quick-asks, and a Liu Kanshan desktop pet.",
      highlights: [
        "Side Panel API 侧边栏对话，基于页面内容连续追问",
        "无后端、无遥测，不内置 API 密钥",
        "知乎页面专项内容抽取优化",
      ],
      highlightsEn: [
        "Side Panel API chat with multi-turn follow-ups on page content",
        "No backend, no telemetry and no bundled API keys",
        "Zhihu-specific content extraction",
      ],
      tags: ["Chrome Extension", "Manifest V3", "Side Panel API", "SSE 流式", "JavaScript"],
      links: [
        { label: { zh: "GitHub ↗", en: "GitHub ↗" }, href: "https://github.com/wenhulaojiu/liukanshan-web-assistant" },
      ],
    },
    {
      no: "03",
      emoji: "◈",
      title: "AI 伪装狼人杀",
      titleEn: "AI Werewolf",
      badge: "单机可玩",
      badgeEn: "PLAYABLE",
      status: "done",
      desc: "单机狼人杀：AI 玩家各自有性格、发言记忆和对每个座位的怀疑值，会接前一个人的话、站边、带节奏，投出真实对局感。双击 HTML 即可运行，无需安装 Node，也无需 API Key。",
      descEn: "Single-player Werewolf where every AI player has a personality, a memory of what was said, and suspicion toward each seat — they interject, take sides, and vote like humans. Double-click the HTML and play; no Node, no API key.",
      highlights: [
        "可选接入大模型增强发言，内置本地拟人 AI 兜底",
        "密钥只存浏览器本地，永不提交到仓库",
        "设计文档拆分为游戏循环 / AI 行为 / 角色等独立章节",
      ],
      highlightsEn: [
        "Optional LLM enhancement with a built-in local persona engine as fallback",
        "Keys stay in your browser, never committed to the repo",
        "Design docs split into game loop / AI behavior / roles",
      ],
      tags: ["JavaScript", "HTML", "AI 拟人对话", "GitHub Pages"],
      links: [
        { label: { zh: "GitHub ↗", en: "GitHub ↗" }, href: "https://github.com/wenhulaojiu/ai-werewolf" },
      ],
    },
    {
      no: "05",
      emoji: "◈",
      title: "个人作品集网站",
      titleEn: "This Portfolio",
      badge: "本站",
      badgeEn: "THIS SITE",
      status: "done",
      desc: "借助 AI 完成并持续学习的个人作品集：编辑部风格排版、星座连线 Canvas、主题切换、双语、背景音乐、作品集问答。零框架零依赖，纯 HTML / CSS / JS。",
      descEn: "Built with AI assistance as a personal learning project: editorial layout, a constellation canvas, theme switch, bilingual copy, background music, and an portfolio FAQ. Zero frameworks, zero dependencies.",
      highlights: [
        "借助 AI 完成页面排版与交互设计",
        "Canvas 星座连线背景、滚动进度条、错峰入场动画",
        "Web Audio 生成的环境音乐 + 可升级为真·大模型的 AI 问答助手",
      ],
      highlightsEn: [
        "AI-assisted layout and interaction design",
        "Canvas constellation background, scroll progress, staggered entrances",
        "Web Audio generative ambient music + an portfolio FAQ upgradeable to a real LLM",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Canvas", "Web Audio", "i18n"],
      links: [
        { label: { zh: "在线访问 ↗", en: "Visit site ↗" }, href: "https://wenhulaojiu.github.io/portfolio/" },
        { label: { zh: "GitHub ↗", en: "GitHub ↗" }, href: "https://github.com/wenhulaojiu/portfolio" },
      ],
    },
  ],

  /* ---------- 数据带 ---------- */
  stats: [
    { num: 5, suffix: " 个", suffixEn: "", label: "AI 辅助实践项目", labelEn: "AI-assisted projects" },
    { num: 2025, suffix: " 级", suffixEn: "", label: "福建师范大学", labelEn: "Fujian Normal University" },
  ],

  /* ---------- 联系卡片（copyable = 显示复制按钮）
     注意：出于防骚扰考虑，本站不公开手机号；招聘方请通过邮箱 / GitHub 联系 ---------- */
  contacts: [
    { icon: "✉", label: "QQ 邮箱（首选）", labelEn: "QQ Mail (primary)", value: "313242038@qq.com", href: "mailto:313242038@qq.com", copyable: true },
    { icon: "✉", label: "GMAIL", labelEn: "GMAIL", value: "webhulaojiu@gmail.com", href: "mailto:webhulaojiu@gmail.com", copyable: true },
    { icon: "🐙", label: "GITHUB", labelEn: "GITHUB", value: "github.com/wenhulaojiu", href: "https://github.com/wenhulaojiu", copyable: true },
    { icon: "💬", label: "微信", labelEn: "WeChat", value: "haaaaaapyu", href: "", copyable: true },
    { icon: "🐧", label: "QQ", labelEn: "QQ", value: "313242038", href: "", copyable: true },
  ],

  /* ---------- 作品集问答知识库（双语：keys/answer 中文，keysEn/answerEn 英文） ---------- */
  chatFAQ: [
    {
      keys: ["技能", "会什么", "技术", "语言", "技术栈", "stack", "会啥"],
      keysEn: ["skill", "tech", "stack", "language", "what can he"],
      answer: "洋意能编写 C、C++、Java、SQL、Python 和基础 HTML，\n通过 AI 辅助实践接触过 Node 后端、Chrome 浏览器扩展（MV3）和大模型 API 集成（流式对话、语义评分）。\n详细版可以看「技能版图」那一节～",
      answerEn: "Zhu writes basic C, C++, Java, SQL, Python and HTML.\nHis AI-assisted projects include a Node backend, a Chrome extension (MV3), and LLM integrations — streaming chat and semantic scoring.\nSee the Skill Map section for details.",
    },
    {
      keys: ["项目", "作品", "做过什么", "做了什么", "游戏", "插件", "扩展"],
      keysEn: ["project", "work", "built", "game", "extension", "made"],
      answer: "他的 AI 辅助实践项目包括：\n· 《圈层谣言攻防战》AI 策略游戏（rumor.okethan.com 在线可玩）\n· 「刘看山网页助手」Chrome/Edge 扩展 v1.5.0\n· 《AI 伪装狼人杀》单机狼人杀，AI 玩家有性格和记忆\n以及慢游旅行路线规划和这个网站，均为 AI 辅助完成的学习实践！",
      answerEn: "He has three playable / usable works:\n· Circle Rumor Warfare (playable at rumor.okethan.com)\n· Liu Kanshan Web Assistant — Chrome/Edge extension v1.5.0\n· AI Werewolf, with personable AI players\nPlus Manyou and this website — built with AI assistance.",
    },
    {
      keys: ["实习", "求职", "找工作", "岗位", "方向", "招聘", "面试"],
      keysEn: ["intern", "hire", "hiring", "job", "recruit", "available"],
      answer: "洋意正在寻找 2027 暑期 / 日常开发实习，方向是开发实习与项目学习，\n坐标福州、可远程可到岗。页面底部的邮箱可以直接投递岗位信息，24 小时内回复！",
      answerEn: "Zhu is looking for 2027 summer / part-time internships in development and project learning,\nbased in Fuzhou, remote OK. Email at the bottom of the page — replies within 24 hours.",
    },
    {
      keys: ["学校", "专业", "大学", "年级", "哪里", "福州", "福建"],
      keysEn: ["school", "university", "major", "study", "where", "grade"],
      answer: "他就读于福建师范大学计算机专业，2025 级本科（现在大二），\n数据结构、算法等核心课都在稳扎稳打地推进。",
      answerEn: "He studies Computer Science at Fujian Normal University, class of 2025 (sophomore),\nwith data structures, algorithms and other core courses steadily progressing.",
    },
    {
      keys: ["联系", "邮箱", "微信", "电话", "qq", "github", "email"],
      keysEn: ["contact", "email", "mail", "wechat", "phone", "github", "reach"],
      answer: "联系方式都在页面底部「联系」区：\n· QQ 邮箱：313242038@qq.com\n· 微信：haaaaaapyu\n· GitHub：github.com/wenhulaojiu\n都可以一键复制哦～",
      answerEn: "Everything is in the Contact section:\n· QQ Mail: 313242038@qq.com\n· WeChat: haaaaaapyu\n· GitHub: github.com/wenhulaojiu\nEvery card has one-click copy.",
    },
    {
      keys: ["你好", "hi", "hello", "在吗", "是谁", "介绍", "朱洋意", "洋意"],
      keysEn: ["hi", "hello", "hey", "who", "introduce", "zhu"],
      answer: "你好！我是朱洋意的 作品集问答 🤖\n可以问我：他会什么技术？做过什么项目？找什么方向的实习？",
      answerEn: "Hi! I'm Zhu's portfolio FAQ 🤖\nAsk me: what are his skills? what has he built? what internships is he looking for?",
    },
  ],
  chatFallback: "这个问题我还在学习中 🤔 换个问法试试：\n· 他会哪些技术？\n· 做过什么项目？\n· 想找什么实习？",
  chatFallbackEn: "Still learning that one 🤔 Try asking:\n· What are his skills?\n· What has he built?\n· What internships is he looking for?",
  chatChips: ["会什么技术？", "做过什么项目？", "招实习生吗？"],
  chatChipsEn: ["His skills?", "His projects?", "Hiring interns?"],
};
