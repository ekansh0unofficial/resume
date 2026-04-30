/* ═══════════════════════════════════════════════════════════
   main.js — Premium Portfolio Logic
═══════════════════════════════════════════════════════════ */

/* ── 1. Particle Network Canvas ─────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById("pc");
  const ctx    = canvas.getContext("2d");

  const COLORS  = ["rgba(99,102,241,", "rgba(139,92,246,", "rgba(6,182,212,"];
  const COUNT   = 60;
  const CONNECT = 110;
  const REPEL   = 90;
  const MAX_SPD = 1.2;

  let W, H, particles, mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkParticle() {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - .5) * MAX_SPD,
      vy: (Math.random() - .5) * MAX_SPD,
      r:  1.5 + Math.random() * 1.8,
      col: c
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, mkParticle);
  }

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("resize", () => {
    resize();
  }, { passive: true });

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL) {
        const force = (REPEL - dist) / REPEL;
        p.vx += (dx / dist) * force * .5;
        p.vy += (dy / dist) * force * .5;
      }

      // Speed cap
      const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (spd > MAX_SPD) { p.vx = (p.vx / spd) * MAX_SPD; p.vy = (p.vy / spd) * MAX_SPD; }

      // Dampen
      p.vx *= .995;
      p.vy *= .995;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < -5)  p.x = W + 5;
      if (p.x > W+5) p.x = -5;
      if (p.y < -5)  p.y = H + 5;
      if (p.y > H+5) p.y = -5;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col + ".55)";
      ctx.fill();

      // Draw lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const ex = p.x - q.x, ey = p.y - q.y;
        const d  = Math.sqrt(ex * ex + ey * ey);
        if (d < CONNECT) {
          const alpha = (1 - d / CONNECT) * 0.32;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = p.col + alpha + ")";
          ctx.lineWidth   = .7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(tick);
  }

  init();
  tick();
})();

/* ── 2. Scroll Progress Bar ─────────────────────────────── */
const progressBar = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  progressBar.style.width = Math.min(pct, 100) + "%";
}, { passive: true });

/* ── 3. Cursor Glow (global spotlight) ─────────────────── */
const cglow = document.getElementById("cglow");
window.addEventListener("mousemove", e => {
  cglow.style.left = e.clientX + "px";
  cglow.style.top  = e.clientY + "px";
}, { passive: true });

/* ── 4. Cursor Spotlight on Cards ──────────────────────── */
function attachSpotlight(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener("mousemove", e => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      el.style.setProperty("--my", (e.clientY - rect.top)  + "px");
    }, { passive: true });
  });
}
// Will be called after DOM content is rendered
function initSpotlights() {
  attachSpotlight(".section");
  attachSpotlight(".proj-card");
  attachSpotlight(".gh-card");
}

/* ── 5. Theme (dark forced) ─────────────────────────────── */
document.documentElement.setAttribute("data-theme", "dark");

/* ── 7. Year ─────────────────────────────────────────────── */
document.getElementById("year").textContent = new Date().getFullYear();

/* ── 8. Scroll Reveal ───────────────────────────────────── */
const revealIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("vis");
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i * 0.045) + "s";
  revealIO.observe(el);
});

/* ── 9. Typewriter ──────────────────────────────────────── */
(function initTypewriter() {
  const roles  = ['Backend Developer', 'System Architect', 'AI Engineer', 'Open Source Contributor'];
  const el     = document.getElementById("twRole");
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const role = roles[ri];
    if (!deleting) {
      ci++;
      el.textContent = role.slice(0, ci);
      if (ci === role.length) {
        deleting = true;
        setTimeout(tick, 1800);
        return;
      }
      setTimeout(tick, 68);
    } else {
      ci--;
      el.textContent = role.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        setTimeout(tick, 380);
        return;
      }
      setTimeout(tick, 38);
    }
  }
  tick();
})();

/* ── 10. Hero Bio + Chips ───────────────────────────────── */
document.getElementById("heroBio").textContent = DATA.about;
DATA.chips.forEach(ch => {
  const s = document.createElement("span");
  s.className   = "chip chip-violet";
  s.textContent = ch;
  document.getElementById("aboutChips").appendChild(s);
});

