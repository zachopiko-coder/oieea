import { createRouter } from './router.js';
import { mountMotion, initScrollProgress, initHeaderScroll } from './animations.js';

const app = document.getElementById('app');
const nav = document.getElementById('primary-nav');
const navToggle = document.getElementById('nav-toggle');
const { render } = createRouter({ app, nav, navToggle, mountMotion });

/* ---------- Mobile nav ---------- */
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.addEventListener('click', event => {
  if (!event.target.closest('a')) return;
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
});

/* ---------- Forms ---------- */
document.addEventListener('submit', event => {
  if (event.target.id !== 'contact-form') return;
  event.preventDefault();

  const form = event.target;
  const status = form.querySelector('[data-form-status]');
  let validForm = true;
  const validate = (id, test) => {
    const field = form.elements.namedItem(id);
    const valid = test(field.value);
    field.closest('.form-field').classList.toggle('invalid', !valid);
    field.setAttribute('aria-invalid', valid ? 'false' : 'true');
    if (!valid) validForm = false;
  };

  status.textContent = '';
  validate('name', value => value.trim().length > 1);
  validate('org', value => value.trim().length > 1);
  validate('email', value => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value));
  validate('need', value => value !== '');
  validate('message', value => value.trim().length > 9);

  const consent = form.elements.namedItem('consent');
  const consentError = form.querySelector('#consent-error');
  consent.closest('.form-field').classList.toggle('invalid', !consent.checked);
  consent.setAttribute('aria-invalid', consent.checked ? 'false' : 'true');
  consentError.closest('.form-field').classList.toggle('invalid', !consent.checked);
  if (!consent.checked) validForm = false;

  if (!validForm) {
    status.textContent = 'Please correct the highlighted fields before continuing.';
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const values = new FormData(form);
  const message = [
    `Name: ${values.get('name')}`,
    `Organisation: ${values.get('org')}`,
    `Role: ${values.get('role') || 'Not provided'}`,
    `Email: ${values.get('email')}`,
    `Phone: ${values.get('phone') || 'Not provided'}`,
    `Need: ${values.get('need')}`,
    '',
    `Message: ${values.get('message')}`
  ].join('\n');
  const subject = `OIEEA enquiry: ${values.get('need')}`;
  status.textContent = 'Your email app should open with this message. Review and send it there; this website has not sent the enquiry.';
  window.location.href = `mailto:info@oieeadvisory.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

document.getElementById('year').textContent = new Date().getFullYear();
initScrollProgress();
initHeaderScroll();
window.addEventListener('hashchange', render);
render();
