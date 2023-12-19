<script setup lang="ts">
import SunLogo from '@assets/sun.svg'
</script>

<template>
  <div class="logo-container">
    <SunLogo />
    <p class="logo-text">WeatherApp</p>
  </div>
</template>

<style>
.logo-container {
  display: flex;
  align-items: center;

  gap: 10px;
}

.logo-text {
  color: #fff;
  font-size: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}
</style>
