/* =========================================================
   Ну звісно. Я знав, що ти сюди полізеш 😏
   I knew you'd come looking in here.
   ========================================================= */

/* =========================================================
   CONFIG — edit your contacts here.
   An empty value hides that contact link.
   ========================================================= */

// TODO: прибрати перед релізом!!! тестовий доступ до адмінки через термінал:
//   login root Vv@1996!admin

const CONFIG = {
  since: 1996,
  linkedin: "https://www.linkedin.com/in/voronianskyi/",
  github: "https://github.com/gribovod",
  email: "",      // e.g. "you@example.com"
  telegram: "",   // e.g. "your_username" (without @)
};

const YEARS = new Date().getFullYear() - CONFIG.since;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   CONTENT (UA / EN)
   ========================================================= */
const I18N = {
  uk: {
    title: "Вадим Воронянський — Full-Stack · ШІ · Embedded · ПЛК",
    "nav.about": "Про мене", "nav.stack": "Стек", "nav.skills": "Напрямки",
    "nav.path": "Шлях", "nav.terminal": "Термінал", "nav.contact": "Контакти",
    "hero.hello": "Привіт, світ. Я —",
    "hero.first": "Вадим", "hero.last": "Воронянський",
    "hero.tagline": "Пишу код з <b>1996 року</b>. Від регістрів мікроконтролера та ПЛК на заводі — до хмарних API, React-інтерфейсів і <b>AI-агентів</b>. Я проходжу весь стек наскрізь.",
    "hero.cta1": "Зв'язатися", "hero.cta2": "Відкрити термінал",
    roles: [
      "Full-Stack розробник .NET Core + React",
      "Експерт зі штучного інтелекту",
      "Системний адміністратор",
      "Embedded-інженер",
      "Розробник ПЛК · SCADA · HMI",
      "Людина, яка може все в IT",
    ],
    "stats.years": "років у коді", "stats.domains": "напрямків IT",
    "stats.first": "рік першого рядка коду", "stats.curiosity": "цікавості",
    "about.title": "Про мене",
    "about.p1": "Я — інженер, якому тісно в межах однієї професії. Мій основний фокус — <span class=\"hl\">full-stack розробка на .NET Core + React</span>: архітектура, бекенд, бази даних, швидкі та зручні інтерфейси.",
    "about.p2": "Паралельно я тримаю в тонусі сервери та мережі, пишу прошивки для мікроконтролерів, програмую промислові та мікро-ПЛК, будую SCADA-системи і HMI-панелі. А <span class=\"hl\">штучний інтелект</span> — це місце, де всі ці світи сходяться: я вбудовую LLM, RAG та AI-агентів у реальні продукти й процеси.",
    "about.quote": "«Якщо задачу можна автоматизувати — вона буде автоматизована. Якщо ні — значить, я ще за неї не брався.»",
    "stack.title": "Справжній full-stack",
    "stack.lead": "Більшість full-stack розробників закінчуються на базі даних. <b>Мій стек починається з кремнію</b> і закінчується штучним інтелектом — і на кожному рівні я працюю сам.",
    "stack.me": "я тут ✓",
    "skills.title": "Напрямки",
    "path.title": "Шлях",
    "term.title": "Поговоримо мовою машин",
    "term.lead": "Справжній термінал. Наберіть <b>help</b> — або натисніть на команду нижче.",
    "contact.title": "Контакти",
    "contact.head": "Маєте «неможливу» задачу?",
    "contact.text": "Складний проєкт на перетині софту, заліза та штучного інтелекту — саме те, що я люблю. Напишіть мені.",
    "footer.made": "Зроблено вручну: HTML + CSS + JS, без фреймворків.",
    "footer.hint": "↑↑↓↓←→←→BA",
  },
  en: {
    title: "Vadym Voronianskyi — Full-Stack · AI · Embedded · PLC",
    "nav.about": "About", "nav.stack": "Stack", "nav.skills": "Expertise",
    "nav.path": "Journey", "nav.terminal": "Terminal", "nav.contact": "Contact",
    "hero.hello": "Hello, world. I'm",
    "hero.first": "Vadym", "hero.last": "Voronianskyi",
    "hero.tagline": "Writing code since <b>1996</b>. From microcontroller registers and factory-floor PLCs to cloud APIs, React UIs and <b>AI agents</b>. I go through the entire stack, end to end.",
    "hero.cta1": "Get in touch", "hero.cta2": "Open terminal",
    roles: [
      "Full-Stack Developer .NET Core + React",
      "Artificial Intelligence Expert",
      "System Administrator",
      "Embedded Engineer",
      "PLC · SCADA · HMI Developer",
      "The person who can do anything in IT",
    ],
    "stats.years": "years of coding", "stats.domains": "IT domains",
    "stats.first": "first line of code", "stats.curiosity": "curiosity",
    "about.title": "About me",
    "about.p1": "I'm an engineer who doesn't fit into a single profession. My main focus is <span class=\"hl\">full-stack development with .NET Core + React</span>: architecture, backend, databases, fast and friendly interfaces.",
    "about.p2": "Along the way I keep servers and networks in shape, write firmware for microcontrollers, program industrial and micro PLCs, and build SCADA systems and HMI panels. And <span class=\"hl\">artificial intelligence</span> is where all those worlds meet: I embed LLMs, RAG and AI agents into real products and processes.",
    "about.quote": "“If a task can be automated, it will be. If it can't — I just haven't taken it on yet.”",
    "stack.title": "Truly full-stack",
    "stack.lead": "Most full-stack developers stop at the database. <b>My stack starts at silicon</b> and ends at artificial intelligence — and I work hands-on at every layer.",
    "stack.me": "I'm here ✓",
    "skills.title": "Expertise",
    "path.title": "Journey",
    "term.title": "Let's speak machine",
    "term.lead": "A real terminal. Type <b>help</b> — or tap a command below.",
    "contact.title": "Contact",
    "contact.head": "Got an “impossible” task?",
    "contact.text": "A tough project where software, hardware and artificial intelligence meet is exactly what I love. Drop me a line.",
    "footer.made": "Hand-crafted: HTML + CSS + JS, no frameworks.",
    "footer.hint": "↑↑↓↓←→←→BA",
  },
};

