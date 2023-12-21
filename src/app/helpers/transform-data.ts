import { ICurrentWeather, IWeatherInfo, IWeekWeather } from '@typify/interfaces'
import { formatDateToWeekDay } from '@app/helpers'

export const transformFromKelvinToCelsiusWeather = (temp: number) =>
  Math.floor(temp - 272.15)

export const transformWeatherData = (
  weatherInfo: IWeatherInfo,
): IWeekWeather[] => {
  const dailyWeather: Record<string, ICurrentWeather[]> = {}
  const {
    city: { id },
  } = weatherInfo

  weatherInfo.list.forEach((currentWeather) => {
    const date = new Date(currentWeather.dt_txt)
    const dayKey = date.toDateString()

    if (!dailyWeather[dayKey]) {
      dailyWeather[dayKey] = []
    }

    dailyWeather[dayKey].push(currentWeather)
  })

  const weekWeather: IWeekWeather[] = []

  Object.keys(dailyWeather)
    .sort((a, b) => {
      const dayA = new Date(a).getDay()
      const dayB = new Date(b).getDay()
      return dayA - dayB
    })
    .forEach((dayKey) => {
      const dayWeather = dailyWeather[dayKey]
      const avgTemp = Math.round(
        dayWeather.reduce((sum, weather) => sum + weather.main.temp, 0) /
          dayWeather.length,
      )
      const firstWeather = dayWeather[0]

      weekWeather.push({
        id,
        weekDay: formatDateToWeekDay(firstWeather.dt * 1000),
        avgTemp,
        weatherIcon: firstWeather.weather[0].icon,
        cityName: weatherInfo.city.name,
      })
    })

  return weekWeather
}
