import { deleteSchedule } from "../deleteSchedule.js"
import { newSchedule } from "../newSchedule.js"

import { listSchedule } from "../listSchedule"


//DOM
const form = document.querySelector("form")
const inputTutor = document.getElementById("name-tutor")
const inputPetName = document.getElementById("name-pet")
const inputPhone = document.getElementById("phone")
const serviceDescription = document.getElementById("service")
const inputDate = document.getElementById("date")
const inputHour = document.getElementById("hour")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const schedule = {
    id: new Date().getTime().toString(),
    tutorName: inputTutor.value,
    petName: inputPetName.value,
    phone: inputPhone.value,
    service: serviceDescription.value,
    date: inputDate.value,
    hour: inputHour.value
  }

  modal.setAttribute("open", "false")
  // Function to create a new Schedule v
  const result = await newSchedule(schedule)

  alert(result)

  listSchedule()
  // Fecha o input
})
