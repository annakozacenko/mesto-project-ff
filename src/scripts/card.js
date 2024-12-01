import { sendCardLikeRequest, sendDeleteCardRequest } from './api';

// Функция создания карточки
export function createCard(cardData, deleteFunction, likeFunction, imageClickFunction, userId) {
  const { name, link, owner, likes } = cardData;
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete-button');
  const cardLikeButton = card.querySelector('.card__like-button');
  const cardLikeCounter = card.querySelector('.card__like-counter');


  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardLikeCounter.textContent = likes.length;

  // Проверяем, поставил ли пользователь лайк
  if (likes.some(like => like._id === userId)) {
    cardLikeButton.classList.add('card__like-button_is-active');
  }


  cardLikeButton.addEventListener('click', () => likeFunction(cardLikeButton,cardLikeCounter, cardData._id));
  cardImage.addEventListener('click', () => imageClickFunction(link, name));

  if (owner._id !== userId) {
    cardDeleteButton.remove();
  }
  else {
    cardDeleteButton.addEventListener('click', () => deleteFunction(card, cardData._id));
  }

  return card;
}
// Функция удаления карточки
export function deleteCard(cardElement, cardId) {
  sendDeleteCardRequest(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });

}

// Функция лайка карточки
export const likeCard = (likeButton, likeСounter, cardId) => {
  (likeButton.classList.contains("card__like-button_is-active") ? sendCardLikeRequest(cardId, true) : sendCardLikeRequest(cardId, false))
    .then((res) => {
      likeСounter.textContent = res.likes.length;
      likeButton.classList.toggle("card__like-button_is-active");
    })
    .catch((err) => {
      console.log(err);
    });
};