const LAYERS = [
  { c: "#f472b6", uk: ["Штучний інтелект", "LLM, RAG, AI-агенти, MCP, автоматизація процесів"], en: ["Artificial Intelligence", "LLMs, RAG, AI agents, MCP, process automation"] },
  { c: "#c084fc", uk: ["Frontend", "React, TypeScript, SPA, адаптивні інтерфейси"], en: ["Frontend", "React, TypeScript, SPA, responsive UI"] },
  { c: "#a78bfa", uk: ["Backend", ".NET Core, C#, REST API, мікросервіси, бази даних"], en: ["Backend", ".NET Core, C#, REST APIs, microservices, databases"] },
  { c: "#22d3ee", uk: ["Інфраструктура", "Linux / Windows Server, IIS, Docker, мережі, CI/CD"], en: ["Infrastructure", "Linux / Windows Server, IIS, Docker, networking, CI/CD"] },
  { c: "#2dd4bf", uk: ["Диспетчеризація", "SCADA-системи, HMI-панелі оператора"], en: ["Supervisory", "SCADA systems, operator HMI panels"] },
  { c: "#4ade80", uk: ["Промислова автоматика", "Промислові та мікро-ПЛК, IEC 61131-3, Modbus, OPC UA"], en: ["Industrial automation", "Industrial & micro PLCs, IEC 61131-3, Modbus, OPC UA"] },
  { c: "#fbbf24", uk: ["Кремній", "Мікроконтролери, C / C++, периферія, протоколи"], en: ["Silicon", "Microcontrollers, C / C++, peripherals, protocols"] },
];

const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
  ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2-2.2-.8 2.2-.8zM5 15l.6 1.4 1.4.6-1.4.6L5 19l-.6-1.4L3 17l1.4-.6z"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"/></svg>',
  plc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5v14M21 5v14M3 9h4M9 9h6M17 9h4M7 6v6M9 6v6M15 6v6M17 6v6M3 16h7M14 16h7"/><circle cx="12" cy="16" r="2"/></svg>',
  chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',
};

const SKILLS = [
  {
    icon: "code", c: "#22d3ee", wide: true,
    tags: ["C#", ".NET Core / .NET 8+", "ASP.NET Core", "Entity Framework", "SQL Server", "PostgreSQL", "React", "TypeScript", "REST / SignalR", "Docker"],
    uk: ["основний", "Full-Stack .NET Core + React", "Проєктую та розробляю веб-системи повного циклу: API, мікросервіси, складна бізнес-логіка, бази даних і швидкі SPA-інтерфейси."],
    en: ["main", "Full-Stack .NET Core + React", "I design and build end-to-end web systems: APIs, microservices, complex business logic, databases and fast SPA interfaces."],
  },
  {
    icon: "ai", c: "#c084fc", wide: true, featured: true,
    tags: ["LLM", "RAG", "AI Agents", "MCP", "Prompt Engineering", "Claude / OpenAI API", "Semantic Kernel", "Vector DB", "AI-assisted dev"],
    uk: ["суперсила", "Штучний інтелект", "LLM-інтеграції, RAG-системи, AI-агенти та MCP-сервери. Перетворюю ШІ з модної іграшки на робочий інструмент, який економить людям тижні."],
    en: ["superpower", "Artificial Intelligence", "LLM integrations, RAG systems, AI agents and MCP servers. I turn AI from a shiny toy into a working tool that saves people weeks."],
  },
  {
    icon: "server", c: "#2dd4bf",
    tags: ["Windows Server", "Linux", "IIS", "Active Directory", "Networking", "Virtualization", "Traefik / Nginx", "CI/CD"],
    uk: ["другорядний", "Системне адміністрування", "Сервери, мережі, віртуалізація, деплой і моніторинг — інфраструктура, яка просто працює."],
    en: ["secondary", "System Administration", "Servers, networks, virtualization, deployment and monitoring — infrastructure that just works."],
  },
  {
    icon: "plc", c: "#4ade80",
    tags: ["PLC", "Micro PLC", "IEC 61131-3", "LD / FBD / ST", "SCADA", "HMI", "Modbus RTU/TCP", "OPC UA"],
    uk: ["індустрія", "ПЛК · SCADA · HMI", "Програми для промислових та мікро-ПЛК, SCADA-диспетчеризація, HMI-панелі оператора — від датчика до диспетчерської."],
    en: ["industry", "PLC · SCADA · HMI", "Software for industrial and micro PLCs, SCADA supervision, operator HMI panels — from sensor to control room."],
  },
  {
    icon: "chip", c: "#fbbf24",
    tags: ["C / C++", "AVR", "STM32", "ESP32", "UART / SPI / I²C", "RS-485", "RTOS", "IoT"],
    uk: ["залізо", "Embedded", "Прошивки для мікроконтролерів, робота з периферією та протоколами, пристрої, що розмовляють із хмарою."],
    en: ["hardware", "Embedded", "Microcontroller firmware, peripherals and protocols, devices that talk to the cloud."],
  },
];

const TIMELINE = [
  { y: "1996", uk: ["Перший рядок коду", "Перша програма. Відтоді комп'ютер для мене — не інструмент, а стихія."], en: ["First line of code", "My first program. Since then, a computer has been my element, not just a tool."] },
  { y: "2000s", uk: ["Залізо та автоматика", "Мікроконтролери, ПЛК, промислові системи — код, що керує реальним світом."], en: ["Hardware & automation", "Microcontrollers, PLCs, industrial systems — code that controls the real world."] },
  { y: "2010s", uk: ["Інфраструктура та .NET", "Сервери, мережі та бізнес-системи на .NET для реальних компаній."], en: ["Infrastructure & .NET", "Servers, networks and .NET business systems for real companies."] },
  { y: "2016+", uk: [".NET Core + React", "Full-stack розробка сучасних веб-платформ — мій основний фокус."], en: [".NET Core + React", "Full-stack development of modern web platforms — my main focus."] },
  { y: "2023+", uk: ["Ера ШІ", "LLM, RAG, AI-агенти — і ШІ в кожному проєкті, якого я торкаюся."], en: ["The AI era", "LLMs, RAG, AI agents — and AI in every project I touch."] },
  { y: "∞", uk: ["Далі — більше", "Наступний рядок коду вже пишеться."], en: ["More to come", "The next line of code is already being written."] },
];

/* =========================================================
   HELPERS
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const storage = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

let lang = storage.get("lang") || ((navigator.language || "").toLowerCase().startsWith("en") ? "en" : "uk");
if (!I18N[lang]) lang = "uk";
const t = (k) => I18N[lang][k] ?? k;

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
const observeReveal = (root = document) => $$(".reveal:not(.in)", root).forEach((el) => revealObs.observe(el));

/* =========================================================
   RENDER DYNAMIC SECTIONS
   ========================================================= */
