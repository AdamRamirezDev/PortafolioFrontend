import {activateNightMode} from './darkTheme.js';
import { translatePage } from './translate.js';


const language__EUA = document.getElementById("btn__EUA__id");
// Translate Page
language__EUA.addEventListener('click', function() {

    translatePage();

});

//DarkTheme
const icon__night__id = document.querySelector('#icon__night__id');

icon__night__id.addEventListener('click', () => {
    activateNightMode();
});

//Skills section
const skills__container__tecnologias = document.getElementById("skills__container__tecnologias__id");
const skills__container__softSkills = document.getElementById("skills__container__softSkills__id");
const technologies = document.getElementById("skills__technologies__text__id");
const softSkills = document.getElementById("skills__softSkills__text__id");


technologies.addEventListener('click', function(){
    console.log("SI ESTA FUNCIONANDO 1");
    skills__container__tecnologias.classList.remove('active');
    skills__container__softSkills.classList.add("active");
});

softSkills.addEventListener('click', function(){
    console.log("SI ESTA FUNCIONANDO 2");
    skills__container__softSkills.classList.remove("active");
    skills__container__tecnologias.classList.add("active");
});
    



