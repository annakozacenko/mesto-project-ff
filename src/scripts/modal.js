//Основные функции

// Обработчик нажатия клавиши Escape для закрытия попапа
const handleEscKeyUp = (e) => {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_is-opened");
    closeModal(popup);
  }
};

// Функция открытия попапа
export const openModal = (modal) => {
  modal.classList.add("popup_is-animated");
  setTimeout(() => {
    modal.classList.add("popup_is-opened");
  }, 0);
  // Добавляем слушатель для закрытия по клавише Escape
  document.addEventListener("keyup", handleEscKeyUp);
};


// Функция закрытия попапа
export const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
  // Убираем слушатель для закрытия по клавише Escape
  document.removeEventListener("keyup", handleEscKeyUp);
};

// Функция добавления слушателя кнопки закрытия и оверлея
export const addListeners = (popup) => {
  const closeButton = popup.querySelector(".popup__close");
  // Закрытие попапа при клике на кнопку-крестик
  closeButton.addEventListener("click", () => {
    closeModal(popup);

  });

  // Закрытие попапа при клике по фону (по элементу с классом .popup)
  popup.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("popup")) {
      closeModal(popup);
    }
  });
};
