import { persons1 } from "../persons/persons.service"
const getInfo = async () => {
  const personAmount = persons1.length
  const timeStamp = new Date()

  return { personAmount, timeStamp }
}

export const infoService = {
  getInfo,
}
