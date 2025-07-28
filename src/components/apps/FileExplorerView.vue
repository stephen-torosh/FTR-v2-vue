<script setup>

import folderimg from '@/assets/images/Folder.png'
import fileimg from '@/assets/images/File.svg'
import bucket from '@/assets/images/remove-bucket.svg'
import rename from '@/assets/images/rename.svg'

import { storeToRefs } from 'pinia'

import { useFileSystem } from '@/stores/files'

const fileStore = useFileSystem()

const { downloads, documents, apps, activeDirectory, activeTab, content, getDirectoryPath, } = storeToRefs(fileStore)
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
    <button @click="setActiveTab('downloads', downloads)" :class="{ 'buttonActive': activeTab === 'downloads'}">Downloads</button>
    <button @click="setActiveTab('documents', documents)" :class="{ 'buttonActive': activeTab === 'documents'}">Documents</button>
    <button @click="setActiveTab('apps', apps)" :class="{ 'buttonActive': activeTab === 'apps'}">Apps</button>
  </nav>

  <div class="content">

    <div class="folderNavbar">{{ getDirectoryPath }}</div>


    <div class="item" v-for="item in content" :key="item" @click="handleClick(item)">
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

.folderNavbar {
  padding: 10px;
  width: 1007px;
  height: 50px;
  box-shadow: 5px 0px 20px rgba(99, 99, 99, 0.6745098039);
}

</style>