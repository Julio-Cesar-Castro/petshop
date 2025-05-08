import { newSchedule } from "../newSchedule.js"
import { listSchedule } from "../listSchedule.js"
import { stringToHour } from "../../utils/stringToHour.js"

//DOM
const form = document.querySelector("form")
const inputTutor = document.getElementById("name-tutor")
const inputPetName = document.getElementById("name-pet")
const inputPhone = document.getElementById("phone")
const serviceDescription = document.getElementById("service")
const inputDate = document.getElementById("date")
const selectHour = document.getElementById("select-hour")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const schedule = {
    id: new Date().getTime().toString(),
    tutorName: inputTutor.value,
    petName: inputPetName.value,
    phone: inputPhone.value,
    service: serviceDescription.value,
    date: inputDate.value,
    hour: stringToHour(selectHour.value) // String
  }
  
  // Fecha o input
  modal.setAttribute("open", "false")
  
  // Function to create a new Schedule 
  const result = await newSchedule(schedule)

  alert(result)
  
  // Atualiza Modal
  listSchedule()
})
