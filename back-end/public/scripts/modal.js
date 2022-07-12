export default function modal() {
  const element = document.querySelector(".modal-wrapper");
  
  const cancelButton = document.querySelector(".button.cancel");
  cancelButton.addEventListener("click", close);

  function open() {
    //abri modal
    element.classList.add("active");
  }
  function close() {
    //fecha modal
    element.classList.remove("active");
  }

  return {
    open,
    close,
  };
}
