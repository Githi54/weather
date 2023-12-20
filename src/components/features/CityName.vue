<script setup lang="ts">
import { getCitiesByCoord } from '@api/services'
import { useQuery } from '@tanstack/vue-query'
import { ICoord } from '@typify/interfaces/city.interface'
import { ref } from 'vue'

const { coord } = defineProps<{
  coord: ICoord
}>()

const cityName = ref('')

const { isLoading } = useQuery({
  queryKey: ['cityName', coord],
  queryFn: () => getCitiesByCoord(coord),
  select: ({ data }) =>
    (cityName.value = data[0]?.local_names?.en || 'Unknown City'),
})
</script>

<template>
  <p class="city-name">{{ isLoading ? '...Loading' : cityName }}</p>
</template>

<style>
.city-name {
  font-size: larger;
  color: var(--Weather-color);

  font-family: serif;
  font-weight: 500;
  font-size: 30px;
  font-style: italic;

  height: min-content;
}
</style>
