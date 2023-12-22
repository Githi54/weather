<script setup lang="ts">
const emit = defineEmits<{
  handleClose: []
}>()
const { text } = defineProps<{
  text?: string
}>()
</script>

<template>
  <div class="modal">
    <div class="modal-container">
      <button class="modal-close" @click="() => emit('handleClose')">
        &times;
      </button>
      <div class="modal-content">
        <p class="modal-text">{{ text }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-container {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;

  border: 1px solid #888;
  border-radius: 20px;

  width: 80%;
  min-height: 250px;
}

.modal-close {
  all: unset;
  color: var(--Gray-300);

  float: inline-end;
  font-size: 24px;
  font-weight: bold;

  cursor: pointer;
}

.modal-close:hover,
.modal-close:focus {
  color: var(--Gray-500);
  text-decoration: none;
}

.modal-close:active {
  color: black;
}

.modal-text {
  color: var(--Gray-500);
  font-size: 25px;
}

.modal-content {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
