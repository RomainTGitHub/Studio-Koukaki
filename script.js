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

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open'); // Ajoute ou supprime la classe 'open' sur le bouton hamburger
        fullscreenMenu.classList.toggle('show'); // Ajoute ou supprime la classe 'show'

        // Ajoute la classe 'open' au menu en plein écran après un court délai
        setTimeout(() => {
            fullscreenMenu.classList.toggle('open');
        }, 50); // Retard pour permettre à la transition CSS de s'appliquer correctement
    });
});

const placeSection = document.getElementById('place');
const nuage1 = document.getElementById('nuage1');
const nuage2 = document.getElementById('nuage2');

let lastScrollPos = window.pageYOffset || document.documentElement.scrollTop;

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            window.addEventListener('scroll', moveNuagesOnScroll);
        } else {
            window.removeEventListener('scroll', moveNuagesOnScroll);
            resetNuagesPosition();
        }
    });
}, options);

observer.observe(placeSection);

function moveNuagesOnScroll() {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollPos > lastScrollPos) {
        moveNuages(300); // Move to the right
    } else {
        moveNuages(0); // Move back to the original position
    }
    lastScrollPos = currentScrollPos;
}

function moveNuages(leftPos) {
    nuage1.style.transform = `translateX(${leftPos}px)`;
    nuage2.style.transform = `translateX(${leftPos}px)`;
}

function resetNuagesPosition() {
    nuage1.style.transform = 'translateX(0)';
    nuage2.style.transform = 'translateX(0)';
}

