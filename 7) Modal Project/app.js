const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const CloseBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

CloseBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
