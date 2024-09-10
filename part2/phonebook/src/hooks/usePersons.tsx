import { useEffect, useState } from "react"
import { create, deletePersonById, getAll } from "../services/persons"
import { Person } from "../types/persons"

export const usePersons = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [infoMessage, setInfoMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    getAll().then((initialPersons) => setPersons(initialPersons))
  }, [])

  const addPerson = async (newPerson: Person) => {
    const returnedPerson = await create(newPerson)
    setPersons((prevPersons) => prevPersons.concat(returnedPerson))
    showMessage(`Added ${newPerson.name}`)
  }

  const removePerson = (id: string, personName: string) => {
    if (window.confirm(`Are you sure you want to delete ${personName}?`)) {
      return deletePersonById(id)
        .then(() => {
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          )
          showMessage(`${personName} deleted!`)
        })
        .catch((error) => {
          showError(`Deleting a person ${personName} failed: ${error.message}`)
        })
    }
  }

  const showMessage = (message: string) => {
    setInfoMessage(message)
    setTimeout(() => setInfoMessage(""), 3000)
  }

  const showError = (error: string) => {
    setErrorMessage(error)
    setTimeout(() => setErrorMessage(""), 3000)
  }

  return {
    persons,
    addPerson,
    removePerson,
    infoMessage,
    errorMessage,
  }
}
