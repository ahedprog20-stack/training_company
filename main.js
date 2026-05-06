/* ============= Smart Way - Main JS ============= */

// ----- Navbar scroll & mobile menu -----
(function(){
  const nav = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});

  if(toggle && menu){
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      const open = menu.classList.contains('open');
      toggle.innerHTML = open
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  }
})();

// ----- Toast -----
function showToast(title, desc){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 4500);
}
window.showToast = showToast;

// ----- Hero slider -----
(function(){
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dots button');
  if(!slides.length) return;
  let i = 0;
  const go = (n) => {
    slides.forEach((s, k) => s.classList.toggle('hidden', k !== n));
    dots.forEach((d, k) => d.classList.toggle('active', k === n));
    i = n;
  };
  dots.forEach((d, k) => d.addEventListener('click', () => go(k)));
  setInterval(() => go((i + 1) % slides.length), 5500);
})();

// ----- Footer year -----
(function(){
  const y = document.querySelector('.footer-year');
  if(y) y.textContent = new Date().getFullYear();
})();

// ----- Generic contact form -----
(function(){
  const form = document.querySelector('#contact-form');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('تم إرسال رسالتك بنجاح ✅', 'سيتواصل معك فريقنا خلال 24 ساعة.');
    form.reset();
  });
})();

// counter 

var count = 385;
var counter = 146;

function updateC(){
  count++;
  document.getElementById("count").innerText = count;
}

function updateP(){
  counter++;
  document.getElementById("counter").innerText = counter;
}

function updatePC(){
  document.getElementById("pc").innerText = parseInt((50+((Math.random()*50))))+"%";
}

setInterval(updateC,2000);
setInterval(updateP,420000);
setInterval(updatePC,2000);


/* ============= Portfolio filters ============= */
(function(){
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  if(!buttons.length) return;
  buttons.forEach(b => b.addEventListener('click', () => {
    const f = b.dataset.filter;
    buttons.forEach(x => x.classList.toggle('active', x === b));
    items.forEach(it => {
      it.classList.toggle('hidden', !(f === 'الكل' || it.dataset.cat === f));
    });
  }));
})();