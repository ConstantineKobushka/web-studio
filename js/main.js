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
