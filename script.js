/* =====================================================
   CONTENT — edit these arrays with your own information
   ===================================================== */

const JOURNEY = [
  {
    "year": "01",
    "title": "Understand the idea",
    "handle": "@discovery",
    "short": "Start with your users, goals and the problem to solve.",
    "full": "We discuss what you want to build, who will use it and which features matter most. This gives the project a clear direction before development begins."
  },
  {
    "year": "02",
    "title": "Design the experience",
    "handle": "@design",
    "short": "Clear layouts that work on phones and desktops.",
    "full": "The interface is planned around the main user journeys, readable content and straightforward navigation. References help establish the visual direction."
  },
  {
    "year": "03",
    "title": "Build the website",
    "handle": "@web",
    "short": "Responsive pages and useful interactive features.",
    "full": "I turn the agreed direction into a website with reusable components, responsive layouts and accessible controls. Content and interactions are checked across screen sizes."
  },
  {
    "year": "04",
    "title": "Develop the application",
    "handle": "@app",
    "short": "Connected screens for real everyday workflows.",
    "full": "From product dashboards to app interfaces, development focuses on the actions your users need. Data integrations and application features are scoped to the project."
  },
  {
    "year": "05",
    "title": "Test and refine",
    "handle": "@quality",
    "short": "Check the details before the launch.",
    "full": "The main flows are reviewed for usability, keyboard access, responsiveness and errors. Feedback is used to refine the experience before delivery."
  },
  {
    "year": "06",
    "title": "Launch and support",
    "handle": "@delivery",
    "short": "A clear handover and room to keep improving.",
    "full": "We agree on deployment, ownership and the handover process. Maintenance and future improvements can be planned around the needs of your product."
  }
];

