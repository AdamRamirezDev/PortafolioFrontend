const translations = {

    es : {
        Hola: "Hola!",
        SoyAdamRamirez: "Soy Adam Ramirez",
        Inicio: "Inicio",
        AceraDeMi: "Acerca de mi",
        Proyectos: "Proyectos",
        Skills: "Skills",
        Contactame: "Contactame",
        ModoNoche: "Modo noche",
        AcercaDeMi: "Acerca de mi",
        AcercaDeMiTexto: "Tengo una pasion por el desarrollo y la tecnologia, busco envolverme en proyectos interesantes y poner a prueba la fuerza de mi mentalidad. \
        Naci en culiacan, actualmente vivo en Guadalajara Jalisco, tengo 22 años y ganas de darle vida a mi codigo. Actualmente estoy desarrollando con JavaScript y Angular. \
        Tengo muchas ganas de aprender nuevas tecnologias, estar al tanto de las actualizaciones y del mundo Tec. \
        Estoy terminando mi carrea de Ingenieria en Sistemas y me estoy enfocando en el desarrollo Frontend. \
        Gran parte de mi conocimiento lo aprendi siendo autodidacta y otra parte gracias a mi mentor.",
        ProyectosDestacables: "Proyectos destacables",
        GraphicHabits: "Graphic Habits",
        GraphicHabitsDescription: "Una app de hábitos te permite crear, editar y eliminar hábitos personalizados que quieres \
        desarrollar (como leer, hacer ejercicio o meditar). Cada vez que cumples un hábito, lo marcas \
        como completado.  La app guarda tu progreso.",
        PiedraPapelTijeras: "Piedra, Papel o Tijeras",
        PiedraPapelTijerasDescription: "Piedra, papel o tijeras.\
        Es un juego famoso replicado con codigo, donde el usuario elige una ficha y \
        con un algoritmo aleatorio, la maquina selecciona la otra ficha y se determina el ganador."

    },
    en: {
        Hola: "Hi!",
        SoyAdamRamirez: "I'm Adam Ramirez",
        Inicio: "Home",
        AceraDeMi: "About me",
        Proyectos: "Projects",
        Skills: "Skills",
        Contactame: "Contact me",
        ModoNoche: "Night mode",
        AcercaDeMi: "About me",
       AcercaDeMiTexto: "I have a passion for development and technology, I seek to get involved in interesting projects and test the strength of my mindset. \
        I was born in Culiacan, currently living in Guadalajara Jalisco, I am 22 years old and eager to bring my code to life. \
        I am currently developing with JavaScript and Angular. \
        I am eager to learn new technologies, stay up to date with updates and the tech world. \
        I am finishing my degree in Systems Engineering and I am focusing on Frontend development. \
        A large part of my knowledge I learned being self-taught and another part thanks to my mentor.",
        ProyectosDestacables: "Featured projects",
        GraphicHabits: "Graphic Habits",
        GraphicHabitsDescription: "A habit app allows you to create, edit, and delete custom habits you want to develop \
        (like reading, exercising, or meditating). Every time you complete a habit, you mark it as done. \
        The app saves your progress.",
        PiedraPapelTijeras: "Rock, Paper, Scissors",
        PiedraPapelTijerasDescription: "Rock, paper, scissors. \
        It's a famous game replicated with code, where the user chooses a piece and \
        with a random algorithm, the machine selects the other piece and the winner is determined.",
        
    }


}

export function translatePage(currentLanguage) {

    console.log("Si esta funcionando");
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elemento => {
        const key = elemento.getAttribute('data-i18n');
        elemento.textContent = translations[currentLanguage][key];
    })
    
}