/* ── 11. Stats Count-up ─────────────────────────────────── */
function countUp(el, target, suffix) {
  const start = performance.now();
  const dur   = 1600;
  function frame(now) {
    const t   = Math.min((now - start) / dur, 1);
    const val = Math.floor(t < 1 ? easeOutQuart(t) * target : target);
    el.textContent = val + suffix;
    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

const statsIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".stat-num[data-target]").forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        countUp(el, target, suffix);
        delete el.dataset.target;
      });
      statsIO.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const statsStrip = document.querySelector(".stats-strip");
if (statsStrip) statsIO.observe(statsStrip);

/* ── 12. Experience ─────────────────────────────────────── */
const expList = document.getElementById("experienceList");
DATA.experience.forEach(exp => {
  const div = document.createElement("div");
  div.className = "exp-entry";
  const bullets = exp.points.map(p => `<li>${p}</li>`).join("");
  div.innerHTML = `
    <div class="exp-dot"></div>
    <div class="exp-role">${exp.role}</div>
    <div class="exp-company">${exp.company}</div>
    <ul class="exp-bullets">${bullets}</ul>
  `;
  expList.appendChild(div);
});

/* ── 13. Skills ─────────────────────────────────────────── */
const labelMap = {
  languages:"Languages", frameworks:"Frameworks", infra:"Infra & Tools"
};
const chipColors = ["chip-violet","chip-cyan","chip-amber","chip-rose","chip-green","chip-plain"];
const skillsDiv  = document.getElementById("coreSkills");
Object.entries(DATA.coreSkills).forEach(([key, items], idx) => {
  const row   = document.createElement("div");
  row.className = "skill-row";
  const color = chipColors[idx % chipColors.length];
  row.innerHTML = `
    <div class="skill-cat">${labelMap[key] || key}</div>
    <div class="chips-row">${items.map(s => `<span class="chip ${color}">${s}</span>`).join("")}</div>
  `;
  skillsDiv.appendChild(row);
});

/* ── 15. Education ──────────────────────────────────────── */
DATA.education.forEach(e => {
  const d = document.createElement("div");
  d.className = "s-card";
  d.innerHTML = `<div class="ttl">${e.title}</div><div class="sub">${e.meta}</div>`;
  document.getElementById("educationList").appendChild(d);
});

/* ── 16. Achievements ───────────────────────────────────── */
DATA.achievements.forEach(a => {
  const d = document.createElement("div");
  d.className = "s-card";
  d.innerHTML = `<div class="ttl">${a.title}</div><div class="sub">${a.meta}</div>`;
  document.getElementById("achievementsList").appendChild(d);
});

