import { deliverySites } from './data.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   MOTION ENGINE
   ============================================================ */

/* ---------- 1. Scroll reveal ---------- */
let revealObserver = null;
function initReveals() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    document.querySelectorAll('.stat-num[data-count]').forEach(el => {
      el.textContent = el.dataset.count + (el.dataset.suffix || '');
    });
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('in-view');
        if (el.matches('.stat-num[data-count]')) animateCounter(el);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stat-num[data-count]').forEach(el => revealObserver.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * easeOut(progress)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- 3. Scroll progress ---------- */
export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const scrollTop = h.scrollTop || document.body.scrollTop;
    const scrollHeight = h.scrollHeight - h.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + '%';
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- 4. Header hide-on-scroll ---------- */
export function initHeaderScroll() {
  if (prefersReducedMotion) return;
  const header = document.getElementById('site-header');
  if (!header) return;
  let lastY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y > 160 && y > lastY + 4) header.style.transform = 'translateY(-100%)';
      else if (y < lastY - 4 || y < 80) header.style.transform = 'translateY(0)';
      lastY = y;
      ticking = false;
    });
  }, { passive: true });
}

/* ============================================================
   5. HERO PIPELINE
   ============================================================ */
let pipelineTimers = [];
let pipelineRunning = false;

function clearPipelineTimers() {
  pipelineTimers.forEach(t => clearTimeout(t));
  pipelineTimers = [];
}

function resetPipeline() {
  clearPipelineTimers();
  pipelineRunning = false;
  ['mon','audit','stake'].forEach(k => {
    const node = document.getElementById('node-' + k);
    const path = document.getElementById('path-' + k);
    const packet = document.getElementById('packet-' + k);
    const tick = document.getElementById('tick-' + k);
    if (node) node.classList.remove('active');
    if (path) path.classList.remove('active');
    if (packet) {
      packet.classList.remove('on');
      const origins = { mon: [110, 41], audit: [110, 115], stake: [110, 189] };
      packet.setAttribute('cx', origins[k][0]);
      packet.setAttribute('cy', origins[k][1]);
    }
    if (tick) tick.classList.remove('on');
  });
  const hub = document.getElementById('hub');
  if (hub) hub.classList.remove('glow');
}

function animatePipeline() {
  if (prefersReducedMotion) return;
  if (pipelineRunning) return;
  resetPipeline();
  pipelineRunning = true;

  const cfg = {
    mon:   { node: 'node-mon',   path: 'path-mon',   packet: 'packet-mon',   tick: 'tick-mon' },
    audit: { node: 'node-audit', path: 'path-audit', packet: 'packet-audit', tick: 'tick-audit' },
    stake: { node: 'node-stake', path: 'path-stake', packet: 'packet-stake', tick: 'tick-stake' }
  };

  const schedule = (fn, delay) => pipelineTimers.push(setTimeout(fn, delay));

  const sendPacket = (key, t0) => {
    const c = cfg[key];
    const nodeEl = document.getElementById(c.node);
    const pathEl = document.getElementById(c.path);
    const packetEl = document.getElementById(c.packet);
    const tickEl = document.getElementById(c.tick);
    if (!nodeEl || !pathEl || !packetEl || !tickEl) return;

    schedule(() => nodeEl.classList.add('active'), t0);
    schedule(() => pathEl.classList.add('active'), t0);

    schedule(() => {
      packetEl.classList.add('on');
      const totalLen = pathEl.getTotalLength();
      const duration = 620;
      const start = performance.now();

      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        const pt = pathEl.getPointAtLength(totalLen * eased);
        packetEl.setAttribute('cx', pt.x);
        packetEl.setAttribute('cy', pt.y);
        if (p < 1) {
          requestAnimationFrame(step);
        } else {
          packetEl.classList.remove('on');
          tickEl.classList.add('on');
          setTimeout(() => {
            nodeEl.classList.remove('active');
            pathEl.classList.remove('active');
          }, 260);
        }
      }
      requestAnimationFrame(step);
    }, t0);
  };

  sendPacket('mon',   100);
  sendPacket('audit', 1100);
  sendPacket('stake', 2100);

  schedule(() => {
    const hub = document.getElementById('hub');
    if (hub) {
      hub.classList.add('glow');
      setTimeout(() => hub.classList.remove('glow'), 700);
    }
    pipelineRunning = false;
  }, 2900);
}

function bindPipelineReplay() {
  const btn = document.getElementById('replay-pipeline');
  if (!btn) return;
  btn.addEventListener('click', () => {
    resetPipeline();
    requestAnimationFrame(() => animatePipeline());
  });
}

/* ============================================================
   6. APPROACH - mapping rows
   ============================================================ */
