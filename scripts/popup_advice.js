const handleEscKeyUp = (e) => {
    if (e.key === "Escape") {
      const popup = document.querySelector(".popup_is-opened"); // находим открытый попап
      closeModal(popup);
    }
  };
  
  export const openModal = (modal) => {
    modal.classList.add("popup_is-opened");
    document.addEventListener("keyup", handleEscKeyUp);
    // добавить класс открытия попапа
  // добавить слушатель на кнопку Escape
  };
  
  export const closeModal= (modal) => {
    modal.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", handleEscKeyUp);
   // удалить класс открытия попапа
  // удалить слушатель на кнопку Escape
  };
  
  
  export const addListeners = (popup) => {
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
  }
  
  
  const editProfilePopup = document.querySelector('.popup_type_edit');
  const addCardPopup = document.querySelector('.popup_type_new-card');
  const imagePopup = document.querySelector('.popup_type_image');
  

  addListeners(editProfilePopup);
  addListeners(addCardPopup);
  addListeners(imagePopup);

