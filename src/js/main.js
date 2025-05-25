document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const scrollThreshold = 50;

    // Header scroll effect
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case page is loaded below the threshold

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('header nav ul.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-nav-active');
            mobileNavToggle.classList.toggle('active'); // For hamburger animation

            // ARIA attributes for accessibility
            const isExpanded = navLinks.classList.contains('mobile-nav-active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        });
    } else {
        console.warn("Mobile navigation toggle button or nav links not found.");
    }
});
