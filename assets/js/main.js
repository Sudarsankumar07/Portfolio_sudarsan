/* ========================================
   MAIN JAVASCRIPT - Core Functionality
   Advanced Portfolio Interactions
   ======================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// ============ MAIN INITIALIZATION ============
function initializeApp() {
    initNavbar();
    initScrollProgress();
    initBackToTop();
    initScrollAnimations();
    initMobileMenu();
    initTypingEffect();
    initCounterAnimations();
    initLazyLoading();
    initSkillBars();
    updateCopyrightYear();
}

// ============ NAVBAR SCROLL EFFECT ============
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'Home.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============ SCROLL PROGRESS BAR ============
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        // Create progress bar if not exists
        const bar = document.createElement('div');
        bar.className = 'scroll-progress';
        document.body.prepend(bar);
    }

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        const bar = document.querySelector('.scroll-progress');
        if (bar) {
            bar.style.width = scrolled + '%';
        }
    });
}

// ============ BACK TO TOP BUTTON ============
function initBackToTop() {
    let backToTopBtn = document.querySelector('.back-to-top');
    
    // Create if doesn't exist
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTopBtn);
    }

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll to top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============ SCROLL REVEAL ANIMATIONS ============
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Stagger animations for children
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    revealElements.forEach(el => observer.observe(el));
}

// ============ MOBILE MENU TOGGLE ============
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============ TYPING EFFECT ============
function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');
    
    typingElements.forEach(element => {
        const text = element.getAttribute('data-typing');
        const speed = parseInt(element.getAttribute('data-typing-speed')) || 100;
        let index = 0;
        
        element.textContent = '';
        element.style.borderRight = '2px solid var(--accent-primary)';
        element.style.paddingRight = '5px';
        element.style.animation = 'blink 0.7s infinite';
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    element.style.animation = '';
                }, 500);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 500);
    });
}

// ============ COUNTER ANIMATIONS ============
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ============ LAZY LOADING IMAGES ============
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('fade-in');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============ SKILL BARS ANIMATION ============
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percentage = skillBar.getAttribute('data-percentage') || '0';
                skillBar.style.width = percentage + '%';
                observer.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

// ============ BUTTON RIPPLE EFFECT ============
function createRipple(event) {
    const button = event.currentTarget;
    
    // Remove any existing ripples first
    const existingRipples = button.querySelectorAll('.ripple');
    existingRipples.forEach(r => r.remove());
    
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    // Calculate position relative to the button
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 650);
}

// Add ripple to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', createRipple);
});

// ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ UPDATE COPYRIGHT YEAR ============
function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

// ============ PROJECT FILTER (if exists) ============
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projects = document.querySelectorAll('[data-category]');
    
    if (!filterButtons.length || !projects.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    project.style.display = 'block';
                    project.classList.add('fade-in');
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
}

// Initialize filter if on projects page
if (document.querySelector('[data-filter]')) {
    initProjectFilter();
}

// ============ FORM VALIDATION (if exists) ============
function initFormValidation() {
    const forms = document.querySelectorAll('.contact-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email', 'error');
                return;
            }
            
            // Show success message (in real app, send to server)
            showNotification('Message sent successfully!', 'success');
            form.reset();
        });
    });
}

// ============ NOTIFICATION SYSTEM ============
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        border: 1px solid var(--glass-border);
        border-radius: var(--radius-lg);
        color: var(--text-primary);
        box-shadow: var(--shadow-xl);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============ PERFORMANCE OPTIMIZATION ============
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to expensive operations
window.addEventListener('scroll', debounce(() => {
    // Any expensive scroll operations go here
}, 10));

// ============ FIX BUTTON/CARD HOVER STATE ON TAB SWITCH ============
// When user clicks external link (opens new tab), hover state gets stuck
// This clears all hover states when tab becomes visible again

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        // Tab became visible - clear all stuck hover states
        
        // Force remove hover from all cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.classList.add('force-reset');
            card.style.transform = 'translateY(0)';
        });
        
        // Remove forced reset after animation completes
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.classList.remove('force-reset');
                card.style.transform = '';
            });
        }, 100);
    }
});

// Also clear hover states when window loses focus
window.addEventListener('blur', () => {
    // User clicked something that took them away (like opening new tab)
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.transform = 'translateY(0)';
        });
    }, 50);
});

// Clear on window focus return
window.addEventListener('focus', () => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.transform = '';
        card.removeAttribute('style');
    });
});

// ============ CONSOLE MESSAGE ============
console.log(
    '%c🚀 Portfolio by Sudarsan Kumar',
    'color: #00d4ff; font-size: 20px; font-weight: bold;'
);
console.log(
    '%c💼 Looking to collaborate? Let\'s connect!',
    'color: #6366f1; font-size: 14px;'
);
