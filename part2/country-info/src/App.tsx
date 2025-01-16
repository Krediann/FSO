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
  capitalInfo: { latlng: number[] }
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const [newFilter, setNewFilter] = useState("")
  const [countries, setCountries] = useState<Country[]>([])
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)

  useEffect(() => {
    getAll().then((initialCountries) => {
      setCountries(initialCountries)
    })
  }, [])

  const handleFilterInputChange = (event: InputChangeEvent) => {
    setNewFilter(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (country: Country) => {
    setSelectedCountry(country)
  }

  return (
    <div>
      <h1>Country tingy</h1>
      <Filter filter={newFilter} handleFilterChange={handleFilterInputChange} />
      <Display
        countries={countries}
        filter={newFilter}
        selectedCountry={selectedCountry}
        handleShowCountry={handleShowCountry}
      />
    </div>
  )
}

export default App
