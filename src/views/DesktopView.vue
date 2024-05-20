<script setup>
import ftrIcon from '@/assets/images/firetr.png'
import browserIcon from '@/assets/images/browser.png'
import settingsIcon from '@/assets/images/settings.png'
import firetrLogo from '@/assets/images/fireTR-OS-logo.png'
import BaseAppLauncher from '@/components/base-components/BaseAppLauncher.vue'
import LaunchWindow from '@/components/LaunchWindowView.vue'
import calculatorIcon from '@/assets/images/calculator.svg'

import { ref } from 'vue'

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

const isShowMenu = ref(false)

function onLaunchClick() {
  isShowMenu.value = !isShowMenu.value
}
</script>

<template>
  <div id="desktop">
    <div class="appsDiv">
      <div id="launch"></div>
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
      <div class="navbar__right">00:00</div>
    </div>
    <LaunchWindow v-if="isShowMenu" id="launchwindow" />
    <RouterView />
  </div>
</template>
