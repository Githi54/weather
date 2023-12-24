<script setup lang="ts">
import AppLogo from '@components/ui-kits/AppLogo.vue'
import AppNavigation from '@components/lists/AppNavigation.vue'
import PageLoader from '@components/ui-kits/PageLoader.vue'

const { isLoading } = defineProps<{
  isLoading?: boolean
}>()
</script>

<template>
  <div class="layout-container">
    <AppLogo />
    <AppNavigation />
    <PageLoader v-if="isLoading" />
    <slot v-else></slot>
  </div>
</template>

<style>
.layout-container {
  display: flex;
  flex-direction: column;

  height: 100%;

  gap: 40px;
}
</style>
