interface Form {
  name: string
  phoneNumber: string
  handleNameChange: React.ChangeEventHandler<HTMLInputElement>
  handlePhoneNumberChange: React.ChangeEventHandler<HTMLInputElement>
  handleClick: React.FormEventHandler<HTMLFormElement>
}

export const PersonForm = (props: Form) => {
  return (
    <form onSubmit={props.handleClick}>
      <div>
        Name:{" "}
        <input
          type="text"
          value={props.name}
          onChange={props.handleNameChange}
        />
      </div>
      <div>
        Phonenumber:{" "}
        <input
          type="tel"
          value={props.phoneNumber}
          onChange={props.handlePhoneNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}
