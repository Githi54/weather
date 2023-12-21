<script setup lang="ts">
const { text } = defineProps<{
  text: string
}>()
const emit = defineEmits<{
  selectType: [type: string]
}>()

const handleClick = () => emit('selectType', text)
</script>

<template>
  <button class="btn" @click="handleClick">{{ text }}</button>
</template>
