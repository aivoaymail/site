document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const backToTop = document.getElementById("backToTop");

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

    const sections = document.querySelectorAll("section[id]");
    const navLinkElements = document.querySelectorAll(".nav-link");
    const allAnchorLinks = document.querySelectorAll('a[href^="#"]');

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    let ticking = false;

    function getNavbarOffset() {
        if (window.innerWidth <= 480) return 68;
        if (window.innerWidth <= 768) return 72;
        return 72;
    }

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

    function isMobileMenuOpen() {
        return navLinks && navLinks.classList.contains("active");
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            isMobileMenuOpen() ? closeMobileMenu() : openMobileMenu();
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenu();
            });
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener("click", closeMobileMenu);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && isMobileMenuOpen()) {
            closeMobileMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    function updateActiveNav(scrollY) {
        const offset = getNavbarOffset() + 80;
        const scrollPos = scrollY + offset;

        let currentSectionId = "";

        sections.forEach((section) => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                currentSectionId = id;
            }
        });

        navLinkElements.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${currentSectionId}`;
            link.classList.toggle("active", isActive);
        });
    }

    function handleScroll() {
        const scrollY = window.scrollY;

        if (navbar) {
            navbar.classList.toggle("scrolled", scrollY > 30);
        }

        if (backToTop) {
            backToTop.classList.toggle("visible", scrollY > 500);
        }

        updateActiveNav(scrollY);

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

    allAnchorLinks.forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            const offset = getNavbarOffset();
            const pos = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: pos,
                behavior: "smooth"
            });

            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
});
