// Lorsque le contenu du DOM est complètement chargé, exécutez la fonction principale
document.addEventListener('DOMContentLoaded', function () {
    // Animation de fade-in pour les sections lorsqu'elles sont en vue
    const sections = document.querySelectorAll('section');

    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = 0.7; // 70% de la section doit être visible

            if (rect.top <= windowHeight * threshold) {
                section.classList.add('fade-in');
            }
        });
    }

    // Ajoutez un écouteur d'événement pour vérifier le défilement et exécuter checkScroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Vérifie les sections visibles lors du chargement de la page
});

// Animation flottante aléatoire du logo
var elementFlottant = document.querySelector('#logo');

function flottementAleatoire() {
    var deltaX = Math.random() * 20 - 10; // Déplacement horizontal aléatoire entre -10 et 10 pixels
    var deltaY = Math.random() * 20 - 10; // Déplacement vertical aléatoire entre -10 et 10 pixels

    elementFlottant.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
}

// Lancez l'effet de flottement léger à intervalles réguliers (toutes les secondes)
setInterval(flottementAleatoire, 1000);

// Applique un effet de parallaxe au logo lors du défilement
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var logo = document.getElementById('logo');

    // Ajuste la position verticale du logo en fonction du défilement
    logo.style.top = 35 + scrollTop * 0.1 + '%';
});

// Configuration du swiper pour les personnages principaux
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
    });
});

// Menu hamburger et animation du menu fullscreen
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuItems = document.querySelectorAll('#fullscreen-menu ul li a');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open');

        if (this.classList.contains('open')) {
            this.classList.add('cross');
        } else {
            this.classList.remove('cross');
        }

        fullscreenMenu.classList.toggle('show');

        setTimeout(() => {
            fullscreenMenu.classList.toggle('open');
            if (fullscreenMenu.classList.contains('open')) {
                menuItems.forEach(item => {
                    item.classList.add('animate');
                });
            } else {
                menuItems.forEach(item => {
                    item.classList.remove('animate');
                });
            }
        }, 50); // Délais pour permettre la transition CSS
    });
});

// Animation pour les éléments span lorsqu'ils apparaissent dans la vue
document.addEventListener('DOMContentLoaded', function () {
    const spanElements = document.querySelectorAll('span');

    const optionsForSpan = {
        root: null, // Utilise la fenêtre comme zone d'affichage
        rootMargin: '0px', // Pas de marge supplémentaire
        threshold: 0.5 // Déclenche lorsque 50% de l'élément est visible
    };

    const observerForSpan = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, 500); // Ajoute la classe avec un délai de 500ms

                observer.unobserve(entry.target);
            }
        });
    }, optionsForSpan);

    spanElements.forEach(span => {
        observerForSpan.observe(span);
    });
});

// Animation des nuages

document.addEventListener('DOMContentLoaded', () => {
    const nuage1 = document.getElementById('nuage1');
    const nuage2 = document.getElementById('nuage2');
    const maxDistance = 300;

    // Fonction pour vérifier si la section #place est visible
    function isPlaceVisible() {
        const placeSection = document.getElementById('place');
        const rect = placeSection.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Gestionnaire d'événement pour le défilement de la page
    window.addEventListener('scroll', function () {
        // Vérifier si la section #place est visible
        if (isPlaceVisible()) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const placeSection = document.getElementById('place');
            const rect = placeSection.getBoundingClientRect();

            // Calcule la progression du scroll par rapport à la section visible
            const sectionHeight = placeSection.offsetHeight;
            const scrollProgress = (scrollTop - rect.top + window.innerHeight) / (sectionHeight + window.innerHeight);

            // Limite la progression entre 0 et 1
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // Calculer la translation en fonction de la progression du défilement
            const movement = clampedProgress * maxDistance;

            // Appliquer la translation aux nuages
            nuage1.style.transform = `translateX(-${movement}px)`;
            nuage2.style.transform = `translateX(-${movement}px)`;
        }
    });
});
