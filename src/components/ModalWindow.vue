<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>


<template>
  <main class="main-page__wrapper">
    <h1>{{props.title}}</h1>
  </main>
</template>
<style scoped>
.main-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>
