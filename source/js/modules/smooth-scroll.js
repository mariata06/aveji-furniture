export const smoothScroll = () => {
  if (CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('nav a').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Скроллим к элементу
        window.scrollTo({
          // top: targetElement.offsetTop - 60, // Учитываем высоту фиксированного меню
          top: targetElement.offsetTop, // Учитываем высоту фиксированного меню
          behavior: 'smooth',
        });
      });
    });
  }
};
