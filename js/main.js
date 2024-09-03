const headerNavBtn = document.querySelector('.header-nav--btn');
const mobailCloseBtn = document.querySelector('.mobail-close-btn');
const mobailMenu = document.querySelector('.mobail-menu');

const orderBtn = document.querySelector('.hero-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal-window');

function noScrol() {
  document.body.classList.toggle('no-scroll');
}

function openMenu() {
  mobailMenu.classList.add('is-open');
  noScrol();
}
function closeMenu() {
  mobailMenu.classList.remove('is-open');
  noScrol();
}
function openModalWindow() {
  modalOverlay.classList.add('is-open');
  noScrol();
}
function closeModalWindow() {
  modalOverlay.classList.remove('is-open');
  noScrol();
}
function stopPropagation(e) {
  e.stopPropagation();
}

headerNavBtn.addEventListener('click', openMenu);
mobailCloseBtn.addEventListener('click', closeMenu);
orderBtn.addEventListener('click', openModalWindow);
modalCloseBtn.addEventListener('click', closeModalWindow);
modalOverlay.addEventListener('click', closeModalWindow);
modalWindow.addEventListener('click', stopPropagation);

// Scroll-Up
const scrollUp = document.querySelector('.scroll-up');
const offset = 1;

const getTop = () => window.scrollY || document.documentElement.scrollTop;

// updateScrollUp
const updateScrollUp = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const step = height / 25;
  let value = getTop() / step;
  scrollUp.style.boxShadow = `inset 0 0 0 ${value}px #31d0aa`;
};

// onScroll
window.addEventListener('scroll', () => {
  updateScrollUp();
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up-active');
  } else {
    scrollUp.classList.remove('scroll-up-active');
  }
});

// click
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
