export default function modal() {
  
  const cancelButton = document.querySelector(".button.cancel");
  cancelButton.addEventListener("click", close);

  function open() {
    //abri modal
    document.querySelector(".modal-wrapper").classList.add("active");
  }
  function close() {
    //fecha modal
    document.querySelector(".modal-wrapper").classList.remove("active");
  }

  return {
    open,
    close,
  };
}
