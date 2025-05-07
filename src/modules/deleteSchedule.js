import { apiConfig } from "../services/api-config.js"

export async function deleteSchedule(id){
    try {
      await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        }
      })

      console.log(`ID da função delete ${id}`)

      alert("Agendamento deletado com sucesso")
    } catch (error) {
      console.log(error)
      alert("Erro")
    }
}
