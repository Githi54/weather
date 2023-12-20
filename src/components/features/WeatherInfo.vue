<script setup lang="ts">
import { IWeatherInfo } from '@typify/interfaces/weather-info.interface'
import {
  getSelectedCurrentWeather,
  selectCurrentWeather,
  removeSelectedWeather,
} from '@api/services'
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'
import classNames from 'classnames'
import { ref } from 'vue'

const store = useCitiesWeather()
const { citiesWeather } = storeToRefs(store)
const selectedCities = ref(getSelectedCurrentWeather() as IWeatherInfo[])
const selectedCitiesIDs = ref(selectedCities.value.map(({ id }) => id))

const handleClickSelect = (weatherData: IWeatherInfo) => {
  const { id: weatherID } = weatherData

  if (selectedCitiesIDs.value.includes(weatherID)) {
    removeSelectedWeather(weatherID)
    selectedCitiesIDs.value = selectedCitiesIDs.value.filter(
      (id) => id !== weatherID,
    )
  } else {
    selectCurrentWeather(weatherData)
    selectedCitiesIDs.value = [...selectedCitiesIDs.value, weatherID]
  }

  const newArr = getSelectedCurrentWeather()

  selectedCities.value = newArr
}
</script>

<template>
  <div
    v-for="weatherData of citiesWeather"
    :key="weatherData.id"
    class="weather-info-container"
  >
    <div class="weather-actions">
      <button class="weather-action">Delete</button>
      <button
        class="weather-action weather-select"
        :class="
          classNames({
            'weather-selected': selectedCitiesIDs.includes(weatherData.id),
          })
        "
        @click="handleClickSelect(weatherData)"
      >
        Select{{ selectedCitiesIDs.includes(weatherData.id) ? 'ed' : '' }}
      </button>
    </div>
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

.weather-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 10px;

  width: 100%;
}

.weather-action {
  all: unset;

  font-weight: 500;
  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

.weather-select:hover {
  color: yellowgreen;
}

.weather-select:active {
  color: green;
}

.weather-selected {
  color: green;
}
</style>
