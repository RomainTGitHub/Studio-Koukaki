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

