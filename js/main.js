// File: js/main.js

// Wait for the HTML document to be fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header'); // Get the header element
    const scrollThreshold = 50; // How many pixels down to scroll before changing header (adjust if needed)

    // Function to add/remove the 'header-scrolled' class
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            // If scrolled past the threshold, add the class
            header.classList.add('header-scrolled');
        } else {
            // Otherwise, remove the class
            header.classList.remove('header-scrolled');
        }
    };

    // Listen for scroll events on the window
    window.addEventListener('scroll', handleScroll);

    // Call the function once on load to set the initial state correctly
    // (in case the page loads already scrolled down)
    handleScroll();

});