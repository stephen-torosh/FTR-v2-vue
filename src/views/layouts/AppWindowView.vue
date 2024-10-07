<script setup>
import { useRoute, useRouter } from 'vue-router'
import Browser from '@/components/apps/BrowserView.vue'
import FTR from '@/components/apps/FTRView.vue'
import Settings from '@/components/apps/SettingsView.vue'
import Calculator from '@/components/apps/CalculatorView.vue'
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
      <button @click="router.push({ name: 'desktop' })" style="margin-right: 10px; color: black">
        X
      </button>
    </div>
    <div class="component-wrapper">
      <div></div>
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<style scoped>
.component-wrapper {
  background: aliceblue;
  width: 100%;
  min-width: 300px;
  min-height: calc(100% - 30px);
  height: 100%;
  height: calc(100% - 30px);
}

.component-wrapper * {
  color: black;
}

h4 {
  margin-left: 10px;
  color: #ffffff;
}
.app-window {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  height: 30px;
}

.app-window-wrapper {
  position: absolute;
  left: 50vw;
  top: 50vh;
  min-height: 150px;
  min-width: 300px;
  height: 600px;
  width: 1200px;
  transform: translate(-50%, -50%);
}

.app-window-main {
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
