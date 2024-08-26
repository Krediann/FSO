interface Filter {
  handleFilterChange: React.ChangeEventHandler<HTMLInputElement>
  filter: string
}

export const Filter = (props: Filter) => {
  return (
    <div>
      Filter shown with:{" "}
      <input value={props.filter} onChange={props.handleFilterChange} />
    </div>
  )
}
