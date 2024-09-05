import { Country } from "../App"

interface Display {
  countries: Country[]
  filter: string
}
export const Display = (props: Display) => {
  const existingCountries = props.countries.filter((country) =>
    country.name.common.toLowerCase().startsWith(props.filter.toLowerCase())
  )

  if (existingCountries.length <= 10 && existingCountries.length > 1) {
    return (
      <div>
        {existingCountries.map((country) => (
          <div key={country.name.common}>
            {" "}
            <p>{country.name.common} </p>{" "}
          </div>
        ))}
      </div>
    )
  }
  console.log(existingCountries)

  if (existingCountries.length === 1) {
    const country = existingCountries[0]
    return (
      <div>
        <h1>{country.name.common}</h1>

        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>

        <h2>
          <b>Languages:</b>
        </h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} className="Flag"></img>
      </div>
    )
  }

  return (
    <div>
      <p>Too many matches specify another filter!</p>
    </div>
  )
}
