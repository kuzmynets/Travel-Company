document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.popular-swiper', {
        // Базово — 1 слайд
        slidesPerView: 1,
        spaceBetween: 16,
        // Показуємо чітко один слайд до 576px
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: true,   // якщо хочеш, щоб цей єдиний слайд був по центру
            },
            576: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 32
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        // навігація вперед/назад
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
});