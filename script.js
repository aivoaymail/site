/* ===== Reset & Base ===== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-light: #dbeafe;
    --primary-50: #eff6ff;
    --accent: #0ea5e9;
    --dark: #0f172a;
    --dark-600: #475569;
    --dark-500: #64748b;
    --dark-400: #94a3b8;
    --dark-300: #cbd5e1;
    --dark-200: #e2e8f0;
    --dark-100: #f1f5f9;
    --white: #ffffff;
    --gradient: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
    --gradient-text: linear-gradient(135deg, #2563eb 0%, #0ea5e9 50%, #8b5cf6 100%);
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06);
    --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
    --shadow-lg: 0 10px 25px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.03);
    --shadow-xl: 0 20px 50px -10px rgba(0,0,0,0.08);
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: var(--dark);
    background-color: var(--white);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

img {
    max-width: 100%;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

/* ===== Navigation ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid transparent;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid var(--dark-200);
    box-shadow: var(--shadow-sm);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1001;
}

.logo-img {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    object-fit: cover;
}

.logo-text {
    font-size: 1.35rem;
    font-weight: 700;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo-text1 {
    font-size: 1.35rem;
    font-weight: 700;
    background: #0A9C85;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo-text2 {
    font-size: 1.35rem;
    font-weight: 700;
    background: #2FB35D;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.logo-text3 {
    font-size: 1.35rem;
    font-weight: 700;
    background: #8BCB43;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 4px;
}

.nav-link {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--dark-600);
    border-radius: var(--radius-sm);
    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary);
    background: var(--primary-50);
}

.nav-cta {
    padding: 10px 24px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--white);
    background: var(--gradient);
    border-radius: var(--radius-sm);
    transition: var(--transition);
}

.nav-cta:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
}

.hamburger span {
    width: 24px;
    height: 2px;
    background: var(--dark);
    border-radius: 2px;
    transition: var(--transition);
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* ===== Hero ===== */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.7) 100%);
}

.hero-content {
    position: relative;
    z-index: 1;
    padding: 120px 24px 80px;
    max-width: 800px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 16px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 50px;
    margin-bottom: 24px;
    letter-spacing: 0.02em;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    color: var(--dark);
}

.gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.15rem;
    line-height: 1.7;
    color: var(--dark-600);
    margin-bottom: 36px;
    max-width: 600px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 60px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 32px;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: var(--radius-sm);
    border: none;
    cursor: pointer;
    transition: var(--transition);
    font-family: inherit;
}

.btn-primary {
    color: var(--white);
    background: var(--gradient);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

.btn-outline {
    color: var(--dark);
    background: var(--white);
    border: 1.5px solid var(--dark-300);
}

.btn-outline:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-50);
}

.btn-white {
    color: var(--primary);
    background: var(--white);
    box-shadow: var(--shadow-md);
}

.btn-white:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-full {
    width: 100%;
}

.hero-stats {
    display: flex;
    align-items: center;
    gap: 32px;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--dark);
    line-height: 1;
}

.stat-suffix {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    display: block;
    font-size: 0.8rem;
    color: var(--dark-500);
    margin-top: 4px;
    font-weight: 500;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: var(--dark-300);
}

.scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: float 2s ease-in-out infinite;
}

.scroll-arrow {
    width: 24px;
    height: 24px;
    border-right: 2px solid var(--dark-400);
    border-bottom: 2px solid var(--dark-400);
    transform: rotate(45deg);
}

@keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(10px); }
}

/* ===== Trusted Section ===== */
.trusted-section {
    padding: 40px 0;
    background: var(--dark-100);
    border-top: 1px solid var(--dark-200);
    border-bottom: 1px solid var(--dark-200);
}

.trusted-text {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--dark-400);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
}

.trusted-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    flex-wrap: wrap;
}

.trusted-item {
    font-size: 1rem;
    font-weight: 700;
    color: var(--dark-300);
    letter-spacing: 0.05em;
}

/* ===== Section Headers ===== */
.section-header {
    text-align: center;
    margin-bottom: 56px;
}

.section-tag {
    display: inline-block;
    padding: 4px 14px;
    background: var(--primary-light);
    color: var(--primary);
    font-size: 0.78rem;
    font-weight: 600;
    border-radius: 50px;
    margin-bottom: 16px;
    letter-spacing: 0.02em;
}

