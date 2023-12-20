<script setup lang="ts">
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'

const store = useCitiesWeather()

const { citiesWeather } = storeToRefs(store)
</script>

<template>
  <div
    v-for="weatherData of citiesWeather"
    :key="weatherData.weather[0].id"
    class="weather-info-container"
  >
    <WeatherCard :current-weather="weatherData" />
  </div>
</template>

<style>
.weather-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 5px;

  overflow-y: scroll;

  background-color: #fff;

  padding: 20px;
  border: 1px solid transparent;
  border-radius: 10px;
}
</style>
