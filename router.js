import { pages, servicePage, workPage, articlePage } from './components.js';
import { services, work, insights } from './data.js';

export function createRouter({ app, nav, navToggle, mountMotion }) {
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Router ---------- */
function resolve(path) {
  if (pages[path]) return pages[path];
  if (path.startsWith('/services/')) {
    const s = services.find(x => '/services/' + x.slug === path);
    if (s) return () => servicePage(s);
  }
  if (path.startsWith('/work/')) {
    const w = work.find(x => '/work/' + x.slug === path);
    if (w) return () => workPage(w);
  }
  if (path.startsWith('/insights/')) {
    const a = insights.find(x => '/insights/' + x.slug === path);
    if (a) return () => articlePage(a);
  }
  return pages['/404'];
}

function currentPath() {
  const h = location.hash.replace(/^#/, '');
  return h === '' ? '/' : h;
}

function setActiveNav(path) {
  document.querySelectorAll('.primary-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const target = href.replace(/^#/, '');
    const active = target === '/'
      ? path === '/'
      : path === target || (target !== '/contact' && path.startsWith(target + '/'));
    a.classList.toggle('active', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

/* ============================================================
   PAGE TRANSITIONS - directional
   ============================================================
   Forward = slide in from right, previous slides out left.
   Back    = slide in from left, previous slides out right.
   Depth is tracked as a simple numeric level derived from path.
   ============================================================ */

let isTransitioning = false;
let pendingRender = false;
let lastPath = '/';

function pathDepth(p) {
  if (p === '/') return 0;
  // "/a/b/c" -> 3; "/a" -> 1
  return p.split('/').filter(Boolean).length;
}

function renderImmediate(direction) {
  const path = currentPath();
  const fn = resolve(path);
  app.innerHTML = fn();
  setActiveNav(path);
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  const titles = {
    '/': 'OIEEA - NEMA Compliance & ESG Advisory, Nairobi',
    '/approach': 'The NEMA-to-ESG bridge - OIEEA',
    '/contact': 'Contact - OIEEA',
    '/404': 'Page not found - OIEEA'
  };
  document.title = titles[path] || (fn === pages['/404'] ? titles['/404'] : 'OIEEA');

  // Clear any animation state
  app.classList.remove(
    'transition-in-left', 'transition-in-right',
    'transition-out-left', 'transition-out-right'
  );
  void app.offsetWidth;
  if (direction === 'forward') app.classList.add('transition-in-right');
  else if (direction === 'back') app.classList.add('transition-in-left');

  lastPath = path;
  mountMotion(path);
}

function render() {
  const path = currentPath();
  if (path === lastPath && app.firstChild) {
    // No actual navigation; ignore (e.g. hash change to same route)
    return;
  }

  if (prefersReducedMotion) {
    renderImmediate(null);
    return;
  }

  if (isTransitioning) {
    pendingRender = true;
    return;
  }

  const prevDepth = pathDepth(lastPath);
  const nextDepth = pathDepth(path);
  const direction = nextDepth > prevDepth ? 'forward'
                  : nextDepth < prevDepth ? 'back'
                  : 'forward';

  isTransitioning = true;
  app.classList.remove('transition-in-left', 'transition-in-right');
  void app.offsetWidth;
  app.classList.add(direction === 'forward' ? 'transition-out-left' : 'transition-out-right');

  setTimeout(() => {
    renderImmediate(direction);
    isTransitioning = false;
    if (pendingRender) {
      pendingRender = false;
      requestAnimationFrame(() => render());
    }
  }, 220);
}

  return { render, currentPath };
}
