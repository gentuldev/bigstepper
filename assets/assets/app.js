// ===== Brand / WhatsApp
const BRAND = { name: 'BRAQZ!', whatsapp: '+2349136627644' };
const waNum  = BRAND.whatsapp.replace(/[^0-9]/g, '');
const waLink = (text) => `https://wa.me/${waNum}?text=${encodeURIComponent(text || `Hello ${BRAND.name}!`)}`;

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Wire common WA buttons if present
['heroWa','floatWa','contactWa'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink();
});

// ===== Animated hamburger menu (slide + fade)
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('scale-y-0')) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('scale-y-0','opacity-0');
        mobileMenu.classList.add('scale-y-100','opacity-100');
      }, 10);
    } else {
      mobileMenu.classList.add('scale-y-0','opacity-0');
      setTimeout(() => mobileMenu.classList.add('hidden'), 250);
    }
  });
}

// ===== Floating WhatsApp: fold on scroll
(function(){
  const floater = document.getElementById('floatWa');
  if (!floater) return;
  floater.href = waLink();
  floater.classList.add('transition','duration-300');
  let lastY = window.scrollY, ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    if (y > lastY + 5) floater.classList.add('translate-y-24','opacity-0','scale-95');
    else if (y < lastY - 5) floater.classList.remove('translate-y-24','opacity-0','scale-95');
    lastY = y; ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive:true });
})();
