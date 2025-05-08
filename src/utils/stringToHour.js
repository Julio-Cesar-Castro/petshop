import dayjs from "dayjs"

export function stringToHour(hour){
  const [hourFormattedinTwoDigits, _] = hour.split(":")

  return dayjs().add(hourFormattedinTwoDigits, "h").minute("00")
}