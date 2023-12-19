<script setup lang="ts">
import { ICurrentWeather } from '@typify/interfaces/weather-info.interface'

const { currentWeather } = defineProps<{
  currentWeather: ICurrentWeather
}>()

const {
  temp,
  weather: {
    0: { icon, description },
  },
  feels_like,
  sunset,
} = currentWeather
const date = new Date(sunset)
const BASE_URL = import.meta.env.VITE_BASE_WEATHER_URL

const transformFromKelvinToCelsiusWeather = (temp: number) =>
  Math.floor(temp - 272.15)
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
    <p class="weather-text">{{ description.toUpperCase() }}</p>
    <div class="weather-additional">
      <p class="weather-text">
        Feels like: {{ transformFromKelvinToCelsiusWeather(feels_like) }} |
      </p>
      <p class="weather-text">
        Sunset: {{ date.getHours() }}:{{
          date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`
        }}
      </p>
    </div>
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

  gap: 10px;

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
