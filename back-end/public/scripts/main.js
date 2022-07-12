import Modal from "./modal.js";

const modal = Modal();

const checkButton = document.querySelectorAll(".actions a.check");


checkButton.forEach((button) => {
  button.addEventListener("click", () => {
    modal.open();
  });
});
