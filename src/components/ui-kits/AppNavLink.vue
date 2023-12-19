<script setup lang="ts">
const { to, navText } = defineProps<{
  to: string
  navText: string
}>()
</script>

<template>
  <router-link :to="to" class="btn nav-link">{{ navText }}</router-link>
</template>

<style>
.nav-link {
  text-decoration: none;
}
</style>
