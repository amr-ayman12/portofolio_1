/* =====================================================
   EXTRA EFFECTS — progress bar, cursor glow, magnetic
   buttons, card tilt, heading line reveal, hero parallax,
   and auto-fitting the big name to the screen width.
   ===================================================== */
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => [...el.querySelectorAll(s)];

  // 1) Fit big display names to the viewport width (works for any name length)
  function fitText(el, maxVw, ratio = 0.96) {
    if (!el) return;
    el.style.fontSize = maxVw + "vw";
    el.style.whiteSpace = "nowrap";
    const avail = el.parentElement.clientWidth * ratio;
    const w = el.scrollWidth;
    if (w > avail) el.style.fontSize = (maxVw * avail / w).toFixed(2) + "vw";
  }
  const fitAll = () => {
    const mobile = window.innerWidth <= 900;
    fitText(qs(".hero-name"), mobile ? 29 : 34);
    fitText(qs(".footer-name"), 22);
  };
  fitAll();
  document.fonts?.ready.then(fitAll);
  window.addEventListener("resize", fitAll);

  // 2) Scroll progress bar
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  const setProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  };
  window.addEventListener("scroll", setProgress, { passive: true });
  setProgress();

  // 3) Heading line reveal: each <br>-separated line slides up from a mask
  qsa(".h-section, .cta-title").forEach((h) => {
    const lines = h.innerHTML.split(/<br\s*\/?>/i);
    h.innerHTML = lines.map((l, i) =>
      `<span class="line-mask"><span class="line" style="transition-delay:${i * 0.09}s">${l.trim()}</span></span>`
    ).join("");
    h.classList.remove("reveal", "in");
    h.classList.add("split");
  });
  const lineIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("lines-in"); lineIO.unobserve(e.target); } });
  }, { threshold: 0.3 });
  qsa(".split").forEach((h) => lineIO.observe(h));

  if (reduce || !finePointer) return; // pointer-driven effects below are desktop-only

  // 4) Soft cursor spotlight
  const glow = document.createElement("div");
  glow.className = "cursor-glow";
  document.body.appendChild(glow);
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; glow.classList.add("on"); });
  document.addEventListener("pointerleave", () => glow.classList.remove("on"));
  (function loop() {
    gx += (tx - gx) * 0.12; gy += (ty - gy) * 0.12;
    glow.style.transform = `translate(${gx}px, ${gy}px)`;
    requestAnimationFrame(loop);
  })();

  // 5) Magnetic buttons
  qsa(".btn, .round, .j-more").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.25;
      const y = (e.clientY - r.top - r.height / 2) * 0.35;
      b.style.transform = `translate(${x}px, ${y}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  // 6) 3D tilt + light sheen on project & capability cards
  qsa(".project, .cap, .price-card").forEach((card) => {
    card.classList.add("tilt");
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      const max = card.classList.contains("project") ? 8 : 5;
      card.style.transform = `perspective(900px) rotateY(${(px - 0.5) * max}deg) rotateX(${(0.5 - py) * max}deg) translateY(-4px)`;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });

  // 7) Hero mouse parallax (name drifts opposite to the photo)
  const hero = qs(".hero"), name = qs(".hero-name"), photo = qs(".hero-photo");
  hero?.addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    name.style.translate = `${x * -24}px ${y * -12}px`;
    photo.style.translate = `${x * 14}px ${y * 6}px`;
  });
  hero?.addEventListener("pointerleave", () => { name.style.translate = ""; photo.style.translate = ""; });
})();
