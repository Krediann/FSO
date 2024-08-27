import { Person } from "../App"

interface Display {
  persons: Person[]
  filter: string
  handleDelete: (id: number) => void
}

export const Display = (props: Display) => {
  const existingPersons = props.persons.filter((person) =>
    person.name.toLowerCase().includes(props.filter.toLowerCase())
  )
  return (
    <div>
      {existingPersons.map((person) => (
        <div key={person.id}>
          {" "}
          <p>
            {person.name} {person.phoneNumber}{" "}
            <button onClick={() => props.handleDelete(person.id)}>
              Delete
            </button>
          </p>{" "}
        </div>
      ))}
    </div>
  )
}
