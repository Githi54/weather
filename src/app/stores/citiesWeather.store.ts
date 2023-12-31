import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'
import { IWeatherInfo, ICoord } from '@typify/interfaces'
import { EErrors, MIN_CONTENT } from '@app/constants'
import {
  getSelectedCurrentWeather,
  getUserCoordByIP,
  getWeather,
  removeSelectedWeather,
  selectCurrentWeather,
} from '@api/services'

const defaultData = getSelectedCurrentWeather()
const defaultObj = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 296.76,
        feels_like: 296.98,
        temp_min: 296.76,
        temp_max: 297.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        '3h': 0.26,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-30 15:00:00',
    },
    {
      dt: 1661882400,
      main: {
        temp: 295.45,
        feels_like: 295.59,
        temp_min: 292.84,
        temp_max: 295.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 71,
        temp_kf: 2.61,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        '3h': 0.57,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 18:00:00',
    },
    {
      dt: 1661893200,
      main: {
        temp: 292.46,
        feels_like: 292.54,
        temp_min: 290.31,
        temp_max: 292.46,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 80,
        temp_kf: 2.15,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.66,
        deg: 210,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        '3h': 0.49,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 21:00:00',
    },

    {
      dt: 1662292800,
      main: {
        temp: 294.93,
        feels_like: 294.83,
        temp_min: 294.93,
        temp_max: 294.93,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 935,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 1.14,
        deg: 17,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-09-04 12:00:00',
    },
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
}

export const useCitiesWeather = defineStore('citiesWeather', () => {
  const citiesWeather = ref<IWeatherInfo[]>(defaultData)
  const setDefaultData = async () => {
    try {
      const userCoord = await getUserCoordByIP()

      if (userCoord) {
        const userWeather = (await getWeather(userCoord)).data

        citiesWeather.value.push(userWeather)
        selectCurrentWeather(userWeather)
      } else {
        const defaultCityWeather = (await getWeather(defaultObj.city.coord))
          .data

        citiesWeather.value.push(defaultCityWeather)
        selectCurrentWeather(defaultObj)
      }
    } catch (error) {
      citiesWeather.value.push(defaultObj)
      selectCurrentWeather(defaultObj)
    }
  }

  onMounted(() => {
    if (!citiesWeather.value.length) {
      setDefaultData()
    }
  })

  const addCity = async (coord: ICoord) => {
    try {
      const { data: weather } = await getWeather(coord)
      citiesWeather.value.push(weather)
    } catch (error) {
      throw new Error(EErrors.FAIL_ADD)
    }
  }

  function removeCity(removedID: number) {
    if (citiesWeather.value.length === MIN_CONTENT) {
      return
    }

    citiesWeather.value = citiesWeather.value.filter(
      ({ city: { id } }) => id !== removedID,
    )

    removeSelectedWeather(removedID)
  }

  return { citiesWeather, addCity, removeCity }
})
