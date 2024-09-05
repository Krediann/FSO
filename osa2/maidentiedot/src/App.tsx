import { useEffect, useState } from "react"
import { Display } from "./components/Display"
import { Filter } from "./components/Filter"
import { getAll } from "./services/fetchService"

export interface Country {
  name: { common: string }
  capital: string
  languages: { [key: string]: string }
  area: number
  flags: { png: string }
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const [newFilter, setNewFilter] = useState("")
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    getAll().then((initialCountries) => {
      setCountries(initialCountries)
    })
  }, [])

  const handleFilterInputChange = (event: InputChangeEvent) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h1>asd</h1>
      <Filter filter={newFilter} handleFilterChange={handleFilterInputChange} />
      <Display countries={countries} filter={newFilter} />
    </div>
  )
}
export default App
