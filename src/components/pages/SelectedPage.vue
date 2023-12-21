<script setup lang="ts">
import { getSelectedCurrentWeather } from '@api/services'
import PageLayout from '@components/template/PageLayout.vue'
import { computed, ref } from 'vue'
import WeatherCard from '@components/ui-kits/WeatherCard.vue'
import SelectedTypeButton from '@components/ui-kits/SelectedTypeButton.vue'

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
      <div v-if="displayDataType === 'Day'" class="selected-weather-list">
        <WeatherCard
          v-for="weatherData of selectedData"
          :key="weatherData.city.id"
          :current-weather="weatherData"
        />
      </div>
      <div v-if="displayDataType === 'Week'" class="selected-weather-list">
        HI
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

.selected-weather-list {
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
</style>
