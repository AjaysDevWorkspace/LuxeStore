
const appData = {
    "products": [
      {
        "id": 1,
        "name": "Luxury Wireless Headphones",
        "price": 299,
        "originalPrice": 399,
        "category": "electronics",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        "images": [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944",
          "https://images.unsplash.com/photo-1546435770-a3e426"
        ],
        "rating": 4.8,
        "reviews": 127,
        "description": "Premium noise-cancelling headphones with 30-hour battery life and crystal-clear audio quality.",
        "features": ["Noise Cancellation", "30h Battery", "Wireless", "Premium Audio"],
        "inStock": true,
        "sale": true
      },
      {
        "id": 2,
        "name": "Smart Fitness Watch",
        "price": 249,
        "category": "electronics",
        "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "images": [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
        ],
        "rating": 4.6,
        "reviews": 89,
        "description": "Track your fitness goals with advanced health monitoring and GPS functionality.",
        "features": ["GPS Tracking", "Heart Rate Monitor", "Waterproof", "7-day Battery"],
        "inStock": true,
        "sale": false
      },
      {
        "id": 3,
        "name": "Premium Leather Jacket",
        "price": 399,
        "category": "fashion",
        "image": "https://images.unsplash.com/photo-1551028719-00167b16eac5",
        "images": [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5",
          "https://images.unsplash.com/photo-1520975954732-35dd22299614"
        ],
        "rating": 4.9,
        "reviews": 203,
        "description": "Handcrafted genuine leather jacket with timeless design and superior craftsmanship.",
        "features": ["Genuine Leather", "Handcrafted", "Premium Quality", "Timeless Design"],
        "inStock": true,
        "sale": false
      },
      {
        "id": 4,
        "name": "Designer Sneakers",
        "price": 159,
        "category": "fashion",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        "images": [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772",
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86"
        ],
        "rating": 4.7,
        "reviews": 156,
        "description": "Contemporary design meets comfort in these premium designer sneakers.",
        "features": ["Premium Materials", "Comfortable Fit", "Designer Style", "Durable"],
        "inStock": true,
        "sale": false
      },
      {
        "id": 5,
        "name": "Minimalist Desk Lamp",
        "price": 89,
        "originalPrice": 119,
        "category": "home",
        "image": "https://i.pinimg.com/736x/9b/89/5e/9b895ecd67b71d3436df1938b7aad0ee.jpg",
        "images": [
          "https://i.pinimg.com/736x/9b/89/5e/9b895ecd67b71d3436df1938b7aad0ee.jpg",
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15"
        ],
        "rating": 4.5,
        "reviews": 78,
        "description": "Sleek and modern desk lamp with adjustable brightness and USB charging port.",
        "features": ["LED Lighting", "USB Charging", "Adjustable", "Modern Design"],
        "inStock": true,
        "sale": true
      },
      {
        "id": 6,
        "name": "Wireless Charging Pad",
        "price": 49,
        "category": "electronics",
        "image": "https://www.esrtech.com/cdn/shop/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-US-Plug_Black-ESR-227612461.jpg",
        "images": [
          "https://www.esrtech.com/cdn/shop/files/CryoBoost-3-in-1-Magnetic-Charging-Station-_25W_-Qi2.2_-US-Plug_Black-ESR-227612461.jpg"
        ],
        "rating": 4.4,
        "reviews": 92,
        "description": "Fast wireless charging with sleek design and universal compatibility.",
        "features": ["Fast Charging", "Universal Compatible", "Sleek Design", "Safe Charging"],
        "inStock": true,
        "sale": false
      }
    ],
    "categories": [
      {
        "id": "electronics",
        "name": "Electronics",
        "image": "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
        "description": "Latest tech gadgets and electronics"
      },
      {
        "id": "fashion",
        "name": "Fashion",
        "image": "https://images.unsplash.com/photo-1445205170230-053b83016050",
        "description": "Trendy clothing and accessories"
      },
      {
        "id": "home",
        "name": "Home & Living",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        "description": "Furniture and home decor"
      }
    ],
    "testimonials": [
      {
        "name": "Sarah Johnson",
        "rating": 5,
        "text": "Amazing quality products and lightning-fast delivery! The customer service is exceptional.",
        "avatar": "https://fairbanks.indianapolis.iu.edu/images/about/directory/faculty/johnson-sarah_3.jpg?w=300"
      },
      {
        "name": "Michael Chen",
        "rating": 5,
        "text": "Best online shopping experience I've had. The website is so easy to use and the products are exactly as described.",
        "avatar": "https://m.media-amazon.com/images/M/MV5BMDBmNjJlNDctYWJiYS00NWRlLTk1N2UtYmZjNjQ3OTQ1ZWU0XkEyXkFqcGc@._V1_.jpg?w=300"
      },
      {
        "name": "Emma Davis",
        "rating": 5,
        "text": "Love the modern design and how smooth everything works. Definitely my go-to store now!",
        "avatar": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300"
      }
    ]
  };
  
  // Application state management
  class AppState {
    constructor() {
      this.cart = [];
      this.filters = {
        category: '',
        sort: 'featured',
        priceMax: 500,
        searchQuery: ''
      };
      this.currentTheme = 'light';
      this.isCartOpen = false;
      this.isModalOpen = false;
    }
  
    // Cart management methods
    addToCart(productId, quantity = 1) {
      const product = appData.products.find(p => p.id === productId);
      if (!product) return;
  
      const existingItem = this.cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cart.push({ ...product, quantity });
      }
      
      this.updateCartUI();
      this.showNotification(`${product.name} added to cart!`, 'success');
    }
  
    removeFromCart(productId) {
      const product = this.cart.find(item => item.id === productId);
      this.cart = this.cart.filter(item => item.id !== productId);
      this.updateCartUI();
      if (product) {
        this.showNotification(`${product.name} removed from cart`, 'info');
      }
    }
  
    updateQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId);
      if (item) {
        if (quantity <= 0) {
          this.removeFromCart(productId);
        } else {
          item.quantity = quantity;
          this.updateCartUI();
        }
      }
    }
  
    getCartTotal() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  
    getCartItemCount() {
      return this.cart.reduce((count, item) => count + item.quantity, 0);
    }
  
    // Filter and search methods
    updateFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters };
      this.renderProducts();
    }
  
    getFilteredProducts() {
      let filtered = [...appData.products];
  
      // Category filter
      if (this.filters.category) {
        filtered = filtered.filter(product => product.category === this.filters.category);
      }
  
      // Price filter
      filtered = filtered.filter(product => product.price <= this.filters.priceMax);
  
      // Search filter
      if (this.filters.searchQuery) {
        const query = this.filters.searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.features.some(feature => feature.toLowerCase().includes(query))
        );
      }
  
      // Sort products
      switch (this.filters.sort) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          // For demo purposes, use reverse order
          filtered.reverse();
          break;
        default:
          // Featured order - keep original order
          break;
      }
  
      return filtered;
    }
  
    // Notification system
    showNotification(message, type = 'info') {
      const notification = document.createElement('div');
      notification.className = `notification notification--${type}`;
      notification.innerHTML = `
        <div class="notification__content">
          <span class="notification__message">${message}</span>
          <button class="notification__close" onclick="this.parentElement.parentElement.remove()">
            <i data-lucide="x"></i>
          </button>
        </div>
      `;
  
      // Add to DOM
      document.body.appendChild(notification);
      
      // Initialize icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
  
      // Auto remove after 3 seconds
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove();
        }
      }, 3000);
    }
  
    // UI update methods
    updateCartUI() {
      const cartCount = document.getElementById('cartCount');
      const cartItems = document.getElementById('cartItems');
      const cartEmpty = document.getElementById('cartEmpty');
      const cartFooter = document.getElementById('cartFooter');
      const cartSubtotal = document.getElementById('cartSubtotal');
      const cartTotal = document.getElementById('cartTotal');
  
      // Update cart count
      if (cartCount) {
        cartCount.textContent = this.getCartItemCount();
        cartCount.style.display = this.getCartItemCount() > 0 ? 'block' : 'none';
      }
  
      // Update cart items
      if (cartItems && cartEmpty && cartFooter) {
        if (this.cart.length === 0) {
          cartItems.style.display = 'none';
          cartEmpty.style.display = 'block';
          cartFooter.style.display = 'none';
        } else {
          cartItems.style.display = 'block';
          cartEmpty.style.display = 'none';
          cartFooter.style.display = 'block';
          
          cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" class="cart-item__image">
              <div class="cart-item__details">
                <div class="cart-item__name">${item.name}</div>
                <div class="cart-item__price">$${item.price.toFixed(2)}</div>
                <div class="cart-item__controls">
                  <button class="quantity-btn" onclick="handleQuantityChange(event, ${item.id}, ${item.quantity - 1})">
                    <i data-lucide="minus"></i>
                  </button>
                  <span class="quantity-display">${item.quantity}</span>
                  <button class="quantity-btn" onclick="handleQuantityChange(event, ${item.id}, ${item.quantity + 1})">
                    <i data-lucide="plus"></i>
                  </button>
                  <button class="cart-item__remove" onclick="handleRemoveFromCart(event, ${item.id})" aria-label="Remove ${item.name}">
                    <i data-lucide="trash-2"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join('');
  
          // Update totals
          const total = this.getCartTotal();
          if (cartSubtotal) cartSubtotal.textContent = `$${total.toFixed(2)}`;
          if (cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
  
          // Reinitialize icons
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        }
      }
    }
  }
  
  // Initialize app state
  const app = new AppState();
  
  // Fixed event handlers to prevent event bubbling
  function handleQuantityChange(event, productId, newQuantity) {
    event.stopPropagation();
    event.preventDefault();
    app.updateQuantity(productId, newQuantity);
  }
  
  function handleRemoveFromCart(event, productId) {
    event.stopPropagation();
    event.preventDefault();
    app.removeFromCart(productId);
  }
  
  // DOM Content Loaded Event
  document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
  });
  
  // Main initialization function
  function initializeApp() {
    // Initialize all components
    initializeTheme();
    initializeNavigation();
    initializeSearch();
    initializeFilters();
    initializeCart();
    initializeModals();
    renderCategories();
    renderProducts();
    renderTestimonials();
    initializeNewsletter();
    initializeSmoothScrolling();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  
    console.log('LuxeStore initialized successfully! 🚀');
  }
  
  // Theme Management
  function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = getCookie('theme') || 'light';
    
    setTheme(savedTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const newTheme = app.currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setCookie('theme', newTheme, 365);
      });
    }
  }
  
  function setTheme(theme) {
    app.currentTheme = theme;
    document.documentElement.setAttribute('data-color-scheme', theme);
    
    // Update theme toggle icons
    const lightIcon = document.querySelector('.light-icon');
    const darkIcon = document.querySelector('.dark-icon');
    
    if (lightIcon && darkIcon) {
      if (theme === 'dark') {
        lightIcon.style.opacity = '0';
        darkIcon.style.opacity = '1';
      } else {
        lightIcon.style.opacity = '1';
        darkIcon.style.opacity = '0';
      }
    }
  }
  
  // Cookie utilities (simple alternative to localStorage)
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Navigation
  function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      const currentScrollY = window.scrollY;
      
      if (header) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
    });
  }
  
  function toggleMobileMenu() {
    const nav = document.querySelector('.header__nav');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    
    if (nav && mobileMenuToggle) {
      nav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    }
  }
  
  // Search functionality
  function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    let searchTimeout;
  
    if (searchInput && searchSuggestions) {
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.trim();
        
        if (query.length < 2) {
          hideSuggestions();
          app.updateFilters({ searchQuery: '' });
          return;
        }
  
        searchTimeout = setTimeout(() => {
          showSuggestions(query);
          app.updateFilters({ searchQuery: query });
        }, 300);
      });
  
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          hideSuggestions();
          searchInput.blur();
        }
      });
  
      // Hide suggestions when clicking outside
      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
          hideSuggestions();
        }
      });
    }
  
    function showSuggestions(query) {
      const filteredProducts = appData.products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
  
      if (filteredProducts.length > 0) {
        searchSuggestions.innerHTML = filteredProducts.map(product => `
          <div class="suggestion-item" onclick="selectProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}" style="width: 32px; height: 32px; object-fit: cover; border-radius: 4px;">
            <div>
              <div style="font-weight: 500; font-size: 14px;">${product.name}</div>
              <div style="color: var(--color-primary); font-size: 12px;">$${product.price}</div>
            </div>
          </div>
        `).join('');
        
        searchSuggestions.classList.add('active');
        searchSuggestions.setAttribute('aria-hidden', 'false');
      } else {
        hideSuggestions();
      }
    }
  
    function hideSuggestions() {
      searchSuggestions.classList.remove('active');
      searchSuggestions.setAttribute('aria-hidden', 'true');
    }
  }
  
  // Global function for suggestion selection
  function selectProduct(productId) {
    const product = appData.products.find(p => p.id === productId);
    if (product) {
      showProductModal(product);
      const searchSuggestions = document.getElementById('searchSuggestions');
      if (searchSuggestions) {
        searchSuggestions.classList.remove('active');
      }
    }
  }
  
  // Filters
  function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const clearFilters = document.getElementById('clearFilters');
  
    if (categoryFilter) {
      categoryFilter.addEventListener('change', (e) => {
        app.updateFilters({ category: e.target.value });
      });
    }
  
    if (sortFilter) {
      sortFilter.addEventListener('change', (e) => {
        app.updateFilters({ sort: e.target.value });
      });
    }
  
    if (priceRange && priceValue) {
      priceRange.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        priceValue.textContent = value;
        app.updateFilters({ priceMax: value });
      });
    }
  
    if (clearFilters) {
      clearFilters.addEventListener('click', () => {
        // Reset filters
        if (categoryFilter) categoryFilter.value = '';
        if (sortFilter) sortFilter.value = 'featured';
        if (priceRange) priceRange.value = '500';
        if (priceValue) priceValue.textContent = '500';
        
        app.updateFilters({
          category: '',
          sort: 'featured',
          priceMax: 500,
          searchQuery: ''
        });
        
        // Clear search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.value = '';
      });
    }
  }
  
  // Cart Management
  function initializeCart() {
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const startShoppingBtn = document.getElementById('startShoppingBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
  
    if (cartToggle) {
      cartToggle.addEventListener('click', () => toggleCart(true));
    }
  
    if (cartClose) {
      cartClose.addEventListener('click', () => toggleCart(false));
    }
  
    if (cartBackdrop) {
      cartBackdrop.addEventListener('click', () => toggleCart(false));
    }
  
    if (startShoppingBtn) {
      startShoppingBtn.addEventListener('click', () => {
        toggleCart(false);
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        app.showNotification('Checkout functionality coming soon!', 'info');
      });
    }
  
    // Initialize cart UI
    app.updateCartUI();
  }
  
  function toggleCart(open) {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
      app.isCartOpen = open;
      if (open) {
        cartSidebar.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        cartSidebar.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }
  
  // Product Modal
  function initializeModals() {
    const productModal = document.getElementById('productModal');
    const productModalClose = document.getElementById('productModalClose');
    const productModalBackdrop = document.getElementById('productModalBackdrop');
  
    if (productModalClose) {
      productModalClose.addEventListener('click', () => closeProductModal());
    }
  
    if (productModalBackdrop) {
      productModalBackdrop.addEventListener('click', () => closeProductModal());
    }
  
    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && app.isModalOpen) {
        closeProductModal();
      }
    });
  }
  
  function showProductModal(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('productModalBody');
    
    if (modal && modalBody) {
      const originalPrice = product.originalPrice || product.price;
      const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
      
      modalBody.innerHTML = `
        <div class="product-detail">
          <div class="product-detail__images">
            <img src="${product.images[0]}" alt="${product.name}" class="product-detail__main-image" id="mainImage">
            <div class="product-detail__thumbnails">
              ${product.images.map((img, index) => `
                <img src="${img}" alt="${product.name}" class="thumbnail ${index === 0 ? 'active' : ''}" 
                     onclick="changeMainImage('${img}', this)">
              `).join('')}
            </div>
          </div>
          <div class="product-detail__info">
            <h2 class="product-detail__name">${product.name}</h2>
            <div class="product-rating">
              <div class="stars">
                ${generateStars(product.rating)}
              </div>
              <span class="rating-text">(${product.reviews} reviews)</span>
            </div>
            <div class="product-detail__price">
              <span class="price-current">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `
                <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
                <span class="price-discount">-${discount}%</span>
              ` : ''}
            </div>
            <p class="product-detail__description">${product.description}</p>
            <div class="product-features">
              ${product.features.map(feature => `
                <span class="feature-tag">${feature}</span>
              `).join('')}
            </div>
            <div class="product-detail__actions">
              <button class="btn btn--primary btn--lg" onclick="app.addToCart(${product.id}); closeProductModal();">
                Add to Cart
                <i data-lucide="shopping-cart"></i>
              </button>
              <button class="btn btn--outline btn--lg">
                <i data-lucide="heart"></i>
              </button>
            </div>
          </div>
        </div>
      `;
      
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      app.isModalOpen = true;
      document.body.style.overflow = 'hidden';
      
      // Initialize icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
  
  function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      app.isModalOpen = false;
      document.body.style.overflow = '';
    }
  }
  
  function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (mainImage) {
      mainImage.src = imageSrc;
    }
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
  }
  
  // Render Functions
  function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    if (!categoriesGrid) return;
  
    categoriesGrid.innerHTML = appData.categories.map(category => `
      <div class="category-card" onclick="filterByCategory('${category.id}')">
        <img src="${category.image}" alt="${category.name}" class="category-card__image">
        <div class="category-card__overlay">
          <h3 class="category-card__title">${category.name}</h3>
          <p class="category-card__description">${category.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const productsLoading = document.getElementById('productsLoading');
    
    if (!productsGrid) return;
  
    // Show loading
    if (productsLoading) {
      productsLoading.classList.add('visible');
    }
  
    // Simulate loading delay for better UX
    setTimeout(() => {
      const filteredProducts = app.getFilteredProducts();
      
      if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
            <i data-lucide="search" style="width: 64px; height: 64px; color: var(--color-text-secondary); margin-bottom: 1rem;"></i>
            <h3 style="margin-bottom: 0.5rem;">No products found</h3>
            <p style="color: var(--color-text-secondary);">Try adjusting your filters or search terms</p>
          </div>
        `;
      } else {
        productsGrid.innerHTML = filteredProducts.map(product => {
          const originalPrice = product.originalPrice || product.price;
          const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
          
          return `
            <article class="product-card">
              <div class="product-card__image-container">
                <img src="${product.image}" alt="${product.name}" class="product-card__image">
                <div class="product-card__badges">
                  ${product.sale ? '<span class="badge badge--sale">Sale</span>' : ''}
                  ${product.inStock ? '' : '<span class="badge badge--out-of-stock">Out of Stock</span>'}
                </div>
                <div class="product-card__actions">
                  <button class="action-btn" onclick="showProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})" aria-label="Quick view ${product.name}">
                    <i data-lucide="eye"></i>
                  </button>
                  <button class="action-btn" aria-label="Add to wishlist">
                    <i data-lucide="heart"></i>
                  </button>
                </div>
              </div>
              <div class="product-card__content">
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__description">${product.description}</p>
                <div class="product-rating">
                  <div class="stars">
                    ${generateStars(product.rating)}
                  </div>
                  <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">
                  <span class="price-current">$${product.price.toFixed(2)}</span>
                  ${product.originalPrice ? `
                    <span class="price-original">$${product.originalPrice.toFixed(2)}</span>
                    <span class="price-discount">-${discount}%</span>
                  ` : ''}
                </div>
                <div class="product-card__footer">
                  <button class="btn btn--primary btn--add-to-cart" onclick="app.addToCart(${product.id})">
                    <i data-lucide="shopping-cart"></i>
                    Add to Cart
                  </button>
                  <button class="btn btn--outline btn--quick-view" onclick="showProductModal(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <i data-lucide="eye"></i>
                  </button>
                </div>
              </div>
            </article>
          `;
        }).join('');
      }
      
      // Hide loading
      if (productsLoading) {
        productsLoading.classList.remove('visible');
      }
      
      // Initialize icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 300);
  }
  
  function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;
  
    testimonialsGrid.innerHTML = appData.testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="testimonial-header">
          <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
          <div class="testimonial-info">
            <h4>${testimonial.name}</h4>
            <div class="testimonial-rating">
              ${generateStars(testimonial.rating)}
            </div>
          </div>
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
      </div>
    `).join('');
  }
  
  // Helper Functions
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
      ${'<i data-lucide="star" class="star" style="fill: currentColor;"></i>'.repeat(fullStars)}
      ${hasHalfStar ? '<i data-lucide="star" class="star" style="fill: currentColor; opacity: 0.5;"></i>' : ''}
      ${'<i data-lucide="star" class="star" style="opacity: 0.3;"></i>'.repeat(emptyStars)}
    `;
  }
  
  function filterByCategory(categoryId) {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
      categoryFilter.value = categoryId;
    }
    app.updateFilters({ category: categoryId });
    
    // Scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Newsletter
  function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterFeedback = document.getElementById('newsletterFeedback');
  
    if (newsletterForm && newsletterEmail && newsletterFeedback) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
          showNewsletterFeedback('Please enter a valid email address', 'error');
          return;
        }
        
        // Simulate API call
        newsletterFeedback.textContent = 'Subscribing...';
        newsletterFeedback.className = 'newsletter__feedback';
        
        setTimeout(() => {
          showNewsletterFeedback('Successfully subscribed! Welcome to LuxeStore.', 'success');
          newsletterEmail.value = '';
        }, 1000);
      });
    }
  }
  
  function showNewsletterFeedback(message, type) {
    const newsletterFeedback = document.getElementById('newsletterFeedback');
    if (newsletterFeedback) {
      newsletterFeedback.textContent = message;
      newsletterFeedback.className = `newsletter__feedback ${type}`;
    }
  }
  
  // Smooth scrolling and hero interactions
  function initializeSmoothScrolling() {
    const shopNowBtn = document.getElementById('shopNowBtn');
    const exploreBtn = document.getElementById('exploreBtn');
  
    if (shopNowBtn) {
      shopNowBtn.addEventListener('click', () => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    if (exploreBtn) {
      exploreBtn.addEventListener('click', () => {
        document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
      const hero = document.querySelector('.hero');
      const scrolled = window.pageYOffset;
      
      if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    });
  }
  
  // Add notification styles dynamically
  const notificationStyles = `
    .notification {
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-premium);
      z-index: 4000;
      max-width: 400px;
      animation: slideInRight 0.3s ease-out;
    }
  
    .notification--success {
      border-left: 4px solid var(--color-success);
    }
  
    .notification--error {
      border-left: 4px solid var(--color-error);
    }
  
    .notification--info {
      border-left: 4px solid var(--color-info);
    }
  
    .notification__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-16);
      gap: var(--space-12);
    }
  
    .notification__message {
      flex: 1;
      color: var(--color-text);
      font-weight: var(--font-weight-medium);
    }
  
    .notification__close {
      background: none;
      border: none;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: var(--space-4);
      border-radius: var(--radius-sm);
      transition: var(--transition-fast);
    }
  
    .notification__close:hover {
      background: var(--color-secondary);
      color: var(--color-text);
    }
  
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  
    @media (max-width: 768px) {
      .notification {
        left: 20px;
        right: 20px;
        max-width: none;
      }
    }
  `;
  
  // Inject notification styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = notificationStyles;
  document.head.appendChild(styleSheet);
  
  // Export for global access
  window.app = app;
  window.showProductModal = showProductModal;
  window.changeMainImage = changeMainImage;
  window.filterByCategory = filterByCategory;
  window.handleQuantityChange = handleQuantityChange;
  window.handleRemoveFromCart = handleRemoveFromCart;