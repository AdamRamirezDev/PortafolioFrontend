//Modo noche.
const icon__night__id = document.getElementById('icon__night__id');
const main__container__id = document.getElementById('main__container__id');
const profile__container__id = document.getElementById('profile__container__id');

icon__night__id.addEventListener('click', () => {

    main__container__id.classList.toggle('active');
    profile__container__id.classList.toggle('active');

})