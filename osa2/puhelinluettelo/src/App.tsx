import { useState } from "react"

type ButtonEvent = React.FormEvent<HTMLButtonElement>
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }])
  const [newName, setNewName] = useState("")

  const handleSubmit = (event: ButtonEvent) => {
    event.preventDefault()
    const existingPerson = persons.filter((person) => person.name === newName)
    if (existingPerson.length > 0) {
      alert(`${newName} is already on the phonebook!`)
      setNewName("")
      return
    }
    const copy = [...persons]
    copy.push({ name: newName })
    setPersons(copy)
    setNewName("")
  }

  const handleInputChange = (event: InputChangeEvent) => {
    setNewName(event.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleInputChange} />
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
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  )
}

export default App
