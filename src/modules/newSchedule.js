import { apiConfig } from '../services/api-config.js'
import { listSchedule } from './listSchedule.js';
const modal = document.getElementById("modal")

export async function newSchedule({ id, tutorName, petName, phone, service,date, hour }){

 try {
  await fetch(`${apiConfig.baseURL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,tutorName,petName,phone,service,date,hour})
  })

  alert("Agendado com sucesso!")

  // close modal.
  modal.setAttribute("open", "")

  // Atualizar lista
  listSchedule()

 } catch (error) {
    console.log(error)
    alert("Não foi possível criar um agendamento, tente novamente mais tarde.")
 }
}