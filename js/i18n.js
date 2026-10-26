/* ==========================================================
   双语引擎：静态文案字典 + 语言切换
   动态内容（技能/项目/联系等）由 main.js 的 renderDynamic
   读取 data.js 里的 *_en 字段渲染；这里负责 HTML 里的静态文字
   ========================================================== */

const I18N = {
  "META.title_zh": "朱洋意 · 福建师范大学 · 计算机专业 | 个人作品集",
  "META.title_en": "Zhu Yangyi · CS @ Fujian Normal University | Portfolio",
  "META.desc_zh": "朱洋意的个人作品集 — 福建师范大学计算机专业 2025 级，AI 辅助项目实践，正在寻找开发实习。",
  "META.desc_en": "Portfolio of Zhu Yangyi — CS undergrad at Fujian Normal University (class of 2025). AI-assisted learning projects. Open to internships.",

  "nav.logo": { zh: "朱洋意<span class=\"nav-logo-dot\">.</span>", en: "Zhu Yangyi<span class=\"nav-logo-dot\">.</span>" },
  "footer.logo": { zh: "朱洋意<span class=\"footer-dot\">.</span>", en: "Zhu Yangyi<span class=\"footer-dot\">.</span>" },
  "nav.about": { zh: "关于", en: "About" },
  "nav.skills": { zh: "技能", en: "Skills" },
  "nav.projects": { zh: "项目", en: "Projects" },
  "nav.contact": { zh: "联系", en: "Contact" },
  "nav.cta": { zh: "招实习生？点这里", en: "Hiring? This way." },

  "hero.eyebrow": { zh: "PORTFOLIO — 福建师范大学 · 计算机专业 · 2025 级", en: "PORTFOLIO — FUJIAN NORMAL UNIVERSITY · CS MAJOR · CLASS OF 2025" },
  "hero.typingLabel": { zh: "IS", en: "IS A" },
  "hero.desc": {"zh": "我能编写 C、C++、Java、SQL、Python 和基础 HTML，正在巩固编程基础。<br />借助 AI 把想法做成小作品，寻找 2027 年开发实习与学习机会。", "en": "I write basic C, C++, Java, SQL, Python and HTML. I build learning projects with AI assistance and am seeking a 2027 development internship."},
  "hero.cta1": { zh: "查看项目 <span class=\"btn-arrow\">→</span>", en: "View Projects <span class=\"btn-arrow\">→</span>" },
  "hero.cta2": { zh: "与我联系", en: "Contact Me" },
  "hero.meta2": { zh: "福州 · 福建", en: "Fuzhou · Fujian" },

  "about.title": { zh: "关于我<span class=\"sec-title-dot\">.</span>", en: "About Me<span class=\"sec-title-dot\">.</span>" },
  "about.lede": {
    zh: "你好！我是朱洋意，福建师范大学计算机专业 2025 级本科生。从写下第一行 Hello&nbsp;World 开始，我就对「做东西给人用」这件事上了瘾。",
    en: "Hi! I'm Zhu Yangyi, a CS undergraduate (class of 2025) at Fujian Normal University. Ever since my first Hello&nbsp;World, I've been hooked on building things people actually use.",
  },
  "about.p1": {"zh": "我借助 AI 完成了毛线守恒 H5、圈层谣言攻防战、AI 伪装狼人杀、刘看山网页助手、慢游路线规划和这个作品集。这些作品记录了我的项目实践，不代表其中所有技术都已能独立实现。", "en": "I used AI to build Yarn Conservation H5, Circle Rumor Warfare, AI Werewolf, Liu Kanshan Web Assistant, Manyou travel planning and this portfolio. These projects document my practice, rather than independent mastery of every technology used."},
  "about.p2": {"zh": "目前能够编写 C、C++、Java、SQL、Python 和基础 HTML。接下来希望从已有项目的小功能入手，逐步理解代码、练习修改，并巩固编程基础。", "en": "My current foundation includes C, C++, Java, SQL, Python and basic HTML. I aim to learn small features in these projects, understand their code and practise making changes."},
  "about.eduSchool": { zh: "福建师范大学", en: "Fujian Normal University" },
  "about.eduMajor": { zh: "计算机科学与技术 · 本科在读（大二）", en: "B.Sc. in Computer Science · Sophomore" },

  "skills.title": { zh: "技能版图<span class=\"sec-title-dot\">.</span>", en: "The Skill Map<span class=\"sec-title-dot\">.</span>" },
  "skills.sub": {"zh": "区分目前的基础能力与借助 AI 完成的项目实践。", "en": "Current foundations and AI-assisted project practice."},

  "projects.title": { zh: "项目精选<span class=\"sec-title-dot\">.</span>", en: "Selected Works<span class=\"sec-title-dot\">.</span>" },
  "projects.sub": {"zh": "以下项目由 AI 辅助完成；技术标签说明项目实现方式。", "en": "Built with AI assistance; tags describe each project’s implementation."},

  "contact.title": {
    zh: "正在找实习的<em>我</em>，<br />正在招实习生的<em>你</em>。",
    en: "Looking for an internship: <em>me</em>.<br />Looking for interns: <em>you</em>.",
  },
  "contact.sub": { zh: "实习机会、项目合作、或者单纯聊聊技术——都欢迎，24 小时内回复。", en: "Internships, collabs, or just talking tech — always welcome. I reply within 24 hours." },
  "contact.note": { zh: "提示：卡片右上角可一键复制 · 简历可邮件索取", en: "Tip: click the corner of a card to copy · résumé available on request" },

  "ui.backTop": { zh: "回到顶部 ↑", en: "Top ↑" },
  "ui.music": { zh: "背景音乐（点击开关）", en: "Background music (click to toggle)" },
  "chat.title": {"zh": "作品集问答", "en": "Portfolio FAQ"},
  "chat.ph": { zh: "问我任何关于他的问题…", en: "Ask me anything about Zhu…" },
  "toast": { zh: "已复制到剪贴板 ✓", en: "Copied to clipboard ✓" },
};

function currentLang() {
  return localStorage.getItem("zyy-lang") === "en" ? "en" : "zh";
}
function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return currentLang() === "en" ? entry.en : entry.zh;
}
function L(zh, en) {
  return currentLang() === "en" ? (en ?? zh) : zh;
}

function applyLang(lang) {
  localStorage.setItem("zyy-lang", lang);
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
  document.title = currentLang() === "en" ? I18N["META.title_en"] : I18N["META.title_zh"];
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", currentLang() === "en" ? I18N["META.desc_en"] : I18N["META.desc_zh"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = currentLang() === "en" ? "中" : "EN";

  // 动态列表重渲染（renderDynamic 在 main.js 定义）
  if (typeof window.renderDynamic === "function") window.renderDynamic();
  window.dispatchEvent(new CustomEvent("langchange"));
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang() === "en" ? "zh" : "en");
});

// 首次加载若上次选了英文，则立即应用
if (currentLang() === "en") applyLang("en");
