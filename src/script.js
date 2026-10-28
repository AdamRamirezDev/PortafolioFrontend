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

// Translation with persistence in localStorage
const btn__language = document.getElementById("btn__language__id");

const getInitialLanguage = () => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'es' || saved === 'en') {
        return saved;
    }
    // Si no hay preferencia guardada, detecta el idioma del navegador del usuario
    return navigator.language && navigator.language.startsWith('es') ? 'es' : 'en';
};

let currentLanguage = getInitialLanguage();

const updateLanguageUI = (lang) => {
    const codeElement = document.getElementById("language__code__id");
    if (codeElement) {
        codeElement.textContent = lang.toUpperCase();
    }
    if (btn__language) {
        btn__language.title = lang === 'en' ? 'Cambiar a Español' : 'Switch to English';
        btn__language.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
    }
};

if (btn__language) {
    btn__language.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        localStorage.setItem('portfolio_lang', currentLanguage);
        translatePage(currentLanguage);
        updateLanguageUI(currentLanguage);
    });
}

// Initial translation when the page loads
translatePage(currentLanguage);
updateLanguageUI(currentLanguage);

// Dynamic Copyright Year
const yearElement = document.getElementById("current-year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
