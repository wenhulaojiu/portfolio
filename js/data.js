/* Public portfolio content. */
const DATA = {
  "typingRoles": [
    "计算机专业本科生",
    "C / C++ 学习者"
  ],
  "typingRolesEn": [
    "CS Undergraduate",
    "C / C++ Learner"
  ],
  "marquee": [
    "C",
    "C++",
    "Java",
    "Python",
    "SQL",
    "HTML"
  ],
  "skills": [
    {
      "no": "A.",
      "title": "主要学习 · C / C++",
      "titleEn": "Main focus · C / C++",
      "desc": "能编写基础代码，当前学习进度到指针。",
      "descEn": "Able to write basic code; currently learning pointers.",
      "tags": [
        "C",
        "C++",
        "指针"
      ],
      "tagsEn": [
        "C",
        "C++",
        "Pointers"
      ]
    },
    {
      "no": "B.",
      "title": "其他编程基础",
      "titleEn": "Other programming basics",
      "desc": "能编写 Java、Python 基础代码。",
      "descEn": "Basic coding experience with Java and Python.",
      "tags": [
        "Java",
        "Python"
      ]
    },
    {
      "no": "C.",
      "title": "数据库与网页基础",
      "titleEn": "Database & web basics",
      "desc": "能编写基础 SQL 与 HTML 页面代码。",
      "descEn": "Able to write basic SQL and HTML.",
      "tags": [
        "SQL",
        "HTML"
      ]
    }
  ],
  "projects": [
    {
      "no": "01",
      "emoji": "◈",
      "title": "毛线守恒 · H5",
      "titleEn": "Yarn Conservation · H5",
      "badge": "H5 移植版",
      "badgeEn": "H5 PORT",
      "status": "done",
      "desc": "三猫协作解谜游戏：切换角色，利用跳跃、抱放和交互完成关卡。H5 移植版包含 10 个正篇关卡与 1 个隐藏关。",
      "descEn": "A three-cat cooperative puzzle game: switch characters, jump, carry and interact to solve levels. The H5 port contains 10 main levels and one hidden level.",
      "highlights": [
        "键盘与触屏按钮操作，支持切猫和撤销",
        "复用 Lua 玩法，通过 WebAssembly 与 Canvas 2D 在浏览器运行"
      ],
      "highlightsEn": [
        "Keyboard and touch controls, cat switching and undo",
        "Runs Lua gameplay in the browser through WebAssembly and Canvas 2D"
      ],
      "tags": [
        "Lua",
        "WebAssembly",
        "Canvas 2D"
      ],
      "links": [
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/maoxianshouheng"
        }
      ],
      "note": "版本说明：音效尚未接入，完整手机与全关手动验收待补。",
      "noteEn": "Version note: audio integration and full mobile/all-level manual verification remain pending.",
      "preview": "assets/yarn-preview.png",
      "previewAlt": "毛线守恒 H5 游戏界面",
      "previewAltEn": "Yarn Conservation H5 game interface",
      "featured": true
    },
    {
      "no": "02",
      "emoji": "◈",
      "title": "慢游 · 旅行路线规划",
      "titleEn": "Manyou · Travel Route Planning",
      "badge": "本地运行",
      "badgeEn": "LOCAL APP",
      "status": "done",
      "desc": "围绕旅行预算与赶路时间，比较国内交通路线。支持考虑中转停留和住宿成本，帮助查看不同路线的取舍。",
      "descEn": "Compares domestic travel routes by budget and travel time, including stopovers and accommodation costs.",
      "highlights": [
        "支持路线筛选、排序、对比和取消查询",
        "包含铁路查询与可选航空接口"
      ],
      "highlightsEn": [
        "Route filtering, sorting, comparison and cancellation",
        "Rail queries with an optional flight integration"
      ],
      "tags": [
        "Node.js",
        "Web Worker",
        "路线规划"
      ],
      "links": [
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/manyou"
        }
      ],
      "note": "使用说明：需要本地运行；航空查询需配置服务账号，未验证生产机票数据。",
      "noteEn": "Runs locally. Flight queries require provider credentials; production flight data has not been verified.",
      "tagsEn": [
        "Node.js",
        "Web Worker",
        "Route planning"
      ],
      "preview": "assets/manyou-preview.png",
      "previewAlt": "慢游项目首页",
      "previewAltEn": "Manyou project home page",
      "featured": true
    },
    {
      "no": "03",
      "emoji": "◈",
      "title": "刘看山网页助手",
      "titleEn": "Liu Kanshan Web Assistant",
      "badge": "v1.5.0",
      "badgeEn": "v1.5.0",
      "status": "done",
      "desc": "Chrome / Edge 网页阅读助手：读取当前页面，在侧边栏围绕内容提问，支持选中文字提问与连续对话。",
      "descEn": "A Chrome / Edge reading assistant for questions about the current page, selected-text queries and follow-up conversations in a side panel.",
      "highlights": [
        "侧边栏展示流式回答，支持停止生成与新建对话",
        "用户配置模型服务，无自建后端与内置 API 密钥"
      ],
      "highlightsEn": [
        "Streaming answers in a side panel, with stop and new-chat controls",
        "User-configured model provider, no custom backend or bundled API key"
      ],
      "tags": [
        "JavaScript",
        "Manifest V3",
        "Side Panel API"
      ],
      "links": [
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/liukanshan-web-assistant"
        }
      ],
      "note": "使用说明：需手动加载扩展并配置模型 API。",
      "noteEn": "Requires manual extension installation and a model API configuration.",
      "featured": true
    },
    {
      "no": "04",
      "emoji": "◈",
      "title": "圈层谣言攻防战",
      "titleEn": "Circle Rumor Warfare",
      "badge": "已上线",
      "badgeEn": "LIVE",
      "status": "done",
      "desc": "已上线可玩的回合制策略游戏：在兴趣 / 家长 / 职场 / 校园四个交叠社交圈中，选择造谣或辟谣一方，每回合挑选节点、撰写说服话术，与 AI 对手争夺传播面。节点带有怀疑度、从众度等画像，跨圈扩散是胜负手。",
      "descEn": "A playable turn-based strategy game about how rumors spread through four overlapping social circles. Pick rumor-maker or debunker, choose three nodes per turn, write your persuasion, and battle an AI opponent across node profiles like skepticism and conformity.",
      "highlights": [
        "接入大模型对话术做语义评分，断网自动降级为本地规则引擎",
        "Node 零依赖后端是唯一结算权威，前端只负责提交选择",
        "红绿色盲友好标记 + forced-colors 无障碍支持，附平衡性测试脚本"
      ],
      "highlightsEn": [
        "LLM semantic scoring of your wording, with automatic fallback to a local rules engine offline",
        "Zero-dependency Node backend as the single scoring authority — the client only submits choices",
        "Color-blind-safe shape encoding + forced-colors support, with balance test scripts"
      ],
      "tags": [
        "Node.js",
        "JavaScript",
        "Canvas 力导向图",
        "LLM API",
        "无障碍"
      ],
      "links": [
        {
          "label": {
            "zh": "在线试玩 ↗",
            "en": "Play online ↗"
          },
          "href": "https://rumor.okethan.com"
        },
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/circle-rumor-warfare"
        }
      ],
      "featured": false
    },
    {
      "no": "05",
      "emoji": "◈",
      "title": "AI 伪装狼人杀",
      "titleEn": "AI Werewolf",
      "badge": "单机可玩",
      "badgeEn": "PLAYABLE",
      "status": "done",
      "desc": "单机狼人杀：AI 玩家各自有性格、发言记忆和对每个座位的怀疑值，会接前一个人的话、站边、带节奏，投出真实对局感。双击 HTML 即可运行，无需安装 Node，也无需 API Key。",
      "descEn": "Single-player Werewolf where every AI player has a personality, a memory of what was said, and suspicion toward each seat — they interject, take sides, and vote like humans. Double-click the HTML and play; no Node, no API key.",
      "highlights": [
        "可选接入大模型增强发言，内置本地拟人 AI 兜底",
        "密钥只存浏览器本地，永不提交到仓库",
        "设计文档拆分为游戏循环 / AI 行为 / 角色等独立章节"
      ],
      "highlightsEn": [
        "Optional LLM enhancement with a built-in local persona engine as fallback",
        "Keys stay in your browser, never committed to the repo",
        "Design docs split into game loop / AI behavior / roles"
      ],
      "tags": [
        "JavaScript",
        "HTML",
        "AI 拟人对话",
        "GitHub Pages"
      ],
      "links": [
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/ai-werewolf"
        }
      ],
      "featured": false
    },
    {
      "no": "06",
      "emoji": "◈",
      "title": "个人作品集网站",
      "titleEn": "This Portfolio",
      "badge": "本站",
      "badgeEn": "THIS SITE",
      "status": "done",
      "desc": "个人作品与实习信息展示站，提供中英文切换、主题切换和一页简历下载。",
      "descEn": "A personal portfolio with project summaries, internship information, language and theme switching, and a one-page CV download.",
      "highlights": [
        "集中展示学习基础、项目与联系方式"
      ],
      "highlightsEn": [
        "Brings together foundations, projects and contact details"
      ],
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
        "Canvas",
        "Web Audio",
        "i18n"
      ],
      "links": [
        {
          "label": {
            "zh": "在线访问 ↗",
            "en": "Visit site ↗"
          },
          "href": "https://wenhulaojiu.github.io/portfolio/"
        },
        {
          "label": {
            "zh": "GitHub ↗",
            "en": "GitHub ↗"
          },
          "href": "https://github.com/wenhulaojiu/portfolio"
        }
      ],
      "featured": false
    }
  ],
  "contacts": [
    {
      "icon": "✉",
      "label": "邮箱",
      "labelEn": "EMAIL",
      "value": "313242038@qq.com",
      "href": "mailto:313242038@qq.com",
      "copyable": true
    },
    {
      "icon": "🐙",
      "label": "GITHUB",
      "labelEn": "GITHUB",
      "value": "github.com/wenhulaojiu",
      "href": "https://github.com/wenhulaojiu",
      "copyable": true
    },
    {
      "icon": "💬",
      "label": "微信",
      "labelEn": "WeChat",
      "value": "haaaaaapyu",
      "href": "",
      "copyable": true
    }
  ],
  "chatFAQ": [
    {
      "keys": [
        "技能",
        "技术",
        "会什么",
        "语言",
        "指针",
        "c++"
      ],
      "keysEn": [
        "skill",
        "language",
        "pointer",
        "tech"
      ],
      "answer": "主要学习 C 和 C++，当前进度到指针，能编写基础代码；也有 Java、Python、SQL 与 HTML 基础。",
      "answerEn": "My main focus is C and C++, currently through pointers. I also have basic Java, Python, SQL and HTML experience."
    },
    {
      "keys": [
        "项目",
        "作品",
        "做过",
        "游戏",
        "插件",
        "慢游",
        "贡献",
        "ai"
      ],
      "keysEn": [
        "project",
        "work",
        "game",
        "ai",
        "contribution"
      ],
      "answer": "项目包括毛线守恒、慢游、网页助手、谣言攻防战、狼人杀和本站。我的参与方式是通过提示词表达需求，由 AI 生成代码与实现；各项目链接和说明在项目区。",
      "answerEn": "Projects include Yarn Conservation, Manyou, the web assistant, Rumor Warfare, Werewolf and this site. My role is describing requirements through prompts, with AI generating the implementation. See the project section for links."
    },
    {
      "keys": [
        "实习",
        "求职",
        "岗位",
        "方向",
        "城市",
        "到岗",
        "寒假",
        "出勤"
      ],
      "keysEn": [
        "intern",
        "job",
        "hire",
        "city",
        "winter",
        "available",
        "schedule"
      ],
      "answer": "正在寻找开发实习，寒假可到岗，城市暂无偏好。每周出勤与实习周期待沟通。",
      "answerEn": "I’m seeking a development internship, available during winter break with no city preference. The weekly schedule and duration are to be discussed."
    },
    {
      "keys": [
        "学校",
        "专业",
        "大学",
        "年级"
      ],
      "keysEn": [
        "school",
        "university",
        "major",
        "grade"
      ],
      "answer": "福建师范大学计算机科学与技术专业，2025 级本科生，预计 2029 年毕业。",
      "answerEn": "Computer Science undergraduate at Fujian Normal University, enrolled in 2025 and expected to graduate in 2029."
    },
    {
      "keys": [
        "联系",
        "邮箱",
        "微信",
        "电话",
        "github",
        "email"
      ],
      "keysEn": [
        "contact",
        "email",
        "wechat",
        "github"
      ],
      "answer": "邮箱：313242038@qq.com。也可通过页面底部的 GitHub 或微信联系方式联系。",
      "answerEn": "Email: 313242038@qq.com. GitHub and WeChat contact details are also listed at the bottom of the page."
    },
    {
      "keys": [
        "你好",
        "hi",
        "hello",
        "介绍"
      ],
      "keysEn": [
        "hi",
        "hello",
        "introduce"
      ],
      "answer": "你好，这里是作品集常见问题。可以查看编程基础、项目和实习安排。",
      "answerEn": "Hello! This FAQ covers programming foundations, projects and internship availability."
    }
  ],
  "chatFallback": "暂未收录这个问题，可以通过页面底部的邮箱联系我。",
  "chatFallbackEn": "This question is not in the FAQ yet. Please contact me by email.",
  "chatChips": [
    "编程基础",
    "项目参与方式",
    "实习安排"
  ],
  "chatChipsEn": [
    "Programming basics",
    "Project role",
    "Availability"
  ]
};
