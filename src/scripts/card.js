

// Функция создания карточки
export function addCard(name, link, deleteFunction, likeFunction, imageClickFunction) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardTitle = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const cardDeleteButton = card.querySelector('.card__delete-button');
  const cardLikeButton = card.querySelector('.card__like-button');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt= name;
  cardDeleteButton.addEventListener('click',() => deleteFunction(card));
  cardLikeButton.addEventListener('click',() => likeFunction(cardLikeButton));
  cardImage.addEventListener('click', () => imageClickFunction(link, name));
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