import { apiConfig } from "../services/api-config.js"
import { createScheduleOnDOM } from "../services/schedules/schedules-list.js"

export async function listSchedule(){
  const response = await fetch(`${apiConfig.baseURL}/schedules`)
  const data = await response.json()

  data.forEach(item => {
    createScheduleOnDOM(item)
  })
} 