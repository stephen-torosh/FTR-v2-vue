<script setup>
import ftrIcon from '@/assets/images/firetr.png'
import browserIcon from '@/assets/images/browser.png'
import settingsIcon from '@/assets/images/settings.png'
import firetrLogo from '@/assets/images/fireTR-OS-logo.png'
import BaseAppLauncher from '@/components/base-components/BaseAppLauncher.vue'
import LaunchWindow from '@/components/LaunchWindowView.vue'
import calculatorIcon from '@/assets/images/calculator.svg'
import { useStatusesStore } from '@/stores/statuses.js'
import { useSettingsStore } from '@/stores/settings'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'

const statusStore = useStatusesStore()
const { isMenuShown } = storeToRefs(statusStore)

const settingsStore = useSettingsStore()
const { brightness } = storeToRefs(settingsStore)

const appsIcons = [
  {
    title: 'FTR',
    image: ftrIcon,
    imageAlt: 'ftr icon'
  },
  {
    title: 'Browser',
    image: browserIcon,
    imageAlt: 'browser icon'
  },
  {
    title: 'settings',
    image: settingsIcon,
    imageAlt: 'settings icon'
  },
  {
    title: 'calculator',
    image: calculatorIcon,
    imageAlt: 'calculator icon'
  }
]

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
}, 1000)

const fullTime = computed(
  () =>
    `${date.value.getHours()}:${date.value.getMinutes() > 9 ? date.value.getMinutes() : `0${date.value.getMinutes()}`}`
)

function hideLaunchWindow() {
  statusStore.switchMenuStatus(false)
  console.log('hideLaunchWindow')
}
</script>

<template>
  <div id="desktop" :style="{filter: `brightness(${brightness}%)`}">
    <div @click="hideLaunchWindow" class="appsDiv">
      <BaseAppLauncher
        v-for="app in appsIcons"
        :key="app.title"
        :name="app.title"
        :image="app.image"
        :image-alt="app.imageAlt"
      />
    </div>
    <div class="navbar">
      <div class="navbar__left">
        <button @click="onLaunchClick" class="navbar__launch-button">
          <img class="fireTR-icon" :src="firetrLogo" alt="" height="80%" />
        </button>

        FireTR-v2
      </div>
      <div class="navbar__right">{{ fullTime }}</div>
    </div>
    <LaunchWindow id="launchwindow" />
    <RouterView />
  </div>
</template>
