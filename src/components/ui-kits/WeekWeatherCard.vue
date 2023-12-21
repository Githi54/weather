<script setup lang="ts">
import { IWeekWeather } from '@typify/interfaces'
import { BASE_URL } from '@app/constants'
import { transformFromKelvinToCelsiusWeather } from '@/app/helpers'

const { weekWeather, cityName } = defineProps<{
  weekWeather: IWeekWeather[]
  cityName: string
}>()
</script>

<template>
  <div class="week-weather">
    <p class="week-weather-city">{{ cityName }}</p>

    <div class="week-weather-list">
      <div
        v-for="{ weekDay, weatherIcon, avgTemp, id } of weekWeather"
        :key="id"
        class="week-weather-data"
      >
        <p class="week-weather-day">{{ weekDay }}</p>
        <div>
          <img
            :src="`${BASE_URL}/img/w/${weatherIcon}`"
            alt="weather icon"
            class="weather-icon"
          />
        </div>
        <p class="week-weather-avg-temp">
          {{ transformFromKelvinToCelsiusWeather(avgTemp) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.week-weather {
  border: 1px solid transparent;
  border-radius: 20px;

  background: var(--Weather-color);

  width: 80%;

  padding: 20px;

  display: flex;
  flex-direction: column;

  gap: 20px;
}

.week-weather-city {
  color: var(--Weather-text-color);

  margin: 0 auto;
}

.week-weather-list {
  display: flex;
  align-items: center;

  gap: 10px;
}

.week-weather-data {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.week-weather-day,
.week-weather-avg-temp {
  color: #fff;
}

.week-weather-avg-temp {
  position: relative;
}

.week-weather-avg-temp::after {
  content: '°';
  position: absolute;

  right: 2px;
}
</style>