.section-title {
    font-size: clamp(1.8rem, 3vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    color: var(--dark);
}

.section-title.left-align {
    text-align: left;
}

.section-desc {
    font-size: 1.05rem;
    color: var(--dark-500);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
}

/* ===== Services ===== */
.services {
    padding: 100px 0;
    background: var(--white);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.service-card {
    background: var(--white);
    border: 1px solid var(--dark-200);
    border-radius: var(--radius-lg);
    padding: 36px 32px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient);
    opacity: 0;
    transition: var(--transition);
}

.service-card:hover {
    border-color: var(--primary-light);
    box-shadow: var(--shadow-xl);
    transform: translateY(-4px);
}

.service-card:hover::before {
    opacity: 1;
}

.service-icon {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-50);
    color: var(--primary);
    border-radius: var(--radius-md);
    margin-bottom: 24px;
}

.service-title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--dark);
}

.service-desc {
    font-size: 0.92rem;
    color: var(--dark-500);
    line-height: 1.7;
    margin-bottom: 20px;
}

.service-features {
    list-style: none;
    margin-bottom: 24px;
}

.service-features li {
    padding: 6px 0;
    font-size: 0.85rem;
    color: var(--dark-600);
    display: flex;
    align-items: center;
    gap: 8px;
}

.service-features li::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary);
    flex-shrink: 0;
}

.service-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary);
    display: inline-flex;
    align-items: center;
    gap: 4px;
}

.service-link:hover {
    gap: 8px;
}

/* ===== Process Section ===== */
.process-section {
    padding: 100px 0;
    background: var(--dark-100);
}

.process-grid {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 0;
}

.process-step {
    text-align: center;
    padding: 32px 24px;
    flex: 1;
    max-width: 260px;
}

.process-number {
    font-size: 2.5rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 16px;
    line-height: 1;
}

.process-step h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--dark);
}

.process-step p {
    font-size: 0.88rem;
    color: var(--dark-500);
    line-height: 1.6;
}

.process-connector {
    width: 60px;
    height: 2px;
    background: var(--dark-300);
    margin-top: 52px;
    flex-shrink: 0;
}

/* ===== Features Visual ===== */
.features-visual {
    padding: 100px 0;
    background: var(--white);
}

.features-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
}

.features-image {
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.features-image img {
    width: 100%;
    height: 450px;
    object-fit: cover;
}

.features-content .section-tag {
    display: inline-block;
    margin-bottom: 12px;
}

.features-content .section-title {
    margin-bottom: 32px;
}

.feature-item {
    display: flex;
    gap: 16px;
    margin-bottom: 28px;
}

.feature-check {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-50);
    color: var(--primary);
    border-radius: var(--radius-sm);
    flex-shrink: 0;
}

.feature-item h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--dark);
}

.feature-item p {
    font-size: 0.88rem;
    color: var(--dark-500);
    line-height: 1.6;
}

/* ===== About ===== */
.about {
    padding: 100px 0;
    background: var(--dark-100);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
}

.about-image {
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.about-image img {
    width: 100%;
    height: 420px;
    object-fit: cover;
}

.about-text h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: var(--dark);
}

.about-text p {
    font-size: 0.95rem;
    color: var(--dark-600);
    line-height: 1.8;
    margin-bottom: 16px;
}

.about-values {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 28px;
}

.value {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: var(--white);
    border-radius: var(--radius-sm);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dark);
    border: 1px solid var(--dark-200);
}

.value-icon {
    font-size: 1.3rem;
}

/* ===== CTA Section ===== */
.cta-section {
    padding: 80px 0;
    background: var(--white);
}

.cta-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--gradient);
    border-radius: var(--radius-xl);
    overflow: hidden;
    min-height: 340px;
}

.cta-content {
    padding: 56px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.cta-content h2 {
    font-size: 2rem;
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
}

.cta-content p {
    font-size: 1rem;
    color: rgba(255,255,255,0.85);
    line-height: 1.7;
    margin-bottom: 32px;
}

.cta-image {
    overflow: hidden;
}

.cta-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
    mix-blend-mode: luminosity;
}

