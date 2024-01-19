AOS.init();

const mobileMenu = document.querySelector('.icon-menu');

function toggleMenu() {
    const navi = document.querySelector('.navigation');
    navi.classList.toggle('active');
}

mobileMenu.addEventListener('click', toggleMenu);
