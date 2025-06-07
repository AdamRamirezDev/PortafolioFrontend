const translations = {

    es : {
        Hola: "Hola!",
        SoyAdamRamirez: "Soy Adam Ramirez",

    },
    en: {
        Hola: "Hi!",
        SoyAdamRamirez: "I am Adam Ramirez",
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



