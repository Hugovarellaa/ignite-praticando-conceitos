import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

const checkButton = document.querySelectorAll(".actions a.check");

//Marca como lidar
checkButton.forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.innerHTML = "Marca como lidar";
    modalDescription.innerHTML = "Deseja marcar como lidar com este item?";
    modal.open();
  });
});

const deleteButton = document.querySelectorAll(".actions a.delete");

//Excluir item
deleteButton.forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.innerHTML = "Excluir pergunta";
    modalDescription.innerHTML =
      "Tem certeza que você deseja excluir esta pergunta?";
    modal.open();
  });
});
