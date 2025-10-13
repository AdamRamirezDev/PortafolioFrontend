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
        Naci en culiacan, actualmente vivo en Guadalajara Jalisco, tengo 23 años y ganas de darle vida a mi codigo. Actualmente estoy desarrollando con JavaScript, React y de pasatiempo\
        decidi estudiar un poco de Angular y probar su sintaxis. \
        Tengo conocimiento en Html5, Css3,Sass,Bootstrap ,JavaScript, TypeScript, React, Angular, Git y Github \
        Manejo asincronia, promesas, consumo de APIS, API Rest\
        Estoy terminando mi carrea de Ingenieria en Sistemas y me estoy enfocando en el desarrollo Frontend. \
        Gran parte de mi conocimiento lo aprendi siendo autodidacta y otra parte gracias a mi mentor.",

        //Proyectos
        ProyectosDestacables: "Proyectos destacables",
        proyectTecnologies: "Tecnologias Usadas",
        GraphicHabits: "Graphic Habits",
        GraphicHabitsDescription: "Una app de hábitos te permite crear, editar y eliminar hábitos personalizados que quieres \
        desarrollar. Cada vez que cumples un hábito, lo marcas \
        como completado.  La app guarda tu progreso.",
        MusicAppReact: "MusicAppReact",
        MusicAppReactDescription: "Proyecto en construccion :) \
        Proximamente saldran avances! \ Puedes ver como va la construccion del codigo en el boton de code",
        PiedraPapelTijeras: "Dashboard Colorido",
        PiedraPapelTijerasDescription: "Aplicación inspirada en el clásico juego de Piedra, Papel o Tijeras\
        El usuario elige una ficha y el sistema selecciona aleatoriamente la del oponente.",
        //Cambia el nombre del 4 proyecto y su informacion, asi como el link que dirige al proyecto
        FormularioCostos: "BrowserExtensionManager",
        FormularioCostosDescription: "Aplicacion de Angular donde se muestran tarjetas con informacion e imagen. Se puede filtrar, permitiendo ver las cartas tarjetas activas e inactivas.",
        GifsApp: "GiftsApp",
        GifsAppDescription: "Una app de GIFTs donde puedes buscar imágenes animadas y se guarda un historial \
        de tus términos de búsqueda recientes para que puedas acceder fácilmente a ellos después.",
        AngularPipes: "Panel de tiempo con Angular",
        AngularPipesDescription: "Demuestro mi conocimiento en manejo de Pipes con Angular, usando los Pipes comunes, numericos , no tan comunes \
        y creando Pipes personalizados",

        //Habilidades
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
       AcercaDeMiTexto: " I have a passion for development and technology. I look forward to getting involved in interesting projects and testing the strength of my mindset. \
        I was born in Culiacán and currently live in Guadalajara, Jalisco. I'm 23 years old and eager to bring my code to life. I'm currently developing with JavaScript, React, and as a hobby, I decided to study a little Angular and try out its syntax. \
        I have knowledge in HTML5, CSS3, Sass, Bootstrap, JavaScript, TypeScript, React, Angular, Git, and Github. \
        I handle asynchrony, promises, API consumption, and REST APIs \
        I'm finishing my degree in Systems Engineering and am focusing on Frontend development. \
        I learned much of my knowledge as a self-taught individual, and part of it was learned through my mentor.",

        //Proyects
        ProyectosDestacables: "Featured projects",
        proyectTecnologies: "Technologies used",
        GraphicHabits: "Graphic Habits",
        GraphicHabitsDescription: "A habit app allows you to create, edit, and delete custom habits you want to develop. \
        Every time you complete a habit, you mark it as done. \
        The app saves your progress.",
        MusicAppReact: "MusicAppReact",
        MusicAppReactDescription: "Project under construction :) \
        Previews coming soon! \ You can see how the code is being built in the code button.",
        PiedraPapelTijeras: "Piedra Papel Tijeras",
        PiedraPapelTijerasDescription: "An application inspired by the classic game of Rock, Paper, Scissors\
        The user chooses a piece, and the system randomly selects the opponent's piece.",
        FormularioCostos: "BrowserExtensionManager",
        FormularioCostosDescription: "Angular application that displays cards with information and images. It can be filtered, allowing you to view active and inactive cards.",
        GifsApp: "GiftsApp",
        GifsAppDescription: "A GIFTs app where you can search for animated images and a history of your \
        recent search terms is saved so you can easily access them later.",
        AngularPipes: "Dashboard time Angular",
        AngularPipesDescription: "I demonstrate my knowledge of managing Pipes with Angular, using common, numerical, and not-so-common Pipes, and creating custom Pipes.",

        //Skills
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

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elemento => {
        const key = elemento.getAttribute('data-i18n');
        elemento.textContent = translations[currentLanguage][key];
    })
    
}



