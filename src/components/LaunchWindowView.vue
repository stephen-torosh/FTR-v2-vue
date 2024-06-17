<script setup>
import { useStatusesStore } from '@/stores/statuses'
import { storeToRefs } from 'pinia'

const statusStore = useStatusesStore()
const { isMenuShown } = storeToRefs(statusStore)
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
        <img src="../assets/images/default-user.png" alt="" width="32" height="32" />
        <h4>default user</h4>
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
  color: white;
}

.down {
  display: flex;
  justify-content: space-between;
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
}

.launch-window-wrapper {
  margin-top: calc(100vh - 410px);
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
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
