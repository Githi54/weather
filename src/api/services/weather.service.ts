import { ICoord } from '@typify/interfaces/city.interface'
import { weatherClient } from '@api/clients'

const BASE_WEATHER_URL = '/data/2.5/weather'

export const getWeather = ({ lat, lon }: ICoord) => {
  return weatherClient.get(
    `${BASE_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
  )
}
