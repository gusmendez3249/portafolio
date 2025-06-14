// DOM elements
const header = document.getElementById('header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

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

// Specific handling for project pages demo buttons
document.addEventListener('DOMContentLoaded', function() {
    // Handle "Ver Imágenes" / "Ver Demo" buttons in project pages
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
    
    // Verify screenshots section exists on project pages
    if (window.location.pathname.includes('/Proyectos/')) {
        const screenshotsSection = document.getElementById('screenshots');
        if (screenshotsSection) {
            console.log('✅ Screenshots section found');
        } else {
            console.log('❌ Screenshots section not found - check template');
        }
    }
});

// Mobile menu functionality
if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
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

// Typing effect for the main title (optional enhancement)
const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

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
    
    // Additional smooth scroll setup for project pages
    setTimeout(() => {
        // Re-scan for any dynamically loaded elements
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            // Remove any existing listeners to avoid duplicates
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
        });
    }, 500);
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

// Add focus management for accessibility
const focusableElements = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

const trapFocus = (element) => {
    const focusableContent = element.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0];
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    
    const handleTabKey = (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    };
    
    document.addEventListener('keydown', handleTabKey);
    
    // Return cleanup function
    return () => {
        document.removeEventListener('keydown', handleTabKey);
    };
};

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

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