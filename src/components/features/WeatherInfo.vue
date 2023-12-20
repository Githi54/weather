<script setup lang="ts">
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'
import CityName from '@components/features/CityName.vue'

const store = useCitiesWeather()

const { citiesWeather } = storeToRefs(store)
</script>

<template>
  <div
    v-for="{ current, lat, lon } of citiesWeather"
    :key="current.weather[0].id"
    class="weather-info-container"
  >
    <CityName :coord="{ lat, lon }" />
    <WeatherCard :current-weather="current" />
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

  padding: 0 20px 20px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
}
</style>
