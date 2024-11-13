

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
  cardDeleteButton.addEventListener('click', deleteFunction);
  cardLikeButton.addEventListener('click', likeFunction);
  cardImage.addEventListener('click', imageClickFunction);
  return card;
}
// Функция удаления карточки
export function deleteCard(event) {
  const cardToDelete = event.target.closest('.card');
  cardToDelete.remove();
}

// Функция лайка карточки
export const likeCard = (event) => {
  event.target.classList.toggle("card__like-button_is-active");
};