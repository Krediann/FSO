import { Person } from "../App"

interface Display {
  persons: Person[]
  filter: string
}

export const Display = (props: Display) => {
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
