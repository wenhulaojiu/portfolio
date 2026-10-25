/* ==========================================================
   ★ 朱洋意的资料都改这里（其他文件一般不用动） ★
   ========================================================== */

const DATA = {

  /* ---------- 首屏打字机轮播 ---------- */
  typingRoles: ["计算机专业本科生", "AI 小游戏开发者", "浏览器插件作者", "Web 全栈练习生"],

  /* ---------- 技术栈跑马灯（横向滚动条） ---------- */
  marquee: ["C / C++", "Python", "JavaScript", "HTML / CSS", "数据结构", "计算机网络", "操作系统", "Git & GitHub", "Linux 基础", "Prompt 工程", "VS Code", "Cursor"],

  /* ---------- 技能版图（深色区） ---------- */
  skills: [
    {
      no: "A.",
      title: "编程语言",
      desc: "课程 + 项目里实际写过较多代码的语言。",
      tags: ["C", "C++", "Python", "JavaScript", "SQL"],
    },
    {
      no: "B.",
      title: "Web 与浏览器端",
      desc: "从静态页面到 Node 服务再到浏览器扩展，本站即练手成果。",
      tags: ["HTML", "CSS", "JS 动画", "Node.js", "Chrome 扩展 MV3", "HTTP / REST"],
    },
    {
      no: "C.",
      title: "AI 工程化",
      desc: "把大模型真正做进产品：不止聊天，还有语义评分与拟人行为。",
      tags: ["OpenAI 兼容 API", "SSE 流式对话", "Prompt 设计", "降级容错", "Cursor / Copilot"],
    },
    {
      no: "D.",
      title: "工具与协作",
      desc: "日常开发环境与工作流。",
      tags: ["Git", "GitHub", "Linux", "VS Code", "Vercel"],
    },
    {
      no: "E.",
      title: "计算机基础",
      desc: "正在修 / 已修的专业核心课。",
      tags: ["数据结构", "算法", "操作系统（在修）", "计算机网络（在修）"],
    },
    {
      no: "F.",
      title: "正在学习",
      desc: "接下来三个月的攻击方向。",
      tags: ["React", "TypeScript", "RAG", "Agent 开发"],
    },
  ],

  /* ---------- 项目精选 ----------
     status: "done" 已完成 / "dev" 开发中（黄色角标） */
  projects: [
    {
      no: "01",
      emoji: "◈",
      title: "圈层谣言攻防战",
      badge: "已上线",
      status: "done",
      desc: "已上线可玩的回合制策略游戏：在兴趣 / 家长 / 职场 / 校园四个交叠社交圈中，选择造谣或辟谣一方，每回合挑选节点、撰写说服话术，与 AI 对手争夺传播面。节点带有怀疑度、从众度等画像，跨圈扩散是胜负手。",
      highlights: [
        "接入大模型对话术做语义评分，断网自动降级为本地规则引擎",
        "Node 零依赖后端是唯一结算权威，前端只负责提交选择",
        "红绿色盲友好标记 + forced-colors 无障碍支持，附平衡性测试脚本",
      ],
      tags: ["Node.js", "JavaScript", "Canvas 力导向图", "LLM API", "无障碍"],
      links: [
        { label: "在线试玩 ↗", href: "https://rumor.okethan.com" },
        { label: "GitHub ↗", href: "https://github.com/wenhulaojiu/circle-rumor-warfare" },
      ],
    },
    {
      no: "02",
      emoji: "◈",
      title: "刘看山网页助手",
      badge: "v1.5.0",
      status: "done",
      desc: "Chrome / Edge 浏览器扩展（Manifest V3）：一键读取当前网页内容，在侧边栏针对页面多轮追问，还支持划词右键提问和刘看山桌宠动画。用户自配 OpenAI 兼容 API，流式输出回答。",
      highlights: [
        "Side Panel API 侧边栏对话，基于页面内容连续追问",
        "无后端、无遥测、不打包密钥——隐私设计从第一行开始",
        "知乎页面专项内容抽取优化",
      ],
      tags: ["Chrome Extension", "Manifest V3", "Side Panel API", "SSE 流式", "JavaScript"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/wenhulaojiu/liukanshan-web-assistant" },
      ],
    },
    {
      no: "03",
      emoji: "◈",
      title: "AI 伪装狼人杀",
      badge: "单机可玩",
      status: "done",
      desc: "单机狼人杀：AI 玩家各自有性格、发言记忆和对每个座位的怀疑值，会接前一个人的话、站边、带节奏，投出真实对局感。双击 HTML 即可运行，无需安装 Node，也无需 API Key。",
      highlights: [
        "可选接入大模型增强发言，内置本地拟人 AI 兜底",
        "密钥只存浏览器本地，永不提交到仓库",
        "设计文档拆分为游戏循环 / AI 行为 / 角色等独立章节",
      ],
      tags: ["JavaScript", "HTML", "AI 拟人对话", "GitHub Pages"],
      links: [
        { label: "GitHub ↗", href: "https://github.com/wenhulaojiu/ai-werewolf" },
      ],
    },
    {
      no: "04",
      emoji: "◈",
      title: "个人作品集网站",
      badge: "本站",
      status: "done",
      desc: "从视觉设计到每一行动画全部手写的作品集：编辑部风格排版、星座连线 Canvas、主题切换、AI 助手。零框架零依赖，纯 HTML / CSS / JS。",
      highlights: [
        "米白纸感 × 深炭黑分节的编辑级视觉设计",
        "Canvas 星座连线背景、滚动进度条、错峰入场动画",
        "内置可升级为真·大模型的 AI 问答助手",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Canvas", "IntersectionObserver"],
      links: [
        { label: "在线访问 ↗", href: "https://wenhulaojiu.github.io/portfolio/" },
        { label: "GitHub ↗", href: "https://github.com/wenhulaojiu/portfolio" },
      ],
    },
  ],

  /* ---------- 数据带 ---------- */
  stats: [
    { num: 4, suffix: " 个", label: "亲手完成的项目" },
    { num: 0, suffix: "", label: "第三方运行时依赖" },
    { num: 500, suffix: "+", label: "小时编码积累" },
    { num: 2025, suffix: " 级", label: "福建师范大学" },
  ],

  /* ---------- 联系卡片（copyable = 显示复制按钮） ---------- */
  contacts: [
    { icon: "✉", label: "QQ 邮箱（首选）", value: "313242038@qq.com", href: "mailto:313242038@qq.com", copyable: true },
    { icon: "✉", label: "GMAIL", value: "webhulaojiu@gmail.com", href: "mailto:webhulaojiu@gmail.com", copyable: true },
    { icon: "🐙", label: "GITHUB", value: "github.com/wenhulaojiu", href: "https://github.com/wenhulaojiu", copyable: true },
    { icon: "💬", label: "微信", value: "haaaaaapyu", href: "", copyable: true },
    { icon: "🐧", label: "QQ", value: "313242038", href: "", copyable: true },
    { icon: "☎", label: "电话", value: "15880259222", href: "tel:15880259222", copyable: true },
  ],

  /* ---------- AI 助手知识库 ---------- */
  chatFAQ: [
    {
      keys: ["技能", "会什么", "技术", "语言", "技术栈", "stack", "会啥"],
      answer: "洋意的主力语言是 JavaScript（加上 C / C++ 和 Python），\n已经独立完成过 Node 后端、Chrome 浏览器扩展（MV3）和大模型 API 集成（流式对话、语义评分）。\n详细版可以看「技能版图」那一节～",
    },
    {
      keys: ["项目", "作品", "做过什么", "做了什么", "游戏", "插件", "扩展"],
      answer: "他已上线三个能玩 / 能用的作品：\n· 《圈层谣言攻防战》AI 策略游戏（rumor.okethan.com 在线可玩）\n· 「刘看山网页助手」Chrome/Edge 扩展 v1.5.0\n· 《AI 伪装狼人杀》单机狼人杀，AI 玩家有性格和记忆\n加上这个网站，全部零第三方依赖手写！",
    },
    {
      keys: ["实习", "求职", "找工作", "岗位", "方向", "招聘", "面试"],
      answer: "洋意正在寻找 2027 暑期 / 日常开发实习，方向是前端 / 全栈 / AI 应用开发，\n坐标福州、可远程可到岗。页面底部的邮箱可以直接投递岗位信息，24 小时内回复！",
    },
    {
      keys: ["学校", "专业", "大学", "年级", "哪里", "福州", "福建"],
      answer: "他就读于福建师范大学计算机专业，2025 级本科（现在大二），\n数据结构、算法等核心课都在稳扎稳打地推进。",
    },
    {
      keys: ["联系", "邮箱", "微信", "电话", "qq", "github", "email"],
      answer: "联系方式都在页面底部「联系」区：\n· QQ 邮箱：313242038@qq.com\n· 微信：haaaaaapyu\n· GitHub：github.com/wenhulaojiu\n都可以一键复制哦～",
    },
    {
      keys: ["你好", "hi", "hello", "在吗", "是谁", "介绍", "朱洋意", "洋意"],
      answer: "你好！我是朱洋意的 AI 助手 🤖\n可以问我：他会什么技术？做过什么项目？找什么方向的实习？",
    },
  ],
  chatFallback: "这个问题我还在学习中 🤔 换个问法试试：\n· 他会哪些技术？\n· 做过什么项目？\n· 想找什么实习？",
  chatChips: ["会什么技术？", "做过什么项目？", "招实习生吗？"],
};
