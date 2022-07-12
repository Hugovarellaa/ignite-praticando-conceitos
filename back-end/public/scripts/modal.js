export default function modal() {
  function open() {
    //abri modal
    document.querySelector(".modal-wrapper").classList.add("active");
  }
  function close() {
    //fecha modal
  }

  return {
    open,
    close,
  };
};
