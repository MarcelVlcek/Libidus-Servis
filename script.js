const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSections);
checkSections(); // Pre zobrazenie sekcií, ktoré sú už viditeľné na stránke

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4; // Spodná hranica triggeru

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // Pozícia sekcie

        // Ak je sekcia nad triggerom, pridaj triedu 'show'
        if(sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

//
// 
//

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Zamedzí štandardnému chovaniu odkazu

        // Zistí cieľovú sekciu podľa "href" atribútu odkazu
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Posun na cieľovú sekciu
        const headerOffset = 80; // Nastav túto hodnotu podľa potreby
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});



// BackToTopBtn

window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;
    let toTop = document.querySelector('.top-page');

    if (scrolled > 600) {
        toTop.style.display = 'block'; 
    } else {
        toTop.style.display = "none"; 
    }
});



function toggleMenu() {
    let nav = document.querySelector('.main-nav ul');
    nav.classList.toggle('show'); // Prepína triedu "show"
}

// Vyberieme tlačidlo menu a navigačné menu
const menuButton = document.querySelector('.menu-btn');
const mainNav = document.querySelector('.main-nav');

// Funkcia pre zobrazenie/skrytie menu pri kliknutí na tlačidlo
menuButton.addEventListener('click', () => {
    mainNav.classList.toggle('show'); // Prepne triedu "show" na menu
});
