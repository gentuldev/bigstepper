// ========== BRAND ==========
const BRAND = { name: 'BRAQZ!', whatsapp: '+2349136627644', email: 'gentulwrldwide@gmail.com' };

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// WhatsApp deep links
const waNum  = BRAND.whatsapp.replace(/[^0-9]/g, '');
const waLink = (text) => `https://wa.me/${waNum}?text=${encodeURIComponent(text || `Hello ${BRAND.name}!`)}`;

// Wire common buttons if present on the page
['heroWa','floatWa','contactWa'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink();
});

// Active nav underline (based on filename)
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlink').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('underline','font-semibold');
});

// ======= Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ======= Floating WhatsApp: fold on scroll (hide when scrolling down, show when up)
(function(){
  const floater = document.getElementById('floatWa');
  if (!floater) return;
  let lastY = window.scrollY;
  let ticking = false;

  // smooth animation on class changes
  floater.classList.add('transition','duration-300');

  const onScroll = () => {
    const y = window.scrollY;
    const goingDown = y > lastY + 5;
    const goingUp   = y < lastY - 5;

    if (goingDown) {
      floater.classList.add('translate-y-24','opacity-0','scale-95');
    } else if (goingUp) {
      floater.classList.remove('translate-y-24','opacity-0','scale-95');
    }
    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();
