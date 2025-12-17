/* ========================================
   SCROLL ANIMATIONS HANDLER
   Intersection Observer Implementation
   ======================================== */

class ScrollAnimations {
    constructor(options = {}) {
        this.options = {
            threshold: options.threshold || 0.15,
            rootMargin: options.rootMargin || '0px 0px -100px 0px',
            once: options.once !== undefined ? options.once : true,
            ...options
        };
        
        this.observers = new Map();
        this.init();
    }

    init() {
        this.setupFadeAnimations();
        this.setupSlideAnimations();
        this.setupScaleAnimations();
        this.setupStaggerAnimations();
        this.setupCustomAnimations();
    }

    // ============ FADE ANIMATIONS ============
    setupFadeAnimations() {
        const fadeElements = document.querySelectorAll(
            '[data-animate="fade"], [data-animate="fade-up"], [data-animate="fade-down"]'
        );

        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-animate');
                    const delay = element.getAttribute('data-delay') || '0';
                    
                    element.style.animationDelay = delay + 'ms';
                    element.classList.add(`animate-${animationType.replace('-', '')}`);
                    
                    if (this.options.once) {
                        fadeObserver.unobserve(element);
                    }
                }
            });
        }, this.options);

        fadeElements.forEach(el => {
            el.style.opacity = '0';
            fadeObserver.observe(el);
        });

        this.observers.set('fade', fadeObserver);
    }

    // ============ SLIDE ANIMATIONS ============
    setupSlideAnimations() {
        const slideElements = document.querySelectorAll(
            '[data-animate="slide-left"], [data-animate="slide-right"]'
        );

        const slideObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const direction = element.getAttribute('data-animate');
                    const delay = element.getAttribute('data-delay') || '0';
                    
                    element.style.animationDelay = delay + 'ms';
                    
                    if (direction === 'slide-left') {
                        element.classList.add('animate-fadeInLeft');
                    } else {
                        element.classList.add('animate-fadeInRight');
                    }
                    
                    if (this.options.once) {
                        slideObserver.unobserve(element);
                    }
                }
            });
        }, this.options);

        slideElements.forEach(el => {
            el.style.opacity = '0';
            slideObserver.observe(el);
        });

        this.observers.set('slide', slideObserver);
    }

    // ============ SCALE ANIMATIONS ============
    setupScaleAnimations() {
        const scaleElements = document.querySelectorAll('[data-animate="scale"]');

        const scaleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const delay = element.getAttribute('data-delay') || '0';
                    
                    element.style.animationDelay = delay + 'ms';
                    element.classList.add('animate-scaleUp');
                    
                    if (this.options.once) {
                        scaleObserver.unobserve(element);
                    }
                }
            });
        }, this.options);

        scaleElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.8)';
            scaleObserver.observe(el);
        });

        this.observers.set('scale', scaleObserver);
    }

    // ============ STAGGER ANIMATIONS ============
    setupStaggerAnimations() {
        const staggerContainers = document.querySelectorAll('[data-stagger]');

        const staggerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const container = entry.target;
                    const children = container.children;
                    const staggerDelay = parseInt(container.getAttribute('data-stagger')) || 100;
                    
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-fadeInUp');
                        }, index * staggerDelay);
                    });
                    
                    if (this.options.once) {
                        staggerObserver.unobserve(container);
                    }
                }
            });
        }, this.options);

        staggerContainers.forEach(container => {
            Array.from(container.children).forEach(child => {
                child.style.opacity = '0';
            });
            staggerObserver.observe(container);
        });

        this.observers.set('stagger', staggerObserver);
    }

    // ============ CUSTOM ANIMATIONS ============
    setupCustomAnimations() {
        // Parallax effect for elements
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Count up animation for numbers
        const countElements = document.querySelectorAll('[data-count]');
        
        const countObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const target = parseInt(element.getAttribute('data-count'));
                    const duration = parseInt(element.getAttribute('data-duration')) || 2000;
                    const suffix = element.getAttribute('data-suffix') || '';
                    
                    this.animateCount(element, 0, target, duration, suffix);
                    countObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });

        countElements.forEach(el => countObserver.observe(el));

        // Progress bars
        const progressBars = document.querySelectorAll('[data-progress]');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const percentage = bar.getAttribute('data-progress');
                    const delay = parseInt(bar.getAttribute('data-delay')) || 0;
                    
                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                    }, delay);
                    
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });

        progressBars.forEach(bar => {
            bar.style.width = '0%';
            bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
            progressObserver.observe(bar);
        });
    }

    // ============ HELPER: ANIMATE COUNT ============
    animateCount(element, start, end, duration, suffix = '') {
        const increment = end / (duration / 16);
        let current = start;

        const updateCount = () => {
            current += increment;
            if (current < end) {
                element.textContent = Math.floor(current) + suffix;
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = end + suffix;
            }
        };

        updateCount();
    }

    // ============ PUBLIC METHOD: DESTROY ============
    destroy() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }

    // ============ PUBLIC METHOD: REFRESH ============
    refresh() {
        this.destroy();
        this.init();
    }
}

// ============ AUTO INITIALIZE ============
let scrollAnimations;

document.addEventListener('DOMContentLoaded', () => {
    scrollAnimations = new ScrollAnimations({
        threshold: 0.15,
        once: true
    });
    
    console.log('🎬 Scroll animations initialized');
});

// ============ LEGACY REVEAL SUPPORT ============
// Support for .reveal class (backward compatibility)
document.addEventListener('DOMContentLoaded', () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        revealObserver.observe(el);
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScrollAnimations;
}
