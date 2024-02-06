

window.onload = () => {
    let nav = document.getElementById('wrapper');
    let hamburger = document.getElementById('js-hamb');
    let blackBg = document.getElementById('js-bg');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    blackBg.addEventListener('click', () => {
        nav.classList.remove('open');
    });
};
