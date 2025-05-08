const newScheduleButton = document.querySelector(".schedule-btn-wrapper button")
const modal = document.getElementById("modal")
const dialog = document.querySelector("dialog")

export function openModal(){
  newScheduleButton.addEventListener("click", () => {
    // Check if the modal is close
    if (modal.getAttribute("open") === "false"){
      // Open Modal
      modal.setAttribute("open", "")
      // Set Focus to Dialog container to make accesibility on closing using "ESC"
      dialog.focus()
    } 
  }
  )
}