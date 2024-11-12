//не знаю где он должен быть-внутри функции openImagePopup или нет
const imagePopup = document.querySelector(".popup_type_image");

const likeCard = (button) => {
    button.classList.toggle("card__like-button_is-active");
};

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

//Слушатель на кнопку открытия попапа или лайка
document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__like-button")) {
      likeCard(evt.target);
    } else if (evt.target.classList.contains("card__image")) {
      openImagePopup(evt);
    }
 });



//Слушатель на кнопки закрытия попапа(внутри попапа)
addListeners(imagePopup);