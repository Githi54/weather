<script setup lang="ts">
import { City } from '@types/interfaces'

const { cities } = defineProps<{
  cities: City[]
}>()
</script>

<template>
  <ul class="cities-container">
    <li v-for="{ name, lat } of cities" :key="lat" class="cities-item">
      {{ name }}
    </li>
  </ul>
</template>

<style>
.cities-container {
  list-style-type: none;
  background-color: var(--Gray-50);
  border: 1px solid var(--Gray-100);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 30px;
}
.cities-item {
  color: var(--Gray-300);
}
</style>