let rowObserver = null;
let rowTimers = [];

function clearRowTimers() {
  rowTimers.forEach(t => clearTimeout(t));
  rowTimers = [];
}

function animateRow(rowEl, delay = 0) {
  const id = rowEl.dataset.rowId;
  const track = rowEl.querySelector(`[data-track="${id}"]`);
  const dot = rowEl.querySelector(`[data-dot="${id}"]`);
  const tick = rowEl.querySelector(`[data-tick="${id}"]`);
  if (!track || !dot || !tick) return;

  const schedule = (fn, ms) => rowTimers.push(setTimeout(fn, ms + delay));

  schedule(() => track.classList.add('active'), 0);
  schedule(() => {
    dot.classList.add('on');
    const pathLen = track.getTotalLength();
    const dur = 700;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      const pt = track.getPointAtLength(pathLen * eased);
      dot.setAttribute('cx', pt.x);
      dot.setAttribute('cy', pt.y);
      if (p < 1) requestAnimationFrame(step);
      else {
        dot.classList.remove('on');
        tick.classList.add('on');
        setTimeout(() => track.classList.remove('active'), 260);
      }
    }
    requestAnimationFrame(step);
  }, 60);
}

function initMappingRows() {
  const rows = document.querySelectorAll('.map-row');
  if (!rows.length) return;

  rows.forEach(row => {
    const btn = row.querySelector('.map-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = row.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  if (prefersReducedMotion) {
    rows.forEach(r => {
      r.classList.add('in-view');
      r.classList.add('open');
      const id = r.dataset.rowId;
      const track = r.querySelector(`[data-track="${id}"]`);
      const tick = r.querySelector(`[data-tick="${id}"]`);
      const dot = r.querySelector(`[data-dot="${id}"]`);
      if (track) track.classList.add('active');
      if (tick) tick.classList.add('on');
      if (dot) dot.classList.remove('on');
      const btn = r.querySelector('.map-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    });
    return;
  }

  clearRowTimers();
  rows.forEach(r => {
    r.classList.remove('in-view');
    const id = r.dataset.rowId;
    const track = r.querySelector(`[data-track="${id}"]`);
    const tick = r.querySelector(`[data-tick="${id}"]`);
    const dot = r.querySelector(`[data-dot="${id}"]`);
    if (track) track.classList.remove('active');
    if (tick) tick.classList.remove('on');
    if (dot) { dot.classList.remove('on'); dot.setAttribute('cx', 6); dot.setAttribute('cy', 30); }
  });

  if (rowObserver) rowObserver.disconnect();
  rowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const row = entry.target;
      row.classList.add('in-view');
      const i = parseInt(getComputedStyle(row).getPropertyValue('--row-i') || '0', 10);
      animateRow(row, i * 80);
      rowObserver.unobserve(row);
    });
  }, { threshold: 0.4 });

  rows.forEach(r => rowObserver.observe(r));

  const runAll = document.getElementById('run-all-rows');
  if (runAll) {
    runAll.addEventListener('click', () => {
      clearRowTimers();
      rows.forEach((r, i) => {
        const id = r.dataset.rowId;
        const track = r.querySelector(`[data-track="${id}"]`);
        const tick = r.querySelector(`[data-tick="${id}"]`);
        const dot = r.querySelector(`[data-dot="${id}"]`);
        if (track) track.classList.remove('active');
        if (tick) tick.classList.remove('on');
        if (dot) { dot.classList.remove('on'); dot.setAttribute('cx', 6); dot.setAttribute('cy', 30); }
        animateRow(r, i * 180);
      });
    });
  }
}

/* ============================================================
   7. GLOBE - rotating 3D globe of East Africa
   ============================================================
   A lightweight orthographic projection canvas. Each frame
   rotates a Y-axis angle, projects lat/lon to screen, hides
   points on the far side, and draws a subtle sphere grid.
   Pauses when off-screen or tab hidden. Respects reduced motion.
   ============================================================ */

let globeAnim = null;

function initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let raf = null;
  let running = true;
  let W = 0, H = 0, DPR = 1, R = 0;

  let rotation = -1.2;             // radians, rotates continuously
  const rotationSpeed = 0.0022;    // per frame
  const TILT = -0.18;              // slight tilt so equator sits a bit high
  const FOCUS_LON = 36.82;         // Nairobi - centre the view here
  const FOCUS_LAT = -1.29;

  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    R = Math.min(W, H) * 0.44;
  }

  function project(lat, lon, rot) {
    const phi = (90 - lat) * Math.PI / 180;
    const theta = (lon - rot) * Math.PI / 180;

    const x0 = Math.sin(phi) * Math.cos(theta);
    const y0 = Math.cos(phi);
    const z0 = Math.sin(phi) * Math.sin(theta);

    // Apply tilt around X axis
    const cosT = Math.cos(TILT), sinT = Math.sin(TILT);
    const y1 = y0 * cosT - z0 * sinT;
    const z1 = y0 * sinT + z0 * cosT;

    return {
      x: W / 2 + x0 * R,
      y: H / 2 - y1 * R,
      z: z1,
      visible: z1 > -0.05
    };
  }

  function drawSphere() {
    // Base sphere gradient
    const g = ctx.createRadialGradient(
      W / 2 - R * 0.3, H / 2 - R * 0.3, R * 0.1,
      W / 2, H / 2, R
    );
    g.addColorStop(0, 'rgba(20,184,166,0.18)');
    g.addColorStop(0.55, 'rgba(15,118,110,0.10)');
    g.addColorStop(1, 'rgba(14,42,71,0.35)');
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();

    // Rim
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(20,184,166,0.35)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Graticule: latitude lines
    ctx.strokeStyle = 'rgba(185,200,216,0.13)';
    ctx.lineWidth = 0.7;
    for (let lat = -60; lat <= 60; lat += 30) {
      ctx.beginPath();
      let started = false;
      for (let lon = -180; lon <= 180; lon += 4) {
        const p = project(lat, lon, rotation);
        if (!p.visible) { started = false; continue; }
        if (!started) { ctx.moveTo(p.x, p.y); started = true; }
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    // Graticule: longitude lines
    for (let lon = -180; lon < 180; lon += 30) {
      ctx.beginPath();
      let started = false;
      for (let lat = -90; lat <= 90; lat += 4) {
        const p = project(lat, lon, rotation);
        if (!p.visible) { started = false; continue; }
        if (!started) { ctx.moveTo(p.x, p.y); started = true; }
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }
  }

  function drawSites() {
    // First, connections from Nairobi to each other site
    const nairobi = deliverySites[0];
    const nProj = project(nairobi.lat, nairobi.lon, rotation);

    if (nProj.visible) {
      deliverySites.slice(1).forEach(site => {
        const p = project(site.lat, site.lon, rotation);
        if (!p.visible) return;
        // Curved connector via midpoint arc
        const mx = (nProj.x + p.x) / 2;
        const my = (nProj.y + p.y) / 2;
        const dx = p.x - nProj.x, dy = p.y - nProj.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const nx = -dy / len, ny = dx / len;
        const lift = Math.min(len * 0.28, 40);
        const cxp = mx + nx * lift;
        const cyp = my + ny * lift;

        ctx.beginPath();
        ctx.moveTo(nProj.x, nProj.y);
        ctx.quadraticCurveTo(cxp, cyp, p.x, p.y);
        ctx.strokeStyle = 'rgba(20,184,166,0.20)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      });
    }

    // Then site dots
    deliverySites.forEach(site => {
      const p = project(site.lat, site.lon, rotation);
      if (!p.visible) return;
      const scale = 1 + (site.count / 12) * 1.4;
      const alpha = 0.55 + (p.z + 1) * 0.25;

      // Soft halo
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.2 * scale + 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20,184,166,${0.10 * alpha})`;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.2 * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(20,184,166,${0.9 * alpha})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(255,255,255,${0.55 * alpha})`;
      ctx.lineWidth = 0.6;
      ctx.stroke();
    });
  }

  function frame() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    drawSphere();
    drawSites();
    rotation += rotationSpeed;
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }

  resize();

  if (prefersReducedMotion) {
    // Render a single static frame
    drawSphere();
    drawSites();
  } else {
    start();
  }

  const ro = new ResizeObserver(() => { resize(); });
  ro.observe(canvas);

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (prefersReducedMotion) return;
      if (e.isIntersecting) start();
      else stop();
    });
  }, { threshold: 0.1 });
  io.observe(canvas);

  document.addEventListener('visibilitychange', () => {
    if (prefersReducedMotion) return;
    if (document.hidden) stop();
    else if (canvas.getBoundingClientRect().top < window.innerHeight) start();
  });

  globeAnim = { stop, ro, io };
}

function teardownGlobe() {
  if (globeAnim) {
    globeAnim.stop();
    globeAnim.ro.disconnect();
    globeAnim.io.disconnect();
    globeAnim = null;
  }
}

/* ============================================================
   8. Mount motion per page
   ============================================================ */
export function mountMotion(path) {
  initReveals();
  clearPipelineTimers();
  clearRowTimers();
  teardownGlobe();

  if (path === '/' ) {
    resetPipeline();
    setTimeout(animatePipeline, prefersReducedMotion ? 0 : 120);
    bindPipelineReplay();
  }

  if (path === '/approach') {
    initMappingRows();
    initGlobe();
  }

}
