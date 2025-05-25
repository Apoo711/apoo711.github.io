document.addEventListener('DOMContentLoaded', () => {
    const projectSliderElement = document.querySelector('.project-slider');
    if (projectSliderElement) {
        var slider = tns({
            container: '.project-slider',
            items: 1, // Default items for smallest screens
            slideBy: 1,
            autoplay: false,
            controls: true,
            // controlsText: ['\2039', '\203A'], // Using CSS ::before for controls now
            nav: false,
            gutter: 15,
            edgePadding: 15, // Default edge padding, adjust for smallest screens
            mouseDrag: true,
            loop: true,
            // fixedWidth: 325, // Remove fixedWidth from base for mobile-first approach
            responsive: {
                // Small mobile (e.g. up to 480px) - 1 item, let it fill space
                320: { // Example breakpoint for small phones
                    items: 1,
                    edgePadding: 10,
                    // fixedWidth: false, // Explicitly ensure fixedWidth is off if inheriting
                },
                // Larger mobile / Small tablets
                580: { // Breakpoint where 2 items might start to fit if not fixed width
                    items: 1, // Still 1 item if fixedWidth is desired, or 2 if flexible
                    // fixedWidth: 260, // Or a slightly smaller fixedWidth if desired
                    edgePadding: 20
                },
                // Tablets
                768: {
                    items: 2,
                    // fixedWidth: 280, // Example: A fixed width that allows two items
                    edgePadding: 20 // Adjust as per layout.css container padding
                },
                // Desktops
                1024: {
                    items: 2, // Or 3 if you prefer and space allows
                    fixedWidth: 325, // Re-introduce fixedWidth for larger screens if desired
                    edgePadding: 30 // Adjust to match .project-slider-container padding
                },
                1200: { // For wider desktops if you want to show more items or wider fixedWidth
                    items: 2, // Or 3
                    fixedWidth: 325, // Or adjust as needed
                    edgePadding: 50 // Match desktop container padding
                }
            }
        });
    }
});