/* ── 17. Certifications ─────────────────────────────────── */
DATA.certs.forEach(c => {
  const d = document.createElement("div");
  d.className = "s-card";
  const t = c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${c.title}</a>` : c.title;
  d.innerHTML = `<div class="ttl">${t}</div><div class="sub">${c.meta}</div>`;
  document.getElementById("certList").appendChild(d);
});

/* ── 18. Contact ────────────────────────────────────────── */
const contactDiv = document.getElementById("contactList");
DATA.contact.forEach(c => {
  if (c.meta) {
    const row  = document.createElement("div");
    row.className = "contact-row";
    const icon = c.title === "Email" ? "✉" : "☎";
    row.innerHTML = `
      <div class="contact-icon">${icon}</div>
      <div class="contact-val">${c.meta}</div>
    `;
    contactDiv.appendChild(row);
  }
  if (c.links) {
    const grid = document.createElement("div");
    grid.className = "link-grid";
    c.links.forEach(l => {
      const a       = document.createElement("a");
      a.href        = l.url;
      a.target      = "_blank";
      a.rel         = "noopener";
      a.className   = "link-pill";
      a.textContent = l.name;
      grid.appendChild(a);
    });
    contactDiv.appendChild(grid);
  }
});

/* ── 19. Helper: parse bullet text ──────────────────────── */
function parseBullets(details) {
  return details.split("\n")
    .map(l => l.replace(/^[•▸]\s*/, "").trim())
    .filter(Boolean)
    .map(l => `<li>${l}</li>`)
    .join("");
}

/* ── 20. Project Cards + 3D Tilt ───────────────────────── */
function renderProjects(list, containerId) {
  const container = document.getElementById(containerId);
  list.forEach(p => {
    const card    = document.createElement("div");
    card.className = "proj-card";
    const linkHtml = p.url
      ? `<a class="proj-link" href="${p.url}" target="_blank" rel="noopener" title="GitHub">↗</a>`
      : "";
    const techHtml = p.tech.map(t => `<span class="chip chip-cyan">${t}</span>`).join("");
    card.innerHTML = `
      <div class="proj-header">
        <div class="proj-name">${p.name}</div>
        ${linkHtml}
      </div>
      <div class="proj-blurb">${p.blurb}</div>
      <ul class="proj-points">${parseBullets(p.details)}</ul>
      <div class="proj-tech">${techHtml}</div>
    `;

    // 3D tilt
    card.addEventListener("mouseenter", () => {
      card.classList.remove("tilt-reset");
      card.classList.add("tilt-ready");
    });
    card.addEventListener("mousemove", e => {
      const rect  = card.getBoundingClientRect();
      const x     = (e.clientX - rect.left) / rect.width  - .5;
      const y     = (e.clientY - rect.top)  / rect.height - .5;
      card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) translateZ(4px)`;
      // spotlight
      card.style.setProperty("--mx", (e.clientX - rect.left) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top)  + "px");
    }, { passive: true });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("tilt-ready");
      card.classList.add("tilt-reset");
      card.style.transform = "";
    });

    container.appendChild(card);
  });
}
renderProjects(DATA.projects, "projectList");

/* ── 22. GitHub Infographics ────────────────────────────── */
const LANG_COLORS = ['#6366f1','#8b5cf6','#06b6d4','#10b981','#f59e0b','#f43f5e','#a78bfa'];
const LC_CIRC = 2 * Math.PI * 48; // global so all functions share it

function fetchWithTimeout(url, ms = 5000) {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal })
    .then(r => { clearTimeout(id); return r.ok ? r.json() : null; })
    .catch(() => { clearTimeout(id); return null; });
}

function buildLCCard() {
  const LC = { total: 680, easy: 180, medium: 380, hard: 120, rating: 1900, rank: "Knight" };
  const lcMax   = 3569;
  const easyLen = (LC.easy   / lcMax) * LC_CIRC;
  const medLen  = (LC.medium / lcMax) * LC_CIRC;
  const hardLen = (LC.hard   / lcMax) * LC_CIRC;
  const card = document.createElement("div");
  card.className = "gh-card";
  card.innerHTML = `
    <div class="gh-section-label">LeetCode</div>
    <div class="lc-arc-wrap">
      <svg class="lc-arc-svg" width="110" height="110" viewBox="0 0 110 110">
        <circle class="lc-arc-track" cx="55" cy="55" r="48"/>
        <circle class="lc-arc-fill lc-arc-easy" cx="55" cy="55" r="48"
          stroke-dasharray="0 ${LC_CIRC}" stroke-dashoffset="0" data-len="${easyLen}"/>
        <circle class="lc-arc-fill lc-arc-medium" cx="55" cy="55" r="48"
          stroke-dasharray="0 ${LC_CIRC}" stroke-dashoffset="${-easyLen}" data-len="${medLen}"/>
        <circle class="lc-arc-fill lc-arc-hard" cx="55" cy="55" r="48"
          stroke-dasharray="0 ${LC_CIRC}" stroke-dashoffset="${-(easyLen + medLen)}" data-len="${hardLen}"/>
      </svg>
      <div class="lc-arc-center">
        <div class="lc-arc-big">${LC.total}+</div>
        <div class="lc-arc-small">Solved</div>
      </div>
    </div>
    <div class="lc-diff-row">
      <div class="lc-diff lc-diff-easy"><div class="lc-diff-n">${LC.easy}</div><div class="lc-diff-l">Easy</div></div>
      <div class="lc-diff lc-diff-medium"><div class="lc-diff-n">${LC.medium}</div><div class="lc-diff-l">Med</div></div>
      <div class="lc-diff lc-diff-hard"><div class="lc-diff-n">${LC.hard}</div><div class="lc-diff-l">Hard</div></div>
    </div>
    <div class="lc-rating-row">
      <span class="lc-rating-label">Contest Rating</span>
      <span class="lc-rating-val">${LC.rating}+ · ${LC.rank}</span>
    </div>`;
  return card;
}

