//Efecto de degradado de color.
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;

    // Definir los colores de inicio y fin del degradado
    const startColor = [255, 0, 0]; // Rojo
    const endColor = [0, 0, 255]; // Azul

    // Interpolación de colores
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

    const main__container__id = document.getElementById('main__container__id');
    // Aplicar el color de fondo
    main__container__id.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
