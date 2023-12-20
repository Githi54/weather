<script setup lang="ts">
import AppLogo from '@components/ui-kits/AppLogo.vue'
import AppNavigation from '@components/lists/AppNavigation.vue'
</script>

<template>
  <div class="layout-container">
    <AppLogo />
    <AppNavigation />
    <slot name="independentSlot"></slot>
    <slot></slot>
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
