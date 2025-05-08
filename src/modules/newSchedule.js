import { apiConfig } from '../services/api-config.js'

export async function newSchedule({ id, tutorName, petName, phone, service, date, hour }){
 try {
  await fetch(`${apiConfig.baseURL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id,tutorName,petName,phone,service,date,hour})
  })

  alert("Agendado com sucesso!")

 } catch (error) {
    console.log(error)
    alert("Não foi possível criar um agendamento, tente novamente mais tarde.")
 }
}