<script setup>

import folderimg from '@/assets/images/Folder.png'
import fileimg from '@/assets/images/File.svg'
import bucket from '@/assets/images/remove-bucket.svg'
import rename from '@/assets/images/rename.svg'

import FolderNavbar from './fileexp/FolderNavbar.vue'

import { storeToRefs } from 'pinia'

import { useFileSystem } from '@/stores/files'

const fileStore = useFileSystem()

const { downloads, documents, apps, desktop, activeDirectory, activeTab, content, getDirectoryPath } = storeToRefs(fileStore)
const { setActiveTab, changeActiveDir } = fileStore

function handleClick(item) {
  if (item.type === "folder") {
    changeActiveDir(item.name)
  }
}

setActiveTab("downloads")

</script>

<template>
<div class="wrapper">
  <nav>
    <button :class="{ 'buttonActive': activeTab === 'Main Page'}" @click="setActiveTab('Main Page', main)">Main Page</button>
    <button :class="{ 'buttonActive': activeTab === 'downloads'}" @click="setActiveTab('downloads', downloads)">Downloads</button>
    <button :class="{ 'buttonActive': activeTab === 'documents'}" @click="setActiveTab('documents', documents)">Documents</button>
    <button :class="{ 'buttonActive': activeTab === 'apps'}" @click="setActiveTab('apps', apps)">Apps</button>
    <button :class="{ 'buttonActive': activeTab === 'desktop'}" @click="setActiveTab('desktop', desktop)">Desktop</button>
  </nav>

  <div class="content">

    <folder-navbar />

    <div v-for="item in content" :key="item" class="item" @click="handleClick(item)">
      <img width="90" height="90" :src="item.type === 'folder' ? folderimg : fileimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>{{ item.name }}</h2>
    </div>

    <div v-if="activeTab === 'Main Page'">
      <h1>Welcome to File Explorer!</h1>
      <p>In this version we replaced <b>FTR terminal</b> that used <b>Windows</b> as the main place to store files and folders, with an <b>independent file system</b> that you can manage <b>in this app</b></p>
      <p>Unfortunately in <b>FlareOS 1.1</b> it's still in development, <b>without any profitable use</b></p>
    </div>

    <!--<h2 v-show="!activeTabInfo[0]" style="margin: 10px;">Nothing to show...</h2>-->

  </div>
</div>

</template>

<style scoped>

.wrapper {
  display: flex;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  width: 193px;
  height: 570px;
  box-shadow: 5px 0px 20px rgba(99, 99, 99, 0.6745098039);
}

.navActive {
  background-color: rgb(138, 138, 138);
}

nav > button {
  width: 90%;
  height: 30px;
  margin: 10px 5%;
  border: 0;
  border-radius: 5px;
  font-family: Caveat;
  font-size: 20px;
  background-color: rgb(216, 216, 216);
}

.buttonActive {
  background-color: rgb(138, 138, 138);
  color: white;
}

.content {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 193px);
  height: 520px;
  overflow-y: scroll;
  align-content: start;
}

.content > .item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 190px;
  height: 190px;
} 

.content > .item:hover {
  background-color: rgba(131, 136, 228, 0.159);
}

.managementBar {
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 20px;
}

.managementBar > button {
  height: 20px;
  width: 20px;
  border: none;
  border-radius: 5px;
  background-color: rgb(235, 235, 235);
}

.managementBar > button:hover {
  background-color: rgb(234, 105, 105);
}

h1, p {
  margin: 10px;
}

p {
  color: rgb(73, 73, 73);
  font-size: 20px;
  max-width: 500px;
}

</style>