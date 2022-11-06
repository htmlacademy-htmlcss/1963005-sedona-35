const modal = document.querySelector(".modal-container");
const modalCloseButton = modal.querySelector(".modal__close-button");
const openModalButton = document.querySelector(".hotel-search__button");
const p = document.querySelector(".page-container")

const showModal = () => {
  document.body.style.overflowY = "hidden";
  
  modal.classList.add("modal-container--open");
};

const closeModal = () => {
  document.body.style.overflowY = "scroll";

  modal.classList.remove("modal-container--open");
};

openModalButton.addEventListener("click", showModal);

modalCloseButton.addEventListener("click", closeModal);
