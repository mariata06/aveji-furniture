export const initHorizontalFade = (slider, sliderWrapper) => {
  const list = document.querySelector(slider);
  const listWrapper = document.querySelector(sliderWrapper);

  if (!list) return; // Проверяем, существует ли элемент

  listWrapper.classList.remove('fade-left');

  function mouseMoveWhileDown(target, whileMove) {
    let endMove = function () {
      window.removeEventListener('mousemove', whileMove);
      window.removeEventListener('mouseup', endMove);
    };

    target.addEventListener('mousedown', function (event) {
      event.stopPropagation(); // remove if you do want it to propagate ..
      window.addEventListener('mousemove', whileMove);
      window.addEventListener('mouseup', endMove);
    });
  }

  mouseMoveWhileDown(list, function () {
    const isEnd = list.scrollWidth - list.scrollLeft <= list.clientWidth;
    const isStart = list.scrollLeft === 0;

    if (isEnd) {
      listWrapper.classList.add('fade-right');
    } else {
      listWrapper.classList.remove('fade-right');
      listWrapper.classList.add('fade-left');
    }

    if (isStart) {
      listWrapper.classList.remove('fade-left');
    }
  });
};
