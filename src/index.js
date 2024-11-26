import './pages/index.css'; // добавьте импорт главного файла стилей
import { deleteCard, likeCard, addCard } from './scripts/card';
import { openModal, closeModal, addListeners } from './scripts/modal';
import { initialCards } from "./scripts/cards";
import { hideInputError, toggleButtonState, enableValidation, clearValidation} from './scripts/validation';



//Попап редактирования профиля
const editProfilePopup = document.querySelector(".popup_type_edit");

// Форма редактирования профиля
const formElement = document.forms["edit-profile"];
// Поля формы
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
// Находим элементы страницы, куда должны быть вставлены значения полей
const profileTitleElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");



//Попап добавления новой карточки
const addCardPopup = document.querySelector(".popup_type_new-card");

// Форма добавления новой карточки
const formImageElement = document.forms["new-place"];
// Поля формы
const placeInput = formImageElement.querySelector(".popup__input_type_card-name");
const placeLinkInput = formImageElement.querySelector(".popup__input_type_url");




//Попап открытия картинки
const imagePopup = document.querySelector(".popup_type_image");

// Cписок добавления карточек
const cardsList = document.querySelector('.places__list');



//надо поменять классы на нужные в хтмл и цсс
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }





// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    const newName = nameInput.value;
    const newDescription = jobInput.value;

    profileTitleElement.textContent = newName;
    profileDescriptionElement.textContent = newDescription;
    closeModal(editProfilePopup);
}

//Обработчик формы редактирования профиля
formElement.addEventListener("submit", handleProfileFormSubmit);


//Слушатель на кнопку открытия попапа редактирования профиля
document.querySelector(".profile__edit-button").addEventListener("click", () => {
    //Заполняем поля формы текущими данными профиля
    nameInput.value = profileTitleElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;


    clearValidation(formElement, validationConfig);


    openModal(editProfilePopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(editProfilePopup);




// Обработчик отправки формы добавления новой карточки
function handleFormImageSubmit(evt) {
    evt.preventDefault();
    const newPlace = placeInput.value;
    const newPlaceLink = placeLinkInput.value;

    cardsList.prepend(addCard(newPlace, newPlaceLink, deleteCard, likeCard, openImagePopup));
    closeModal(addCardPopup);
}
//Обработчик формы добавления новой карточки
formImageElement.addEventListener("submit", handleFormImageSubmit);

//Слушатель на кнопку открытия попапа добавления новой карточки
document.querySelector(".profile__add-button").addEventListener("click", () => {
    //Очищаем поля формы
    placeInput.value = '';
    placeLinkInput.value = '';

clearValidation(formImageElement, validationConfig);


    openModal(addCardPopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(addCardPopup);





// Функция открытия попапа с картинкой
const openImagePopup = (link,name) => {
    const image = imagePopup.querySelector(".popup__image");
    const caption = imagePopup.querySelector(".popup__caption");

    image.src = link;
    image.alt = name;
    caption.textContent = name;
    openModal(imagePopup);
};



//Слушатель на кнопки закрытия попапа
addListeners(imagePopup);








//Отрисовка существующих карточек
initialCards.forEach((card) => {
    cardsList.append(addCard(card.name, card.link, deleteCard, likeCard, openImagePopup));
});



enableValidation(validationConfig);





//---------------------------------------------------------------
 fetch('https://nomoreparties.co/v1/wff-cohort-27/users/me', {
    headers: {
      authorization: '2e6d7127-2c96-4424-9ab2-ffa0410b4c23'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    });