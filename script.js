const btn = document.getElementById('lang-toggle');
let currentLang = 'en';

btn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  btn.textContent = currentLang === 'en' ? 'ES' : 'EN';
});
