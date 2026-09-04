// LA MANCHA — landing page interactions

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.classList.toggle('is-active', open);
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.classList.remove('is-active');
      });
    });
  }

  // Pause the screenshot marquee on hover/touch for readability
  const track = document.querySelector('.capturas-track');
  if (track) {
    track.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
    track.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
  }

  // Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Language toggle (ES / EN) — translates every element tagged with data-es/data-en
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    let lang = 'es';
    langToggle.addEventListener('click', () => {
      lang = lang === 'es' ? 'en' : 'es';
      document.querySelectorAll('[data-es]').forEach((el) => {
        // innerHTML (not textContent) so tagged elements can keep inline
        // formatting like <strong> in their translated copy.
        el.innerHTML = el.dataset[lang];
      });
      langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
      langToggle.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
      document.documentElement.lang = lang === 'es' ? 'es-CL' : 'en';
    });
  }
});