/* ===== Contact ===== */
.contact {
    padding: 100px 0;
    background: var(--dark-100);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-card {
    display: flex;
    gap: 16px;
    padding: 24px;
    background: var(--white);
    border-radius: var(--radius-md);
    border: 1px solid var(--dark-200);
    transition: var(--transition);
}

.contact-card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
}

.contact-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-50);
    color: var(--primary);
    border-radius: var(--radius-sm);
    flex-shrink: 0;
}

.contact-card h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 4px;
    color: var(--dark);
}

.contact-card p {
    font-size: 0.88rem;
    color: var(--dark-500);
    line-height: 1.6;
}

.contact-form {
    background: var(--white);
    padding: 40px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--dark-200);
    box-shadow: var(--shadow-sm);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--dark);
    margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 0.9rem;
    font-family: inherit;
    color: var(--dark);
    background: var(--dark-100);
    border: 1.5px solid var(--dark-200);
    border-radius: var(--radius-sm);
    transition: var(--transition);
    outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary);
    background: var(--white);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 40px;
}

.form-success {
    display: none;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: #ecfdf5;
    color: #065f46;
    border-radius: var(--radius-sm);
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 16px;
    border: 1px solid #a7f3d0;
}

.form-success.show {
    display: flex;
}

/* ===== Impressum ===== */
.impressum {
    padding: 100px 0;
    background: var(--white);
}

.impressum-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    max-width: 800px;
    margin: 0 auto;
}

.impressum-block {
    padding: 24px;
    background: var(--dark-100);
    border-radius: var(--radius-md);
    border: 1px solid var(--dark-200);
}

.impressum-block h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--dark);
}

.impressum-block p {
    font-size: 0.88rem;
    color: var(--dark-600);
    line-height: 1.7;
}

/* ===== Footer ===== */
.footer {
    padding: 64px 0 0;
    background: var(--dark);
    color: var(--dark-400);
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer-brand .logo {
    margin-bottom: 16px;
}

.footer-brand .logo-text {
    font-size: 1.2rem;
}

.footer-brand p {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--dark-500);
}

.footer-links h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    font-size: 0.88rem;
    color: var(--dark-500);
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--white);
}

.footer-bottom {
    padding: 24px 0;
    text-align: center;
}

.footer-bottom p {
    font-size: 0.82rem;
    color: var(--dark-500);
}

/* ===== Back to Top ===== */
.back-to-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    color: var(--dark);
    border: 1px solid var(--dark-200);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-lg);
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: var(--transition);
    z-index: 100;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.back-to-top:hover {
    background: var(--primary);
    color: var(--white);
    border-color: var(--primary);
    transform: translateY(-2px);
}

/* ===== Animations ===== */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===== Responsive ===== */
@media (max-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .process-grid {
        flex-wrap: wrap;
        gap: 12px;
    }

    .process-connector {
        display: none;
    }

    .process-step {
        flex: 0 0 calc(50% - 12px);
        max-width: none;
    }

    .features-split {
        gap: 40px;
    }

    .cta-card {
        grid-template-columns: 1fr;
    }

    .cta-image {
        display: none;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 36px;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--white);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-links.active {
        transform: translateX(0);
    }

    .nav-link {
        font-size: 1.1rem;
        padding: 12px 24px;
    }

    .nav-cta {
        display: none;
    }

    .hamburger {
        display: flex;
    }

    .hero-content {
        padding: 100px 24px 60px;
    }

    .hero-stats {
        gap: 20px;
    }

    .stat-number {
        font-size: 1.6rem;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .features-split {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .features-image img {
        height: 280px;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .about-image img {
        height: 280px;
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .impressum-content {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        gap: 28px;
    }

    .cta-content {
        padding: 40px 28px;
    }

    .cta-content h2 {
        font-size: 1.5rem;
    }

    .contact-form {
        padding: 28px;
    }

    .trusted-logos {
        gap: 28px;
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .hero-actions {
        flex-direction: column;
    }

    .hero-stats {
        flex-direction: column;
        gap: 16px;
    }

    .stat-divider {
        width: 40px;
        height: 1px;
    }

    .process-step {
        flex: 0 0 100%;
    }

    .about-values {
        grid-template-columns: 1fr;
    }
}
