document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    function toggleMenu() {
        hamburger.classList.toggle('open');
        menu.classList.toggle('show');
    }

    hamburger.addEventListener('click', toggleMenu);

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
            hamburger.classList.remove('open');
            menu.classList.remove('show');
        }
    });
});


let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});