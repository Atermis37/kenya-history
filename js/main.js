"use strict";

(() => {
  const $ = (s, p = document) => p.querySelector(s);
  const $$ = (s, p = document) => [...p.querySelectorAll(s)];
  const root = document.documentElement;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

  /* SCROLL PROGRESS */
  const progress = $("#progress");
  function updateProgress() {
    if (!progress) return;
    const max = root.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  }
  addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ERA LABEL AND SCENE COLOURS (whatever crosses the middle of the viewport) */
  const era = $("#era");
  if ("IntersectionObserver" in window) {
    const eraObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (era && el.dataset.era) era.textContent = el.dataset.era;
        if (!reduced && el.dataset.a && el.dataset.b) {
          root.style.setProperty("--scene-a", el.dataset.a);
          root.style.setProperty("--scene-b", el.dataset.b);
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    $$("[data-era]").forEach((el) => eraObserver.observe(el));
  }

  /* REVEAL */
  if ("IntersectionObserver" in window && !reduced) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12 });
    $$(".chapter-copy, .chapter-visual, .intro-text, .culture-item").forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });
  }

  /* MOBILE NAV */
  const toggle = $("#menu-toggle");
  const links = $("#nav-links");
  if (toggle && links) {
    const setOpen = (open) => {
      links.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    };
    toggle.addEventListener("click", () => setOpen(!links.classList.contains("open")));
    $$("a", links).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* COMMUNITIES */
  const filtersEl = $("#filters");
  const grid = $("#grid");
  const dialog = $("#dlg");
  const hasData = typeof COMMUNITIES !== "undefined" && Array.isArray(COMMUNITIES);
  const regions = ["All", "Central", "Western", "Rift Valley", "Nyanza", "Eastern", "Coast", "Northern"];
  let active = "All";

  function openCommunity(c) {
    if (!dialog) return;
    $("#dlg-t").textContent = c.n;
    $("#dlg-r").textContent = `${c.r.toUpperCase()} / DRAFT PROFILE`;
    $("#dlg-b").textContent = c.b;
    const srcEl = $("#dlg-s");
    srcEl.replaceChildren();
    if (c.src && c.src.length) {
      srcEl.append("SOURCES ");
      c.src.forEach((n) => {
        const a = Object.assign(document.createElement("a"), { className: "fn", href: `sources.html#s${n}`, textContent: `[${n}]` });
        a.setAttribute("aria-label", `Source ${n}`);
        srcEl.append(a, " ");
      });
    }
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function renderCommunities() {
    if (!grid || !hasData) return;
    grid.replaceChildren(...COMMUNITIES
      .filter((c) => active === "All" || c.r === active)
      .map((c) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "community-card";
        card.style.setProperty("--card-accent", c.c);
        card.setAttribute("aria-label", `Read more about the ${c.n} community`);
        const r = Object.assign(document.createElement("span"), { className: "card-region", textContent: c.r });
        const n = Object.assign(document.createElement("span"), { className: "card-name", textContent: c.n });
        const t = Object.assign(document.createElement("span"), { className: "card-tagline", textContent: c.t });
        const o = Object.assign(document.createElement("span"), { className: "card-open", textContent: "EXPLORE PROFILE ↗" });
        card.append(r, n, t, o);
        card.addEventListener("click", () => openCommunity(c));
        return card;
      }));
  }

  if (filtersEl && hasData) {
    // Buttons are built once so keyboard focus is kept when the filter changes.
    regions.forEach((region) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "filter-button";
      b.textContent = region;
      b.setAttribute("aria-pressed", String(region === active));
      b.addEventListener("click", () => {
        active = region;
        $$(".filter-button", filtersEl).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
        renderCommunities();
      });
      filtersEl.appendChild(b);
    });
    renderCommunities();
  }

  if (dialog) dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  /* CULTURE */
  const cultureEl = $("#culture-list");
  if (cultureEl && typeof CULTURE !== "undefined" && Array.isArray(CULTURE)) {
    cultureEl.replaceChildren(...CULTURE.map((item, i) => {
      const a = document.createElement("article");
      a.className = "culture-item";
      const num = Object.assign(document.createElement("span"), { className: "culture-number", textContent: String(i + 1).padStart(2, "0") });
      const h = Object.assign(document.createElement("h3"), { textContent: item.h });
      const p = Object.assign(document.createElement("p"), { textContent: item.p });
      a.append(num, h, p);
      if (item.v) {
        const fn = Object.assign(document.createElement("a"), { className: "fn", href: `sources.html#s${item.s}`, textContent: `[${item.s}]` });
        fn.setAttribute("aria-label", `Source ${item.s}`);
        p.append(" ", fn);
      } else {
        a.append(Object.assign(document.createElement("span"), { className: "badge", textContent: "SOURCE PENDING" }));
      }
      return a;
    }));
  }
})();
