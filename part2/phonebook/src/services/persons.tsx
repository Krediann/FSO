import axios from "axios"
import { Person } from "../types/persons"
const baseUrl = import.meta.env.VITE_BASE_URL

export const getAll = async () => {
  const response = await axios
    .get<Person[]>(baseUrl)
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      throw new Error("Failed to fetch persons!")
    })

  return response
}

export const create = async (newPerson: Person) => {
  const response = await axios
    .post<Person>(baseUrl, newPerson)
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      throw new Error("Failed to create a new person!")
    })
  return response
}

export const deletePersonById = async (id: string) => {
  const response = await axios
    .delete<Person[]>(`${baseUrl}/${id}`)
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      throw new Error("Failed to delete a person!")
    })
  return response
}

export const update = async (updatedPerson: Person) => {
  const id = updatedPerson.id
  const response = await axios
    .put<Person[]>(`${baseUrl}/${id}`, updatedPerson)
    .then(({ data }) => {
      return data
    })
  return response
}
