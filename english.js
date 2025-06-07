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

let currentLanguage = 'en'; 

export function translatePage() {

    console.log("Si esta funcionando");
    
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(elemento => {
        const key = elemento.getAttribute('data-i18n');
        elemento.textContent = translations[currentLanguage][key];
    })
    
}



