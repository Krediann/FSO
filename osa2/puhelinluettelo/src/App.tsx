import { useEffect, useState } from "react"
import { Display } from "./components/Display"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/Form"
import { create, getAll } from "./services/persons"

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
export interface Person {
  name: string
  phoneNumber: string
  id: string
}

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [newName, setNewName] = useState("")
  const [newPhonenumber, setNewPhonenumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
    getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const existingPerson = persons.filter(
      (person) =>
        person.name === newName || person.phoneNumber === newPhonenumber
    )
    if (existingPerson.length > 0) {
      alert(
        `Person: ${newName} or Phonenumber: ${newPhonenumber} is already on the phonebook!`
      )
      setNewName("")
      setNewPhonenumber("")
      return
    }
    const newId = persons[persons.length - 1].id + 1
    const newPerson = { name: newName, phoneNumber: newPhonenumber, id: newId }

    create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson))
      setNewName("")
      setNewPhonenumber("")
    })
  }

  const handleNameInputChange = (event: InputChangeEvent) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberInputChange = (event: InputChangeEvent) => {
    setNewPhonenumber(event.target.value)
  }

  const handleFilterInputChange = (event: InputChangeEvent) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={newFilter} handleFilterChange={handleFilterInputChange} />

      <h3>Add a new</h3>
      <PersonForm
        name={newName}
        handleNameChange={handleNameInputChange}
        phoneNumber={newPhonenumber}
        handlePhoneNumberChange={handlePhoneNumberInputChange}
        handleClick={handleSubmit}
      />

      <h3>Numbers</h3>
      <Display persons={persons} filter={newFilter} />
    </div>
  )
}

export default App
