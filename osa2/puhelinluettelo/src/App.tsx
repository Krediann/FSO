import { useState } from "react"

type ButtonEvent = React.FormEvent<HTMLButtonElement>
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

interface Person {
  name: string
  phoneNumber: string
}

interface Display {
  persons: Person[]
  filter: string
}

const App = () => {
  const [persons, setPersons] = useState<Person[]>([
    { name: "Arto Hellas", phoneNumber: "040-123456" },
    { name: "Ada Lovelace", phoneNumber: "39-44-5323523" },
    { name: "Dan Abramov", phoneNumber: "12-43-234345" },
    { name: "Mary Poppendieck", phoneNumber: "39-23-6423122" },
  ])
  const [newName, setNewName] = useState("")
  const [newPhonenumber, setNewPhonenumber] = useState("")
  const [newFilter, setNewFilter] = useState("")

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

  const handleFilterInputChange = (event: InputChangeEvent) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with:{" "}
        <input
          type="text"
          value={newFilter}
          onChange={handleFilterInputChange}
        />
      </div>
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
      <Display persons={persons} filter={newFilter} />
    </div>
  )
}

const Display = (props: Display) => {
  const existingPersons = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  )
  return (
    <div>
      {existingPersons.map((person) => (
        <div key={person.name}>
          {" "}
          <p>
            {person.name} {person.phoneNumber}
          </p>{" "}
        </div>
      ))}
    </div>
  )
}
export default App