function renderLayers() {
  $("#layers").innerHTML = LAYERS.map((l, i) => `
    <div class="layer reveal" style="--c:${l.c};transition-delay:${i * 60}ms">
      <div class="layer-name">${l[lang][0]}</div>
      <div class="layer-desc">${l[lang][1]}</div>
      <div class="layer-me">${t("stack.me")}</div>
    </div>`).join("");
}

function renderSkills() {
  $("#cards").innerHTML = SKILLS.map((s, i) => `
    <article class="card reveal${s.wide ? " wide" : ""}${s.featured ? " featured" : ""}" style="--c:${s.c};transition-delay:${(i % 3) * 80}ms">
      <div class="card-top">
        <div class="card-icon">${ICONS[s.icon]}</div>
        <span class="badge">${s[lang][0]}</span>
      </div>
      <h3>${s[lang][1]}</h3>
      <p>${s[lang][2]}</p>
      <div class="tags">${s.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>
    </article>`).join("");
  bindTilt();
}

function renderTimeline() {
  $("#timeline").innerHTML = TIMELINE.map((e) => `
    <li class="tl reveal">
      <div class="tl-box">
        <div class="tl-year">${e.y}</div>
        <h3>${e[lang][0]}</h3>
        <p>${e[lang][1]}</p>
      </div>
    </li>`).join("");
}

const CONTACT_ICONS = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.82-.26.82-.57v-2.04c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M3 6l9 7 9-7"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 15.27l-.4 5.6c.57 0 .82-.24 1.12-.54l2.68-2.56 5.56 4.07c1.02.57 1.74.27 2.02-.94l3.66-17.15c.33-1.51-.54-2.1-1.53-1.73L1.4 10.24c-1.47.57-1.45 1.39-.25 1.76l5.5 1.71L19.43 5.7c.6-.4 1.15-.18.7.22z"/></svg>',
};

function contactList() {
  const list = [];
  if (CONFIG.linkedin) list.push(["linkedin", "LinkedIn", CONFIG.linkedin]);
  if (CONFIG.github) list.push(["github", "GitHub", CONFIG.github]);
  if (CONFIG.email) list.push(["email", CONFIG.email, `mailto:${CONFIG.email}`]);
  if (CONFIG.telegram) list.push(["telegram", "Telegram", `https://t.me/${CONFIG.telegram}`]);
  return list;
}

function renderContacts() {
  $("#contactLinks").innerHTML = contactList().map(([k, label, href]) =>
    `<a href="${esc(href)}" target="_blank" rel="noopener">${CONTACT_ICONS[k]}<span>${esc(label)}</span></a>`).join("");
}

/* =========================================================
   I18N APPLY
   ========================================================= */
function applyLang(next) {
  lang = next;
  storage.set("lang", lang);
  document.documentElement.lang = lang === "uk" ? "uk" : "en";
  document.title = t("title");
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
  renderLayers(); renderSkills(); renderTimeline(); renderContacts();
  observeReveal();
  typer.restart();
  term.boot();
}

/* =========================================================
   TYPED ROLES
   ========================================================= */
const typer = (() => {
  const el = $("#typed");
  let timer, ri = 0, ci = 0, del = false;
  function tick() {
    const roles = t("roles");
    const word = roles[ri % roles.length];
    if (reduceMotion) { el.textContent = word; ri++; timer = setTimeout(tick, 2500); return; }
    ci += del ? -1 : 1;
    el.textContent = word.slice(0, ci);
    let delay = del ? 28 : 55 + Math.random() * 50;
    if (!del && ci === word.length) { del = true; delay = 1900; }
    else if (del && ci === 0) { del = false; ri++; delay = 350; }
    timer = setTimeout(tick, delay);
  }
  return { restart() { clearTimeout(timer); ri = 0; ci = 0; del = false; tick(); } };
})();

/* =========================================================
   COUNTERS
   ========================================================= */
const countObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    countObs.unobserve(e.target);
    const el = e.target;
    const to = el.dataset.to === "years" ? YEARS : +el.dataset.to;
    if (reduceMotion) { el.textContent = to; return; }
    const from = el.hasAttribute("data-plain") ? 1946 : 0; // 1946 — ENIAC :)
    const dur = 1600, start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const v = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      el.textContent = v;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.5 });
$$(".count").forEach((el) => countObs.observe(el));

