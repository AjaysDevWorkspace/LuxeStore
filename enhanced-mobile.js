
// Enhanced mobile menu and search functionality

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const searchToggle = document.querySelector('.search-toggle');
    const headerSearch = document.querySelector('.header__search');

    // Create mobile navigation menu
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
        <ul class="nav-list">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#categories" class="nav-link">Categories</a></li>
            <li><a href="#products" class="nav-link">Products</a></li>
            <li><a href="#deals" class="nav-link">Deals</a></li>
        </ul>
    `;

    // Insert mobile nav after header
    const header = document.querySelector('.header');
    header.insertAdjacentElement('afterend', mobileNav);

    // Create search toggle button for mobile
    if (!searchToggle) {
        const newSearchToggle = document.createElement('button');
        newSearchToggle.className = 'search-toggle btn--outline';
        newSearchToggle.setAttribute('aria-label', 'Toggle search');
        newSearchToggle.innerHTML = '<i data-lucide="search"></i>';

        // Insert before mobile menu toggle
        mobileMenuToggle.insertAdjacentElement('beforebegin', newSearchToggle);

        // Add event listener
        newSearchToggle.addEventListener('click', () => {
            headerSearch.classList.toggle('active');
            const isActive = headerSearch.classList.contains('active');
            newSearchToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const isActive = mobileNav.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isActive);

            // Change icon
            const icon = mobileMenuToggle.querySelector('i');
            if (isActive) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }
            // Reinitialize lucide icons
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }

    // Close mobile menu when clicking nav links
    const mobileNavLinks = mobileNav.querySelectorAll('.nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');

            // Reset icon
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    });

    // Close mobile menu and search when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileNav.classList.remove('active');
            headerSearch.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');

            const searchToggleBtn = document.querySelector('.search-toggle');
            if (searchToggleBtn) {
                searchToggleBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileNav.classList.remove('active');
            headerSearch.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Enhanced touch support for mobile devices
function initTouchSupport() {
    // Add touch classes for better touch interaction
    const touchElements = document.querySelectorAll('.btn, .card, .product-card, .category-card');

    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, { passive: true });

        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touch-active');
            }, 150);
        }, { passive: true });
    });
}

// Enhanced responsive image loading
function initResponsiveImages() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// Device orientation handling
function initOrientationHandling() {
    function handleOrientationChange() {
        // Close mobile menus on orientation change
        const mobileNav = document.querySelector('.mobile-nav');
        const headerSearch = document.querySelector('.header__search');

        if (mobileNav) mobileNav.classList.remove('active');
        if (headerSearch) headerSearch.classList.remove('active');

        // Recalculate layouts if needed
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }

    window.addEventListener('orientationchange', handleOrientationChange);
    screen.orientation?.addEventListener('change', handleOrientationChange);
}

// Enhanced viewport handling for mobile browsers
function initViewportHandling() {
    // Handle mobile browser viewport changes (address bar hiding/showing)
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

// Improved scroll handling for mobile
function initScrollHandling() {
    let ticking = false;

    function updateScrollState() {
        const header = document.querySelector('.header');
        const scrolled = window.scrollY > 10;

        if (scrolled) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    }, { passive: true });
}

// Enhanced search functionality
function initEnhancedSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput && searchBtn) {
        // Prevent form submission if no value
        searchBtn.addEventListener('click', (e) => {
            if (!searchInput.value.trim()) {
                e.preventDefault();
                searchInput.focus();
            }
        });

        // Handle Enter key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                // Perform search
                console.log('Search for:', searchInput.value);
            }
        });
    }
}

// Initialize all enhanced mobile functionality
function initEnhancedMobile() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initMobileMenu();
            initTouchSupport();
            initResponsiveImages();
            initOrientationHandling();
            initViewportHandling();
            initScrollHandling();
            initEnhancedSearch();
        });
    } else {
        initMobileMenu();
        initTouchSupport();
        initResponsiveImages();
        initOrientationHandling();
        initViewportHandling();
        initScrollHandling();
        initEnhancedSearch();
    }
}

// Start initialization
initEnhancedMobile();

// Add CSS for touch states
const touchStyles = `
<style>
.touch-active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
}

.header.scrolled {
    background: rgba(var(--color-surface), 0.95);
    backdrop-filter: blur(20px);
    box-shadow: var(--shadow-lg);
}

/* Mobile viewport height fix */
.hero {
    min-height: calc(var(--vh, 1vh) * 100);
}

/* Enhanced mobile search styles */
@media (max-width: 768px) {
    .search-toggle:hover {
        background: var(--color-secondary);
        transform: scale(1.1);
    }

    .mobile-nav .nav-link:active {
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
    }
}
</style>
`;

// Inject touch styles
document.head.insertAdjacentHTML('beforeend', touchStyles);
