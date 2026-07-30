/* ====================================================
   Store Okaz - Premium JavaScript
   Luxury Animations & Interactions
   ==================================================== */

// ====================================================
// Loading Screen
// ====================================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ====================================================
// Scroll Progress Bar
// ====================================================
const updateScrollProgress = () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / scrollHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
};

window.addEventListener('scroll', updateScrollProgress);

// ====================================================
// Navbar Scroll Effect
// ====================================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ====================================================
// Active Navigation Link
// ====================================================
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

const updateActiveLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', updateActiveLink);

// ====================================================
// Mobile Menu Toggle
// ====================================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ====================================================
// Hero Particles Animation
// ====================================================
const createParticles = () => {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(199, 165, 91, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `particleFloat ${Math.random() * 10 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
};

// Add particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 200 - 100}px, -100vh) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ====================================================
// Smooth Scroll
// ====================================================
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

// ====================================================
// Scroll Reveal Animation
// ====================================================
const revealElements = () => {
    const reveals = document.querySelectorAll('.category-card, .product-card, .feature-card, .review-card');
    
    reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
        }
    });
};

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// ====================================================
// Category Cards Hover Effect
// ====================================================
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});

// ====================================================
// Cart Functionality
// ====================================================
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Animate button
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Update cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        cartCountElement.style.animation = 'none';
        setTimeout(() => {
            cartCountElement.style.animation = 'bounce 0.5s ease';
        }, 10);
        
        // Show notification
        showNotification('تمت الإضافة إلى السلة بنجاح!');
    });
});

// Add bounce animation
const bounceStyle = document.createElement('style');
bounceStyle.textContent = `
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
`;
document.head.appendChild(bounceStyle);

// ====================================================
// Notification System
// ====================================================
const showNotification = (message) => {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: linear-gradient(135deg, #0e3930, #1d5d50);
        color: #f4eed6;
        padding: 1rem 2rem;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(14, 57, 48, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
};

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
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
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// ====================================================
// Counter Animation
// ====================================================
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ====================================================
// Reviews Slider
// ====================================================
const reviewsSlider = document.querySelector('.reviews-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
let autoplayInterval;

const updateSlider = () => {
    const slideWidth = reviewsSlider.querySelector('.review-card').offsetWidth + 32;
    reviewsSlider.style.transform = `translateX(${currentSlide * slideWidth}px)`;
};

const nextSlide = () => {
    const reviewCards = document.querySelectorAll('.review-card');
    if (Math.abs(currentSlide) < reviewCards.length - 1) {
        currentSlide--;
    } else {
        currentSlide = 0;
    }
    updateSlider();
};

const prevSlide = () => {
    if (currentSlide < 0) {
        currentSlide++;
    } else {
        const reviewCards = document.querySelectorAll('.review-card');
        currentSlide = -(reviewCards.length - 1);
    }
    updateSlider();
};

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

const startAutoplay = () => {
    autoplayInterval = setInterval(nextSlide, 5000);
};

const resetAutoplay = () => {
    clearInterval(autoplayInterval);
    startAutoplay();
};

startAutoplay();

// ====================================================
// Contact Form
// ====================================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formInputs = contactForm.querySelectorAll('.form-input');
    
    // Animate form submission
    formInputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.transform = 'scale(0.95)';
            setTimeout(() => {
                input.style.transform = 'scale(1)';
            }, 100);
        }, index * 50);
    });
    
    // Show success message
    setTimeout(() => {
        showNotification('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
        contactForm.reset();
    }, 500);
});

// Form input animations
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// ====================================================
// Back to Top Button
// ====================================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================================
// Mouse Parallax Effect
// ====================================================
const hero = document.querySelector('.hero');
const heroBlobs = document.querySelectorAll('.hero-blob');

hero.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    heroBlobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        
        blob.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// ====================================================
// Cursor Glow Effect
// ====================================================
const createCursorGlow = () => {
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(199, 165, 91, 0.15), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        transform: translate(-50%, -50%);
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
};

// Enable cursor glow on desktop only
if (window.innerWidth > 1024) {
    createCursorGlow();
}

// ====================================================
// Product Card Magnetic Effect
// ====================================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 15;
        const moveY = (y - centerY) / 15;
        
        card.style.transform = `translateY(-8px) translate(${moveX}px, ${moveY}px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) translate(0, 0)';
    });
});

// ====================================================
// Search Button Functionality
// ====================================================
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
    showNotification('البحث قيد التطوير... قريباً!');
});

