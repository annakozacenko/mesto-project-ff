//Попап добавления картинки
const addCardPopup = document.querySelector(".popup_type_new-card");


// Находим форму в DOM
const formImageElement = document.forms["new-place"]; 
// Находим поля формы в DOM-уточнить у чего вызывается метод querySelector
const placeInput = document.querySelector(".popup__input_type_card-name"); 
const placeLinkInput = document.querySelector(".popup__input_type_url"); 




// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormImageSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const newPlace = placeInput.value;
    const newPlaceLink = placeLinkInput.value;


    cardsList.prepend(addCard(newPlace, newPlaceLink, deleteCard));


    closeModal(addCardPopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formImageElement.addEventListener("submit", handleFormImageSubmit);

//Слушатель на кнопку открытия попапа 
document.querySelector(".profile__add-button").addEventListener("click", () => {
    placeInput.value = '';
    placeLinkInput.value = '';
    openModal(addCardPopup);
});

//Слушатель на кнопки закрытия попапа(внутри попапа)
addListeners(addCardPopup);