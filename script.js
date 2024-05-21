document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    function checkScroll() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const threshold = 0.5; // 50% de la section visible

            if (rect.top <= windowHeight * threshold) {
                section.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Vérifie si des sections sont déjà visibles lors du chargement de la page
});

var elementFlottant = document.querySelector('#logo');

function flottementAleatoire() {
    var deltaX = Math.random() * 20 - 10; // Valeur aléatoire entre -10 et 10 pour le déplacement horizontal
    var deltaY = Math.random() * 20 - 10; // Valeur aléatoire entre -10 et 10 pour le déplacement vertical

    // Appliquer le déplacement aléatoire à l'élément
    elementFlottant.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
}

// Lancer l'effet de flottement léger à intervalles réguliers
setInterval(flottementAleatoire, 1000); // Déclencher la fonction toutes les 1000 millisecondes (1 secondes)

window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var logo = document.getElementById('logo');

    // Appliquer l'effet de parallaxe au logo en ajustant sa position verticale
    logo.style.top = 35 + scrollTop * 0.1 + '%';
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.main-character', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 2,
        spaceBetween: 20,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuItems = document.querySelectorAll('#fullscreen-menu ul li a');

    menuToggle.addEventListener('click', function () {
        // Ajoute ou supprime la classe 'open' sur le bouton hamburger
        this.classList.toggle('open');

        // Ajoute ou supprime la classe 'cross' pour transformer le bouton hamburger en croix
        if (this.classList.contains('open')) {
            this.classList.add('cross');
        } else {
            this.classList.remove('cross');
        }

        // Ajoute ou supprime la classe 'show' sur le menu fullscreen
        fullscreenMenu.classList.toggle('show');

        // Ajoute la classe 'open' au menu en plein écran après un court délai
        setTimeout(() => {
            fullscreenMenu.classList.toggle('open');
            if (fullscreenMenu.classList.contains('open')) {
                // Ajoutez la classe spécifique aux éléments du menu lorsque le menu est ouvert
                menuItems.forEach(item => {
                    item.classList.add('animate');
                });
            } else {
                // Retirez la classe spécifique lorsque le menu est fermé
                menuItems.forEach(item => {
                    item.classList.remove('animate');
                });
            }
        }, 50); // Retard pour permettre à la transition CSS de s'appliquer correctement
    });
});


// Sélectionnez tous les éléments span avec la classe 'appear'
const spanElements = document.querySelectorAll('span');

// Options pour l'observateur d'intersection
const optionsForSpan = {
    root: null, // Utilisez la fenêtre comme zone d'affichage
    rootMargin: '0px', // Aucune marge supplémentaire
    threshold: 0.5 // Déclencher lorsque 50% de l'élément est visible
};

// Créez un observateur d'intersection avec la fonction de rappel
const observerForSpan = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajoutez la classe avec un délai de 500ms
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, 500);
            // Arrêtez d'observer l'élément après l'avoir animé
            observer.unobserve(entry.target);
        }
    });
}, optionsForSpan);

// Parcourez chaque élément span et observez-le
spanElements.forEach(span => {
    observerForSpan.observe(span);
});

// Sélectionnez les éléments avec la classe "nuage"
const nuages = document.querySelectorAll('.nuage');

// Options pour l'observateur d'intersection des nuages
const optionsForNuages = {
    root: null, // Utilisez la fenêtre comme zone d'affichage
    rootMargin: '0px', // Aucune marge supplémentaire
    threshold: 0.5 // Déclencher lorsque 50% de l'élément est visible
};

// Créez un observateur d'intersection avec la fonction de rappel
const observerForNuages = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Ajoutez la classe pour déclencher l'animation
            nuages.forEach(nuage => {
                const animationDuration = (entry.intersectionRatio * nuage.offsetWidth) / 50; // Calcul de la durée de l'animation en secondes
                nuage.style.transitionDuration = animationDuration + 's'; // Appliquer la durée de l'animation
                nuage.classList.add('move-left');

                // Réinitialiser la durée de transition après l'animation
                setTimeout(() => {
                    nuage.style.transitionDuration = '';
                }, animationDuration * 1000); // Convertir la durée de l'animation en millisecondes
            });
        }
    });
}, optionsForNuages);

// Observez chaque élément avec la classe "nuage"
nuages.forEach(nuage => {
    observerForNuages.observe(nuage);
});

