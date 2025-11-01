// BRAND SETTINGS
const BRAND = { name: 'BRAQZ', whatsapp: '+2349136627644', email: 'gentulwrldwide@gmail.com' };

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// WhatsApp deep links
const waNum  = BRAND.whatsapp.replace(/[^0-9]/g, '');
const waLink = (text) => `https://wa.me/${waNum}?text=${encodeURIComponent(text || `Hello ${BRAND.name}!`)}`;

// Wire common buttons if present on the page
['navWa','heroWa','floatWa','contactWa'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink();
});

// Mark active nav link (underline the current page)
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlink').forEach(a => {
  if (a.getAttribute('href') === path) a.classList.add('underline','font-semibold');
});
