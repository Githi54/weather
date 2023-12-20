import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IWeatherInfo } from '@typify/interfaces/weather-info.interface'
import { CONTENT_LIMIT, EErrors } from '@app/constants'
import { ICoord } from '@typify/interfaces/city.interface'
import {
  getSelectedCurrentWeather,
  getWeather,
  selectCurrentWeather,
} from '@api/services'

let defaultData = getSelectedCurrentWeather()

if (!defaultData.length) {
  const defaultObj = {
    coord: {
      lon: 10.99,
      lat: 44.34,
    },
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10d',
      },
    ],
    base: 'stations',
    main: {
      temp: 298.48,
      feels_like: 298.74,
      temp_min: 297.56,
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933,
    },
    visibility: 10000,
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18,
    },
    rain: {
      '1h': 3.16,
    },
    clouds: {
      all: 100,
    },
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: 'IT',
      sunrise: 1661834187,
      sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
    name: 'Zocca',
    cod: 200,
  }
  defaultData = [defaultObj]

  selectCurrentWeather(defaultObj)
}

export const useCitiesWeather = defineStore('citiesWeather', () => {
  const citiesWeather = ref<IWeatherInfo[]>(defaultData)

  const addCity = async (coord: ICoord) => {
    if (citiesWeather.value.length === CONTENT_LIMIT) {
      return
    }

    try {
      const { data: weather } = await getWeather(coord)
      citiesWeather.value.push(weather)
    } catch (error) {
      throw new Error(EErrors.FAIL_ADD)
    }
  }

  function removeCity(removedID: number) {
    citiesWeather.value = citiesWeather.value.filter(
      ({ weather }) => weather[0].id !== removedID,
    )
  }

  return { citiesWeather, addCity, removeCity }
})
