import { ICity, ICoord } from '@typify/interfaces/city.interface'
import { weatherClient } from '@api/clients'
import { AxiosResponse } from 'axios'

const BASE_GEO_URL = '/geo/1.0'

export const getCitiesByQuery = (query: string) => {
  return weatherClient.get(
    `${BASE_GEO_URL}/direct?q=${query}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&limit=5`,
  )
}

export const getCitiesByCoord = ({
  lat,
  lon,
}: ICoord): Promise<AxiosResponse<ICity[]>> => {
  return weatherClient.get(
    `${BASE_GEO_URL}/reverse?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&limit=5`,
  )
}
