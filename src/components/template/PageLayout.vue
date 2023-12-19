<script setup lang="ts">
import AppLogo from '@components/ui-kits/AppLogo.vue'
import AppNavigation from '@components/lists/AppNavigation.vue'
</script>

<template>
  <AppLogo />

  <div class="layout-container">
    <AppNavigation />
    <slot></slot>
  </div>
</template>

<style>
.layout-container {
  display: flex;
  flex-direction: column;

  gap: 40px;
}
</style>
