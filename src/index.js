import './pages/index.css'; // добавьте импорт главного файла стилей
import { deleteCard, likeCard, addCard } from './scripts/card';
import { openModal, closeModal, addListeners } from './scripts/modal';
import { initialCards } from "./scripts/cards";
import { enableValidation, clearValidation} from './scripts/validation';
import { getInitialCards, getUserInfo , editProfile, sendDeleteCardRequest, sendAddCardRequest, sendAvatarRequest} from './scripts/api';




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

    editProfile(nameInput.value, jobInput.value)
    .then((data) => {
        profileTitleElement.textContent = data.name;
        profileDescriptionElement.textContent = data.about;

    })
    .catch((err) => {
        console.log(err);
    });
//нужно ли закрывать попап если ошибка?
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

//----------------------------------------
// Обработчик отправки формы редактирования профиля
function handleProfileAvatarFormSubmit(evt) {
    evt.preventDefault();

    sendAvatarRequest(avatarLinkInput.value)
    .then((data) => {
        console.log(data)
       // profileAvatarElement.src = avatarLinkInput.value;

    })
    .catch((err) => {
        console.log(err);
    });
//нужно ли закрывать попап если ошибка?
    closeModal(editProfileAvatarPopup);
}

//Обработчик формы редактирования профиля
formAvatarElement.addEventListener("submit", handleProfileAvatarFormSubmit);


//Слушатель на кнопку открытия попапа редактирования профиля
profileAvatarElement.addEventListener("click", () => {
    //Заполняем поля формы текущими данными профиля
    //Очищаем поля формы
    avatarLinkInput.value = '';




    clearValidation(formElement, validationConfig);


    openModal(editProfileAvatarPopup);
});

//Слушатель на кнопки закрытия попапа
addListeners(editProfileAvatarPopup);

//----------------------------------------


// Обработчик отправки формы добавления новой карточки
function handleFormImageSubmit(evt) {
    evt.preventDefault();


    sendAddCardRequest(placeInput.value, placeLinkInput.value)
    .then((data) => {
        cardsList.prepend(addCard(data, deleteCard, likeCard, openImagePopup));

    })
    .catch((err) => {
        console.log(err);
    });
//нужно ли закрывать попап если ошибка?
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








//Отрисовка существующих карточек - избавиться от этого!
//initialCards.forEach((card) => {
 //   cardsList.append(addCard(card.name, card.link, deleteCard, likeCard, openImagePopup));
//});



enableValidation(validationConfig);





//---------------------------------------------------------------
// обработчик удаления карточки с удалением карточки на сервере
function removeCard(card, cardId) {
    sendDeleteCardRequest(cardId)
    .then(() => {
      deleteCard(card);
    })
    .catch(handleError);
  }










Promise.all([getUserInfo(), getInitialCards()]).then(([resUser, resCards]) => {
console.log(resUser);
    profileTitleElement.textContent = resUser.name;
    profileDescriptionElement.textContent = resUser.about;

    profileAvatarElement.style.backgroundImage = `url(${resUser.avatar})`;

    resCards.forEach((card) => {
        cardsList.append(addCard(card, deleteCard, likeCard, openImagePopup, resUser._id));
    });
})


//editProfile('Anna', 'Programmer');
//sendCard("Курлык", "https://cs9.pikabu.ru/post_img/big/2017/08/17/6/150296003018027797.jpg");