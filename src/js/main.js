/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('#header');

function scrollHeader() {
  header.classList.toggle('scroll-header', window.scrollY >= 50);
}

window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal');
const modalButtons = document.querySelectorAll('.services__button');
const modalCloseButtons = document.querySelectorAll('.services__modal--close');

function modal(modalClick) {
  modalViews[modalClick].classList.toggle('active-modal');
}

modalButtons.forEach((mb, i) => {
  mb.addEventListener('click', () => modal(i));
});

modalCloseButtons.forEach((mcb, i) => {
  mcb.addEventListener('click', () => modal(i));
});
