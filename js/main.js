(function() {
    'use strict';

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    tooltipElements.forEach(element => {
        let touchTimeout;
        
        element.addEventListener('touchstart', function(e) {
            e.preventDefault();
            clearTimeout(touchTimeout);
            element.classList.add('tooltip-visible');
        });

        element.addEventListener('touchend', function(e) {
            e.preventDefault();
            touchTimeout = setTimeout(() => {
                element.classList.remove('tooltip-visible');
            }, 2000);
        });

        element.addEventListener('click', function() {
            element.classList.toggle('tooltip-visible');
        });
    });

    const allAnimateElements = Array.from(document.querySelectorAll(
        '.animate-on-scroll, .feature-card, .pricing-card, .value-item, .faq-item, .showcase-item, .feature-detail, .about-section, .contact-item, .section-header, .hero-content, .hero-visual, .hero-copy, .hero-media, .testimonial-content, .pricing-header, .contact-info, .contact-form-wrapper, .page-hero .container, .hero .container, .pricing-faq h2, .about-stats, .about-stats .stat, .hero-cta, .pricing-grid, .values-grid, .faq-grid, .features-grid, .contact-grid, .showcase-content, .showcase-visual, .text-widget, .hero-title, .hero-subtitle, .page-hero h1, .page-hero p, .section-header h2, .showcase-content h2, .feature-detail-content h2, .about-section h2, .contact-info h2, .pricing-faq h2, .feature-card h3, .pricing-header h3, .value-item h3, .showcase-content p, .feature-detail-content p, .about-section p, .contact-info p'
    )).filter(el => !el.closest('.cta-section'));
    
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 1],
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.remove('out-view');
            } else {
                entry.target.classList.remove('in-view');
                entry.target.classList.add('out-view');
            }
        });
    }, observerOptions);

    allAnimateElements.forEach(el => {
        observer.observe(el);
    });
    
    function animateOnLoad() {
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        let delay = 0;
        
        allAnimateElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0 && 
                            rect.left < viewportWidth && rect.right > 0;
            
            if (isVisible && !el.classList.contains('in-view')) {
                setTimeout(() => {
                    el.classList.add('in-view');
                }, delay);
                delay += 80;
            }
        });
        
        const staggerGroups = document.querySelectorAll('.animate-stagger');
        staggerGroups.forEach(group => {
            const rect = group.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;
            
            if (isVisible && !group.classList.contains('in-view')) {
                group.classList.add('in-view');
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(animateOnLoad, 150);
        });
    } else {
        setTimeout(animateOnLoad, 150);
    }
    
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(animateOnLoad, 150);
        }
    });

    window.addEventListener('pageshow', function(event) {
        if (event.persisted) {
            setTimeout(animateOnLoad, 150);
        }
    });

    const staggerGroups = document.querySelectorAll('.animate-stagger');
    
    if (staggerGroups.length > 0) {
        const staggerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    entry.target.classList.remove('out-view');
                } else {
                    entry.target.classList.remove('in-view');
                    entry.target.classList.add('out-view');
                }
            });
        }, { 
            threshold: [0, 0.1, 0.5, 1],
            rootMargin: '0px 0px -50px 0px'
        });

        staggerGroups.forEach(group => staggerObserver.observe(group));
    }

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            if (!data.name || !data.email || !data.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            showFormMessage('Thank you! Your message has been sent. We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch');
    }

    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduced-motion');
    }

    prefersReducedMotion.addEventListener('change', function(e) {
        if (e.matches) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
    });

    const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, .btn-nav');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

})();

