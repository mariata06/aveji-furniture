export const reviewSlider = () => {
  return new Swiper('.swiper-container', {
    slidesPerView: 3,  // 3 слайда на десктопе
    spaceBetween: 20,   // Расстояние между слайдами
    loop: true,  // Включаем циклическую прокрутку
    grabCursor: true,  // Курсор при свайпе
    // loopAdditionalSlides: 3,
    breakpoints: {
      768: {
        slidesPerView: 1,  // 1 слайд на мобильных устройствах
        spaceBetween: 20   // Меньшее расстояние на мобильных
      },
    },
    // loop: true,  // Бесконечный цикл слайдов
    // grabCursor: true,  // Курсор при свайпе
    // autoplay: {
    //   delay: 3000, // Задержка между сменой слайдов
    //   disableOnInteraction: false, // Оставляем autoplay включенным после взаимодействия
    // },
  });
};
