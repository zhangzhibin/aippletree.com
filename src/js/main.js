/**
 * Main JavaScript file
 * Imports and initializes all functionality
 */

// Import modules
import './navigation.js';
import './gallery.js';
import './components.js';
import './forms.js';
import './performance.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('AippleTree website initialized');
});

// 导航菜单控制
class MobileNav {
    constructor() {
        this.nav = document.querySelector('.nav');
        this.hamburger = document.querySelector('.hamburger-menu');
        this.mobileLinks = document.querySelectorAll('.mobile-nav-menu .nav-link');
        this.body = document.body;

        this.init();
    }

    init() {
        // 点击汉堡菜单按钮
        if (this.hamburger) {
            this.hamburger.addEventListener('click', this.toggleMenu.bind(this));
        }

        // 点击移动端导航链接时关闭菜单
        this.mobileLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // 点击页面其他区域时关闭菜单
        document.addEventListener('click', (e) => {
            if (this.nav.classList.contains('menu-open') &&
                !e.target.closest('.mobile-nav')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu(e) {
        e.stopPropagation(); // 阻止事件冒泡
        const isOpen = this.nav.classList.toggle('menu-open');
        this.body.classList.toggle('menu-open', isOpen);
    }

    closeMenu() {
        this.nav.classList.remove('menu-open');
        this.body.classList.remove('menu-open');
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    new MobileNav();
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
});

// Project Filters
document.addEventListener('DOMContentLoaded', () => {
    const technologyFilter = document.getElementById('technology-filter');
    const categoryFilter = document.getElementById('category-filter');
    const projectCards = document.querySelectorAll('.project-card');
    const noResults = document.querySelector('.no-results');

    function filterProjects() {
        const selectedTech = technologyFilter.value;
        const selectedCategory = categoryFilter.value;
        let visibleCount = 0;

        projectCards.forEach(card => {
            const technologies = card.dataset.technologies.split(' ');
            const category = card.dataset.category;
            
            const techMatch = selectedTech === 'all' || technologies.includes(selectedTech);
            const categoryMatch = selectedCategory === 'all' || category === selectedCategory;

            if (techMatch && categoryMatch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }

    if (technologyFilter && categoryFilter) {
        technologyFilter.addEventListener('change', filterProjects);
        categoryFilter.addEventListener('change', filterProjects);
    }
});

// Blog Category Filter
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.categories .tag');
    const blogCards = document.querySelectorAll('.blog-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter blog cards
            blogCards.forEach(card => {
                if (category === 'all' || card.dataset.categories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value;

            try {
                // Here you would typically make an API call to your newsletter service
                // For now, we'll just show a success message
                const button = form.querySelector('button');
                const originalText = button.textContent;
                
                button.textContent = 'Subscribing...';
                button.disabled = true;

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.textContent = 'Thank you for subscribing!';
                
                form.innerHTML = '';
                form.appendChild(successMessage);
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                
                const errorMessage = document.createElement('div');
                errorMessage.className = 'alert alert-error';
                errorMessage.textContent = 'An error occurred. Please try again later.';
                
                form.appendChild(errorMessage);
            }
        });
    });
});

// Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Image Gallery
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            
            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.className = 'gallery-modal-content';
            
            // Clone clicked image
            const modalImage = item.cloneNode();
            modalContent.appendChild(modalImage);
            
            // Add caption if exists
            const caption = item.nextElementSibling;
            if (caption && caption.classList.contains('gallery-caption')) {
                const modalCaption = caption.cloneNode(true);
                modalContent.appendChild(modalCaption);
            }
            
            // Add close button
            const closeButton = document.createElement('button');
            closeButton.className = 'gallery-modal-close';
            closeButton.innerHTML = '&times;';
            modalContent.appendChild(closeButton);
            
            // Add to DOM
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Handle close
            closeButton.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
});

// Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}); 