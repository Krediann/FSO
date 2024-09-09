import { persons } from "../persons/persons.service"
const getInfo = async () => {
  const personAmount = persons.length
  const timeStamp = new Date()

  return { personAmount, timeStamp }
}

export const infoService = {
  getInfo,
}