// image: put files in /images and set e.g. "images/project-1.jpg" (leave "" for a placeholder)
const PROJECTS = [
  {
    "name": "Project One",
    "tags": [
      "CMS",
      "Motion",
      "SEO"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  },
  {
    "name": "Project Two",
    "tags": [
      "API",
      "CMS"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  },
  {
    "name": "Project Three",
    "tags": [
      "Design",
      "Motion"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  },
  {
    "name": "Project Four",
    "tags": [
      "CMS",
      "SEO"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  },
  {
    "name": "Project Five",
    "tags": [
      "Components"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  },
  {
    "name": "Project Six",
    "tags": [
      "Performance",
      "API"
    ],
    "desc": "Short description of the project and the result.",
    "image": "",
    "url": "#"
  }
];

const TESTIMONIALS = [
  {
    "title": "A clear starting point.",
    "text": "We define the project goals, main features and delivery expectations together.",
    "name": "Discovery",
    "role": "01 / Project brief",
    "photo": "images/process-1.svg"
  },
  {
    "title": "Thoughtful implementation.",
    "text": "Responsive layouts and useful interactions turn the agreed idea into a working experience.",
    "name": "Development",
    "role": "02 / Build and review",
    "photo": "images/process-2.svg"
  },
  {
    "title": "Feedback along the way.",
    "text": "Review the progress and refine the details before the final handover.",
    "name": "Collaboration",
    "role": "03 / Refine together",
    "photo": "images/process-3.svg"
  },
  {
    "title": "Ready for the next step.",
    "text": "Deployment and handover are planned around your project, with support discussed upfront.",
    "name": "Delivery",
    "role": "04 / Launch and support",
    "photo": "images/process-4.svg"
  }
];

const FAQ = [
  { q: "How long does a typical project take?", a: "The timeline depends on the scope, content and integrations. We agree on milestones before development starts." },
  { q: "Can you build applications as well as websites?", a: "Yes. I develop web and app experiences, including dashboards, interactive interfaces and API-connected features. We agree on the platforms and integrations your project needs." },
  { q: "Do you work with designers and agencies?", a: "Yes. I can work with your designer or agency to turn an agreed design into a responsive website or application." },
  { q: "Will I be able to edit the site myself?", a: "If you need editable content, we can include a CMS and a handover walkthrough in your project scope." },
  { q: "What do you need from me to get started?", a: "A short brief, your designs (or references), and access to any existing accounts. We'll handle the rest together on a kickoff call." },
];

/* =====================================================
   RENDERING
   ===================================================== */

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const yearsAgo = (y) => {
  const n = new Date().getFullYear() - Number(y);
  return n <= 0 ? "now" : `${n} year${n > 1 ? "s" : ""} ago`;
};

$("#journey").innerHTML = JOURNEY.map((j, i) => `
  <article class="j-card reveal">
    <div class="j-year">${esc(j.year)}</div>
    <h3>${esc(j.title)}</h3>
    <p>${esc(j.short)}</p>
    <div class="j-meta">
      <span><span class="handle">${esc(j.handle)}</span> · Development process</span>
      <button class="j-more" data-i="${i}">Read more</button>
    </div>
  </article>`).join("");

$("#workGrid").innerHTML = PROJECTS.map((p, i) => `
  <a class="project reveal" href="${esc(p.url)}" target="_blank" rel="noopener">
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy" />` : `<div class="p-ph"></div>`}
    <div class="p-top">
      <span class="p-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="p-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    </div>
    <div class="p-bottom">
      <div><h3>${esc(p.name)}</h3><p>${esc(p.desc)}</p></div>
      <span class="p-arrow">↗</span>
    </div>
  </a>`).join("");

$("#testimonials").innerHTML = TESTIMONIALS.map((t) => `
  <article class="t-card">
    <h3>${esc(t.title)}</h3>
    <p>${esc(t.text)}</p>
    <div class="t-person">
      ${t.photo ? `<img src="${esc(t.photo)}" alt="${esc(t.name)}" />` : `<div class="av">${esc(t.name[0])}</div>`}
      <div><b>${esc(t.name)}</b><span>${esc(t.role)}</span></div>
    </div>
  </article>`).join("");

$("#faqList").innerHTML = FAQ.map((f) => `
  <div class="faq-item">
    <button class="faq-q" aria-expanded="false">${esc(f.q)}<span>+</span></button>
    <div class="faq-a"><p>${esc(f.a)}</p></div>
  </div>`).join("");

$("#year").textContent = new Date().getFullYear();

/* =====================================================
   INTERACTIONS
   ===================================================== */

// Sidebar: show after hero, highlight current section, dark mode over dark sections
const sidebar = $("#sidebar");
const sections = $$("main section[id]");
const navLinks = $$(".side-nav a");
function onScroll() {
  const y = window.scrollY;
  sidebar.classList.toggle("show", y > window.innerHeight * 0.7);
  const mid = y + window.innerHeight * 0.4;
  let current = sections[0];
  for (const s of sections) if (s.offsetTop <= mid) current = s;
  navLinks.forEach((a) => a.classList.toggle("active", a.dataset.section === current.id));
  document.body.classList.toggle("on-dark", current.classList.contains("dark"));
  litStatement();
  updateTimeline();
}
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
$$(".reveal, .h-section, .cap, .price-card").forEach((el) => { el.classList.add("reveal"); io.observe(el); });

// "What you get" statement: words light up as you scroll
const statement = $(".statement");
statement.innerHTML = statement.innerHTML.replace(/(<span class="pill-ico">.*?<\/span>)|([^\s<]+)/g,
  (m, pill, word) => pill || `<span class="word">${word}</span>`);
const words = $$(".statement .word");
function litStatement() {
  const r = statement.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (window.innerHeight * 0.85 - r.top) / (r.height + window.innerHeight * 0.4)));
  const n = Math.round(p * words.length);
  words.forEach((w, i) => w.classList.toggle("lit", i < n));
}

// Journey modal
const modal = $("#modal");
let modalTrigger;
$("#journey").addEventListener("click", (e) => {
  const btn = e.target.closest(".j-more");
  if (!btn) return;
  modalTrigger = btn;
  const j = JOURNEY[btn.dataset.i];
  $(".modal-year", modal).textContent = j.year;
  $(".modal-title", modal).textContent = j.title;
  $(".modal-body", modal).textContent = j.full;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $(".modal-close", modal).focus();
});
const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; modalTrigger?.focus(); };
modal.addEventListener("click", (e) => { if (e.target === modal || e.target.closest(".modal-close")) closeModal(); });
document.addEventListener("keydown", (e) => { if (!modal.classList.contains("open")) return; if (e.key === "Escape") closeModal(); if (e.key === "Tab") { e.preventDefault(); $(".modal-close", modal).focus(); } });

// FAQ accordion
$("#faqList").addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement;
  const open = !item.classList.contains("open");
  $$(".faq-item").forEach((i) => { i.classList.remove("open"); $(".faq-a", i).style.maxHeight = null; $(".faq-q", i).setAttribute("aria-expanded", "false"); });
  if (open) { q.setAttribute("aria-expanded", "true"); item.classList.add("open"); const a = $(".faq-a", item); a.style.maxHeight = a.scrollHeight + "px"; }
});

// Testimonials slider: arrows + drag
const track = $("#testimonials");
const step = () => (track.firstElementChild?.offsetWidth || 400) + 16;
$("#nextT").onclick = () => track.scrollBy({ left: step(), behavior: "smooth" });
$("#prevT").onclick = () => track.scrollBy({ left: -step(), behavior: "smooth" });
let drag = null;
track.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, s: track.scrollLeft }; track.style.scrollSnapType = "none"; });
window.addEventListener("pointermove", (e) => { if (drag) track.scrollLeft = drag.s - (e.clientX - drag.x); });
window.addEventListener("pointerup", () => { if (drag) { drag = null; track.style.scrollSnapType = ""; } });

// Copy email
$(".side-email").addEventListener("click", async (e) => {
  let copied = false;
  try { await navigator.clipboard.writeText(e.currentTarget.dataset.copy); copied = true; } catch {
    const input = document.createElement('textarea'); input.value = e.currentTarget.dataset.copy; document.body.appendChild(input); input.select(); try { copied = document.execCommand('copy'); } catch {} input.remove();
  }
  const t = $("#toast");
  t.textContent = copied ? "Email copied" : "Copy email: amr.mohamed.ayman@gmail.com";
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1600);
});

// Rolling digits on journey years (start at 0000, roll to the real year when revealed)
$$(".j-year").forEach((el) => {
  const digits = el.textContent.trim().split("");
  el.innerHTML = `<span class="roll">${digits.map((d) =>
    /\d/.test(d) ? `<span class="col" data-d="${d}">${"0123456789".split("").map((n) => `<span>${n}</span>`).join("")}</span>` : `<span>${d}</span>`
  ).join("")}</span>`;
});
const rollIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    $$(".col", e.target).forEach((c, i) => {
      c.style.transitionDelay = `${i * 0.08}s`;
      c.style.transform = `translateY(-${c.dataset.d * 1.15}em)`;
    });
    rollIO.unobserve(e.target);
  });
}, { threshold: 0.6 });
$$(".j-year").forEach((el) => rollIO.observe(el));

// "DRAG" cursor over testimonials
const cursor = document.createElement("div");
cursor.className = "drag-cursor";
cursor.textContent = "DRAG";
document.body.appendChild(cursor);
track.addEventListener("pointerenter", () => cursor.classList.add("on"));
track.addEventListener("pointerleave", () => cursor.classList.remove("on"));
window.addEventListener("pointermove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Journey timeline: a curved line through the edge dot of every card,
// with a glowing dot that travels along it as you scroll up or down.
const tl = { svg: $(".timeline-line"), base: $(".tl-base"), prog: $(".tl-progress"), dot: $(".tl-dot"), len: 0, anchors: [] };
function buildTimeline() {
  const box = $(".timeline").getBoundingClientRect();
  // offset* values ignore the reveal animation's transform, so anchors stay exact mid-animation
  tl.anchors = $$(".j-card").map((card, i) => ({
    card,
    x: card.offsetLeft + (i % 2 === 0 ? card.offsetWidth : 0),
    y: card.offsetTop + card.offsetHeight / 2,
  }));
  const a = tl.anchors;
  if (a.length < 2) return;
  let d = `M ${a[0].x} ${a[0].y}`;
  for (let i = 1; i < a.length; i++) {
    const p = a[i - 1], q = a[i], dy = q.y - p.y;
    d += ` C ${p.x} ${p.y + dy * 0.55}, ${q.x} ${q.y - dy * 0.55}, ${q.x} ${q.y}`;
  }
  tl.svg.setAttribute("width", box.width);
  tl.svg.setAttribute("height", box.height);
  tl.base.setAttribute("d", d);
  tl.prog.setAttribute("d", d);
  tl.len = tl.prog.getTotalLength();
  tl.prog.style.strokeDasharray = tl.len;
  updateTimeline();
}
function updateTimeline() {
  if (!tl.len) return;
  const box = $(".timeline").getBoundingClientRect();
  const target = window.innerHeight * 0.55 - box.top; // where the dot should sit, in timeline space
  // The path only ever moves downward, so binary-search the length whose y matches the target.
  let lo = 0, hi = tl.len;
  for (let i = 0; i < 22; i++) {
    const mid = (lo + hi) / 2;
    if (tl.prog.getPointAtLength(mid).y < target) lo = mid; else hi = mid;
  }
  const pt = tl.prog.getPointAtLength(lo);
  tl.dot.setAttribute("cx", pt.x);
  tl.dot.setAttribute("cy", pt.y);
  tl.prog.style.strokeDashoffset = tl.len - lo;
  for (const an of tl.anchors) an.card.classList.toggle("passed", pt.y >= an.y - 1);
}
window.addEventListener("resize", buildTimeline);
window.addEventListener("load", buildTimeline);
document.fonts?.ready.then(buildTimeline);
buildTimeline();

onScroll();

// Blur-in on load, then blur the portrait as the hero scrolls away
const heroPhoto = $(".hero-photo");
window.addEventListener("load", () => requestAnimationFrame(() => {
  document.body.classList.add("loaded");
  setTimeout(() => heroPhoto.classList.add("settled"), 1400);
}));
window.addEventListener("scroll", () => {
  const p = Math.min(1, window.scrollY / window.innerHeight);
  heroPhoto.style.setProperty("--scroll-blur", `${(p * 24).toFixed(1)}px`);
  heroPhoto.style.setProperty("--scroll-fade", (1 - p * 0.6).toFixed(2));
}, { passive: true });
