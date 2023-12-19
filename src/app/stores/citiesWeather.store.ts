import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCitiesWeather = defineStore('citiesWeather', () => {
  const citiesWeather = ref([])

  function addCity() {}

  function removeCity() {}

  return { citiesWeather, addCity, removeCity }
})
