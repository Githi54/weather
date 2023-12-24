import { ICoord } from '@typify/interfaces'

export const getUserCoordByIP = (): Promise<ICoord | null> => {
  return new Promise((resolve) => {
    let coord: ICoord | null = null

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude
          const lon = position.coords.longitude

          coord = { lat, lon }
          resolve(coord)
        },
        () => {
          coord = {
            lat: 44.34,
            lon: 10.99,
          } // default city is Zocca from api response example
          resolve(coord)
        },
      )
    } else {
      resolve(coord)
    }
  })
}
