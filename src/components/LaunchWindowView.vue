<script setup>
import { computed } from 'vue'
import { useStatusesStore } from '@/stores/statuses'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'
import DefaultUserIcon from '@/assets/images/default-user.jpg'

const settingsStore = useSettingsStore()
const { username, userAvatar } = storeToRefs(settingsStore)

const statusStore = useStatusesStore()
const { isMenuShown } = storeToRefs(statusStore)

const avatar = computed(() => {
  console.log(userAvatar.value)
  return userAvatar.value === '' ? DefaultUserIcon : userAvatar.value
})
</script>

<template>
  <div :class="{ 'launch-window--show': isMenuShown }" class="launch-window-wrapper"></div>
  <div :class="{ 'launch-window--show': isMenuShown }" class="launch-window">
    <div class="top">
      <div>OS Version - Beta 1</div>
      <div>FireInc Studios 2024</div>
    </div>
    <div class="down">
      <div style="display: flex; align-items: center">
        <div>{{ userAvatar }}</div>
        <img :src="avatar" alt="" width="24" height="24" />
        <h4>{{ username }}</h4>
      </div>
      <div style="display: flex; align-items: center">
        <img src="../assets/images/on-off-button.png" alt="" width="20" height="20" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// .launch-window-wrapper {
//   background-color: transparent;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: calc(100vh - 50px);
// }

* {
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
  left: -360px;
  width: 350px;
  height: 350px;
  padding: 20px;
  z-index: 2;
  transition: 0.15s;
  color: white;
}

.launch-window-wrapper {
  margin-top: calc(100vh - 410px);
  position: absolute;
  background-color: rgba(125, 125, 125, 0.5);
  backdrop-filter: blur(3px);
  left: -360px;
  width: 350px;
  height: 350px;
  z-index: 1;
  border-radius: 5%;
  transition: 0.15s;
}

.launch-window--show {
  left: 15px;
}
</style>
