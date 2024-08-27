import axios from "axios"
import { Person } from "../App"
const baseUrl = "http://localhost:3001/persons"

export const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

export const create = (newPerson: Person) => {
  const req = axios.post(baseUrl, newPerson)
  return req.then((res) => res.data)
}

export const deletePersonById = (id: string) => {
  return axios.delete(`${baseUrl}/${id}`)
}

export const update = (updatedPerson: Person) => {
  const id = updatedPerson.id
  const req = axios.put(`${baseUrl}/${id}`, updatedPerson)
  return req.then((res) => res.data)
}
