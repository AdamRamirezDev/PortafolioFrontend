import {activateNightMode} from './darkTheme.js';
import { translatePage } from './english.js';


// Translate Page
const language__EUA = document.getElementById("btn__EUA__id");
const language__MEXICO = document.getElementById("btn__mexico__id");

let currentLanguage = 'en'; // Default language
language__EUA.addEventListener('click', function() {

    currentLanguage = 'en';
    translatePage(currentLanguage);

});

language__MEXICO.addEventListener('click', function() {

    currentLanguage = 'es';
    translatePage(currentLanguage);
    
});



translatePage(currentLanguage); // Initial translation when the page loads




//DarkTheme
const icon__night__id = document.querySelector('#icon__night__id');
icon__night__id.addEventListener('click', () => {
    activateNightMode();
});




