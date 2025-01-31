export const mobMenu = () => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.main-nav__toggle');

  toggle.addEventListener('click', function (event) {
    this.classList.toggle('active');
    ['overlay', 'open'].forEach((cls) => nav.classList.toggle(cls));
  });

  document.addEventListener('click', function (event) {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      toggle.classList.remove('active');
      ['overlay', 'open'].forEach((cls) => nav.classList.remove(cls));
    }
  });
};
