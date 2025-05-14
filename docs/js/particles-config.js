// Content for js/particles-config.js
window.addEventListener('load', () => {
    tsParticles.load({
        id: "tsparticles", // ID of the div container in index.html
        // Configuration options for tsparticles v2.x
        options: {
            background: {
                // No specific background needed here
            },
            particles: {
                number: {
                    value: 100, // Number of particles
                    density: { enable: true, area: 800 }
                },
                color: {
                    value: "#ffffff" // Particle color
                },
                shape: {
                    type: "circle" // Shape of particles
                },
                opacity: {
                    value: { min: 0.1, max: 0.7 },
                    anim: { // Opacity animation for shimmer
                        enable: true,      // <<< Ensure this is true
                        speed: 0.5,        // <<< Increased speed slightly for more shimmer
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: { min: 0.5, max: 2.5 }, // Moderate size
                    random: true
                },
                links: {
                    enable: false // No lines connecting particles
                },
                move: {
                    enable: false,
                    speed: 0.6, // Slow movement speed
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out", // v2 uses out_mode
                    bounce: false
                }
            },
            // --- INTERACTIVITY ADDED ---
            interactivity: {
                detect_on: "window", // v2 uses detect_on
                events: {
                    onhover: {
                        enable: false,       // ENABLE hover interaction
                        mode: "repulse"     // SET mode to "repulse" (move away)
                    },
                    onclick: {
                        enable: false      // Keep click disabled for now
                    },
                    resize: true
                },
                modes: { // Configuration for the modes
                    repulse: {
                        distance: 50, // How far the cursor pushes particles
                        duration: 0.1  // How long the push effect lasts
                    }
                }
            },
            // --- END INTERACTIVITY ---
            retina_detect: true, // v2 uses retina_detect
        },
    });
}); // End of event listener