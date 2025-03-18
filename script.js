document.addEventListener("DOMContentLoaded", function () {
    const clouds = document.querySelector(".clouds");
    const forest = document.querySelector(".forest");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        
        // Disparition des nuages au scroll
        if (scrollPosition > 50) {
            clouds.classList.add("hidden-clouds");
        } else {
            clouds.classList.remove("hidden-clouds");
        }
        
        // Apparition progressive de la forêt
        let forestPosition = forest.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;
        
        if (forestPosition < screenPosition) {
            forest.classList.add("visible");
        }
    });
});