<script setup lang="ts">
import { IWeatherInfo } from '@typify/interfaces/weather-info.interface'
import WeatherAdditional from '@components/ui-kits/WeatherAdditional.vue'
import { transformFromKelvinToCelsiusWeather } from '@app/helpers'

const { currentWeather } = defineProps<{
  currentWeather: IWeatherInfo
}>()

const {
  list: {
    0: {
      weather: {
        0: { icon, description },
      },
      main: { feels_like, temp, temp_min, temp_max },
      wind: { speed },
    },
  },
  city: { sunset, name },
} = currentWeather
const date = new Date(sunset)
const BASE_URL = import.meta.env.VITE_BASE_WEATHER_URL
</script>

<template>
  <div class="weather-container">
    <div class="weather-temp">
      <div class="weather-icon-container">
        <img
          :src="`${BASE_URL}/img/w/${icon}`"
          alt="weather icon"
          class="weather-icon"
        />
      </div>
      <p class="weather-text weather-text--xl">
        {{ transformFromKelvinToCelsiusWeather(temp) }}
      </p>
    </div>
    <p class="weather-text">{{ name }}</p>
    <p class="weather-text">{{ description.toUpperCase() }}</p>
    <WeatherAdditional
      :weather-text-list="[
        `Feels like: ${transformFromKelvinToCelsiusWeather(feels_like)}`,
        '|',
        `Sunset: ${date.getHours()}:${
          date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
        }`,
      ]"
    />
    <WeatherAdditional
      v-if="temp_min && temp_max"
      :weather-text-list="[
        `Min temp: ${transformFromKelvinToCelsiusWeather(temp_min)}`,
        '|',
        `Max temp: ${transformFromKelvinToCelsiusWeather(temp_max)}`,
      ]"
    />
    <p class="weather-text">Wind speed: {{ speed }}</p>
  </div>
</template>

<style>
.weather-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  height: 300px;
  width: 100%;
  max-width: 280px;

  background-color: var(--Weather-color);

  border: 1px solid var(--Weather-color);
  border-radius: 28px;

  gap: 10px;
}

.weather-text {
  color: var(--Weather-text-color);
}

.weather-text--xl {
  font-size: 40px;
  font-style: normal;
  font-weight: 500;

  position: relative;
}

.weather-text--xl::after {
  content: '°';
  font-size: 20px;

  position: absolute;
}

.weather-temp {
  display: flex;
  align-items: center;

  height: 100px;
}

.weather-icon-container {
  width: 60px;
  height: 60px;
}

.weather-icon {
  width: 100%;
  height: 100%;
}

.weather-additional {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
