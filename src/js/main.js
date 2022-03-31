/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('#header');

function scrollHeader() {
    header.classList.toggle('scroll-header', window.scrollY >= 50);
}

window.addEventListener('scroll', scrollHeader);

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal');
const modalOpenButtons = document.querySelectorAll('.services__button');
const modalCloseButtons = document.querySelectorAll('.services__modal--close');

function openModal(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

function closeModalViews() {
    modalViews.forEach((mv) => mv.classList.remove('active-modal'));
}

modalOpenButtons.forEach((mob, i) => mob.addEventListener('click', () => openModal(i)));

modalCloseButtons.forEach((mcb) => mcb.addEventListener('click', closeModalViews));

// close modal when click outside of modal-content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('active-modal')) {
        closeModalViews();
    }
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
            spaceBetween: 48,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const hasEntered = scrollY > sectionTop;
        const hasNotLeft = scrollY <= sectionTop + sectionHeight;
        const sectionId = current.getAttribute('id');
        const currentNavLink = document.querySelector(`.nav__menu a[href='#${sectionId}']`);

        if (hasEntered && hasNotLeft) {
            currentNavLink.classList.add('active-link');
        } else {
            currentNavLink.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT  THEME ===============*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const icon = 'bx-sun';

// localStorage
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//
const getCurrentTheme = () => (document.body.classList.contains('light-theme') ? 'dark' : 'light');
const getCurrentIcon = () => (document.body.classList.contains(icon) ? 'bx bx-moon' : 'bx bx-sun');

//
if (selectedTheme) {
    // darkTheme is default theme
    // if its on dark theme, add lightTheme, else remove

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
    themeButton.classList[selectedTheme === 'bx bx-moon' ? 'add' : 'remove'](icon);
}

// activate / deactivate theme
themeButton.addEventListener('click', () => {
    // theme toggle
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(icon);
    // save the theme and icon to local storage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
/*
ScrollReveal().reveal(target, options);
*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    cleanup: true,
});

sr.reveal('.home__data');
sr.reveal('.home__handle', { delay: 700 });
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' });
sr.reveal('.about, .skills, .services, .work, .testimonial, .contact', {
    delay: 250,
    origin: 'bottom',
    afterReveal(elm) {
        elm.style = '';
    },
});
