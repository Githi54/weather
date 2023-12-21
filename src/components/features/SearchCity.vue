<script setup lang="ts">
import SearchInput from '@components/ui-kits/SearchInput.vue'
import CityList from '@components/lists/CityList.vue'
import { computed, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getCitiesByQuery } from '@api/services'
import { useCitiesWeather } from '@app/stores/citiesWeather.store'
import { ICoord } from '@typify/interfaces'

const cityQuery = ref('')
const handleSearch = (value: string) => {
  cityQuery.value = value
}

const isEnable = computed(() => cityQuery.value.length > 0)
const {
  data: cities,
  isError,
  isLoading,
  isRefetchError,
} = useQuery({
  queryKey: ['cities', cityQuery],
  queryFn: () => getCitiesByQuery(cityQuery.value),
  select: ({ data }) => data,
  enabled: isEnable,
})
const { addCity } = useCitiesWeather()
const handleClickCity = (coord: ICoord) => {
  addCity(coord)
  cityQuery.value = ''
}
</script>

<template>
  <div class="search-container">
    <SearchInput
      placeholder="Search city"
      class="search-input"
      :query="cityQuery"
      @search="handleSearch"
    />
    <CityList
      v-if="cityQuery.trim().length"
      class="search-city-list"
      :cities="cities"
      :is-loading="isLoading"
      :is-error="isError || isRefetchError"
      @handle-click="handleClickCity"
    />
  </div>
</template>

<style>
.search-container {
  display: flex;
  flex-direction: column;
  gap: 0;

  position: relative;

  max-width: 306px;
}

.search-input {
  position: absolute;
  width: 100%;

  top: -25px;
}

.search-city-list {
  position: absolute;
  top: 15px;

  width: 100%;
  max-width: 306px;

  z-index: 1111;
}
</style>