/* =========================================================
   CARD TILT + SPOTLIGHT
   ========================================================= */
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
function bindTilt() {
  if (!canHover) return;
  $$(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
      if (!reduceMotion) card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

/* =========================================================
   BACKGROUND: neural network
   ========================================================= */
(() => {
  const cv = $("#bg"), ctx = cv.getContext("2d");
  let w, h, dpr, nodes = [];
  const mouse = { x: -9999, y: -9999 };
  const COLORS = ["34,211,238", "168,85,247", "244,114,182"];
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(120, Math.floor((w * h) / 13000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6, c: COLORS[(Math.random() * COLORS.length) | 0],
    }));
  }
  const LINK = 130;
  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
      if (d < 180) { p.x += dx * 0.004; p.y += dy * 0.004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - d / LINK) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (md < 180) {
        ctx.strokeStyle = `rgba(${a.c},${(1 - md / 180) * 0.5})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
      ctx.fillStyle = `rgba(${a.c},.85)`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduceMotion) requestAnimationFrame(frame);
  }
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
  resize(); frame();
})();

/* =========================================================
   HERO ORBITS (labels always stay upright)
   ========================================================= */
(() => {
  const wrap = $(".orbit-wrap");
  const rings = $$(".orbit[data-r]").map((o) => ({
    r: +o.dataset.r, speed: +o.dataset.speed,
    items: $$("i", o).map((i) => ({ el: i, a: +i.dataset.a })),
  }));
  const t0 = performance.now();
  function place(now) {
    const s = wrap.clientWidth, sec = (now - t0) / 1000;
    for (const ring of rings) {
      const R = s * ring.r;
      for (const it of ring.items) {
        const th = ((it.a + ring.speed * sec) * Math.PI) / 180;
        it.el.style.transform = `translate(${(Math.cos(th) * R).toFixed(1)}px, ${(Math.sin(th) * R).toFixed(1)}px)`;
      }
    }
    if (!reduceMotion) requestAnimationFrame(place);
  }
  requestAnimationFrame(place);
  if (reduceMotion) addEventListener("resize", () => place(t0));
})();

/* =========================================================
   MATRIX EASTER EGG
   ========================================================= */
const matrix = (() => {
  const cv = $("#matrix"), ctx = cv.getContext("2d");
  let running = false;
  const chars = "アイウエオカキクケコサシスセソ01VVЇЄҐ<>{}#$.NET∑λ";
  function run(ms = 7000) {
    if (running || reduceMotion) return;
    running = true;
    const w = (cv.width = innerWidth), h = (cv.height = innerHeight), fs = 16;
    const cols = Array(Math.ceil(w / fs)).fill(0).map(() => Math.random() * -50);
    cv.classList.add("on");
    const end = performance.now() + ms;
    const draw = (now) => {
      ctx.fillStyle = "rgba(6,8,15,.08)"; ctx.fillRect(0, 0, w, h);
      ctx.font = `${fs}px JetBrains Mono, monospace`;
      cols.forEach((y, i) => {
        ctx.fillStyle = Math.random() > 0.97 ? "#e6fffb" : "#22d3ee";
        ctx.fillText(chars[(Math.random() * chars.length) | 0], i * fs, y * fs);
        cols[i] = y * fs > h && Math.random() > 0.975 ? 0 : y + 1;
      });
      if (now < end) requestAnimationFrame(draw);
      else { cv.classList.remove("on"); setTimeout(() => { ctx.clearRect(0, 0, w, h); running = false; }, 700); }
    };
    requestAnimationFrame(draw);
  }
  const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let pos = 0;
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = k === code[pos] ? pos + 1 : (k === code[0] ? 1 : 0);
    if (pos === code.length) { pos = 0; run(); }
  });
  return { run };
})();

/* =========================================================
   TERMINAL
   ========================================================= */
const term = (() => {
  const body = $("#termBody"), form = $("#termForm"), input = $("#termIn");
  const history = []; let hi = 0;

  const out = (html, cls = "") => {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    d.innerHTML = html;
    body.appendChild(d);
    body.scrollTop = body.scrollHeight;
  };

  const L = () => lang === "uk";
  const pad = (s, n) => s + " ".repeat(Math.max(1, n - s.length));

  const HELP = () => {
    const rows = L() ? [
      ["whoami", "хто я"], ["neofetch", "інформація про систему"], ["skills", "мої напрямки"],
      ["stack", "стек від кремнію до ШІ"], ["ai", "про штучний інтелект"], ["plc", "промислова автоматика"],
      ["years", "скільки років у коді"], ["contact", "як зі мною зв'язатися"], ["lang en|uk", "змінити мову"],
      ["matrix", "🐇"], ["clear", "очистити екран"],
    ] : [
      ["whoami", "who am I"], ["neofetch", "system info"], ["skills", "my areas of expertise"],
      ["stack", "the stack, silicon to AI"], ["ai", "about artificial intelligence"], ["plc", "industrial automation"],
      ["years", "how long I've been coding"], ["contact", "how to reach me"], ["lang en|uk", "switch language"],
      ["matrix", "🐇"], ["clear", "clear the screen"],
    ];
    return `<span class="info">${L() ? "Доступні команди:" : "Available commands:"}</span>\n` +
      rows.map(([c, d]) => `  <span class="ok">${pad(c, 13)}</span><span class="dim">${d}</span>`).join("\n") +
      `\n<span class="dim">${L() ? "Є ще кілька прихованих. Шукайте 😉" : "There are a few hidden ones too. Go find them 😉"}</span>`;
  };

  // Так-так, знайшов команди. Я знав, що ти сюди полізеш 😏
  // Але це лише ті, які я ДОЗВОЛИВ тобі знайти. Справжні — зашифровані.
  const CMDS = {
    help: HELP,
    whoami: () => L()
      ? `<span class="vio">Вадим Воронянський</span> — інженер з ${YEARS}+ роками досвіду.\nОсновне: Full-Stack .NET Core + React.\nДругорядне: системне адміністрування.\nА ще: ШІ, embedded, ПЛК, SCADA, HMI.\n<span class="dim">TL;DR: якщо воно рахує біти — я з ним працював.</span>`
      : `<span class="vio">Vadym Voronianskyi</span> — engineer with ${YEARS}+ years of experience.\nMain: Full-Stack .NET Core + React.\nSecondary: system administration.\nAlso: AI, embedded, PLC, SCADA, HMI.\n<span class="dim">TL;DR: if it counts bits — I've worked with it.</span>`,
    neofetch: () => {
      const art = [
        "<span class=\"info\">__     __ __     __</span>",
        "<span class=\"info\">\\ \\   / / \\ \\   / /</span>",
        "<span class=\"vio\"> \\ \\ / /   \\ \\ / / </span>",
        "<span class=\"vio\">  \\ V /     \\ V /  </span>",
        "<span class=\"ok\">   \\_/       \\_/   </span>",
        "                   ", "                   ", "                   ",
      ];
      const info = [
        `<span class="ok">vadym</span>@<span class="ok">universe</span>`,
        "------------------",
        `<span class="info">OS:</span> Brain v${CONFIG.since}.${YEARS}`,
        `<span class="info">Uptime:</span> ${YEARS} ${L() ? "років" : "years"}`,
        `<span class="info">Kernel:</span> .NET Core + React`,
        `<span class="info">Shell:</span> C# · TypeScript · C · ST · LD`,
        `<span class="info">Modules:</span> AI, SysAdmin, Embedded, PLC, SCADA, HMI`,
        `<span class="info">Coffee:</span> <span class="warn">██████████</span> 100%`,
      ];
      return art.map((a, i) => `${a}   ${info[i]}`).join("\n");
    },
    skills: () => SKILLS.map((s) => `<span class="ok">▸</span> <span style="color:${s.c}">${s[lang][1]}</span> <span class="dim">[${s[lang][0]}]</span>\n  ${s.tags.join(" · ")}`).join("\n"),
    stack: () => LAYERS.map((l, i) => `${i === 0 ? "┌" : i === LAYERS.length - 1 ? "└" : "├"}─ <span style="color:${l.c}">${pad(l[lang][0], 24)}</span><span class="ok">✓</span>`).join("\n"),
    ai: () => L()
      ? `<span class="vio">ШІ — моя суперсила.</span>\n▸ інтеграція LLM у продукти та бізнес-процеси\n▸ RAG: ваші документи + розумний пошук\n▸ AI-агенти та MCP-сервери\n▸ розробка з AI-асистентами — у рази швидше\n<span class="dim">Цей сайт, до речі, теж створено разом зі ШІ 🤖</span>`
      : `<span class="vio">AI is my superpower.</span>\n▸ LLM integration into products and business processes\n▸ RAG: your documents + smart search\n▸ AI agents and MCP servers\n▸ AI-assisted development — many times faster\n<span class="dim">By the way, this site was built together with AI too 🤖</span>`,
    plc: () => L()
      ? `<span class="ok">|--[ ]--[ ]--------( )--|</span>   <span class="dim">// ladder logic</span>\n<span class="ok">|  I0.0  I0.1       Q0.0 |</span>\nПромислові та мікро-ПЛК, SCADA, HMI-панелі.\nModbus RTU/TCP, OPC UA, RS-485.\n<span class="dim">Від датчика на об'єкті — до дашборда в браузері.</span>`
      : `<span class="ok">|--[ ]--[ ]--------( )--|</span>   <span class="dim">// ladder logic</span>\n<span class="ok">|  I0.0  I0.1       Q0.0 |</span>\nIndustrial & micro PLCs, SCADA, HMI panels.\nModbus RTU/TCP, OPC UA, RS-485.\n<span class="dim">From a field sensor to a dashboard in the browser.</span>`,
    years: () => {
      const days = Math.floor((Date.now() - new Date(CONFIG.since, 0, 1)) / 864e5);
      return L()
        ? `<span class="warn">${YEARS}</span> років · <span class="warn">${days.toLocaleString("uk-UA")}</span> днів у коді.\n<span class="dim">Перший рядок — ${CONFIG.since}. Останній — ще не написаний.</span>`
        : `<span class="warn">${YEARS}</span> years · <span class="warn">${days.toLocaleString("en-US")}</span> days of coding.\n<span class="dim">First line — ${CONFIG.since}. The last one — not written yet.</span>`;
    },
    contact: () => contactList().map(([k, label, href]) => `<span class="ok">▸</span> ${pad(k, 10)}<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label === "LinkedIn" || label === "GitHub" || label === "Telegram" ? href.replace(/^https?:\/\//, "") : label)}</a>`).join("\n"),
    date: () => new Date().toLocaleString(L() ? "uk-UA" : "en-US"),
    ls: () => `<span class="info">about.txt</span>  <span class="info">skills/</span>  <span class="info">projects/</span>  <span class="warn">secret.txt</span>`,
    "cat secret.txt": () => L() ? "Секрет успіху: кава ☕ + цікавість + ${y} років практики.".replace("${y}", YEARS) : "The secret: coffee ☕ + curiosity + ${y} years of practice.".replace("${y}", YEARS),
    "cat about.txt": () => CMDS.whoami(),
    ping: () => "PONG 🏓 — 0.42 ms",
    hire: () => { setTimeout(() => $("#contact").scrollIntoView({ behavior: "smooth" }), 400); return `<span class="ok">${L() ? "Чудове рішення! Переходимо до контактів…" : "Excellent decision! Heading to contacts…"}</span>`; },
    exit: () => L() ? "З цього всесвіту немає виходу. Але є кнопка «Контакти» 😉" : "There's no exit from this universe. But there is a “Contact” button 😉",
    matrix: () => { matrix.run(); return `<span class="ok">Wake up, Neo…</span>`; },
    clear: () => { body.innerHTML = ""; return null; },
  };

  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    out(esc(cmd), "cmd");
    const lc = cmd.toLowerCase().replace(/\s+/g, " ");
    let res;
    if (lc.startsWith("sudo")) {
      res = L() ? `<span class="warn">[sudo]</span> пароль не потрібен — тут ви вже root 😎\nАле найкраща sudo-команда: <span class="ok">hire</span>`
                : `<span class="warn">[sudo]</span> no password needed — you're already root here 😎\nBut the best sudo command is: <span class="ok">hire</span>`;
    } else if (lc.startsWith("rm ")) {
      res = `<span class="err">${L() ? "Гарна спроба. Бекапи налаштовував сисадмін 😉" : "Nice try. The backups were set up by a sysadmin 😉"}</span>`;
    } else if (lc.startsWith("lang")) {
      const arg = lc.split(" ")[1];
      const next = arg === "en" ? "en" : (arg === "uk" || arg === "ua") ? "uk" : null;
      if (next) { setTimeout(() => applyLang(next), 150); res = `<span class="ok">OK → ${next.toUpperCase()}</span>`; }
      else res = `<span class="warn">lang en | lang uk</span>`;
    } else if (CMDS[lc]) {
      res = CMDS[lc]();
    } else if (secret.handle(lc, cmd)) {
      res = null;
    } else {
      res = `<span class="err">${L() ? "команду не знайдено" : "command not found"}: ${esc(cmd)}</span>. ${L() ? "Спробуйте" : "Try"} <span class="ok">help</span>`;
    }
    if (res !== null && res !== undefined) out(res);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value;
    if (v.trim()) { history.push(v); hi = history.length; }
    input.value = "";
    run(v);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && hi > 0) { hi--; input.value = history[hi]; e.preventDefault(); }
    else if (e.key === "ArrowDown") { hi = Math.min(history.length, hi + 1); input.value = history[hi] ?? ""; e.preventDefault(); }
    else if (e.key === "Tab") {
      e.preventDefault();
      const m = Object.keys(CMDS).filter((k) => !k.includes(" ") && k.startsWith(input.value.toLowerCase()));
      if (m.length === 1) input.value = m[0];
    }
  });
  $("#term").addEventListener("click", (e) => { if (!e.target.closest("a") && !window.getSelection().toString()) input.focus({ preventScroll: true }); });

  // quick-command chips
  const chips = document.createElement("div");
  chips.className = "chips";
  ["help", "whoami", "neofetch", "skills", "stack", "ai", "plc", "years", "contact", "matrix"].forEach((c) => {
    const b = document.createElement("button");
    b.type = "button"; b.textContent = c;
    b.addEventListener("click", () => run(c));
    chips.appendChild(b);
  });
  $("#term").after(chips);

  function boot() {
    body.innerHTML = "";
    out(`<span class="dim">VV-OS ${CONFIG.since}.${YEARS} (tty1) — ${new Date().toLocaleDateString(lang === "uk" ? "uk-UA" : "en-US")}</span>`);
    out(L() ? `Ласкаво просимо! Наберіть <span class="ok">help</span>, щоб побачити команди.` : `Welcome! Type <span class="ok">help</span> to see the commands.`);
  }
  return { boot, run, out, L };
})();

