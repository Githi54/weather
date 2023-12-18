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
const { data: cities } = useQuery({
  queryKey: ['cities'],
  queryFn: () => getCities(cityQuery.value),
  select: (response) => response.data,
  enabled: isEnable,
})
</script>

<template>
  <h1>Home</h1>
  <div class="search-container">
    <SearchInput placeholder="Search city" @search="handleSearch" />
    <CityList v-if="cityQuery.length" :cities="cities" />
    <div class="">{{ cityQuery }}</div>
  </div>
</template>
