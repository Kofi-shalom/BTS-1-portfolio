const btnPrint = document.getElementById('btn-print');

if (btnPrint) {
    btnPrint.addEventListener('click', () => {

        window.print();
    });
}

console.log("Page CV chargée !");


const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


if (navToggle) {

    navToggle.addEventListener('click', () => {

        navMenu.classList.toggle('show');
        
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('show')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
}


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        navMenu.classList.remove('show');
        
        
        const icon = navToggle.querySelector('i');
        icon.classList.replace('fa-xmark', 'fa-bars');
    });
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    if (window.scrollY >= 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});


console.log("Page Projets chargée !");


const cards = document.querySelectorAll('.projet-card');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});