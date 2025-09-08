//Modo noche.
export function activateNightMode(){

    //Seccion del header
    const btn__sun__id = document.getElementById('btn__sun__id');
    const icon__night__id = document.getElementById('icon__night__id');

    
    //Seccion del perfil
    const acercaDeMi__id = document.getElementById('acercaDeMi__id');
    const profile__container__id = document.getElementById('profile__container__id');
    const profile__name__id = document.getElementById('profile__name__id');
    const profile__greeting__id = document.getElementById('profile__greeting__id');
    const language__icon__id = document.getElementById("language__icon__id");

    //Seccion de proyectos
    const proyectos__id = document.querySelectorAll('#proyectos__id');
    const proyectos__btn = document.querySelectorAll('.githubPages__btn');
    const demo__btn = document.querySelectorAll('.demo__btn');
    const code__btn = document.querySelectorAll('.code__btn');
    const proyectos__container__tittle__div__id = document.getElementById('proyectos__container__tittle__div__id');
    const proyectos__container__title__id = document.getElementById('proyectos__container__title__id');
    const proyectos__title__id = document.querySelectorAll('#proyectos__title__id');
    const proyectos__information__container__id = document.querySelectorAll('#proyectos__information__container__id');
    const proyectos__container__flex = document.getElementById('proyectos__container__flex__id');
    const proyectos__informacion = document.querySelectorAll('#proyectos__informacion__id');
    const proyectos__githubPages__id = document.querySelectorAll("#proyectos__githubPages__id");
    const proyectos__tecnologias__id = document.querySelectorAll("#proyectos__tecnologias__id");
    const proyectos__container__github = document.querySelectorAll(".proyectos__container__github");

    //Seccion de Skills
    const skills__container__tecnologias__id = document.getElementById("skills__container__tecnologias__id");
    const skills__container__softSkills__id = document.getElementById("skills__container__softSkills__id");
    const habilidades__blandas__id = document.getElementById("habilidades__blandas__id");
    const skills__container__tecnologias__title__id = document.getElementById("skills__container__tecnologias__title__id");
    const skills__container__softSkills__title__id = document.getElementById("skills__container__softSkills__title__id");

    //Seccion Footer
    const footer__container__id = document.getElementById('footer__container__id');


    btn__sun__id.classList.toggle('active');
    icon__night__id.classList.toggle('active');
    main__container__id.classList.toggle('active');
    profile__container__id.classList.toggle('active');
    acercaDeMi__id.classList.toggle('active');
    language__icon__id.classList.toggle('active');
    footer__container__id.classList.toggle('active');
    proyectos__container__tittle__div__id.classList.toggle('active');
    proyectos__container__title__id.classList.toggle('active');
    profile__name__id.classList.toggle('active');
    proyectos__container__flex.classList.toggle('active');
    profile__greeting__id.classList.toggle('active');
    habilidades__blandas__id.classList.toggle("active");
    skills__container__tecnologias__id.classList.toggle('active');
    skills__container__softSkills__id.classList.toggle('active');
    skills__container__tecnologias__title__id.classList.toggle('active');
    skills__container__softSkills__title__id.classList.toggle('active');
    
    proyectos__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__title__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__informacion.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__container__github.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__btn.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    demo__btn.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    code__btn.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__githubPages__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__tecnologias__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

    proyectos__information__container__id.forEach(function(elemento){
        elemento.classList.toggle('active');
    });

};

