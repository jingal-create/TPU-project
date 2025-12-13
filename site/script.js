// Переключение языка
const langBtn = document.getElementById('langBtn');
const ruSections = document.querySelectorAll('.lang-ru');
const enSections = document.querySelectorAll('.lang-en');

langBtn.addEventListener('click', () => {
  ruSections.forEach(sec => sec.classList.toggle('hidden'));
  enSections.forEach(sec => sec.classList.toggle('hidden'));
});

// Переключение темы
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
