<script setup lang="ts">
const { placeholder, query } = defineProps<{
  placeholder?: string
  query: string
}>()
const searchEmit = defineEmits<{ search: [value: string] }>()
const emitInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  searchEmit('search', target.value)
}
</script>

<template v-slot:independentSlot>
  <input
    :value="query"
    type="text"
    class="search-input"
    :placeholder="placeholder"
    @input="emitInputChange"
  />
</template>

<style>
.search-input {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;

  height: 36px;

  border-radius: 4px;
  border: 1px solid var(--Gray-100);

  box-shadow: 0px 1px 2px 0px rgba(55, 65, 81, 0.08);
  color: var(--Gray-500);

  transition: 0.3s;
}

.search-input:hover {
  border-color: var(--Gray-300);
}

.search-input:focus {
  outline: none;

  box-shadow:
    0px 0px 0px 1px #6c8eef inset,
    0px 0px 0px 2px #d6ecff;
}

.search-input:disabled {
  pointer-events: none;
  opacity: 0.5;
  background: var(--Gray-50);
}
</style>
