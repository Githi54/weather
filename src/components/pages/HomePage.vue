<script setup lang="ts">
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import SearchCity from '@components/features/SearchCity.vue'
import PageLayout from '@components/template/PageLayout.vue'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import { storeToRefs } from 'pinia'

const store = useCitiesWeather()

const { citiesWeather } = storeToRefs(store)
</script>

<template>
  <PageLayout>
    <SearchCity />
    <WeatherCard
      v-for="{ current } of citiesWeather"
      :key="current.weather[0].id"
      :current-weather="current"
      city="Kiev"
    />
  </PageLayout>
</template>
