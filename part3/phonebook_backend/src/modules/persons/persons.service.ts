import { Person } from "../../model/person"
import { IPerson } from "./persons.controller"
export let persons1 = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

const getAll = async () => {
  const persons = await Person.find({})
  return persons.map((person) => person.toJSON())
}

const getById = async (id: string) => {
  const person = persons1.find((person) => person.id === id)
  return person
}

const createPerson = async (body: IPerson) => {
  const existingPerson = persons1.find((person) => person.name === body.name)

  if (existingPerson) {
    return !existingPerson
  }

  const id = (parseInt(persons1[persons1.length - 1].id) + 1).toString()

  const newPerson = { ...body, id: id }
  persons1.push(newPerson)

  return newPerson
}

const deleteById = async (id: string) => {
  const initialLength = persons1.length
  persons1 = persons1.filter((person) => person.id !== id)
  return persons1.length < initialLength
}

export const personsService = {
  getAll,
  getById,
  createPerson,
  deleteById,
}
