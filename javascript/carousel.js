/**
 * CylinderCarousel (shared)
 * Generic, reusable carousel class. Accepts items and options with `root` (Element or selector)
 * or legacy `ids` mapping.
 */
class CylinderCarousel {
    constructor(itemsConfig = null, options = {}) {
        // determine root element
        let root = null;
        if (options.root instanceof Element) root = options.root;
        else if (typeof options.root === 'string') root = document.querySelector(options.root);
        const ids = options.ids || {};

        this.container = root ? root.querySelector('.carousel-container') : document.getElementById(ids.container || 'carouselContainer');
        this.markersContainer = root ? root.querySelector('.markers-container') : document.getElementById(ids.markers || 'markersContainer');
        this.prevBtn = root ? root.querySelector('.nav-btn.prev') : document.getElementById(ids.prevBtn || 'prevBtn');
        this.nextBtn = root ? root.querySelector('.nav-btn.next') : document.getElementById(ids.nextBtn || 'nextBtn');

        // Default items
        this.itemsConfig = itemsConfig || [
            { title: 'Item 1', html: '<h3>Item 1</h3><p>Default content 1</p>' },
            { title: 'Item 2', html: '<h3>Item 2</h3><p>Default content 2</p>' },
            { title: 'Item 3', html: '<h3>Item 3</h3><p>Default content 3</p>' },
            { title: 'Item 4', html: '<h3>Item 4</h3><p>Default content 4</p>' }
        ];

        this.itemCount = this.itemsConfig.length;
        this.currentIndex = 0;
        this.radius = options.radius || 250;
        this.angleStep = 360 / this.itemCount;

        this.init();
    }

    init() {
        if (!this.container) {
            console.warn('CylinderCarousel: container not found for', this);
            return;
        }

        // clear existing content (in case multiple inits)
        this.container.innerHTML = '';
        if (this.markersContainer) this.markersContainer.innerHTML = '';

        for (let i = 0; i < this.itemCount; i++) {
            const cfg = this.itemsConfig[i] || {};
            const item = document.createElement('div');
            item.className = 'Item_P';

            if (cfg.html) item.innerHTML = cfg.html;
            else if (cfg.title) item.textContent = cfg.title;
            else item.textContent = `Item ${i + 1}`;

            item.dataset.index = i;
            this.container.appendChild(item);

            if (this.markersContainer) {
                const marker = document.createElement('div');
                marker.className = 'marker';
                if (i === 0) marker.classList.add('active');
                marker.dataset.index = i;
                marker.title = cfg.title || `Item ${i + 1}`;
                marker.addEventListener('click', () => this.goToItem(i));
                this.markersContainer.appendChild(marker);
            }
        }

        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

        if (this.prevBtn || this.nextBtn) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            });
        }

        this.updateCarousel();
    }

    updateCarousel() {
        const items = this.container ? this.container.querySelectorAll('.Item_P') : [];
        const markers = this.markersContainer ? this.markersContainer.querySelectorAll('.marker') : [];

        items.forEach((item, index) => {
            const angle = (this.angleStep * index) - (this.angleStep * this.currentIndex);
            const rad = (angle * Math.PI) / 180;

            const x = Math.sin(rad) * this.radius;
            const z = Math.cos(rad) * this.radius;
            const scale = 1 - Math.abs(z) / (this.radius * 2);

            item.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) scale(${0.8 + scale * 0.4})`;
            item.style.zIndex = Math.round(100 + z);
        });

        markers.forEach((marker, index) => {
            marker.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToItem(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.itemCount) % this.itemCount;
        this.updateCarousel();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.itemCount;
        this.updateCarousel();
    }
}

// Expose globally
window.CylinderCarousel = CylinderCarousel;
