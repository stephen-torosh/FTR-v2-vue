<script setup>
import ftrIcon from '@/assets/images/firetr.png'
import browserIcon from '@/assets/images/browser.png'
import settingsIcon from '@/assets/images/settings.png'
import fexpIcon from '@/assets/images/FileExp.png'
import calculatorIcon from '@/assets/images/calculator.png'
import reminderIcon from '@/assets/images/reminder.png'
import firetrLogo from '@/assets/images/fireTR-OS-logo.png'

import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useStatusesStore } from '@/stores/statuses'
import { useSettingsStore } from '@/stores/settings'
import { useReminderStore } from '@/stores/reminder'

const statusStore = useStatusesStore()
const settingsStore = useSettingsStore()
const { checkExpiredEvents } = useReminderStore()

const { isMenuShown, isUnlocked } = storeToRefs(statusStore)
const { screenSaver, launchcenter } = storeToRefs(settingsStore)


function onLaunchClick() {
  if (isMenuShown.value) {
    statusStore.switchMenuStatus(false)
    return 0
  }
  statusStore.switchMenuStatus(true)
}

const date = ref(new Date())

setInterval(() => {
  date.value = new Date()
  if (date.value.getSeconds() === 0) {
    checkExpiredEvents()
  }
}, 1000)



const fullTime = computed(
  () =>
    `${date.value.getHours()}:${date.value.getMinutes() > 9 ? date.value.getMinutes() : `0${date.value.getMinutes()}`}`
)
</script>

<template>
  <div class="navbar" :class="{ 'navbar--hidden': !isUnlocked || screenSaver }">
    <div class="navbar__left" :class="{ navbar__center: launchcenter }">
      <div class="navbar__applaunch-button">
        <button
          class="navbar__launch-button"
          style="text-decoration: none; width: 65%; height: 65%"
          @click="onLaunchClick"
        >
          <img height="100%" :src="firetrLogo" alt="" />
        </button>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/FTR">
          <img height="100%" :src="ftrIcon" alt="" />
        </RouterLink>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/browser">
          <img height="100%" :src="browserIcon" alt="" />
        </RouterLink>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/settings">
          <img height="100%" :src="settingsIcon" alt="" />
        </RouterLink>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/calculator">
          <img height="100%" :src="calculatorIcon" alt="" />
        </RouterLink>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/reminder">
          <img height="100%" :src="reminderIcon" alt="" />
        </RouterLink>
      </div>
      <div class="navbar__applaunch-button">
        <RouterLink class="navbar__applaunch-button-style" to="/desktop/app/File%20Exp">
          <img height="100%" :src="fexpIcon" alt="" />
        </RouterLink>
      </div>
    </div>
    <div class="navbar__right">{{ fullTime }}</div>
  </div>
</template>

<style scoped>

.navbar--hidden {
  bottom: -50px;
}

.appsDiv--hidden {
  left: -150px;
}

.navbar__center {
  margin: 0 auto;
}

.navbar__applaunch-button-style {
  text-decoration: none;
  width: 65%; 
  height: 65%;
}
</style>