// ====================================================
// Lazy Loading Images
// ====================================================
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// ====================================================
// Button Ripple Effect
// ====================================================
const createRipple = (event, button) => {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
};

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('.btn, .add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        createRipple(e, this);
    });
});

// ====================================================
// Feature Card Animation on Hover
// ====================================================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.feature-icon').style.animation = 'rotateY 0.6s ease';
    });
});

const rotateYStyle = document.createElement('style');
rotateYStyle.textContent = `
    @keyframes rotateY {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(360deg); }
    }
`;
document.head.appendChild(rotateYStyle);

// ====================================================
// Performance Optimization
// ====================================================
let ticking = false;

const optimizedScroll = (callback) => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            callback();
            ticking = false;
        });
        ticking = true;
    }
};

// ====================================================
// Page Transition Effect
// ====================================================
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// ====================================================
// Gradient Animation for Buttons
// ====================================================
const animateGradients = () => {
    const primaryButtons = document.querySelectorAll('.btn-primary');
    
    primaryButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.backgroundSize = '200% 200%';
            this.style.animation = 'gradientShift 2s ease infinite';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
};

const gradientStyle = document.createElement('style');
gradientStyle.textContent = `
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;
document.head.appendChild(gradientStyle);

animateGradients();

// ====================================================
// Initialize All Features
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 Store Okaz - Premium Website Loaded');
    console.log('✨ All animations and interactions are active');
});

// ====================================================
// Accessibility Improvements
// ====================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinksContainer.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Focus trap for mobile menu
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

mobileMenuBtn.addEventListener('click', () => {
    if (navLinksContainer.classList.contains('active')) {
        const focusable = navLinksContainer.querySelectorAll(focusableElements);
        if (focusable.length > 0) focusable[0].focus();
    }
});

// ====================================================
// Smooth Scroll Indicator
// ====================================================
const updateScrollIndicator = () => {
    const indicator = document.querySelector('.scroll-indicator');
    if (window.pageYOffset > 200) {
        indicator.style.opacity = '0';
        indicator.style.visibility = 'hidden';
    } else {
        indicator.style.opacity = '1';
        indicator.style.visibility = 'visible';
    }
};

window.addEventListener('scroll', updateScrollIndicator);

// ====================================================
// Intersection Observer for Sections
// ====================================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    sectionObserver.observe(section);
});

// ====================================================
// WhatsApp Button Pulse Animation
// ====================================================
const whatsappBtn = document.querySelector('.whatsapp-btn');

setInterval(() => {
    whatsappBtn.style.animation = 'none';
    setTimeout(() => {
        whatsappBtn.style.animation = 'pulse 1s ease';
    }, 10);
}, 5000);

const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.5);
        }
    }
`;
document.head.appendChild(pulseStyle);

// ====================================================
// Logo Animation on Scroll - DISABLED
// ====================================================
// Logo stays stable without rotation
const navLogo = document.querySelector('.nav-logo img');
if (navLogo) {
    navLogo.style.transform = 'rotate(0deg)';
}

// ====================================================
// Dynamic Year in Footer
// ====================================================
const copyrightText = document.querySelector('.copyright');
if (copyrightText) {
    const currentYear = new Date().getFullYear();
    copyrightText.innerHTML = copyrightText.innerHTML.replace('2026', currentYear);
}

// ====================================================
// Easter Egg - Konami Code
// ====================================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

const activateEasterEgg = () => {
    document.body.style.animation = 'rainbow 3s linear infinite';
    showNotification('🎉 لقد وجدت البيضة السرية! عكاظ يحبك! 🎉');
    
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 3000);
};

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// ====================================================
// Console Welcome Message
// ====================================================
console.log('%c🌟 مرحباً بك في ستور عكاظ! 🌟', 'font-size: 24px; font-weight: bold; color: #c7a55b;');
console.log('%cموقع فاخر مصمم بعناية للأناقة والأصالة', 'font-size: 14px; color: #0e3930;');
console.log('%c📞 للطلب: +973 3314 1066', 'font-size: 14px; color: #1d5d50;');

// ====================================================
// Performance Monitoring
// ====================================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ وقت تحميل الصفحة: ${pageLoadTime}ms`);
    });
}

// ====================================================
// Service Worker Registration (Optional for PWA)
// ====================================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('Service Worker registered'))
            .catch(error => console.log('Service Worker registration failed:', error));
    });
}
*/

// ====================================================
// End of Script
// ====================================================
console.log('✅ جميع السكريبتات تم تحميلها بنجاح');
