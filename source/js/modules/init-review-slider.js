// export const reviewSlider = () => {
//   return new Swiper('.swiper-container', {
//     // slidesPerView: 3,  // 3 слайда на десктопе
//     slidesPerView: "auto",
//     spaceBetween: 20,   // Расстояние между слайдами
//     loop: true,  // Включаем циклическую прокрутку
//     grabCursor: true,  // Курсор при свайпе
//     // loopAdditionalSlides: 3,
//     breakpoints: {
//       768: {
//         slidesPerView: 1,  // 1 слайд на мобильных устройствах
//         spaceBetween: 20   // Меньшее расстояние на мобильных
//       },
//     },
//     // loop: true,  // Бесконечный цикл слайдов
//     // grabCursor: true,  // Курсор при свайпе
//     // autoplay: {
//     //   delay: 3000, // Задержка между сменой слайдов
//     //   disableOnInteraction: false, // Оставляем autoplay включенным после взаимодействия
//     // },
//   });
// };

export const slider = () => {
  const reviewSlider = document.getElementById('slider');
  let isMouseDown = false;
  let startX;
  let scrollLeft;

  reviewSlider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - reviewSlider.offsetLeft;
    scrollLeft = reviewSlider.scrollLeft;
    reviewSlider.style.cursor = 'grabbing';
  });

  reviewSlider.addEventListener('mouseleave', () => {
    isMouseDown = false;
    reviewSlider.style.cursor = 'grab';
  });

  reviewSlider.addEventListener('mouseup', () => {
    isMouseDown = false;
    reviewSlider.style.cursor = 'grab';
  });

  reviewSlider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - reviewSlider.offsetLeft;
    const walk = (x - startX) * 3; // Множитель для скорости перемещения
    reviewSlider.scrollLeft = scrollLeft - walk;
  });
};