function buildDonutCard(langEntries, langTotal) {
  const circ = 2 * Math.PI * 54;
  let offset = 0;
  const segments = langEntries.map(([lang, count], i) => {
    const pct   = count / langTotal;
    const len   = pct * circ;
    const color = LANG_COLORS[i % LANG_COLORS.length];
    const seg   = { lang, pct, len, color, offset };
    offset += len;
    return seg;
  });
  const svgCircles = segments.map((s, i) => `
    <circle cx="60" cy="60" r="54" fill="none" stroke="${s.color}" stroke-width="11"
      stroke-dasharray="0 ${circ}" stroke-dashoffset="${-s.offset}"
      class="donut-seg" data-len="${s.len}" data-circ="${circ}"
      style="transition:stroke-dasharray 1.1s cubic-bezier(.4,0,.2,1) ${i * 0.08}s"/>`).join("");
  const legendRows = segments.map(s => `
    <div class="legend-row">
      <div class="legend-dot" style="background:${s.color}"></div>
      <span class="legend-name">${s.lang}</span>
      <span class="legend-pct">${Math.round(s.pct * 100)}%</span>
    </div>
    <div class="legend-bar-wrap">
      <div class="legend-bar" style="background:${s.color};width:0%" data-w="${Math.round(s.pct * 100)}"></div>
    </div>`).join("");
  const card = document.createElement("div");
  card.className = "gh-card";
  card.innerHTML = `
    <div class="gh-section-label">Languages</div>
    <div class="donut-wrap">
      <svg class="donut-svg" width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="11"/>
        ${svgCircles}
      </svg>
      <div class="donut-legend">${legendRows}</div>
    </div>`;
  return card;
}

function attachGhObservers(card2, card3) {
  const dIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.querySelectorAll(".donut-seg").forEach(seg => {
        const len  = parseFloat(seg.dataset.len);
        const circ = parseFloat(seg.dataset.circ);
        seg.style.strokeDasharray = `${len} ${circ - len}`;
      });
      en.target.querySelectorAll(".legend-bar").forEach(b => { b.style.width = b.dataset.w + "%"; });
      dIO.unobserve(en.target);
    });
  }, { threshold: 0.2 });
  dIO.observe(card2);

  const lIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.querySelectorAll(".lc-arc-fill").forEach(seg => {
        const len = parseFloat(seg.dataset.len);
        seg.style.strokeDasharray = `${len} ${LC_CIRC - len}`;
      });
      lIO.unobserve(en.target);
    });
  }, { threshold: 0.3 });
  lIO.observe(card3);
}

