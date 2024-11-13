import './pages/index.css'; // добавьте импорт главного файла стилей
import { deleteCard, likeCard, addCard} from './scripts/card';
import { openModal, closeModal, addListeners } from './scripts/modal';
import {initialCards} from "./scripts/cards";









//----------------------------------------------------------------

//Попап редактирования профиля
const editProfilePopup = document.querySelector(".popup_type_edit");

// Находим форму в DOM 
const formElement = document.forms["edit-profile"];
// Находим поля формы в DOM -уточнить у чего вызывается метод querySelector
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
// Находим элементы страницы, куда должны быть вставлены значения полей
const profileTitleElement = document.querySelector(".profile__title");
const profileDescriptionElement = document.querySelector(".profile__description");

// Обработчик отправки формы редактирования профиля
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    const newName = nameInput.value;
    const newDescription = jobInput.value;

    profileTitleElement.textContent = newName;
    profileDescriptionElement.textContent = newDescription;
    closeModal(editProfilePopup);
}

//Обработчик формы редактирования профиля
formElement.addEventListener("submit", handleFormSubmit);


//Слушатель на кнопку открытия попапа редактирования профиля
document.querySelector(".profile__edit-button").addEventListener("click", () => {
    //Заполняем поля формы текущими данными профиля
    nameInput.value = profileTitleElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;
    openModal(editProfilePopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(editProfilePopup);


//----------------------------------------------------------------
//Попап добавления новой карточки
const addCardPopup = document.querySelector(".popup_type_new-card");


// Находим форму в DOM
const formImageElement = document.forms["new-place"];
// Находим поля формы в DOM
const placeInput = formImageElement.querySelector(".popup__input_type_card-name");
const placeLinkInput = formImageElement.querySelector(".popup__input_type_url");



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
    openModal(addCardPopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(addCardPopup);

//----------------------------------------------------------------
//Попап открытия картинки
const imagePopup = document.querySelector(".popup_type_image");


// Функция открытия попапа с картинкой
const openImagePopup = (evt) => {
    const card = evt.target.closest(".card");
    const imageLink = card.querySelector(".card__image").src;
    const imageTitle = card.querySelector(".card__title").textContent;

    const image = imagePopup.querySelector(".popup__image");
    const caption = imagePopup.querySelector(".popup__caption");

    image.src = imageLink;
    caption.textContent = imageTitle;
    openModal(imagePopup);
};




//Слушатель на кнопки закрытия попапа
addListeners(imagePopup);



//----------------------------------------------------------------

// Cписок добавления карточек

const cardsList = document.querySelector('.places__list');


//Отрисовка существующих карточек
initialCards.forEach((card) => {
    cardsList.append(addCard(card.name, card.link, deleteCard, likeCard, openImagePopup));
});