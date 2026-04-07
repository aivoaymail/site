document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

    const sections = document.querySelectorAll("section[id]");
    const navLinkElements = document.querySelectorAll(".nav-link");

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    const counters = document.querySelectorAll(".stat-number[data-count]");
    const heroStats = document.querySelector(".hero-stats");

    let countersAnimated = false;
    let ticking = false;

    function openMobileMenu() {
        if (!hamburger || !navLinks) return;

        hamburger.classList.add("active");
        hamburger.setAttribute("aria-expanded", "true");
        navLinks.classList.add("active");

        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.add("active");
        }

        document.body.classList.add("menu-open");
    }

    function closeMobileMenu() {
        if (!hamburger || !navLinks) return;

        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("active");

        if (mobileMenuOverlay) {
            mobileMenuOverlay.classList.remove("active");
        }

        document.body.classList.remove("menu-open");
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            const isOpen = navLinks.classList.contains("active");
            isOpen ? closeMobileMenu() : openMobileMenu();
        });

        navLinks.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenu();
            });
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener("click", closeMobileMenu);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    function updateActiveNav(scrollY) {
        const scrollPos = scrollY + 120;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinkElements.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }

    function animateCounters() {
        if (countersAnimated || !heroStats || counters.length === 0) return;

        const rect = heroStats.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            countersAnimated = true;

            counters.forEach((counter) => {
                const target = parseInt(counter.getAttribute("data-count"), 10);
                if (Number.isNaN(target)) return;

                const duration = 1800;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);

                    counter.textContent = Math.floor(eased * target);

                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                }

                requestAnimationFrame(update);
            });
        }
    }

    function handleScroll() {
        const scrollY = window.scrollY;

        if (navbar) {
            navbar.classList.toggle("scrolled", scrollY > 50);
        }

        if (backToTop) {
            backToTop.classList.toggle("visible", scrollY > 500);
        }

        updateActiveNav(scrollY);
        animateCounters();

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const observerOptions = {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(
        ".service-card, .process-step, .feature-item, .about-content, .contact-card, .cta-card"
    );

    fadeElements.forEach((el) => {
        el.classList.add("fade-in");
        fadeObserver.observe(el);
    });

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = new FormData(contactForm);

                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    if (formSuccess) {
                        formSuccess.classList.add("show");
                    }

                    contactForm.reset();

                    setTimeout(() => {
                        if (formSuccess) {
                            formSuccess.classList.remove("show");
                        }
                    }, 5000);
                } else {
                    alert("Fehler beim Senden");
                    console.log(result);
                }
            } catch (error) {
                alert("Fehler beim Senden");
                console.error(error);
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const offset = window.innerWidth <= 480 ? 68 : 72;
            const pos = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });
        });
    });
});
