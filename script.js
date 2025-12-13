<script>
const LANG_KEY = 'tpu_lang';
function applyLang(lang){
  document.querySelectorAll('.lang-ru').forEach(e=>e.classList.toggle('hidden', lang==='en'));
  document.querySelectorAll('.lang-en').forEach(e=>e.classList.toggle('hidden', lang==='ru'));
}
function toggleLang(){
  const current = localStorage.getItem(LANG_KEY) || 'ru';
  const next = current === 'ru' ? 'en' : 'ru';
  localStorage.setItem(LANG_KEY, next);
  applyLang(next);
}
document.addEventListener('DOMContentLoaded', ()=>{
  const lang = localStorage.getItem(LANG_KEY) || 'ru';
  applyLang(lang);
  document.querySelectorAll('#langBtn').forEach(b=>b.onclick=toggleLang);
});
</script>
