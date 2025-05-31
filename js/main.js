// js/main.js - MissionDesk Premium Redesign
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // --- Navbar Functionality ---
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
    }

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive.toString());
            body.classList.toggle('no-scroll', isActive);

            if (isActive) {
                navToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>`;
            } else {
                navToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>`;
            }
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    body.classList.remove('no-scroll');
                    navToggle.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>`;
                }
            });
        });
    }

    try {
        const pageName = window.location.pathname.split('/').pop();
        const currentPage = pageName === '' ? 'index.html' : pageName;
        const menuItems = document.querySelectorAll('.nav-links a');
        menuItems.forEach(item => {
            const itemHref = item.getAttribute('href');
            if (itemHref) {
                const itemPage = itemHref.split('/').pop();
                const targetPage = itemPage === '' ? 'index.html' : itemPage;
                if (targetPage === currentPage) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            }
        });
    } catch (e) {
        console.warn("Error setting active navigation link:", e);
    }

    // --- Form Handling ---
    // The generic handleFormSubmit function and specific form listeners for 
    // candidateApplicationForm and listCampaignForm have been removed from main.js
    // as this logic is now handled by inline scripts in the respective HTML pages.
    
    // --- Scroll Animations ---
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.animationDelay || '0s';
                    entry.target.style.transitionDelay = delay;
                    entry.target.classList.add('in-view');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        animatedElements.forEach(el => el.classList.add('in-view'));
    }

    


    // --- Update footer year ---
    const currentYearSpan = document.getElementById('currentYearFooter');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString();
    } else {
        const yearSpansByClass = document.querySelectorAll('.currentYearFooter');
        yearSpansByClass.forEach(span => {
            span.textContent = new Date().getFullYear().toString();
        });
    }
});