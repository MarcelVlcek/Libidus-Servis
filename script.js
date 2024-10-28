const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', checkSections);
checkSections(); 

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 4; 

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; 

       
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
        event.preventDefault(); 

        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        
        const headerOffset = 80; 
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



