<script setup>
import ftrIcon from '@/assets/images/firetr.png'
import browserIcon from '@/assets/images/browser.png'
import settingsIcon from '@/assets/images/settings.png'
import firetrLogo from '@/assets/images/fireTR-OS-logo.png'
import BaseAppLauncher from '@/components/base-components/BaseAppLauncher.vue'
import LaunchWindow from '@/components/LaunchWindowView.vue'
import calculatorIcon from '@/assets/images/calculator.png'
import ScreenSleep from '@/components/ScreenSleep.vue'
import LockedScreen from '@/components/LockedScreen.vue'
import { useStatusesStore } from '@/stores/statuses.js'
import { useSettingsStore } from '@/stores/settings'
import { computed, ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import ScreenSleepPicker from '@/components/ScreenSleepPicker.vue'

const statusStore = useStatusesStore()
const { isMenuShown, isUnlocked, screenSaverStyler } = storeToRefs(statusStore)

onMounted(() => {
  statusStore.startScreenSaverTimer()
})

const settingsStore = useSettingsStore()
const { brightness, screenSaver } = storeToRefs(settingsStore)

const { backgroundId } = storeToRefs(settingsStore)

const bg1 = computed(() => {
  return backgroundId.value == 1
})

const bg2 = computed(() => {
  return backgroundId.value == 2
})

const bg3 = computed(() => {
  return backgroundId.value == 3
})

const bg4 = computed(() => {
  return backgroundId.value == 4
})

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
}

</script>

<template>
  <div
    id="desktop"
    :style="{ filter: `brightness(${brightness}%)` }"
    :class="{ 'nocursor': screenSaver, 'bg1': bg1, 'bg2': bg2, 'bg3': bg3, 'bg4': bg4 }"
    @mousemove="statusStore.restartScreenSaverTimer()"
  >
    <div
      @click="hideLaunchWindow"
      class="appsDiv"
      :class="{ 'appsDiv--hidden': !isUnlocked || screenSaver }"
    >
      <BaseAppLauncher
        v-for="app in appsIcons"
        :key="app.title"
        :name="app.title"
        :image="app.image"
        :image-alt="app.imageAlt"
      />
    </div>
    <div class="navbar" :class="{ 'navbar--hidden': !isUnlocked || screenSaver }">
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
    <ScreenSleep v-if="screenSaver" />
    <LockedScreen v-if="!isUnlocked" />
    <ScreenSleepPicker v-if="screenSaverStyler"/>
  </div>
</template>

<style>
.navbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
}

.bg1 {
  background-image: url('../assets/images/bg1.png');
  background-size: cover;
}

.bg2 {
  background-image: url('../assets/images/bg2.png');
  background-size: cover;
}

.bg3 {
  background-image: url('../assets/images/bg3.png');
  background-size: cover;
}

.bg4 {
  background-image: url('../assets/images/bg4.png');
  background-size: cover;
}

.nocursor {
  cursor: none;
}

.appsDiv {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
}

.navbar--hidden {
  bottom: -50px;
}

.appsDiv--hidden {
  left: -150px;
}
</style>
