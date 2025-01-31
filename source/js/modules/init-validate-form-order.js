export const validateForm = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Убедитесь, что форма имеет тег <form>
    const inputs = form.querySelectorAll('input[required]');
    const submitButton = form.querySelector('.submit-btn');
    const phoneInput = form.querySelector('input[type="tel"]'); // Поле телефона

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Предотвращает перезагрузку страницы
      let isValid = true;

      // Общая валидация полей
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('input-error'); // Добавляем класс для ошибки
        } else {
          input.classList.remove('input-error'); // Убираем класс ошибки
        }
      });

      // Дополнительная проверка для телефона
      if (phoneInput) {
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^[\d\s()+-]+$/; // Разрешаем цифры, пробелы, скобки, "+" и "-"
        if (!phoneRegex.test(phoneValue) || phoneValue.length < 10 || phoneValue.length > 15) {
          isValid = false;
          phoneInput.classList.add('input-error');
          console.error('Поле телефона должно содержать только допустимые символы и быть длиной от 10 до 15 символов!');
        } else {
          phoneInput.classList.remove('input-error');
        }
      }

      // Если форма невалидна, отменяем отправку
      if (!isValid) {
        console.log('Пожалуйста, исправьте ошибки в форме!');
      } else {
        console.log('Форма успешно отправлена!');
        form.submit(); // Убираем `preventDefault`, если форма валидна
      }
    });

    // Убираем класс ошибки при вводе текста
    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value.trim()) {
          input.classList.remove('input-error');
        }
      });
    });

    // Проверка вводимых символов для телефона
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^[\d\s()+-]*$/; // Разрешаем ввод только допустимых символов
        if (phoneRegex.test(phoneValue)) {
          phoneInput.classList.remove('input-error');
        } else {
          phoneInput.classList.add('input-error');
        }
      });
    }
  });
};
