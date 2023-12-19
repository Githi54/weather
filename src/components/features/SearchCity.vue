<script setup lang="ts">
import SearchInput from '@components/ui-kits/SearchInput.vue'
import CityList from '@components/lists/CityList.vue'
import { computed, ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getCities } from '@api/services'

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
  queryFn: () => getCities(cityQuery.value),
  select: (response) => response.data,
  enabled: isEnable,
})
</script>

<template>
  <div class="search-container">
    <SearchInput placeholder="Search city" @search="handleSearch" />
    <CityList
      v-if="cityQuery.length"
      :cities="cities"
      :is-loading="isLoading"
      :is-error="isError || isRefetchError"
    />
  </div>
</template>

<style>
.search-container {
  display: flex;
  flex-direction: column;
  gap: 0;

  width: 100%;
  max-width: 306px;

  position: absolute;

  top: 30%;
  z-index: 9999;
}
</style>
