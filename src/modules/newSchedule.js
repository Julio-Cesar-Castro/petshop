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

  return "Agendado com sucesso!"

 } catch (error) {
    console.log(error)
    return "Não foi possível criar um agendamento, tente novamente mais tarde."
 }
}