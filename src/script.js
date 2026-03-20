import {activateNightMode} from './js/darkTheme.js';
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


//DarkTheme
const icon__night__id = document.querySelector('#icon__night__id');
icon__night__id.addEventListener('click', () => {
    activateNightMode();
});

const btn__sun__id = document.querySelector('#btn__sun__id');
btn__sun__id.addEventListener('click', () => {
    activateNightMode();
});




