document.addEventListener('DOMContentLoaded', () => {
    const projectSliderElement = document.querySelector('.project-slider');
    if (projectSliderElement) {
        var slider = tns({
            container: '.project-slider',
            items: 1,
            slideBy: 1,
            autoplay: false,
            controls: true,

            nav: false,
            gutter: 15,
            edgePadding: 15,
            mouseDrag: true,
            loop: true,

            responsive: {

                320: {
                    items: 1,
                    edgePadding: 10,

                },

                580: {
                    items: 1,

                    edgePadding: 20
                },

                768: {
                    items: 2,

                    edgePadding: 20
                },

                1024: {
                    items: 2,
                    fixedWidth: 325,
                    edgePadding: 30
                },
                1200: {
                    items: 2,
                    fixedWidth: 325,
                    edgePadding: 50
                }
            }
        });
    }
});