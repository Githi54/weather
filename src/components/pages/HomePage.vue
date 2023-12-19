<script setup lang="ts">
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import SearchCity from '@components/features/SearchCity.vue'
import PageLayout from '@components/template/PageLayout.vue'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'

const store = useCitiesWeather()

const { citiesWeather } = storeToRefs(store)

console.log(citiesWeather)
</script>

<template>
  <PageLayout>
    <SearchCity />
    <WeatherCard :current-weather="citiesWeather[0].current" />
  </PageLayout>
</template>
