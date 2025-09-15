<script setup>
import { storeToRefs } from 'pinia';
import { useFileSystem } from '@/stores/files';
const { getDirectoryPath, activeDirectory, content } = storeToRefs(useFileSystem())
const { updateContent } = useFileSystem()

function breadcrumb(index) {
  let j = (getDirectoryPath.value.length - 1) - index
  for (let i = 0; i < j; i++) {
    activeDirectory.value = activeDirectory.value.substring(0, activeDirectory.value.lastIndexOf("/"));
  }

  updateContent()
}



</script>

<template>
  <div class="folderNavbar">
    <div v-for="(folder, index) in getDirectoryPath" :key="folder" class="wrapper">
      <div class="folder" @click="breadcrumb(index)">{{ folder.replace("_", " ") }}</div>
      <span v-if="index < getDirectoryPath.length - 1" class="slash">/</span>
    </div>
    
  </div>
</template>

<style scoped>

.folderNavbar {
  display: flex;
  gap: 10px;
  padding: 10px;
  width: 1007px;
  height: 50px;
  box-shadow: 5px 0px 20px rgba(99, 99, 99, 0.6745098039);
}

.folder {
  height: 30px;
  padding: 0 10px;
  background-color: #d9d9d9;
  border-radius: 5px;
  line-height: 30px;
}

.slash {
  line-height: 30px;
}

.wrapper {
  display: flex;
  gap: 10px;
}

</style>