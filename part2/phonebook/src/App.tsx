import { useState } from "react"
import { Display } from "./components/Display"
import { Error } from "./components/Error"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/Form"
import { Notification } from "./components/Notification"
import { usePersons } from "./hooks/usePersons"

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const { persons, addPerson, removePerson, infoMessage, errorMessage } =
    usePersons()

  const [name, setNewName] = useState("")
  const [phoneNumber, setNewPhonenumber] = useState("")
  const [filter, setNewFilter] = useState("")

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const newId = (
      parseInt(persons[persons.length - 1]?.id || "0") + 1
    ).toString()
    const newPerson = { name: name, number: phoneNumber, id: newId }
    addPerson(newPerson)

    setNewName("")
    setNewPhonenumber("")
  }

  const handleDelete = (id: string) => {
    const person = persons.find((person) => person.id === id)
    if (person) {
      removePerson(id, person.name)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={infoMessage} />
      <Error errorMessage={errorMessage} />
      <Filter
        filter={filter}
        handleFilterChange={(e: InputChangeEvent) =>
          setNewFilter(e.target.value)
        }
      />
      <h3>Add a new</h3>
      <PersonForm
        name={name}
        handleNameChange={(e: InputChangeEvent) => setNewName(e.target.value)}
        number={phoneNumber}
        handlePhoneNumberChange={(e: InputChangeEvent) =>
          setNewPhonenumber(e.target.value)
        }
        handleClick={handleSubmit}
      />
      <h3>Numbers</h3>
      <Display persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  )
}

export default App
