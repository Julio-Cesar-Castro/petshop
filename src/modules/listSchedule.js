import { apiConfig } from "../services/api-config.js"
import { createScheduleOnDOM } from "../services/schedules/schedules-list.js"

const morning = document.querySelector(".morning")

export async function listSchedule(){
  const response = await fetch(`${apiConfig.baseURL}/schedules`)
  const data = await response.json()

  // data.map(item => {
  //   createScheduleOnDOM(item)
  // })
  morning.innerHTML = ""

  data.forEach(item => {
    console.log(item)
    createScheduleOnDOM(item)
  })
} 