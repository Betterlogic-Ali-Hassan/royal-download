// Variables
const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
}
openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal());
closeBtn.addEventListener("click", closeModal);
