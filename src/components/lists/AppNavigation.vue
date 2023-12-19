<script setup lang="ts">
import AppNavLink from '@components/ui-kits/AppNavLink.vue'
import { routes } from '@app/router'
</script>

<template>
  <div class="nav-container">
    <AppNavLink
      v-for="{ name, path } of routes"
      :key="path"
      :nav-text="name"
      :to="path"
    />
  </div>
</template>

<style>
.nav-container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 400px;
  gap: 10px;
}
</style>
