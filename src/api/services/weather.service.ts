import { weatherClient } from '@api/clients'

const BASE_WEATHER_URL = 'data/3.0/onecall'

export const getWeather = (lat: number, lon: number) => {
  return weatherClient.get(
    `${BASE_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
  )
}
