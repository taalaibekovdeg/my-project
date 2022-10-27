const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const btn = document.querySelector('.header__bottom--one__text button')
btn.addEventListener('click',() => {
    document.querySelector('.about--modal').style.display = 'block'
})


const btnCloce = document.querySelector('.about--modal__block--square__close')
btnCloce.addEventListener('click',() => {
    document.querySelector('.about--modal').style.display = 'none'
})