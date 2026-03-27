(function () {
    'use strict';

    // Cache DOM elements
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const navLinkElements = document.querySelectorAll('.nav-link');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const fadeElements = document.querySelectorAll('.fade-in');
    const sections = document.querySelectorAll('section[id]');

    // ===== Navbar scroll effect =====
    let lastScrollY = 0;
    let ticking = false;

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        lastScrollY = window.scrollY;
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // ===== Mobile hamburger menu =====
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinkElements.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===== Active nav link on scroll =====
    function updateActiveNavLink() {
        var scrollPos = window.scrollY + 120;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkElements.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                updateActiveNavLink();
            });
        }
    }, { passive: true });

    // ===== Smooth scrolling for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = navbar.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Back to top =====
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== FAQ Accordion =====
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            var faqItem = this.parentElement;
            var isActive = faqItem.classList.contains('active');
            var expanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other items
            document.querySelectorAll('.faq-item.active').forEach(function (item) {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Toggle clicked item
            if (!isActive) {
                faqItem.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ===== Intersection Observer for fade-in animations =====
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.1
        };

        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        fadeElements.forEach(function (el) {
            fadeObserver.observe(el);
        });
    } else {
        // Fallback: show all elements immediately
        fadeElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ===== Contact form handling (Web3Forms) =====
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent;
            submitBtn.textContent = 'Wird gesendet...';
            submitBtn.disabled = true;

            var formData = new FormData(contactForm);

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Netzwerkfehler');
            })
            .then(function (data) {
                if (data.success) {
                    formSuccess.classList.add('show');
                    contactForm.reset();
                    submitBtn.textContent = 'Gesendet ✓';

                    setTimeout(function () {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 4000);
                } else {
                    throw new Error('Senden fehlgeschlagen');
                }
            })
            .catch(function () {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                alert('Es gab einen Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@aivoay.com.');
            });
        });
    }

    // ===== Initial state =====
    updateNavbar();
    updateActiveNavLink();

})();