function renderStaticGitHub(ghGrid) {
  const STATIC_LANGS = [
    ["Java",       32], ["Python",     28], ["Dart",       18],
    ["JavaScript", 12], ["C++",         6], ["Kotlin",      4],
  ].map(([lang, pct], i) => [lang, { count: pct, color: LANG_COLORS[i] }]);
  const staticEntries = STATIC_LANGS.map(([lang, v]) => [lang, v.count]);
  const staticTotal   = staticEntries.reduce((s, [, v]) => s + v, 0);

  const card1 = document.createElement("div");
  card1.className = "gh-card";
  card1.innerHTML = `
    <div class="gh-section-label">GitHub</div>
    <img class="gh-avatar" src="https://avatars.githubusercontent.com/ekansh0unofficial" alt="Avatar"
      onerror="this.style.display='none'" loading="lazy"/>
    <div class="gh-user">Ekansh Mittal</div>
    <div class="gh-handle">@ekansh0unofficial</div>
    <div class="gh-stats-row">
      <div class="gh-stat"><div class="gh-stat-n">26</div><div class="gh-stat-l">Repos</div></div>
      <div class="gh-stat"><div class="gh-stat-n">11</div><div class="gh-stat-l">Followers</div></div>
    </div>
    <div>
      <a class="gh-badge" href="https://github.com/ekansh0unofficial" target="_blank" rel="noopener">👤 Personal · ekansh0unofficial</a>
      <a class="gh-badge" href="https://github.com/ekansh-aio" target="_blank" rel="noopener">💼 Work · ekansh-aio</a>
    </div>`;

  const card2 = buildDonutCard(staticEntries, staticTotal);
  const card3 = buildLCCard();

  ghGrid.innerHTML = "";
  ghGrid.appendChild(card1);
  ghGrid.appendChild(card2);
  ghGrid.appendChild(card3);
  attachGhObservers(card2, card3);
  initSpotlights();
}

async function loadGitHub() {
  const ghGrid = document.getElementById("ghGrid");

  const results = await Promise.allSettled([
    fetchWithTimeout("https://api.github.com/users/ekansh0unofficial"),
    fetchWithTimeout("https://api.github.com/users/ekansh0unofficial/repos?per_page=100&sort=updated"),
    fetchWithTimeout("https://api.github.com/users/ekansh-aio"),
    fetchWithTimeout("https://api.github.com/users/ekansh-aio/repos?per_page=100"),
  ]);
  const [personalUser, personalRepos, workUser, workRepos] = results.map(r => r.value ?? null);

  if (!personalUser || !personalUser.login) { renderStaticGitHub(ghGrid); return; }

  const allRepos   = [...(Array.isArray(personalRepos) ? personalRepos : []),
                      ...(Array.isArray(workRepos)     ? workRepos     : [])];
  const totalRepos = (personalUser.public_repos || 0) + ((workUser && workUser.public_repos) || 0);
  const totalStars = allRepos.reduce((s, r) => s + (r.stargazers_count || 0), 0);

  const langMap = {};
  allRepos.forEach(r => { if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1; });
  const langEntries = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const langTotal   = langEntries.reduce((s, [, v]) => s + v, 0);

  const card1 = document.createElement("div");
  card1.className = "gh-card";
  card1.innerHTML = `
    <div class="gh-section-label">GitHub</div>
    ${personalUser.avatar_url ? `<img class="gh-avatar" src="${personalUser.avatar_url}" alt="Avatar" loading="lazy"/>` : ""}
    <div class="gh-user">${personalUser.name || "Ekansh Mittal"}</div>
    <div class="gh-handle">@${personalUser.login}</div>
    <div class="gh-stats-row">
      <div class="gh-stat"><div class="gh-stat-n">${totalRepos}</div><div class="gh-stat-l">Repos</div></div>
      <div class="gh-stat"><div class="gh-stat-n">${totalStars}</div><div class="gh-stat-l">Stars</div></div>
      <div class="gh-stat"><div class="gh-stat-n">${personalUser.followers || 0}</div><div class="gh-stat-l">Followers</div></div>
    </div>
    <div>
      <a class="gh-badge" href="https://github.com/ekansh0unofficial" target="_blank" rel="noopener">👤 Personal · ekansh0unofficial</a>
      <a class="gh-badge" href="https://github.com/ekansh-aio" target="_blank" rel="noopener">💼 Work · ekansh-aio</a>
    </div>`;

  const card2 = buildDonutCard(langEntries, langTotal);
  const card3 = buildLCCard();

  ghGrid.innerHTML = "";
  ghGrid.appendChild(card1);
  ghGrid.appendChild(card2);
  ghGrid.appendChild(card3);
  attachGhObservers(card2, card3);
  initSpotlights();
}

loadGitHub().catch(() => renderStaticGitHub(document.getElementById("ghGrid")));

/* ── 23. Init all spotlights (sections rendered sync) ──── */
initSpotlights();