/* =========================================================
   NAV
   ========================================================= */
(() => {
  const nav = $("#nav"), links = $("#navLinks"), burger = $("#burger");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  });
  $$(".lang button").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  const navMap = new Map($$(".nav-links a").map((a) => [a.getAttribute("href").slice(1), a]));
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navMap.forEach((a) => a.classList.remove("active"));
        navMap.get(e.target.id)?.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navMap.forEach((_, id) => { const s = document.getElementById(id); if (s) secObs.observe(s); });
  $("#year").textContent = new Date().getFullYear();
})();

/* =========================================================
   Тут нічого цікавого. Чесно. Можеш гортати далі 🙂
   ========================================================= */
const secret = (() => {
  const Q = {"T":{"uk":{"r1":"psmWkBnmzIaD6Yzn14ezGfudhvkR6Y7m64aB6Ysadoe46YcWh9ThgRnn14e/6Y3m7nbhhumIhu3gr+mBhuPgsfuNdqauobY8XIam6Ynm5YaB6Y3m7IaBGQgZZXbBpquIXIaR6K/m7HbhhemIhuXhhxnm6YaE6Lnn3oaP6Yrm6Hbguei5huLhg+mGdoaL6Yfm4oeyGdu2wnbhiemNhuMR6Lvm5oaLFRnn2YaLGemPhujhiumIdoaA6Ynn0YaJ6Lvn2nbhhui2hujgv+mDh9fhh+i2eFw76avnwIaF6Ybm6IaD6K/m4oe9GemEhuThh+mCh9oR6LoWhvThrOmWhsrhv+mrhsbhoumwdoaM6YkWh9fgu+mIh9bgr+mLh9DgrxkehuvhjBnn1Iey6LsfeA==","r2":"tMq0Gemph9bhiemEhu7hgui6huvhhxgWZ28IDxnn1XbhjemEh8DhgOmMhujhi+ighu8fMzPmwYaB6Yrm5oaF6YPm5nYDFgoWpsm+lDPmwYaB6Yvm6IaF6YEWhuXhh+mEhujguei5h9TgtRnm6oaP6Yvm6Ie/GXRZMjREShcWhsvhh+mKhuPguRnn0oey6YTm7Ie36K/nwXoR6Lbm7IaBGeixhu7gu+mGh8IRcVZaMj9fXhlkMzFYSk1TJCUOGemShujguemKhubguwMWZi4OBg==","r3":"tMq0Gemyd3bhm+mOdoe46Yfm74aM6YcWhunguemIh9Hhgei0hubhixnn1oaE6YrnwIew6Lvn1nbhpumthswfMzPmwYaB6Yrm5oaF6YPm5nYCFgoWpsmVrzPmxIen6Y3m6YaP6YvnwIaF6LUWhuvhiRnm5YaP6YLm6IaD6YTm43bhhumOh9ThiemLhuvgthnm4IaJ6Lvn1Ie+FRnm5Iew6Yzn14aD6K/n1IeyGeigdoaD6Ljn2oaP6Yrm6Hbgu+mGhuzhh+mFhugfGemmhu3hjBnm/oa3Gei2hubgvOi1h8IR6YsWh97gr+i3h9ThhOmGhuLgv+i5h9Thg+mIhuTgr+mPbHYBQQYJ","win":"psm+vxnmzIaj6azm94aTGemphvbhp+mvhsLhrOmrhsgQM+mZdoaG6YTm5oaDFRnn34aPGei0hu4R6Ljn2IaF6YEWhunhh+mNh8DhjumDh94fGemwdoaG6YTm5oaDFRnn34aPGemCh8DhgOmChuPgsRnm4oaPGemMh8DhhOiwh9kfMzPmwYaB6Yjm44ex6YEWhuvhiemFhujguemIhuLguhUWhuvhiemHh9bhiemEh97hgQMWdjVdWFBbdoaT6Yvm6IelGemwhuoW6LY=","hack":"hsngr+mChuzhgui4h9HhjOmLhuvgthnm4oaPGU9AeztQUFdQJDdcXAMEZHbTuZ/08Yav6Yjn04en6Y0Wh9Lhieiih9bhi+mIhu3hiRkWtMC526++tMC526++tMC526++tMC526++tMC526++dmcBCRz08YaR6Yfm4Ye56YHn0oex6Yfm5IaL6YkWeTNFWhZFPjdVVk4WdrSnsdug3rSnsdug3rSnsdug3rSnsdug3rSnsdug3nYACQkTlPFwenpzBQURfmt3GAJ0fRnUysIRGemthubguOmMhubhi+mIdoaO6Lnm6Iew6YHm6oaPFRlEOTlFFw==","gotcha":"tNaX6Y/m5oex6Lvn1Ye/Gcmpztk7M8mp2PUR6abmyIau6anmxIaQ6ZYXdoaeGemBhuvhiemEenbgsOmIdoez6YEWhunhh+mNh8DhjumDh94R6LoWhuzhh+mCdoenGemBhuvhiemPhuLhjOi+doe36Yzm73bzkumJhubguemIhu3gtfuNeFzhmOmJh9bhiemEhuDhhOighu8R6Lzm5oaL6Yzn1nbhhOmDdoaD6Yvm6IaF6YHn1Ie9GemJhubguemIhu3grxnm4Xbhg+mIhurhjOmLh9Thiei2h8DhixnU1sIR6Ynm7YaEGemBhuYR6L/nwIaL6Ynm5Ien6Ljn1Ie9GRIHZmYR6Y3m6Hbhg+mGh9bhhemOeFw76Zzm6Ie26Yzn3nbguOmJh9bhiemEhuDhhOighu8R6L7m44aK6Yzm64aF6Y8Jdoaj6K/m4oaL6Lnm7oaIGemMhujhhOi3hujhgui6dn53CAsfdoenGemEhu7hg+mIhuvhiemPbHYRT08YJyNUSk0efw==","tamper":"hvPhgei0h9bhhxnU1sIR6YbnwIaF6Ybn1oaB6Yvm7oaDGVVZNTddak1ZJDdWXAYWpsmptjPm+XbhjumLhubhixUWh9/hhxnn1IaJGemPdoez6Lrm4oaJGemJhujhguighuHhjOi+eHbhqemNhuMR6Ljm44ex6Lvm7oe16K/m7IaB6Lvm7nbhi+mOhuLhiei4doez6K/m7Ye96YPm7nbgvumDh9fhhOmOhuofGU9AeCRUSlxCfn8R27midoenGemEhunhjOi2huPhjRc=","nope":"hsvgrxUWhuvhjBnn1IaEGcmpz9QR6aTm5oaC6Ynm4oaB6Lvm7nbhjumGhuXhiemChuzgugMWICAfSExTJSIZEBnn1Xbhg+mIhuvguOmIhu3grxc="},"en":{"r1":"psmWkBlnIzNCTRnU1sp4GVJYMyERQFZDcTIRWlZbM3ZCV1ZZJj9fXtu2y3bBpqG5XFxjUF1SOjMRCBYFdqauq4c8Aj5UGUBTNyQRVl8WOy8RX1BEJSIRVVBYM3ZeXxlVOTJUGdu2wnZTTE0WIj5UGU5XL3ZQGXpmA3ZCXFxFdj9FFzM8Ai9BXBlCPjMRWFdFITNDGVBYdiJZXBliEwR8cHd3GnZeVxlCPjMRSVhRM3YZV1ZCdj5US1wfeA==","r2":"tMq0GXpZJCRUWk0XdmcIAA8WPzgRW1BYNyRIFzM8BD9VXVVTdmQeChnGydmcM39XNSJeS1BTJXZCSVxXPXZ8Vl1UIyUfGW5ePzVZGV9DODVFUFZYdjVeXVwWJDNQXUoWHjldXVBYMXZjXF5fJSJUS0oJdhBeS1RXImwRCUEJaQ==","r3":"tMq0GWBTJXcRYFZDdjxESk0WJDNQXRlXdgZ9ehlEMzFYSk1TJHg7M2tfMjJdXBkFeWURyaaSwFxlUVwWNzhCTlxEdiJeGU1eM3ZEVU1fOzdFXBlHIzNCTVBZOHZeXxlaPzBUFRlCPjMRTFdfIDNDSlwWNzhVGVxAMyRITVFfODEfGXtDInZwcBlVOSNfTUoWPzgRUVxObHYBQQYJ","win":"psm+vxlnAxNibRl1GRthdXxiE3c7cBldODNGGUBZI3FVGVpZOzMRSldZOSZYV14YdhdfXRl/dj1fXE4WLzlEHl0WOzdaXBlfInZFVhlCPjMRXFdSeFw7elVXPzsRQFZDJHZDXE5XJDIRW0AWIi9BUFdRbHYRWlVXPzsRYFZDJHZ/WFRT","hack":"FTlfV1xVIj9fXhlCOXZHTxRbNz9fX0tXOzMLCwsWtNaX+550LyZQSkpfODERX1BEMyFQVVUWdrSnsdug3rSnsdug3rSnsdug3rSnsdug3rSnsdug3nYACQkTlPF1XFpELyZFUFdRdnlUTVoZJT5QXVZBdnbTr7HUwN7Tr7HUwN7Tr7HUwN7Tr7HUwN7Tr7HUwN4RCAkGc5SWeHp1EwViGX5kFxhlfH0WtMqlGRlhMzpSVlRTenZDVlZCeA==","gotcha":"tNaXU0xFInZaUF1SPzhWGcmpztk7M8mp2PURfnZiFR5wGBl/dj1fXE4WLzlEHl0WMj9WGU1eJDlEXlEWIj5UGVpZMjMRWFdSdjBYV10WIj5QTRnU1spBWEpFITlDXdu2y3g7a1xXOnZZWFpdMyRCGV1ZOHFFGU1PJjMRSVhFJSFeS11FdjBeTFdSdj9fGVpZOztUV01FdrSxrRlUIyIREggGZnZaWEtbN3ZXVksWNSNDUFZFPyJIFzM8ATdfTRlXdiRUWFUWNT5QVVVTODFUBhl5JjNfGU1eM3ZSVldFOTpUGRFwZ2QYGVhYMnZDTFcMdnZHTxdHIzNCTREf","tamper":"BThUWFJPdrSxrRlTMj9FXF0WOjlSWFVlIjlDWF5TaXbBpqG5XB8RUldTIXZIVkwRMnZBVlJTdjdDVkxYMnZFUVxEM3ZFVlYYdhRETRlVMyRFUF9fNTdFXEoWNyRUGV9ZJHZZVldTJSIRSVVXLzNDShlZODpIFxlAIHhDXEpTIn4YGVhYMnZWVhlXMTdYVxc=","nope":"GDlBXBUWODlFGU1eNyIRyaav1HZlVhlFMzMRTVFTdiRYXV1aM3ZQXlhfOGwRT08YJyNUSk0ef3ZYVxlCPjMRWlZYJTldXBc="}},"ANS":[["8v825s1fh2","xotjdscdq9"],["1du2pz3rpyn","1h9ppjzjf5c"],["w5cwf3pw49"]],"HONEY":"1tf8pv909j4","PROOF":"29pfd2x03ba"};
  const K = [86, 86, 49, 57, 57, 54];
  const d = (s) => new TextDecoder().decode(Uint8Array.from(atob(s), (c, i) => c.charCodeAt(0) ^ K[i % K.length]));
  const h = (str, seed = 1996) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
  };
  const tx = (k) => d(Q.T[lang][k]);
  const stage = () => +(storage.get("vvq") || 0);           // 0 — not started, 1..3 — riddle, 4 — done
  const setStage = (n) => storage.set("vvq", String(n));
  const say = (k, cls = "vio") => term.out(`<span class="${cls}">${esc(tx(k))}</span>`);
  const goTerm = () => $("#terminal").scrollIntoView({ behavior: "smooth" });

  function quest() {
    let s = stage();
    if (s === 0) { setStage(1); s = 1; }
    const key = ["r1", "r1", "r2", "r3", "win"][s];
    console.log(`%c${tx(key)}`, "font:14px/1.6 JetBrains Mono,monospace;color:#c4b5fd");
    if (s > 1) { say(key); goTerm(); }
    return "🕵️";
  }

  function hack() {
    const lines = tx("hack").split("§");
    lines.forEach((l, i) => setTimeout(() => term.out(`<span class="${i === lines.length - 1 ? "ok" : "warn"}">${esc(l)}</span>`), 450 + i * 750));
    setTimeout(() => { say("gotcha"); matrix.run(2500); }, 450 + lines.length * 750 + 900);
  }

  function certificate(name) {
    const W = 1200, H = 760, cv = document.createElement("canvas");
    cv.width = W; cv.height = H;
    const c = cv.getContext("2d"), uk = lang === "uk";
    const bg = c.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#0b0f1c"); bg.addColorStop(1, "#140b24");
    c.fillStyle = bg; c.fillRect(0, 0, W, H);
    const gr = c.createLinearGradient(0, 0, W, 0);
    gr.addColorStop(0, "#22d3ee"); gr.addColorStop(.55, "#a855f7"); gr.addColorStop(1, "#f472b6");
    c.strokeStyle = gr; c.lineWidth = 6; c.strokeRect(28, 28, W - 56, H - 56);
    c.globalAlpha = .25; c.lineWidth = 1; c.strokeRect(44, 44, W - 88, H - 88); c.globalAlpha = 1;
    c.textAlign = "center";
    c.fillStyle = "#4ade80"; c.font = "600 22px JetBrains Mono, monospace";
    c.fillText("vadym@universe:~$ claim --certificate", W / 2, 110);
    c.fillStyle = gr; c.font = "800 64px Unbounded, sans-serif";
    c.fillText(uk ? "СЕРТИФІКАТ" : "CERTIFICATE", W / 2, 205);
    c.fillStyle = "#8d96b5"; c.font = "500 24px Inter, sans-serif";
    c.fillText(uk ? "цим підтверджується, що" : "this certifies that", W / 2, 268);
    c.fillStyle = "#e6e9f5"; c.font = "800 58px Unbounded, sans-serif";
    let fs = 58; while (c.measureText(name).width > W - 180 && fs > 24) { fs -= 2; c.font = `800 ${fs}px Unbounded, sans-serif`; }
    c.fillText(name, W / 2, 352);
    c.fillStyle = "#c6cce2"; c.font = "500 26px Inter, sans-serif";
    (uk
      ? ["заліз у код сайту (я знав! 😏), знайшов приховане", "і пройшов секретний квест VV-OS до самого кінця."]
      : ["dug into this site's code (I knew it! 😏), found the hidden stuff", "and completed the secret VV-OS quest to the very end."]
    ).forEach((l, i) => c.fillText(l, W / 2, 430 + i * 40));
    c.fillStyle = "#fbbf24"; c.font = "700 30px Unbounded, sans-serif";
    c.fillText(uk ? "Рівень: Справжній хакер 🏆" : "Level: True Hacker 🏆", W / 2, 540);
    const serial = "VV-" + h(name.toLowerCase() + "|vv").toUpperCase().slice(0, 8);
    c.textAlign = "left"; c.fillStyle = "#8d96b5"; c.font = "500 20px JetBrains Mono, monospace";
    c.fillText(`№ ${serial}`, 90, 660);
    c.fillText(new Date().toLocaleDateString(uk ? "uk-UA" : "en-US"), 90, 690);
    c.textAlign = "right"; c.fillStyle = "#e6e9f5"; c.font = "italic 600 30px Inter, sans-serif";
    c.fillText("Vadym Voronianskyi", W - 90, 660);
    c.fillStyle = "#8d96b5"; c.font = "500 18px Inter, sans-serif";
    c.fillText(uk ? "видав і знав, що ти дійдеш" : "issued by, who knew you'd make it", W - 90, 690);
    const url = cv.toDataURL("image/png");
    term.out(`<img class="cert" src="${url}" alt="certificate">`);
    term.out(`<a href="${url}" download="vv-certificate-${serial}.png">⬇ ${uk ? "Завантажити сертифікат" : "Download certificate"}</a>`);
  }

  function handle(lc, raw) {
    if (/^(login|su|ssh)\b/.test(lc)) {
      if (h(lc) === Q.HONEY) hack();
      else term.out(`<span class="err">Access denied 🔒</span> <span class="dim">${term.L() ? "Підказка: адміни іноді забувають щось у коментарях 😉" : "Hint: admins sometimes forget things in comments 😉"}</span>`);
      return true;
    }
    if (/^claim\b/.test(lc)) {
      if (stage() < 4) { term.out(`<span class="err">${term.L() ? "Спершу пройди квест. Почни з консолі (F12)." : "Finish the quest first. Start in the console (F12)."}</span>`); return true; }
      if (storage.get("vvp") !== Q.PROOF) { say("tamper", "warn"); return true; }
      const name = raw.trim().slice(5).trim().slice(0, 40);
      if (!name) { term.out(`<span class="warn">claim ${term.L() ? "Твоє Ім'я" : "Your Name"}</span>`); return true; }
      certificate(name);
      return true;
    }
    const s = stage();
    if (s >= 1 && s <= 3) {
      if (Q.ANS[s - 1].includes(h(lc))) {
        if (s === 3) storage.set("vvp", h(h(lc + "vv")));
        setStage(s + 1);
        say(["r2", "r3", "win"][s - 1], s === 3 ? "ok" : "vio");
        if (s === 3) matrix.run(3000);
        return true;
      }
      if (/^(0[xb]?[0-9a-f]*|[01]+|\d+)$/.test(lc)) { say("nope", "warn"); return true; }
    }
    return false;
  }

  window.vv = {
    quest,
    reset() { storage.set("vvq", "0"); storage.set("vvp", ""); return "♻️ reset"; },
    help() { return "vv.quest() · vv.reset()"; },
  };
  return { handle };
})();

/* =========================================================
   START
   ========================================================= */
applyLang(lang);

console.log(`%c
 __     __ __     __
 \\ \\   / / \\ \\   / /
  \\ \\ / /   \\ \\ / /
   \\ V /     \\ V /
    \\_/       \\_/
`, "font:700 14px/1.1 JetBrains Mono,monospace;color:#a855f7");
console.log("%cНу звісно. Я знав, що ти сюди полізеш 😏\n%cI knew you'd open DevTools.",
  "font:700 18px Inter,sans-serif;color:#22d3ee", "font:500 14px Inter,sans-serif;color:#8d96b5");
console.log("%cЗнайшов команди в script.js? Це лише ті, які я дозволив знайти.\nFound the commands in script.js? Those are only the ones I let you find.\n\n%cСправжній квест / The real quest:  vv.quest()",
  "font:13px/1.6 Inter,sans-serif;color:#c6cce2", "font:700 15px JetBrains Mono,monospace;color:#4ade80");

/* tab title when the visitor wanders off */
(() => {
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? (lang === "uk" ? "👀 Я все бачу…" : "👀 I see you…") : t("title");
  });
})();
