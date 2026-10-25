/* ==========================================================
   交互逻辑：载入动画 / 进度条 / 星座 Canvas / 打字机 /
   滚动渲染 / 计数 / 复制 / AI 助手 / 主题
   想搞懂某段代码，直接复制去问 AI —— 这是最好的学习方式
   ========================================================== */

/* ============ 1. 主题（默认米白纸感，记忆偏好） ============ */
const themeToggle = document.getElementById("themeToggle");
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("zyy-theme", t);
}
applyTheme(localStorage.getItem("zyy-theme") || "light");
themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light");
});

/* ============ 2. 开场动画退场 ============ */
window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("preloader").classList.add("done"), 1300);
});
// 兜底：load 事件如果被资源阻塞也不卡住页面
setTimeout(() => document.getElementById("preloader")?.classList.add("done"), 3200);

/* ============ 3. 顶部阅读进度条 + 导航滚动态 ============ */
const progressBar = document.getElementById("progressBar");
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const max = h.scrollHeight - h.clientHeight;
  progressBar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  nav.classList.toggle("scrolled", h.scrollTop > 30);
}, { passive: true });

/* ============ 4. 移动端菜单 ============ */
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinksEl.classList.toggle("open");
});
navLinksEl.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinksEl.classList.remove("open");
  })
);

/* ============ 5. 导航当前分区高亮 ============ */
const sectionIds = ["about", "skills", "projects", "contact"];
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      document.querySelectorAll(".nav-links a").forEach((a) =>
        a.classList.toggle("active", a.dataset.nav === e.target.id)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sectionIds.forEach((id) => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});

/* ============ 6. 打字机 ============ */
const typingEl = document.getElementById("typing");
const roles = DATA.typingRoles;
let ri = 0, ci = 0, del = false;
(function typeLoop() {
  const word = roles[ri];
  typingEl.textContent = word.slice(0, ci);
  let delay = del ? 45 : 120;
  if (!del && ci === word.length) { delay = 1700; del = true; }
  else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; delay = 380; }
  else ci += del ? -1 : 1;
  setTimeout(typeLoop, delay);
})();

/* ============ 7. HERO 星座连线 Canvas ============ */
(function constellation() {
  const canvas = document.getElementById("constellation");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, pts = [], raf;
  const mouse = { x: -9999, y: -9999 };

  function themeColors() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    return dark
      ? { dot: "rgba(240,235,224,0.55)", accent: "232,118,60", line: "rgba(240,235,224,0.14)" }
      : { dot: "rgba(23,20,16,0.5)", accent: "194,65,12", line: "rgba(23,20,16,0.12)" };
  }
  let colors = themeColors();

  function resize() {
    W = canvas.width = canvas.offsetWidth * devicePixelRatio;
    H = canvas.height = canvas.offsetHeight * devicePixelRatio;
    const count = Math.min(110, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
      r: (Math.random() * 1.4 + 0.7) * devicePixelRatio,
      hot: Math.random() < 0.08, // 少量琥珀色点缀节点
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    const linkDist = 130 * devicePixelRatio;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      // 鼠标轻推：靠近时被轻微排斥，产生「拨开星群」的手感
      const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
      const md = Math.hypot(mdx, mdy);
      const reach = 110 * devicePixelRatio;
      if (md < reach && md > 0.001) {
        const f = ((reach - md) / reach) * 0.06;
        p.vx += (mdx / md) * f; p.vy += (mdy / md) * f;
      }
      // 限速，防止推力累积失控
      const sp = Math.hypot(p.vx, p.vy), maxSp = 0.5 * devicePixelRatio;
      if (sp > maxSp) { p.vx = (p.vx / sp) * maxSp; p.vy = (p.vy / sp) * maxSp; }
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    // 连线
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < linkDist) {
          ctx.strokeStyle = colors.line;
          ctx.lineWidth = devicePixelRatio * 0.6;
          ctx.globalAlpha = 1 - d / linkDist;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    // 节点（靠近鼠标的放大）+ 光标与邻近节点连线
    const linkReach = 150 * devicePixelRatio;
    for (const p of pts) {
      const md = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const boost = md < 120 * devicePixelRatio ? 1.9 : 1;
      if (md < linkReach) {
        ctx.strokeStyle = `rgba(${colors.accent},${(1 - md / linkReach) * 0.55})`;
        ctx.lineWidth = devicePixelRatio * 0.8;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
      ctx.fillStyle = p.hot ? `rgba(${colors.accent},0.9)` : colors.dot;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * boost, 0, Math.PI * 2);
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); tick(); });
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - rect.left) * devicePixelRatio;
    mouse.y = (e.clientY - rect.top) * devicePixelRatio;
  });
  canvas.parentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -9999; });
  themeToggle.addEventListener("click", () => { colors = themeColors(); });

  resize();
  // 尊重减少动画偏好
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) tick();
})();

/* ============ 8. 渲染数据 ============ */
// 跑马灯（内容渲染两遍实现无缝循环）
document.getElementById("marqueeTrack").innerHTML =
  [...DATA.marquee, ...DATA.marquee]
    .map((t) => `<span class="marquee-item">${t}<b>✦</b></span>`)
    .join("");

