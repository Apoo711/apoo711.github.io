document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('header nav ul.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-nav-active');
            mobileNavToggle.classList.toggle('active');

            const isExpanded = navLinks.classList.contains('mobile-nav-active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        });
    } else {
        console.warn("Mobile navigation toggle button or nav links not found.");
    }
});
