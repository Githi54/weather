<script setup lang="ts">
import Chart from 'chart.js/auto'
import { onBeforeUnmount, ref, watchEffect } from 'vue'

const chartRef = ref<HTMLCanvasElement | null>(null)
const chartInstance = ref<Chart | null>(null)

const labels = ['1', '2', '3', '4', '5', '6', '7']
const chartData = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature change',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
}

const renderChart = () => {
  if (chartInstance.value) {
    chartInstance.value.destroy()
  }

  if (chartRef.value) {
    const ctx = chartRef.value.getContext('2d')

    if (ctx) {
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: chartData,
      })
    }
  }
}

watchEffect(() => {
  renderChart()
})

onBeforeUnmount(() => {
  if (chartInstance.value) {
    chartInstance.value.destroy()
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style>
.chart-container {
  width: 100%;

  max-width: 300px;
}
</style>
