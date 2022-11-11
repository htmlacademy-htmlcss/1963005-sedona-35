// Открытие и закрытие модального окна
const body = document.body;
const modal = document.querySelector(".modal-container");
const modalCloseButton = modal.querySelector(".modal__close-button");
const navSearchOpenModalButton = document.querySelector(".user-list__link.search-icon")

const showModal = (event) => {
  event.preventDefault();

  body.style.overflowY = "hidden";
  modal.classList.add("modal-container--open");
};

const closeModal = () => {
  body.style.overflowY = ""
  modal.classList.remove("modal-container--open");
};

if (window.location.pathname.indexOf("index") >= 0) {
  const openModalButton = document.querySelector(".hotel-search__button");

  openModalButton.addEventListener("click", showModal);
}

navSearchOpenModalButton.addEventListener("click", showModal);

modalCloseButton.addEventListener("click", closeModal);
