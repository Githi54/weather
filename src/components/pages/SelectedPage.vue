<script setup lang="ts">
import { getSelectedCurrentWeather } from '@api/services'
import PageLayout from '@components/template/PageLayout.vue'
import { computed, ref } from 'vue'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import SelectedTypeButton from '@components/ui-kits/SelectedTypeButton.vue'
import WeekWeatherCard from '@components/ui-kits/WeekWeatherCard.vue'
import { transformWeatherData } from '@app/helpers'

const selectedData = computed(() => getSelectedCurrentWeather())
const displayDataType = ref('Day')
const selectTypeOnClick = (type: string) => (displayDataType.value = type)
</script>

<template>
  <PageLayout>
    <div class="selected-container">
      <div class="selected-type-action">
        <SelectedTypeButton text="Day" @select-type="selectTypeOnClick" />
        <SelectedTypeButton text="Week" @select-type="selectTypeOnClick" />
      </div>
      <div v-if="displayDataType === 'Day'" class="selected-day-list">
        <WeatherCard
          v-for="weatherData of selectedData"
          :key="weatherData.city.id"
          :current-weather="weatherData"
        />
      </div>
      <div v-if="displayDataType === 'Week'" class="selected-week-list">
        <WeekWeatherCard
          v-for="weatherData of selectedData"
          :key="weatherData.city.id"
          :week-weather="transformWeatherData(weatherData)"
          :city-name="weatherData.city.name"
        />
      </div>
    </div>
  </PageLayout>
</template>

<style>
.selected-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 40px;
}

.selected-day-list {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

  gap: 10px;
}

.selected-type-action {
  display: flex;
  align-items: center;

  gap: 10px;
}

.selected-week-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
}
</style>
