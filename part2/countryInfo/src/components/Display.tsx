import { Country } from "../App"
import { useCountryDetails } from "../hooks/useCountryDetails"

interface Display {
  countries: Country[]
  filter: string
  selectedCountry: Country | null
  handleShowCountry: (country: Country) => void
}

export const Display = (props: Display) => {
  const existingCountries = props.countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(props.filter.toLowerCase())
  )

  let countryToShow: Country | null = null

  if (props.selectedCountry) {
    countryToShow = props.selectedCountry
  } else if (existingCountries.length === 1) {
    countryToShow = existingCountries[0]
  }

  const countryDetails = useCountryDetails(countryToShow)

  if (props.selectedCountry || existingCountries.length === 1) {
    return <div>{countryDetails}</div>
  }

  if (existingCountries.length <= 10 && existingCountries.length > 1) {
    return (
      <div>
        {existingCountries.map((country) => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => props.handleShowCountry(country)}>
              show
            </button>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <p>Too many matches, specify another filter!</p>
    </div>
  )
}
