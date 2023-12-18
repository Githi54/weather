import { weatherClient } from '@api/clients'

const BASE_GEO_URL = '/geo/1.0/direct'

export const getCities = (query: string) => {
  return weatherClient.get(
    `${BASE_GEO_URL}?q=${query}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&limit=5`,
  )
}
