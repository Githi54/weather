import { weatherClient } from '@api/clients'

const BASE_GEO_URL = '/geo/1.0/direct'
// const API_KEY = '4caf8e294c22f2f35e7814f29e2171bf'

export const getCities = (query: string) => {
  return weatherClient.get(
    `${BASE_GEO_URL}?q=${query}&limit=5&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`,
  )
}
