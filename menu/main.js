const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('change');
}