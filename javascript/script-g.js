// script-g.js: instantiate shared CylinderCarousel for Section_C-1

document.addEventListener('DOMContentLoaded', () => {
    const myItems = [
        { title: 'Сайт-Визитка', html: '<img src="img/site-visitka-prewiew.png" alt="s"><h3>Сайт-Визитка</h3><p><a href="https://github.com/Voidversa/Site_Visitka">Репозиторий</a></p><p><a href="https://voidversa.github.io/Site_Visitka/">Публикация</a></p>' },
        { title: 'ЖК Мелодия', html: '<img src="img/zk-melodia-prewiew.png" alt="s"><h3>ЖК Мелодия</h3><p><a href="https://github.com/Voidversa/ZK_Melodia">Репозиторий</a></p><p><a href=https://github.com/Voidversa/ZK_Melodia/releases/tag/v1.0>Публикация</a></p>' },
        { title: 'The Loop', html: '<img src="img/the-loop-prewiew.png" alt="s"><h3>The Loop</h3><p><a href="https://github.com/Voidversa/Single-lane-site">Репозиторий</a></p><p><a href=https://voidversa.github.io/Single-lane-site/>Публикация</a></p>' },
        { title: 'Bee Site', html: '<img src="img/bee-site-prewiew.png" alt="s"><h3>Bee Site</h3><p><a href="https://github.com/Voidversa/bee_site">Репозиторий</a></p><p><a href=https://voidversa.github.io/bee_site/>Публикация</a></p>' }
    ];

    if (window.CylinderCarousel) {
        new CylinderCarousel(myItems, { root: document.querySelector('.Section_C-1') });
    } else {
        console.error('CylinderCarousel not found for Section_C-1');
    }
});