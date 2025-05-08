import { deleteSchedule } from "../../modules/deleteSchedule.js"


// DOM
const morning = document.querySelector(".morning")
const afternoon = document.querySelector(".afternoon")
const night = document.querySelector(".night")

export async function createScheduleOnDOM({ id, hour, petName, tutorName, service }) {
  try {
    const contentScheduleInfo = document.createElement("div")
    contentScheduleInfo.classList.add("content-schudele-info")
    contentScheduleInfo.setAttribute("data-id", id)

    const div = document.createElement("div")

    const hourElement = document.createElement("span")
    hourElement.innerText = hour

    const petnameElement = document.createElement("span")
    petnameElement.classList.add("pet-name")
    petnameElement.innerText = petName

    const nameElement = document.createElement("p")
    nameElement.innerText = ` / ${tutorName}`

    const descriptionElement = document.createElement("span")
    descriptionElement.innerText = service

    const buttonRemove = document.createElement("a")
    buttonRemove.innerText = "Remover agendamento"
    buttonRemove.setAttribute("id", "btn-remove")

    const card = document.createElement("div")
    card.classList.add("content-schedule")


    petnameElement.appendChild(nameElement)
    div.appendChild(hourElement)
    div.appendChild(petnameElement)

    contentScheduleInfo.appendChild(div)
    contentScheduleInfo.appendChild(descriptionElement)
    contentScheduleInfo.appendChild(buttonRemove)
    buttonRemove.addEventListener("click", (e) => {
      console.log(`ID do evento ${id}`)
      deleteSchedule(id)
      e.target.parentNode.remove()
    })

    card.append(contentScheduleInfo)


    // if (hour <= "12:00") {
    //   morning.appendChild(card)
    // } else if (hour >= "13:00" && hour <= "18:00") {
    //   afternoon.innerHTML = " "
    // } else {
    //   night.appendChild(card)
    // }
    morning.appendChild(card)

  } catch (error) {
    console.log(error)
    alert("Não foi possível adicionar o agendamento a lista, tente novamente mais tarde.")
  }
}
