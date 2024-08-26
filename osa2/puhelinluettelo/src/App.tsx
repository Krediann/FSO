import { useState } from "react"

type ButtonEvent = React.FormEvent<HTMLButtonElement>
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

interface Person {
  name: string
  phoneNumber: string
}

const App = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [newName, setNewName] = useState("")
  const [newPhonenumber, setNewPhonenumber] = useState("")

  const handleSubmit = (event: ButtonEvent) => {
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
    const copy = [...persons]
    copy.push({ name: newName, phoneNumber: newPhonenumber })
    setPersons(copy)
    setNewName("")
    setNewPhonenumber("")
  }

  const handleNameInputChange = (event: InputChangeEvent) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberInputChange = (event: InputChangeEvent) => {
    setNewPhonenumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name:{" "}
          <input type="text" value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          Phonenumber:{" "}
          <input
            type="tel"
            value={newPhonenumber}
            onChange={handlePhoneNumberInputChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          <p>
            {person.name} {person.phoneNumber}
          </p>
        </div>
      ))}
    </div>
  )
}

export default App
