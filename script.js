// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#000000';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Simple smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');

    // Optional: Animate the hamburger into an 'X'
    hamburger.classList.toggle('toggle-icon');
});

// Close menu when a link is clicked (useful for single-page sites)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});