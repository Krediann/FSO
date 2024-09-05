import { Country } from "../App"

export const useCountryDetails = (country: Country | null) => {
  if (!country) {
    return null
  }

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
      <img
        src={country.flags.png}
        className="Flag"
        alt={`Flag of ${country.name.common}`}
      />
    </div>
  )
}
