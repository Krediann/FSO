import { Person } from "../types/persons"

interface Display {
  persons: Person[]
  filter: string
  handleDelete: (id: string) => void
}

export const Display = (props: Display) => {
  console.log(props.persons)
  const existingPersons = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  )
  return (
    <div>
      {existingPersons.map((person) => (
        <div key={person.id}>
          {" "}
          <p>
            {person.name} {person.number}{" "}
            <button onClick={() => props.handleDelete(person.id)}>
              Delete
            </button>
          </p>{" "}
        </div>
      ))}
    </div>
  )
}
