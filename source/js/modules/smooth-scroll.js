export const smoothScroll = () => {
  if (CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Проверяем, существует ли элемент, перед скроллом
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop, // Учитываем высоту фиксированного меню
            behavior: 'smooth',
          });
        }
      });
    });
  }
};
