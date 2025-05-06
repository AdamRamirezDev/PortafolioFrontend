//Modo noche.
export function activateNightMode(){

    const main__container__id = document.getElementById('main__container__id');   
    const menu__container__id = document.getElementById('menu__container__id');
    
    //Seccion del perfil
    const acercaDeMi__id = document.getElementById('acercaDeMi__id');
    const profile__container__id = document.getElementById('profile__container__id');
    const profile__name__id = document.getElementById('profile__name__id');
    const profile__greeting__id = document.getElementById('profile__greeting__id');
    
    //Seccion de proyectos
    const proyectos__container__tittle__div__id = document.getElementById('proyectos__container__tittle__div__id');
    const proyectos__container__title__id = document.getElementById('proyectos__container__title__id');
    const proyectos__title__id = document.querySelectorAll('#proyectos__title__id');
    const proyectos__information__container__id = document.querySelectorAll('#proyectos__information__container__id');
    const proyectos__container__flex = document.getElementById('proyectos__container__flex__id');
    const proyectos__informacion = document.getElementById('proyectos__informacion__id');

    //Seccion de Skills
    const skills__container__tecnologias__id = document.getElementById("skills__container__tecnologias__id");
    const skills__container__softSkills__id = document.getElementById("skills__container__softSkills__id");
    const habilidades__blandas__id = document.getElementById("habilidades__blandas__id");

    //Seccion Footer
    const footer__container__id = document.getElementById('footer__container__id');


    main__container__id.classList.toggle('active');
    profile__container__id.classList.toggle('active');
    acercaDeMi__id.classList.toggle('active');
    menu__container__id.classList.toggle('active');
    footer__container__id.classList.toggle('active');
    proyectos__container__tittle__div__id.classList.toggle('active');
    proyectos__container__title__id.classList.toggle('active');
    profile__name__id.classList.toggle('active');
    proyectos__container__flex.classList.toggle('active');
    proyectos__informacion.classList.toggle('active');
    profile__greeting__id.classList.toggle('active');

    habilidades__blandas__id.classList.toggle("active");
    skills__container__tecnologias__id.classList.toggle('active');
    skills__container__softSkills__id.classList.toggle('active');

    proyectos__title__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    })

    proyectos__information__container__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    })

};