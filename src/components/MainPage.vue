<script setup lang="ts"></script>

<template>
  <main class="main-page__wrapper">
    <v-button>Открыть</v-button>
  </main>
</template>
<style scoped>
.main-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
v-button {
  border: 2px solid black;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}
</style>
