import './pages/index.css'; // добавьте импорт главного файла стилей
import { deleteCard, likeCard, addCard } from './scripts/card';
import { openModal, closeModal, addListeners } from './scripts/modal';
import { enableValidation, clearValidation } from './scripts/validation';
import { getInitialCards, getUserInfo, sendEditProfileRequest, sendAddCardRequest, sendAvatarRequest } from './scripts/api';




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

//Попап редактирования аватара
const editProfileAvatarPopup = document.querySelector(".popup_type_edit_profile-avatar");

// Форма редактирования аватара
const formAvatarElement = document.forms["edit-avatar"];
// Поля формы
const avatarLinkInput = formAvatarElement.querySelector(".popup__input_type_url");

const profileAvatarElement = document.querySelector(".profile__image");




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

let userId;


const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}



function toggleButtonState (evt, isLoading) {
    const buttonElement = evt.target.querySelector(".popup__button");
    if (isLoading) {
        buttonElement.textContent = 'Сохранение...'
      } else {
        buttonElement.textContent = 'Сохранить'
      }
}


// Обработчик отправки формы редактирования профиля
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
toggleButtonState(evt, true);
    sendEditProfileRequest(nameInput.value, jobInput.value)
        .then((data) => {
            profileTitleElement.textContent = data.name;
            profileDescriptionElement.textContent = data.about;
            closeModal(editProfilePopup);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>{
            toggleButtonState(evt, false);
        });


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

//----------------------------------------
// Обработчик отправки формы редактирования аватара
function handleProfileAvatarFormSubmit(evt) {
    evt.preventDefault();
    toggleButtonState(evt, true);
    sendAvatarRequest(avatarLinkInput.value)
        .then((data) => {
            profileAvatarElement.style.backgroundImage = `url(${data.avatar})`;
            closeModal(editProfileAvatarPopup);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>{
            toggleButtonState(evt, false);
        });
}

//Обработчик формы редактирования профиля
formAvatarElement.addEventListener("submit", handleProfileAvatarFormSubmit);


//Слушатель на кнопку открытия попапа редактирования профиля
profileAvatarElement.addEventListener("click", () => {
    //Заполняем поля формы текущими данными профиля
    //Очищаем поля формы
    avatarLinkInput.value = '';

    clearValidation(formAvatarElement, validationConfig);
    openModal(editProfileAvatarPopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(editProfileAvatarPopup);

//----------------------------------------


// Обработчик отправки формы добавления новой карточки
function handleFormImageSubmit(evt) {
    evt.preventDefault();

    toggleButtonState(evt, true);
    sendAddCardRequest(placeInput.value, placeLinkInput.value)
        .then((card) => {
            cardsList.prepend(addCard(card, deleteCard, likeCard, openImagePopup, userId));
            closeModal(addCardPopup);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(()=>{
            toggleButtonState(evt, false);
        });
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
const openImagePopup = (link, name) => {
    const image = imagePopup.querySelector(".popup__image");
    const caption = imagePopup.querySelector(".popup__caption");

    image.src = link;
    image.alt = name;
    caption.textContent = name;
    openModal(imagePopup);
};



//Слушатель на кнопки закрытия попапа
addListeners(imagePopup);




enableValidation(validationConfig);

//---------------------------------------------------------------

Promise.all([getUserInfo(), getInitialCards()]).then(([resUser, resCards]) => {
    profileTitleElement.textContent = resUser.name;
    profileDescriptionElement.textContent = resUser.about;

    profileAvatarElement.style.backgroundImage = `url(${resUser.avatar})`;

    userId = resUser._id;

    resCards.forEach((card) => {
        cardsList.append(addCard(card, deleteCard, likeCard, openImagePopup, resUser._id));
    });
})

