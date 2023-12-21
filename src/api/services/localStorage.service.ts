import { IWeatherInfo } from '@typify/interfaces/weather-info.interface'
import { ELocalStorageItems, CONTENT_LIMIT } from '@app/constants'

export const selectCurrentWeather = (payload: IWeatherInfo) => {
  const newSelected = getSelectedCurrentWeather() as IWeatherInfo[]
  const prevIDs = newSelected.map(({ city: { id } }) => id)

  if (newSelected.length === CONTENT_LIMIT) {
    return
  }

  if (prevIDs.includes(payload.city.id)) {
    return
  }

  newSelected.push(payload)

  window.localStorage.setItem(
    ELocalStorageItems.SELECTED_CITIES,
    JSON.stringify(newSelected),
  )
}

export const removeSelectedWeather = (removedID: number) => {
  const prevSelected = getSelectedCurrentWeather() as IWeatherInfo[]

  if (prevSelected.length === 1) {
    return
  }

  window.localStorage.setItem(
    ELocalStorageItems.SELECTED_CITIES,
    JSON.stringify(prevSelected.filter(({ city: { id } }) => id !== removedID)),
  )
}

export const getSelectedCurrentWeather = () => {
  return JSON.parse(
    window.localStorage.getItem(ELocalStorageItems.SELECTED_CITIES) || '[]',
  )
}
