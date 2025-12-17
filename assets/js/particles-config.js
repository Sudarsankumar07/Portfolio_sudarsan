/* ========================================
   PARTICLES.JS CONFIGURATION
   Animated Background for Hero Section
   ======================================== */

// Particles.js configuration object
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#00d4ff", "#6366f1", "#667eea", "#764ba2"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00d4ff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

// Initialize particles when DOM is loaded
function initParticles() {
    const particlesContainer = document.getElementById('particles-js');
    
    if (particlesContainer && typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', particlesConfig);
        console.log('✨ Particles.js initialized successfully');
    } else {
        console.log('⚠️ Particles.js container not found or library not loaded');
    }
}

// Alternative: Simpler CSS-based particle effect (fallback)
function createCSSParticles() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'css-particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const x = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(0, 212, 255, 0.5);
            border-radius: 50%;
            left: ${x}%;
            top: -10px;
            animation: float ${duration}s linear ${delay}s infinite;
            box-shadow: 0 0 ${size * 2}px rgba(0, 212, 255, 0.5);
        `;
        
        particlesContainer.appendChild(particle);
    }

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
        .particle {
            animation-name: floatParticle !important;
        }
    `;
    document.head.appendChild(style);

    hero.insertBefore(particlesContainer, hero.firstChild);
    console.log('✨ CSS particles created as fallback');
}

// Auto-initialize particles
document.addEventListener('DOMContentLoaded', () => {
    // Try particles.js first, fallback to CSS particles
    setTimeout(() => {
        if (typeof particlesJS !== 'undefined') {
            initParticles();
        } else {
            createCSSParticles();
        }
    }, 100);
});

// Export for manual initialization if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { particlesConfig, initParticles, createCSSParticles };
}
