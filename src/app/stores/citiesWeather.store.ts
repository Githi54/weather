import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IWeatherInfo } from '@typify/interfaces/weather-info.interface'
import { CONTENT_LIMIT } from '@app/limits'

export const useCitiesWeather = defineStore('citiesWeather', () => {
  const citiesWeather = ref<IWeatherInfo[]>([
    {
      lat: 33.44,
      lon: -94.04,
      timezone: 'America/Chicago',
      timezone_offset: -18000,
      current: {
        dt: 1684929490,
        sunrise: 1684926645,
        sunset: 1684977332,
        temp: 292.55,
        feels_like: 292.87,
        pressure: 1014,
        humidity: 89,
        dew_point: 290.69,
        uvi: 0.16,
        clouds: 53,
        visibility: 10000,
        wind_speed: 3.13,
        wind_deg: 93,
        wind_gust: 6.71,
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
      },
      hourly: [
        {
          dt: 1684926000,
          temp: 292.01,
          feels_like: 292.33,
          pressure: 1014,
          humidity: 91,
          dew_point: 290.51,
          uvi: 0,
          clouds: 54,
          visibility: 10000,
          wind_speed: 2.58,
          wind_deg: 86,
          wind_gust: 5.88,
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'broken clouds',
              icon: '04n',
            },
          ],
          pop: 0.15,
        },
      ],
    },
  ])

  function addCity(weatherInfo: IWeatherInfo) {
    if (citiesWeather.value.length === CONTENT_LIMIT) {
      return
    }

    citiesWeather.value.push(weatherInfo)
  }

  function removeCity(removedID: number) {
    citiesWeather.value = citiesWeather.value.filter(
      ({ current: { weather } }) => weather[0].id !== removedID,
    )
  }

  return { citiesWeather, addCity, removeCity }
})
