<script setup lang="ts">
import SearchCity from '@components/features/SearchCity.vue'
import PageLayout from '@components/template/PageLayout.vue'
import WeatherInfo from '@components/features/WeatherInfo.vue'
</script>

<template>
  <PageLayout>
    <SearchCity />
    <WeatherInfo />
  </PageLayout>
</template>
