// Initialize Salla Theme
salla.init({
    // Theme Settings
    darkMode: {
        enable: true,
        default: 'light'
    },
    
    // Cart Settings
    cart: {
        autoOpen: false
    },

    // Event Handlers
    onReady: () => {
        // Initialize components when DOM is ready
        initializeComponents();
    }
});

// Initialize Theme Components
function initializeComponents() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
    const mobileMenu = document.querySelector('[data-menu]');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Initialize Swiper Sliders
    if (typeof Swiper !== 'undefined') {
        // Main Slider
        new Swiper('.main-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Products Slider
        new Swiper('.products-slider', {
            slidesPerView: 1,
            spaceBetween: 16,
            navigation: {
                nextEl: '.products-slider-next',
                prevEl: '.products-slider-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });
    }
}

// Handle Product Quick View
salla.event.on('product.quick-view::open', ({ trigger, data }) => {
    // Add any custom quick view logic here
});

// Handle Add to Cart
salla.event.on('cart::add', ({ trigger, data }) => {
    salla.notify.success('تم إضافة المنتج إلى السلة');
});

// Handle Add to Wishlist
salla.event.on('wishlist::add', ({ trigger, data }) => {
    salla.notify.success('تم إضافة المنتج إلى المفضلة');
});

// Handle Remove from Wishlist
salla.event.on('wishlist::remove', ({ trigger, data }) => {
    salla.notify.success('تم إزالة المنتج من المفضلة');
});

// Initialize Theme Components
function initializeComponents() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
    const mobileMenu = document.querySelector('[data-menu]');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Search Toggle
    const searchBtn = document.querySelector('[data-search]');
    const searchModal = document.querySelector('[data-search-modal]');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.toggle('hidden');
        });
    }
}

// Handle Product Quick View
salla.event.on('product.quick-view::open', ({ trigger, data }) => {
    // Custom quick view logic
});

// Handle Add to Cart
salla.event.on('cart::add', ({ trigger, data }) => {
    // Custom add to cart logic
});
