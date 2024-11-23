<template>
  <main class="modal-window__wrapper">
    <h1>{{ props.title }}</h1>
    <article class="modal-window__content_wrapper">
      <div class="box-tree" v-for="item in mockFolders" :key="item.id">
        <div
          class="folder"
          :class="{ selected: selectedFolderId === item.id }"
          @click="selectFolder(item.id)"
        >
          <h2>{{ getFolderName(item, 0) }}</h2>
        </div>
        <div v-if="openFolders.has(item.id)">
          <div class="box-tree" v-for="child in item.children" :key="child.id">
            <div
              class="folder"
              :class="{ selected: selectedFolderId === child.id }"
              @click="selectFolder(child.id)"
            >
              <h3>{{ getFolderName(child, 1) }}</h3>
            </div>
            <div v-if="openFolders.has(child.id)">
              <div v-for="subChild in child.children" :key="subChild.id">
                <div
                  class="folder"
                  :class="{ selected: selectedFolderId === subChild.id }"
                  @click="selectFolder(subChild.id)"
                  id="subChild"
                >
                  <h4>{{ getFolderName(subChild, 2) }}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
    <button @click="closeModal">ОК</button>
  </main>
</template>

<script setup lang="ts">
import type { Tree } from '@/interface/modalwindow.interface'
import { defineProps, defineEmits, ref } from 'vue'

interface Props {
  title: string
}

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'select', id: number): void; (e: 'close'): void }>()

const mockFolders: Tree[] = [
  {
    id: 1,
    name: 'Папка 1',
    children: [
      { id: 2, name: 'Папка 1.1', children: [] },
      { id: 3, name: 'Папка 1.2', children: [{ id: 4, name: 'Папка 1.2.1', children: [] }] },
    ],
  },
  { id: 5, name: 'Папка 2', children: [] },
]

const selectedFolderId = ref<number | null>(null)
const openFolders = ref<Set<number>>(new Set())

const toggleFolder = (id: number) => {
  if (openFolders.value.has(id)) {
    openFolders.value.delete(id)
  } else {
    openFolders.value.add(id)
  }
}

const selectFolder = (id: number) => {
  selectedFolderId.value = id
  toggleFolder(id)
}

const closeModal = () => {
  if (selectedFolderId.value !== null) {
    emit('select', selectedFolderId.value)
  }
  emit('close')
}

const getFolderName = (folder: Tree, depth: number) => {
  return `${'...'.repeat(depth)} ${folder.name}`
}
</script>

<style scoped>
.modal-window__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  gap: 20px;
}

.box-tree {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
}

.folder {
  cursor: pointer;
  padding: 10px;
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px 0px;
}

#subChild {
  margin-left: 20px;
}

.selected {
  background-color: rgba(0, 150, 255, 0.3);
}

.folder:hover {
  background-color: rgba(200, 200, 255, 0.3);
}
</style>
