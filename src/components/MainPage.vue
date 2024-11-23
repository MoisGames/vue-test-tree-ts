<script setup lang="ts">
import { ref } from 'vue';
import ModalWindow from './ModalWindow.vue';

const isShow = ref(false);
const selectedFolderId = ref<number | null>(null);

const toggleModal = () => {
    isShow.value = !isShow.value;
};

const handleModalClose = () => {
    isShow.value = false;
};

const handleSelect = (id: number) => {
    selectedFolderId.value = id;
    console.log('Выбранная папка ID:', selectedFolderId.value);
};
</script>

<template>
    <main class="main-page__wrapper">
        <div class="main-page__modal-window">
            <ModalWindow
                title="Дерево папок"
                v-if="isShow"
                @close="handleModalClose"
                @select="handleSelect"
            />
        </div>
        <v-button @click="toggleModal">{{ isShow ? 'Закрыть' : 'Открыть' }}</v-button>
        <div v-if="selectedFolderId !== null && !isShow">
            Выбранная папка ID: {{ selectedFolderId }}
        </div>
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
    width: 40%;
    height: auto;
}

v-button {
    border: 2px solid black;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
}
</style>
