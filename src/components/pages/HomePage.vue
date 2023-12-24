<script setup lang="ts">
import SearchCity from '@components/features/SearchCity.vue'
import PageLayout from '@components/template/PageLayout.vue'
import WeatherInfo from '@components/features/WeatherInfo.vue'
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import { storeToRefs } from 'pinia'

const store = useCitiesWeather()
const { citiesWeather } = storeToRefs(store)
</script>

<template>
  <PageLayout :is-loading="!citiesWeather.length">
    <SearchCity />
    <WeatherInfo />
  </PageLayout>
</template>
