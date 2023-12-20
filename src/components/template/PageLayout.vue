<script setup lang="ts">
import AppLogo from '@components/ui-kits/AppLogo.vue'
import AppNavigation from '@components/lists/AppNavigation.vue'
import ContentLoader from '@components/ui-kits/ContentLoader.vue'

const { loaderCondition } = defineProps<{
  loaderCondition?: boolean
}>()
</script>

<template>
  <AppLogo />

  <div class="layout-container">
    <AppNavigation />
    <slot name="independentSlot"></slot>
    <ContentLoader v-if="loaderCondition" />
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
