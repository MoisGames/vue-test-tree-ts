<script setup lang="ts">
import ModalWindow from './ModalWindow.vue';
</script>

<template>
  <main class="main-page__wrapper">
    <ModalWindow />
    <v-button>Открыть</v-button>
  </main>
</template>
<style scoped>
.main-page__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  gap: 20px;
}
v-button {
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
