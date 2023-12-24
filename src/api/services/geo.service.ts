import { weatherClient } from '@api/clients'

const BASE_GEO_URL = '/geo/1.0'

export const getCitiesByQuery = (query: string) => {
  return weatherClient.get(
    `${BASE_GEO_URL}/direct?q=${query}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&limit=5`,
  )
}
