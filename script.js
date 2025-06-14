// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const body = document.body;

// Initialize theme
if (themeToggle && themeIcon) {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Header scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
    
    lastScrollY = window.scrollY;
});

// Mobile menu functionality
if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (header && !header.contains(e.target)) {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger staggered animations for child elements (excluding about section)
            if (!entry.target.classList.contains('about-section')) {
                const animatableElements = entry.target.querySelectorAll('.skill-card, .project-card');
                animatableElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections except the first one (about section)
document.querySelectorAll('section:not(.about-section)').forEach(section => {
    observer.observe(section);
});

// SMOOTH SCROLL MEJORADO - Funciona para todas las páginas
function handleSmoothScroll(anchor, targetSelector) {
    const target = document.querySelector(targetSelector);
    
    if (target) {
        // Close mobile menu if open
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
        
        // Calculate offset for fixed header
        const headerHeight = header ? header.offsetHeight + 20 : 100;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
        });
        
        // Update URL without triggering scroll (only for hash links)
        if (targetSelector.startsWith('#') && window.history) {
            history.pushState(null, null, targetSelector);
        }
        
        return true;
    }
    return false;
}

// Smooth scroll for navigation links
document.addEventListener('click', function(e) {
    // Check if clicked element is a link with href starting with #
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const targetSelector = link.getAttribute('href');
        
        // Try to scroll to target
        if (!handleSmoothScroll(link, targetSelector)) {
            console.log('Target not found:', targetSelector);
        }
    }
});

// Card hover effects with mouse tracking
const cards = document.querySelectorAll('.skill-card, .project-card, .detail-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', (e) => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Initialize staggered animations for cards
const initializeCardAnimations = () => {
    // Solo aplicar animaciones a las tarjetas de las secciones que no son "sobre-mi"
    const animatableCards = document.querySelectorAll('section:not(.about-section) .skill-card, section:not(.about-section) .project-card');
    
    animatableCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
};

// Contact item hover effects
const contactItems = document.querySelectorAll('.contact-item');

contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Active navigation link highlighting
const highlightActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinksElements = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

// Add scroll listener for active section highlighting
window.addEventListener('scroll', highlightActiveSection);

// Parallax effect for background elements (subtle)
const parallaxElements = document.querySelectorAll('.profile-card');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCardAnimations();
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Initialize any additional features
    console.log('Portfolio loaded successfully! 🚀');
    
    // Specific handling for project pages demo buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        const href = button.getAttribute('href');
        if (href && href.startsWith('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = 120; // Extra space for project pages
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // Visual feedback
                    target.style.transition = 'background-color 0.3s ease';
                    target.style.backgroundColor = 'rgba(79, 70, 229, 0.05)';
                    setTimeout(() => {
                        target.style.backgroundColor = '';
                    }, 1000);
                } else {
                    console.log('Screenshots section not found');
                }
            });
        }
    });
});

// Performance optimization: Throttle scroll events
const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    highlightActiveSection();
}, 16)); // ~60fps

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks?.classList.remove('active');
        mobileMenuBtn?.classList.remove('active');
    }
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Debug function for troubleshooting scroll issues
window.debugScroll = function(targetId) {
    const target = document.querySelector(targetId);
    console.log('Target:', target);
    console.log('Target offset:', target ? target.offsetTop : 'Not found');
    console.log('Header height:', header ? header.offsetHeight : 'Header not found');
    console.log('Current scroll:', window.scrollY);
};

// Utility function to manually scroll to screenshots (for debugging)
window.scrollToScreenshots = function() {
    const target = document.getElementById('screenshots');
    if (target) {
        const headerHeight = 120;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
            top: Math.max(0, targetPosition),
            behavior: 'smooth'
        });
        console.log('Scrolled to screenshots');
    } else {
        console.log('Screenshots section not found');
    }
};