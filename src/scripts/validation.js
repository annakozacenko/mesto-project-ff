// Функция отображения ошибки
 const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
    console.log(inputElement.validationMessage);
  };

// Функция скрытия ошибки
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.name}-input-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };


// Проверка валидности конкретного поля
 const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };



// Функция проверки наличия невалидных полей
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  };




// Функция для блокировки кнопки «Отправить»
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove('button_inactive');
    }
  };



  export const setInputListener = (formElement, inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей

    });
  };