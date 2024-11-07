// addButton.addEventListener('click', () => {
//     const popup = document.querySelector('.popup_type_new-card');
//     popup.classList.add('popup_is-opened');
//     const closeButton = popup.querySelector('.popup__close');
//     closeButton.addEventListener('click', () => {
//         console.log("опа это что крестик")
//         popup.classList.add('popup_is-animated');
//         popup.classList.remove('popup_is-opened');
//     })

// });



document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("profile__add-button")) {
    openModal(addCardPopup);

  } else if (evt.target.classList.contains("profile__edit-button")) {
    openModal(editProfilePopup);




    nameInput.value = profileTitleElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;

  }
});







//-------------------Popup--------------------------------
const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
    closeModal(popup);
  }
};

const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEscKeyUp);
  // добавить класс открытия попапа
  // добавить слушатель на кнопку Escape
};

// @todo: Я УДАЛИЛА ОТСЮДА ЭКСПОРТ. АНЯ ОБРАТИ ВНИМАНИЕ
const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEscKeyUp);
  // удалить класс открытия попапа
  // удалить слушатель на кнопку Escape
};

const addListeners = (popup) => {
  const closeButton = popup.querySelector(".popup__close");
  // ищем кнопку крестик в попапе
  closeButton.addEventListener("click", () => {
    closeModal(popup);
    // closeModal(...)
  });

  popup.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("popup")) {
      closeModal(popup);
    }
    // если event.target содержит класс "popup", то закрываем
  });
};

const editProfilePopup = document.querySelector(".popup_type_edit");
const addCardPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");

addListeners(editProfilePopup);
addListeners(addCardPopup);
addListeners(imagePopup);

//-------------------Popup пользователя--------------------------------
// Находим форму в DOM
const formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description'); // Воспользуйтесь инструментом .querySelector()


const profileTitleElement = document.querySelector('.profile__title');
const profileDescriptionElement = document.querySelector('.profile__description');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {

  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const newName = nameInput.value;
  const newDescription = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  profileTitleElement.textContent = newName;
  profileDescriptionElement.textContent = newDescription;

  closeModal(editProfilePopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', handleFormSubmit);


// -------------------Popup добавления картинки--------------------------------
// Находим форму в DOM
const formImageElement = document.forms['new-place']; // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
const placeInput = document.querySelector('.popup__input_type_card-name'); // Воспользуйтесь инструментом .querySelector()
const placeLinkInput = document.querySelector('.popup__input_type_url'); // Воспользуйтесь инструментом .querySelector()


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormImageSubmit(evt) {

console.log("handleFormImageSubmit");
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  const newPlace = placeInput.value;
  const newPlaceLink = placeLinkInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей

 // initialCards.push({ name: newPlace, link: newPlaceLink });
  // Вставьте новые значения с помощью textContent

  closeModal(addCardPopup);
  cardsList.prepend(addCard(newPlace, newPlaceLink, deleteCard));
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formImageElement.addEventListener('submit', handleFormImageSubmit);