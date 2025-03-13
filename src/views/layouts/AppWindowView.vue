<script setup>
import { useRoute, useRouter } from 'vue-router'
import Browser from '@/components/apps/BrowserView.vue'
import FTR from '@/components/apps/FTRView.vue'
import Settings from '@/components/apps/SettingsView.vue'
import Calculator from '@/components/apps/CalculatorView.vue'
import Reminder from '@/components/apps/ReminderView.vue'
import { useStatusesStore } from '@/stores/statuses'
import { useSettingsStore } from '@/stores/settings'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const { screenSaver } = storeToRefs(useSettingsStore())
const { isUnlocked } = storeToRefs(useStatusesStore())

const activeComponent = computed(() => {
  switch (route.params.appname) {
    case 'FTR':
      return FTR
    case 'browser':
      return Browser
    case 'settings':
      return Settings
    case 'calculator':
      return Calculator
    case 'reminder':
      return Reminder
    default:
      return FTR
  }
})
</script>

<template>
  <div
    class="app-window-wrapper"
    :class="{ 'app-window-wrapper--hidden': screenSaver || !isUnlocked }"
  >
    <div class="app-window">
      <h4>{{ route.params.appname }}</h4>
      <button class="close-window-button" @click="router.push({ name: 'desktop' })">
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

.close-window-button {
  margin-right: 10px;
  color: #ffffff;
  padding: 0 5px;
  border: 0;
  border-radius: 2px;
  background-color: #b52020;
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
  transition: 1s;
}

.app-window-main {
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
}

.app-window-wrapper--hidden {
  transform: translate(-50%, -250%);
}
</style>
