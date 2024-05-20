<script setup>
import { useRoute, useRouter } from 'vue-router'
import Browser from '@/components/apps/Browser.vue'
import FTR from '@/components/apps/FTR.vue'
import Settings from '@/components/apps/Settings.vue'
import Calculator from '@/components/apps/Calculator.vue'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const activeComponent = computed(() => {
  switch (route.params.appname) {
    case 'FTR':
      return FTR
    case 'Browser':
      return Browser
    case 'settings':
      return Settings
    case 'calculator':
      return Calculator
    default:
      return FTR
  }
})
</script>

<template>
  <div class="app-window-wrapper">
    <div class="app-window">
      <h4>{{ route.params.appname }}</h4>
      <button @click="router.push({ name: 'desktop' })" style="margin-right: 10px">X</button>
    </div>
    <div style="background: aliceblue; width: 100%; height: 200px">
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
