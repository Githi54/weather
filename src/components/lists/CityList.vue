<script setup lang="ts">
import { City } from '@typify/interfaces/city.interface'

const { cities } = defineProps<{
  cities?: City[]
  isLoading?: boolean
  isError?: boolean
}>()
</script>

<template>
  <ul class="cities-container">
    <li v-if="isLoading" class="cities-item--special cities-item">
      ...Loading
    </li>
    <li
      v-if="isError || (!isLoading && !cities?.length)"
      class="cities-item--special cities-item"
    >
      Not found🙁
    </li>
    <li v-for="{ name, lat, country } of cities" :key="lat" class="cities-item">
      {{ name }}, {{ country }}
    </li>
  </ul>
</template>

<style>
.cities-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style-type: none;
  background-color: #fff;
  border: 1px solid var(--Gray-100);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 30px;

  margin: 0;
  padding: 10px;

  min-height: 70px;
  max-height: 300px;
}
.cities-item {
  color: var(--Gray-500);
  width: 100%;
  text-align: left;

  cursor: pointer;
}

.cities-item--special {
  margin: auto;
}

.cities-item:hover {
  background: var(--Gray-100);
  border: 1px solid var(--Gray-100);
  opacity: 0.9;
}
</style>
