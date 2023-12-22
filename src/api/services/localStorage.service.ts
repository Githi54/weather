import { IWeatherInfo } from '@typify/interfaces'
import { ELocalStorageItems, CONTENT_LIMIT, MIN_CONTENT } from '@app/constants'

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

  if (prevSelected.length === MIN_CONTENT) {
    return
  }

  window.localStorage.setItem(
    ELocalStorageItems.SELECTED_CITIES,
    JSON.stringify(prevSelected.filter(({ city: { id } }) => id !== removedID)),
  )
}

export const getSelectedCurrentWeather = (): IWeatherInfo[] => {
  return JSON.parse(
    window.localStorage.getItem(ELocalStorageItems.SELECTED_CITIES) || '[]',
  )
}
