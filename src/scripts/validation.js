// Функция отображения ошибки
 const showInputError = (formElement, inputElement, errorMessage, validationConfig1) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
    console.log(inputElement.validationMessage);
  };

// Функция скрытия ошибки
export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };


// Проверка валидности конкретного поля
 const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
      console.log(inputElement.dataset.errorMessage);
    }
    else {
      inputElement.setCustomValidity("");
    }



    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };



// Функция проверки наличия невалидных полей
const hasInvalidInput = (inputList) => {
  const result = inputList.some((inputElement) => !inputElement.validity.valid);
console.log('Has invalid input:', result); // Вывод результата в консоль
  return result;
};




// Функция для блокировки кнопки «Отправить»
export const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add('button_inactive');
      console.log('button disabled');
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove('button_inactive');
      console.log('button enabled');
    }
  };



// Установка слушателей для полей в fieldset
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement);
    });
  });
};



// Функция включения валидации форм
export const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    // Для каждого формы вызываем setEventListeners
      setEventListeners(formElement);
  });
};


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});