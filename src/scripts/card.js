

// Функция создания карточки
export function addCard(cardData, deleteFunction, likeFunction, imageClickFunction, userId) {
  const { name, link, owner } = cardData;
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete-button');
  const cardLikeButton = card.querySelector('.card__like-button');
const cardLikeCounter = card.querySelector('.card__like-counter');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt= name;
  cardLikeCounter.textContent = cardData.likes.length;

  cardDeleteButton.addEventListener('click',() => deleteFunction(card));
  cardLikeButton.addEventListener('click',() => likeFunction(cardLikeButton));
  cardImage.addEventListener('click', () => imageClickFunction(link, name));

if (owner._id !== userId){
  cardDeleteButton.remove();
}

  return card;
}
// Функция удаления карточки
export function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция лайка карточки
export const likeCard = (likeButton) => {
  likeButton.classList.toggle("card__like-button_is-active");
};