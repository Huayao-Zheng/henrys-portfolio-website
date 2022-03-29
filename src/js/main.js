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

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
  linkWork.forEach((lw) => lw.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach((lw) => lw.addEventListener('click', activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper('.testimonial__container', {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
