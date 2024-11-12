// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function addCard(name, link, deleteFunction, likeFunction, imageClickFunction) {
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = card.querySelector('.card__title');
    const cardImage = card.querySelector('.card__image');
    const cardDeleteButton = card.querySelector('.card__delete-button');
    const cardLikeButton = card.querySelector('.card__like-button');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardDeleteButton.addEventListener('click', deleteFunction);
    cardLikeButton.addEventListener('click', likeFunction);
    cardImage.addEventListener('click', imageClickFunction);
    return card;
}
// @todo: Функция удаления карточки
function deleteCard(event) {
    const cardToDelete = event.target.closest('.card');
    cardToDelete.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((card) => {
    cardsList.append(addCard(card.name, card.link, deleteCard, likeCard));
});