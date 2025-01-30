<script setup>
import ScreenSleep_downerleft from './ScreenSleep/ScreenSleep_downerleft.vue'
import ScreenSleep_downerright from './ScreenSleep/ScreenSleep_downerright.vue'
import ScreenSleep_downercenter from './ScreenSleep/ScreenSleep_downercenter.vue'

import ScreenSleep_upperleft from './ScreenSleep/ScreenSleep_upperleft.vue'
import ScreenSleep_upperright from './ScreenSleep/ScreenSleep_upperright.vue'
import ScreenSleep_uppercenter from './ScreenSleep/ScreenSleep_uppercenter.vue'

import { useSettingsStore } from '@/stores/settings'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const { screenSaverStyle } = storeToRefs(useSettingsStore())

const screensleep1 = ref(false)
const screensleep2 = ref(false)
const screensleep3 = ref(false)

const screensleep4 = ref(false)
const screensleep5 = ref(false)
const screensleep6 = ref(false)

screensleep1.value = screenSaverStyle.value == 1
screensleep2.value = screenSaverStyle.value == 2
screensleep3.value = screenSaverStyle.value == 3

screensleep4.value = screenSaverStyle.value == 4
screensleep5.value = screenSaverStyle.value == 5
screensleep6.value = screenSaverStyle.value == 6
</script>

<template>
  <ScreenSleep_downerleft v-if="screensleep1" />
  <ScreenSleep_downerright v-if="screensleep2" />
  <ScreenSleep_downercenter v-if="screensleep3" />

  <ScreenSleep_upperleft v-if="screensleep4" />
  <ScreenSleep_upperright v-if="screensleep5" />
  <ScreenSleep_uppercenter v-if="screensleep6" />
</template>

<style scoped></style>
