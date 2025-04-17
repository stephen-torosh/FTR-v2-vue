<script setup>

import folderimg from '@/assets/images/Folder.png'
import bucket from '@/assets/images/remove-bucket.svg'
import rename from '@/assets/images/rename.svg'

</script>

<template>
<div class="wrapper">
  <nav>
    ddds
  </nav>

  <div class="content">

    <div class="folderNavbar">dd</div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
    <div class="item">
      <img width="90" height="90" :src="folderimg" alt="">
      <div class="managementBar">
        <button>
          <img width="20" height="20" :src="bucket" alt="">
        </button>
        <button>
          <img width="20" height="20" :src="rename" alt="">
        </button>
      </div>
      <h2>New Folder</h2>
    </div>
  </div>
</div>

</template>

<style scoped>

.wrapper {
  display: flex;
}

nav {
  display: flex;
  width: 193px;
  height: 570px;
  box-shadow: 5px 0px 20px rgba(99, 99, 99, 0.6745098039);
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