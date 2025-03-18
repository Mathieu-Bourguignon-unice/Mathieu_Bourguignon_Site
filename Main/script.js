document.addEventListener("DOMContentLoaded", () => {
    const clouds = document.querySelector(".clouds");
    const forest = document.querySelector(".forest");
    const sections = document.querySelectorAll(".section");

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        // Disparition progressive des nuages
        if (scrollY > 50) {
            clouds.classList.add("hidden-clouds");
        } else {
            clouds.classList.remove("hidden-clouds");
        }

        // Apparition de la forêt lorsqu'elle est visible
        let forestTop = forest.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (forestTop < windowHeight * 0.8) {
            forest.classList.add("visible");
        }

        // Animation d'apparition des sections au scroll
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    });

    // Effet de zoom au survol des sections
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.classList.add("zoom");
        });
        section.addEventListener("mouseleave", () => {
            section.classList.remove("zoom");
        });
    });
});
