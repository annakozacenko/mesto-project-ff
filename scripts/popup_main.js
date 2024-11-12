const handleEscKeyUp = (e) => {
    if (e.key === "Escape") {
      const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
      closeModal(popup);
    }
  };
  
  const openModal = (modal) => {
    modal.classList.add("popup_is-animated");
    
    setTimeout(() => {
        modal.classList.add("popup_is-opened");
    }, 0);
    document.addEventListener("keyup", handleEscKeyUp);

    // добавить класс открытия попапа
    // добавить слушатель на кнопку Escape
  };
  
  // @todo: Я УДАЛИЛА ОТСЮДА ЭКСПОРТ. АНЯ ОБРАТИ ВНИМАНИЕ
  const closeModal = (modal) => {
 
    modal.classList.remove("popup_is-opened");

    document.removeEventListener("keyup", handleEscKeyUp);
    // удалить класс открытия попапа
    // удалить слушатель на кнопку Escape
  };
  
  // Функция добавления слушателя кнопки закрытия
  const addListeners = (popup) => {
    const closeButton = popup.querySelector(".popup__close");
    // ищем кнопку крестик в попапе
    closeButton.addEventListener("click", () => {
      closeModal(popup);
      // closeModal(...)
    });
    popup.addEventListener("mousedown", (event) => {
        if (event.target.classList.contains("popup")) {
            closeModal(popup);
        }
        // если event.target содержит класс "popup", то закрываем
    });
};