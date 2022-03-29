/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('#header');

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  header.classList.toggle('scroll-header', window.scrollY >= 50);
}
