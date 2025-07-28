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
    const navLinksContainer = document.querySelector('header nav ul.nav-links');

    if (mobileNavToggle && navLinksContainer) {
        mobileNavToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('mobile-nav-active');
            mobileNavToggle.classList.toggle('active');

            const isExpanded = navLinksContainer.classList.contains('mobile-nav-active');
            mobileNavToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Active navigation link styling
    const navLinks = document.querySelectorAll('header nav ul.nav-links a');
    const currentUrl = window.location.pathname;

    navLinks.forEach(link => {
        const linkUrl = new URL(link.href).pathname;

        // Handle index page case
        if (currentUrl === '/' && (linkUrl === '/' || linkUrl === '/index.html')) {
            // Don't add active class to home on other pages
        } else if (linkUrl !== '/' && currentUrl.startsWith(linkUrl)) {
            link.classList.add('active');
        }
    });

    const activeLink = document.querySelector('header nav ul.nav-links a.active');
    if (activeLink) {
        activeLink.addEventListener('click', (e) => {
            // Prevent reload if already on the page
            if (window.location.pathname === new URL(activeLink.href).pathname) {
                e.preventDefault();
            }
        });
    }
});
