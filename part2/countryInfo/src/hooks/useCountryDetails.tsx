import { useEffect, useState } from "react"
import { Country } from "../App"
import { getCapitalWeather } from "../services/fetchService"

interface Weather {
  weather: [{ icon: string }]
  main: { temp: number }
  wind: { speed: number }
}
export const useCountryDetails = (country: Country | null) => {
  const [weather, setWeather] = useState<Weather | null>(null)

  useEffect(() => {
    if (country) {
      const lat = country.capitalInfo.latlng[0]
      const lng = country.capitalInfo.latlng[1]
      getCapitalWeather(lat, lng).then((data) => {
        setWeather(data)
      })
    }
  }, [country])

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
      <div>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {weather?.main.temp}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        />
        <p>Wind speed: {weather?.wind.speed}</p>
      </div>
    </div>
  )
}
