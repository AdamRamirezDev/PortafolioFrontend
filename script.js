import {activateNightMode} from './darkTheme.js';
import { translatePage } from './english.js';


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




