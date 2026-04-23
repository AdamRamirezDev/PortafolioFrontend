import { translatePage } from './js/english.js';

// Scroll Reveal Implementation
const revealElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    revealElements();
});

// Translate Page
const btn__language = document.getElementById("btn__language__id");

let currentLanguage = 'en'; // Default language
btn__language.addEventListener('click', function() {

    if(currentLanguage === "en"){
        currentLanguage = "es";
    } else if(currentLanguage === "es"){
        currentLanguage = "en";
    }

    translatePage(currentLanguage);

});

translatePage(currentLanguage); // Initial translation when the page loads