// 技能
document.getElementById("skillsGrid").innerHTML = DATA.skills
  .map(
    (s) => `
    <div class="skill-cell">
      <span class="skill-no mono">${s.no}</span>
      <div class="skill-title">${s.title}</div>
      <p class="skill-desc">${s.desc}</p>
      <div class="skill-tags">${s.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}</div>
    </div>`
  )
  .join("");

// 项目
document.getElementById("projectsList").innerHTML = DATA.projects
  .map(
    (p) => `
    <article class="project-row reveal">
      <div class="project-no">${p.no} /</div>
      <div class="project-main">
        <h3>${p.title}${p.badge ? `<span class="project-badge">${p.badge}</span>` : ""}</h3>
        <p class="project-desc">${p.desc}</p>
        <ul class="project-highlights">${(p.highlights || []).map((h) => `<li>${h}</li>`).join("")}</ul>
        <div class="project-tags">${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}</div>
      </div>
      <div class="project-side">
        ${(p.links || [])
          .filter((l) => l.href)
          .map((l) => `<a class="project-link" href="${l.href}" target="_blank" rel="noopener">${l.label} →</a>`)
          .join("")}
        ${!(p.links || []).some((l) => l.href) ? `<span class="project-link">COMING SOON</span>` : ""}
      </div>
    </article>`
  )
  .join("");

// 数据带
document.getElementById("statsGrid").innerHTML = DATA.stats
  .map(
    (s) => `
    <div class="stat-cell reveal">
      <div class="stat-num"><span class="counter" data-target="${s.num}">0</span><small>${s.suffix}</small></div>
      <span class="stat-label">${s.label}</span>
    </div>`
  )
  .join("");

// 联系卡片
document.getElementById("contactGrid").innerHTML = DATA.contacts
  .map((c, i) => {
    const inner = `
      <span class="cc-icon">${c.icon}</span>
      <span class="cc-label">${c.label}</span>
      <span class="cc-value">${c.value}</span>
      ${c.copyable ? `<button class="copy-btn" data-copy="${c.value}" aria-label="复制">⧉</button>` : ""}`;
    return c.href
      ? `<a class="contact-card" href="${c.href}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="contact-card">${inner}</div>`;
  })
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

/* ============ 9. 滚动入场 + 数字滚动 ============ */
function countUp(el) {
  if (el.dataset.counted) return;
  el.dataset.counted = "1";
  const target = +el.dataset.target;
  const t0 = performance.now(), dur = 1400;
  (function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}
function makeVisible(el) {
  el.classList.add("visible");
  el.querySelectorAll?.(".counter").forEach(countUp);
}
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      makeVisible(e.target);
      revealObs.unobserve(e.target);
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

// 兜底：个别环境下 IntersectionObserver 派发不及时，
// 在滚动/ resize 时手动检查视口内未显示的元素，保证内容永远可见
let rafPending = false;
function revealFallback() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    rafPending = false;
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.94 && r.bottom > 0) {
        makeVisible(el);
        revealObs.unobserve(el);
      }
    });
  });
}
window.addEventListener("scroll", revealFallback, { passive: true });
window.addEventListener("resize", revealFallback, { passive: true });
revealFallback();

/* ============ 10. 一键复制 + Toast ============ */
const toast = document.getElementById("toast");
let toastTimer;
document.addEventListener("click", async (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  e.preventDefault(); // 防止触发外层链接（如 mailto）
  try {
    await navigator.clipboard.writeText(btn.dataset.copy);
  } catch {
    // 兼容非 HTTPS 环境（如本地 file:// 打开）
    const ta = document.createElement("textarea");
    ta.value = btn.dataset.copy;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  btn.classList.add("copied");
  btn.textContent = "✓";
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    btn.classList.remove("copied");
    btn.textContent = "⧉";
  }, 1800);
});

/* ============ 11. 回到顶部 ============ */
document.getElementById("backTop").addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

/* ============ 12. AI 助手（离线关键词版） ============
   升级为真·大模型：把 getBotReply 换成一次 fetch 调用即可，
   示例见文末注释。切记 API Key 放后端，不要写进前端。 */
const chatPanel = document.getElementById("chatPanel");
const chatMsgs = document.getElementById("chatMsgs");
const chatInput = document.getElementById("chatInput");

document.getElementById("chatFab").addEventListener("click", () => {
  chatPanel.classList.add("open");
  chatInput.focus();
});
document.getElementById("chatClose").addEventListener("click", () => chatPanel.classList.remove("open"));

document.getElementById("chatChips").innerHTML = DATA.chatChips
  .map((c, i) => `<button class="chat-chip" data-i="${i}">${c}</button>`)
  .join("");
document.getElementById("chatChips").addEventListener("click", (e) => {
  const chip = e.target.closest(".chat-chip");
  if (chip) sendChat(DATA.chatChips[+chip.dataset.i]);
});

