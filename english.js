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
        //Proyectos
        ProyectosDestacables: "Proyectos destacables",
        GraphicHabits: "Graphic Habits",
        GraphicHabitsDescription: "Una app de hábitos te permite crear, editar y eliminar hábitos personalizados que quieres \
        desarrollar (como leer, hacer ejercicio o meditar). Cada vez que cumples un hábito, lo marcas \
        como completado.  La app guarda tu progreso.",
        PiedraPapelTijeras: "Piedra, Papel o Tijeras",
        PiedraPapelTijerasDescription: "Piedra, papel o tijeras.\
        Es un juego famoso replicado con codigo, donde el usuario elige una ficha y \
        con un algoritmo aleatorio, la maquina selecciona la otra ficha y se determina el ganador.",
        Tecnologias: "Tecnologias",
        HabilidadesBlandas: "Habilidades blandas",
        HabilidadesBlandasTexto: "Me destaco por mi comunicación afectiva, lo que me permite expresar ideas con claridad y empatía. \
        Soy una persona disciplinada y puntual, lo cual me ayuda a cumplir objetivos con responsabilidad y constancia. \
        Me gusta el trabajo en equipo, ya que disfruto colaborar, escuchar activamente y aportar desde una actitud empática y paciente.\
        Soy respetuoso, me gusta el orden y me encanta estudiar. \
        Disfruto trabajar en el Frontend, ya que va de lado con mi creatividad y me permite \
        darle vida a un diseño y a cualquier proyecto.",
        TeGusto: "¿Te gustó mi portafolio? Llamame!",
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
        Tecnologias: "Technologies",
        HabilidadesBlandas: "Soft skills",
        HabilidadesBlandasTexto: "I excel in effective communication, allowing me to express ideas clearly and empathetically. \
        I am a disciplined and punctual person, which helps me meet objectives with responsibility and consistency. \
        I enjoy teamwork, as I like to collaborate, listen actively, and contribute with an empathetic and patient attitude. \
        I am respectful, I like order, and I love studying. \
        I enjoy working on the Frontend, as it aligns with my creativity and allows me to bring designs and projects to life.",
        TeGusto: "Did you like my portfolio? Call me!",
        
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



