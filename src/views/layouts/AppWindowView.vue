<script setup>
import {useRoute, useRouter} from 'vue-router'
import { defineAsyncComponent, computed } from 'vue'

const route = useRoute();
const router = useRouter();

const activeComponent = computed(() => defineAsyncComponent(() => import(`/src/components/${route.params.appName}.vue`)))
</script>

<template>
  <div class="app-window-wrapper">
    <div class="app-window">
      <h4>{{route.params.appName}}</h4>
      <button @click="router.push({name: 'desktop'})" style="margin-right: 10px">X</button>
    </div>
    <div style="background: aliceblue; width: 100%; height: 200px;">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<style scoped>
h4 {
  margin-left: 10px;
  color: #ffffff;
}
.app-window-wrapper {
  position: absolute;
  top: 40%;
  width: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.app-window {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  height: 30px;
}
</style>
