<script setup>
import { useRouter, useRoute } from 'vue-router'


const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="app-window-wrapper">
    <div class="app-window">
      <h4 style="margin-left: 10px">{{ route.params.appname }}</h4>
      <button @click="router.push('/')" style="margin-right: 10px">X</button>
    </div>
    <div class="app-window-main">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
h4 {
  color: white;
  text-transform: capitalize;
  font-family: cursive;
}

.app-window {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  height: 30px;
}

.app-window-wrapper {
  transform: translate(-50%, 0);
  position: absolute;
  top: calc(50% - 215px);
  width: 600px;
  left: 50%;
}

.app-window-main {
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
