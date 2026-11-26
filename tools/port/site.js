{
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const note = document.querySelector('.note');
let noteT;
function toast(msg) {
  note.textContent = msg; note.style.display = 'block';
  clearTimeout(noteT); noteT = setTimeout(() => { note.style.display = 'none'; }, 4500);
}

// Phone menu
const menu = document.getElementById('menu');
$$('button[aria-label="Deschide meniul"]').forEach(b => b.addEventListener('click', () => { menu.classList.add('open'); menu.setAttribute('aria-hidden', 'false'); }));
const closeMenu = () => { menu.classList.remove('open'); menu.setAttribute('aria-hidden', 'true'); };
menu.querySelector('.bg').addEventListener('click', closeMenu);
menu.querySelector('.x').addEventListener('click', closeMenu);

// Carousels: arrows scroll the scroller in the same section, dots follow
$$('.scroller, .swipe').forEach(sc => {
  const sec = sc.closest('section, article') || sc.parentElement;
  const wrap = sc.parentElement;
  const step = () => (sc.firstElementChild ? sc.firstElementChild.getBoundingClientRect().width + 24 : sc.clientWidth);
  $$('button', wrap).forEach(b => {
    const l = b.getAttribute('aria-label') || '';
    if (/anterio/.test(l)) b.addEventListener('click', () => sc.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (/următo/.test(l)) b.addEventListener('click', () => sc.scrollBy({ left: step(), behavior: 'smooth' }));
  });
  const dots = sec && sec.querySelector('.dots');
  if (!dots) return;
  const ds = [...dots.children];
  const upd = () => {
    const max = sc.scrollWidth - sc.clientWidth;
    const i = max > 0 ? Math.round(sc.scrollLeft / max * (ds.length - 1)) : 0;
    ds.forEach((d, j) => { d.style.width = j === i ? '22px' : '8px'; d.style.background = j === i ? '#C2926D' : '#D4C9BC'; });
  };
  sc.addEventListener('scroll', upd, { passive: true }); upd();
});

// Map: on the real site this loads the Google iframe; the preview cannot embed other sites
$$('button').filter(b => b.textContent.trim() === 'Arată harta Google').forEach(b => b.addEventListener('click', () => {
  const sec = b.closest('section');
  sec.innerHTML = '<div style="max-width:520px;text-align:center;padding:0 24px;display:flex;flex-direction:column;gap:12px;align-items:center"><strong style="font-size:18px">Aici apare harta Google</strong><span style="font-size:15px;color:#5E5852">Pe site-ul final harta se încarcă în acest loc după apăsarea butonului. Previzualizarea nu poate afișa hărți externe.</span><a href="https://www.google.com/maps/search/?api=1&amp;query=Sunrise+Villa+B%C4%83ile+Felix" style="font-weight:600">Deschide în Google Maps</a></div>';
}));

// Gallery: filters and viewer
const cat = l => /cameră/.test(l) ? 'Camere' : /dronă/.test(l) ? 'Din dronă' : /(sala de mese|salon|scara|baia)/.test(l) ? 'Interior' : 'Grădină';
$$('[role="group"][aria-label="Filtrează fotografiile"]').forEach(g => {
  const grid = g.nextElementSibling;
  const tiles = $$('button[aria-label^="Deschide fotografia"]', grid);
  $$('button', g).forEach(b => b.addEventListener('click', () => {
    $$('button', g).forEach(x => { const on = x === b; x.setAttribute('aria-pressed', on); x.style.background = on ? '#2D2926' : 'transparent'; x.style.color = on ? '#E8E1D7' : '#2F2F2D'; x.style.borderColor = on ? '#2D2926' : '#A89880'; x.style.fontWeight = on ? '600' : '400'; });
    const f = b.textContent.trim();
    tiles.forEach(t => { t.style.display = (f === 'Toate' || cat(t.getAttribute('aria-label')) === f) ? '' : 'none'; });
  }));
});
const viewer = document.getElementById('viewer');
const vImg = viewer.querySelector('img'), vCap = viewer.querySelector('.cap'), vCount = viewer.querySelector('.count');
let list = [], idx = 0, lastFocus = null;
function show(i) {
  idx = (i + list.length) % list.length;
  const t = list[idx];
  vImg.src = t.querySelector('img').src;
  const label = t.getAttribute('aria-label').replace('Deschide fotografia: ', '');
  vImg.alt = label; vCap.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  vCount.textContent = (idx + 1) + ' / ' + list.length;
}
$$('button[aria-label^="Deschide fotografia"]').forEach(t => t.addEventListener('click', () => {
  const grid = t.parentElement;
  list = $$('button[aria-label^="Deschide fotografia"]', grid).filter(x => x.style.display !== 'none');
  lastFocus = t; show(list.indexOf(t)); viewer.classList.add('open'); viewer.querySelector('.close').focus();
}));
const closeV = () => { viewer.classList.remove('open'); if (lastFocus) lastFocus.focus(); };
viewer.querySelector('.close').addEventListener('click', closeV);
viewer.querySelector('.prev').addEventListener('click', () => show(idx - 1));
viewer.querySelector('.next').addEventListener('click', () => show(idx + 1));
let tx = null;
viewer.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
viewer.addEventListener('touchend', e => { if (tx === null) return; const dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1)); tx = null; });
document.addEventListener('keydown', e => {
  if (viewer.classList.contains('open')) {
    if (e.key === 'Escape') closeV();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  } else if (menu.classList.contains('open') && e.key === 'Escape') closeMenu();
});

// Contact form: the preview has nowhere to send it
$$('form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); toast('Previzualizare: mesajul nu a fost trimis. Pe site-ul final formularul ajunge la contact@sunrisevilla-felix.com.'); }));
}
