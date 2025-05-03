const cancelButton = document.querySelector("dialog figure img")
const dialog = document.querySelector("dialog")

export function closeModal(){
  // set Attribute as False to close modal when you click on a close button
  cancelButton.addEventListener("click", (e) => {
    modal.setAttribute("open", "false")
  })

  // Make accessibility to close modal using the keydown "ESC"
  dialog.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      modal.setAttribute("open", "false")
    }
  });
}