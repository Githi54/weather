import { ICoord } from '@typify/interfaces'
import { weatherClient } from '@api/clients'

const BASE_WEATHER_URL = '/data/2.5'

export const getWeather = ({ lat, lon }: ICoord) =>
  weatherClient.get(
    `${BASE_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
  )
