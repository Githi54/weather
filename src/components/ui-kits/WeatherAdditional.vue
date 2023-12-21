<script setup lang="ts">
const { weatherTextList } = defineProps<{
  weatherTextList: string[]
}>()
</script>

<template>
  <div class="weather-additional">
    <p
      v-for="(weatherText, index) of weatherTextList"
      :key="index"
      class="weather-text"
    >
      {{ weatherText }}
    </p>
  </div>
</template>
