//Попап редактирования профиля
const editProfilePopup = document.querySelector(".popup_type_edit");

// Находим форму в DOM -уточнить поиск формы, т.к. на странице есть несколько форм с классом popup__form
const formElement = document.querySelector(".popup__form"); 
// Находим поля формы в DOM -уточнить у чего вызывается метод querySelector
const nameInput = document.querySelector(".popup__input_type_name"); 
const jobInput = document.querySelector(".popup__input_type_description"); 
// Находим элементы страницы, куда должны быть вставлены значения полей
const profileTitleElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const newName = nameInput.value;
    const newDescription = jobInput.value;

    // Вставьте новые значения с помощью textContent
    profileTitleElement.textContent = newName;
    profileDescriptionElement.textContent = newDescription;

    closeModal(editProfilePopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener("submit", handleFormSubmit);


//Слушатель на кнопку открытия попапа 
document.querySelector(".profile__edit-button").addEventListener("click", () => {
    nameInput.value = profileTitleElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;
    openModal(editProfilePopup);
});

//Слушатель на кнопки закрытия попапа(внутри попапа)
addListeners(editProfilePopup);