import axios from "axios"

const api_key = import.meta.env.VITE_WEATHER_API_KEY
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
const weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather`

export const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then((res) => res.data)
}

export const getCapitalWeather = (lat: number, lng: number) => {
  const req = axios.get(weatherBaseUrl, {
    params: {
      lat: lat,
      lon: lng,
      units: "metric",
      appid: api_key,
    },
  })
  return req.then((res) => res.data)
}
