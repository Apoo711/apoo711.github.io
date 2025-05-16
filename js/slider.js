document.addEventListener('DOMContentLoaded', () => {
    const projectSliderElement = document.querySelector('.project-slider');
    if (projectSliderElement) {
        var slider = tns({
            container: '.project-slider',
            items: 1,
            slideBy: 1,
            autoplay: false,
            controls: true, // Use true to get default controls
            // controlsText: ['\2039', '\203A'], // Or use Font Awesome icons here
            fixedWidth: 325,
            nav: false, // Disable dot navigation
            gutter: 15, // Space between items
            edgePadding: 20, // Padding at the edges of the viewport
            mouseDrag: true,
            loop: true, // Set to true if you want infinite looping
            responsive: {
                768: {
                    items: 2,
                    // slideBy: 1, // Or 1
                    // center: true,
                    edgePadding: 40
                },
                1024: {
                    items: 2,
                    // slideBy: 1, // Or 1
                    // center: true,
                    edgePadding: 50
                }
            }
        });
    }
});