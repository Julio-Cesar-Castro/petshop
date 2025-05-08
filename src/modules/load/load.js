import { hours } from "../../utils/schedule-hour.js"
import { listSchedule } from "../listSchedule.js"

const select = document.querySelector("select")

 document.addEventListener("DOMContentLoaded", () => {
  //   // Insira os valores para atualizar
  listSchedule()
  
  hours.forEach(hour => {
    const option = document.createElement("option")
    option.setAttribute("value", hour)
    option.innerText = hour

    select.append(option)
  })
})