document.getElementById("chatForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const t = chatInput.value.trim();
  if (!t) return;
  chatInput.value = "";
  sendChat(t);
});

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = "msg msg-" + who;
  div.textContent = text;
  chatMsgs.appendChild(div);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function getBotReply(q) {
  const lower = q.toLowerCase();
  for (const item of DATA.chatFAQ) {
    if (item.keys.some((k) => lower.includes(k.toLowerCase()))) return item.answer;
  }
  return DATA.chatFallback;
}

async function sendChat(text) {
  addMsg(text, "user");
  const dots = document.createElement("div");
  dots.className = "msg msg-bot";
  dots.innerHTML = '<span class="typing-dots"><span></span><span></span><span></span></span>';
  chatMsgs.appendChild(dots);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
  await new Promise((r) => setTimeout(r, 650 + Math.random() * 500));
  dots.remove();
  addMsg(getBotReply(text), "bot");
}

// AI 开场白
setTimeout(() => addMsg("你好，我是朱洋意的 AI 助手。\n可以问我关于他的技能、项目或实习意向，也可以点下面的快捷问题 👇", "bot"), 1600);

/* 升级为真·大模型的示意代码（需要自建后端转发，避免泄露 Key）：
async function callRealLLM(question) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "system", content: "你是朱洋意(福建师范大学计算机专业)的AI助手，回答简洁友好" },
        { role: "user", content: question },
      ],
    }),
  });
  return (await res.json()).reply;
}
*/

/* ============ 13. 交互增强层 ============
   全部带环境探测：触屏 / 减少动画偏好下自动关闭 ============ */

const finePointer =
  matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- 13a. Hero 名字逐字入场（错峰 + 微旋转） --- */
(function heroChars() {
  const line = document.querySelector(".hero-line");
  if (!line) return;
  const text = line.textContent.trim();
  line.classList.remove("reveal-up"); // 入场交给逐字动画，避免两层动画打架
  line.innerHTML = [...text]
    .map((ch, i) => `<span class="hero-char" style="animation-delay:${1.55 + i * 0.12}s">${ch}</span>`)
    .join("");
})();

/* --- 13b. 自定义光标：琥珀点 + 跟随环，悬停可点元素时环放大 --- */
(function customCursor() {
  if (!finePointer) return;
  document.documentElement.classList.add("fine-pointer");
  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    const t = e.target.closest("a, button, input, .project-row, .skill-cell, .contact-card");
    ring.classList.toggle("hovered", !!t);
  }, { passive: true });
  addEventListener("mousedown", () => ring.classList.add("pressed"));
  addEventListener("mouseup", () => ring.classList.remove("pressed"));
  document.body.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = "0"; });
  document.body.addEventListener("mouseenter", () => { dot.style.opacity = ring.style.opacity = "1"; });

  (function follow() {
    rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; // 环带一点延迟，产生拖尾感
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();
})();

/* --- 13c. 磁吸按钮：光标靠近时按钮轻微被吸过来 --- */
(function magnetic() {
  if (!finePointer) return;
  document.querySelectorAll(".hero-actions .btn, .nav-cta, .back-top").forEach((el) => {
    el.dataset.magnetic = "1";
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.animation = "none"; // 已结束的入场动画会锁住 transform，先解除
      el.style.transition = "transform 0.15s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "";
    });
  });
})();

/* --- 13d. 文字解码特效：悬停等宽标签时字符乱序滚入 --- */
(function decodeLabels() {
  if (!finePointer) return;
  const CHARS = "!<>-_/[]{}—=+*^?#";
  function decode(el) {
    if (el.dataset.decoding) return;
    const orig = el.dataset.orig || (el.dataset.orig = el.textContent);
    el.dataset.decoding = "1";
    let frame = 0;
    const total = Math.max(12, orig.length * 2);
    const timer = setInterval(() => {
      frame++;
      const reveal = Math.floor((frame / total) * orig.length);
      el.textContent = [...orig]
        .map((ch, i) =>
          i < reveal || ch === " " ? ch : CHARS[(Math.random() * CHARS.length) | 0]
        )
        .join("");
      if (reveal >= orig.length) {
        clearInterval(timer);
        el.textContent = orig;
        delete el.dataset.decoding;
      }
    }, 28);
  }
  document.querySelectorAll(".sec-label, .nav-links a, .cc-label").forEach((el) =>
    el.addEventListener("mouseenter", () => decode(el))
  );
})();

/* --- 13e. Hero 滚动视差：内容上移淡出，星座层 slower --- */
(function heroParallax() {
  const inner = document.querySelector(".hero-inner");
  const hint = document.querySelector(".scroll-hint");
  if (!inner) return;
  let ticking = false;
  function update() {
    ticking = false;
    const y = scrollY;
    if (y > innerHeight * 1.3) return;
    inner.style.transform = `translateY(${y * 0.14}px)`;
    inner.style.opacity = Math.max(0, 1 - y / (innerHeight * 0.75));
    if (hint) hint.style.opacity = Math.max(0, 1 - y / 300);
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
})();

/* --- 13f. 彩蛋：切走标签页时换标题 --- */
(function titleEgg() {
  const origTitle = document.title;
  const awayTitle = "🌲 别走，星座还在闪";
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? awayTitle : origTitle;
  });
})();
