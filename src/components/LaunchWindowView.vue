<script setup>
import { useStatusesStore } from '@/stores/statuses'
import { storeToRefs } from 'pinia'

const statusStore = useStatusesStore()
const { isMenuShown } = storeToRefs(statusStore)


</script>

<template>
  <div :class="{ 'launch-window--show': isMenuShown }" class="launch-window"></div>
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

.launch-window {
  margin-top: calc(100vh - 410px);
  margin-left: 10px;
  position: absolute;
  left: -360px;
  width: 350px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
  border-radius: 5%;
  transition: 0.15s;
}

.launch-window--show {
  left: 0;
}
</style>
