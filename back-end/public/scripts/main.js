import Modal from "./modal.js";

const modal = Modal();

const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

const checkButton = document.querySelectorAll(".actions a.check");

//Marca como lidar
checkButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const questionId = event.target.dataset.id
    const slug = "check";
    const roomId = document.querySelector("#room-id").dataset.id;
    const form = document.querySelector(".modal form");

    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = "Marca como lidar";
    modalDescription.innerHTML = "Deseja marcar como lidar com este item?";
    modalButton.innerHTML = "Sim, Marcar como lida";
    modalButton.classList.remove("red");
    modal.open();
  });
});

const deleteButton = document.querySelectorAll(".actions a.delete");

//Excluir item
deleteButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const slug = "delete";
    const roomId = document.querySelector("#room-id").dataset.id;
    const form = document.querySelector(".modal form");

    form.setAttribute("action", `/room/${roomId}/:question/${slug}`);

    modalTitle.innerHTML = "Excluir pergunta";

    modalDescription.innerHTML = `Tem certeza que você deseja excluir esta pergunta?`;
    modalButton.innerHTML = "Sim, Excluir";
    modalButton.classList.add("red");

    modal.open();
  });
});
