import { Person } from "./persons.controller"

export let persons = [
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
  return persons
}

const getById = async (id: string) => {
  const person = persons.find((person) => person.id === id)
  return person
}

const createPerson = async (body: Person) => {
  const existingPerson = persons.find((person) => person.name === body.name)

  if (existingPerson) {
    return !existingPerson
  }

  const id = (Math.random() * (99999999999999999999999 - 1) + 1).toString()

  const newPerson = { ...body, id: id }
  persons.push(newPerson)

  return !!newPerson
}

const deleteById = async (id: string) => {
  const initialLength = persons.length
  persons = persons.filter((person) => person.id !== id)
  return persons.length < initialLength
}

export const personsService = {
  getAll,
  getById,
  createPerson,
  deleteById,
}
