new Swiper('.popular-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        1200: { slidesPerView: 4, spaceBetween: 30 },
        992:  { slidesPerView: 3, spaceBetween: 24 },
        768:  { slidesPerView: 2, spaceBetween: 20 },
        576:  { slidesPerView: 1, spaceBetween: 16 }
    }
});
