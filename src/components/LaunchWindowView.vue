<script setup>
import { computed } from 'vue'
import { useStatusesStore } from '@/stores/statuses'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'
import DefaultUserIcon from '@/assets/images/default-user.jpg'

const settingsStore = useSettingsStore()
const { username, userAvatar, launchcenter } = storeToRefs(settingsStore)

const statusStore = useStatusesStore()
const { isMenuShown } = storeToRefs(statusStore)

const avatar = computed(() => {
  return userAvatar.value === '' ? DefaultUserIcon : userAvatar.value
})

</script>

<template>
  <div :class="{ 'launch-window--show': isMenuShown, 'launch-window__center': launchcenter }" class="launch-window-wrapper"></div>
  <div :class="{ 'launch-window--show': isMenuShown, 'launch-window__center': launchcenter }" class="launch-window">
    <div class="top">
      <div>OS Version - Release v1.1</div>
      <div style="margin-bottom: 30px;">FireInc Studios 2025</div>
      <div>Official Website: <a style="color: red; text-decoration: none;" href="https://fireinc.pp.ua">https://fireinc.pp.ua</a></div>
    </div>
    <div class="down">
      <div style="display: flex; align-items: center">
        <img :src="avatar" alt="" width="24" height="24" />
        <h4>{{ username }}</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

body {
  font-family: caveat;
}

.down {
  display: flex;
  justify-content: space-between;

  img {
    border-radius: 50%;
    margin: 4px;
  }
}

.launch-window {
  margin-top: calc(100vh - 410px);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 15px;
  top: 450px;
  width: 350px;
  height: 350px;
  padding: 20px;
  z-index: 2;
  transition: 0.15s;
  color: white;
}

.launch-window-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(100vh - 410px);
  position: absolute;
  background-color: rgba(125, 125, 125, 0.5);
  backdrop-filter: blur(3px);
  
  left: 15px;
  top: 450px;
  width: 350px;
  height: 350px;
  z-index: 1;
  border-radius: 5%;
  transition: 0.15s;
}

.launch-window--show {
  left: 15px;
  top: 0px;
}

.launch-window__center {
  margin-left: 50vw;
  transform: translateX(-50%);
  left: 0;
}
</style>
