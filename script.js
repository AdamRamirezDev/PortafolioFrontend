//Modo noche.
const icon__night__id = document.getElementById('icon__night__id');
const main__container__id = document.getElementById('main__container__id');
const profile__container__id = document.getElementById('profile__container__id');
const second__wabe__id = document.getElementById('second__wabe__id');
const second__wabe__nigth__id = document.getElementById('second__wabe__nigth__id');
const first__wabe__night__id = document.getElementById('first__wabe__night__id');
const first__wabe__id = document.getElementById('first__wabe__id');

icon__night__id.addEventListener('click', () => {

    main__container__id.classList.toggle('active');
    profile__container__id.classList.toggle('active');
    second__wabe__id.classList.toggle('active');
    second__wabe__nigth__id.classList.toggle('active');
    first__wabe__id.classList.toggle('active');
    first__wabe__night__id.classList.toggle('active');

})