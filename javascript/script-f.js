    /**
     * CylinderCarousel
     *
     * Configuration: pass an array of item objects to the constructor to customize each panel.
     * Each object may include:
     *   - title: string (fallback text shown on markers and when html is absent)
     *   - html: string (raw innerHTML for the item panel)
     *
     * Recommended: provide exactly four items for a 4-panel carousel, but the class works with any length.
     */
// script-f.js: instantiate shared CylinderCarousel for Section_C-2

document.addEventListener('DOMContentLoaded', () => {
    const myItems = [
        { title: 'Перфект Принт', html: '<img src="img/per-print-prewiew.png" alt="s"><h3>Перфект Принт</h3><p><a href="https://www.figma.com/design/YOmVY5HPi4pJiTEMaU7Qev/%D0%A1%D0%B0%D0%BC%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_5-%D0%A1%D0%B0%D1%84%D0%B8%D0%BD.%D0%90-%D0%9F-19?m=auto&t=5sKEOODFAtmWrQ6p-6">Проект</a></p>' },
        { title: 'Полезное Питание', html: '<img src="img/pol-pit-prewiew.png" alt="s"><h3>Полезное Питание</h3><p><a href="https://www.figma.com/design/4CZPfCUHLZkJjTfOKnIHJ4/%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_5-%D0%A1%D0%B0%D1%84%D0%B8%D0%BD.%D0%90-%D0%9F-19--Copy-?m=auto&t=5sKEOODFAtmWrQ6p-6">Проект</a></p>' },
        { title: 'Портфолио', html: '<img src="img/portfolio-draft-prewiew.png" alt="s"><h3>Портфолио</h3><p><a href="https://www.figma.com/design/4x2lwxqifU2wa4vDoj2sXG/Draft_Site-portfolio?m=auto&t=5sKEOODFAtmWrQ6p-6">Проект</a></p>' },
        { title: 'Мобильное Приложение', html: '<img src="img/mobile-prewiew.png" alt="s"><h3>Мобильное Приложение</h3><p><a href="https://www.figma.com/design/vN9slgoOFUhuK9Jp8K1H5a/Mobile_App_Screen?m=auto&t=5sKEOODFAtmWrQ6p-6">Проект</a></p>' }
    ];

    if (window.CylinderCarousel) {
        new CylinderCarousel(myItems, { root: document.querySelector('.Section_C-2') });
    } else {
        console.error('CylinderCarousel not found for Section_C-2');
    }
});