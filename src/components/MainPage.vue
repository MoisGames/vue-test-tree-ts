<script setup lang="ts">
import { ref } from 'vue'
import ModalWindow from './ModalWindow.vue'

const isShow = ref(false)

function toggleModal() {
  if (!isShow.value) {
    isShow.value = true
  } else {
    isShow.value = false
  }
}
</script>

<template>
  <main class="main-page__wrapper">
    <div class="main-page__modal-window">
      <ModalWindow title="Дерево папок" v-if="isShow" />
    </div>
    <v-button @click="toggleModal">{{ isShow ? 'Закрыть' : 'Открыть' }}</v-button>
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
.main-page__modal-window {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
}
v-button {
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
