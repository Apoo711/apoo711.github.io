window.addEventListener('load', () => {
    tsParticles.load({
        id: "tsparticles",

        options: {
            background: {

            },
            particles: {
                number: {
                    value: 100,
                    density: { enable: true, area: 800 }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: { min: 0.1, max: 0.7 },
                    anim: {
                        enable: true,
                        speed: 0.5,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: { min: 0.5, max: 2.5 },
                    random: true
                },
                links: {
                    enable: false
                },
                move: {
                    enable: false,
                    speed: 0.6,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },

            interactivity: {
                detect_on: "window",
                events: {
                    onhover: {
                        enable: false,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: false
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 50,
                        duration: 0.1
                    }
                }
            },

            retina_detect: true,
        },
    });
}); 