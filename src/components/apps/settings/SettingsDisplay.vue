<script setup>
import { useSettingsStore } from '@/stores/settings.js'
import { useStatusesStore } from '@/stores/statuses.js'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()
const statusesStore = useStatusesStore()
const { brightness, brightnessValue } = storeToRefs(settingsStore)
const { isScreenSaverOn } = storeToRefs(statusesStore)
</script>

<template>
  <div class="centered" style="font-size: x-large">Settings</div>
  <div class="centered">Brightness: {{ brightnessValue }}</div>
  <div class="centered">
    <input type="range" v-model="brightness" min="20" max="120" step="1" />
  </div>
  <div class="centered">
    Screen Saver:
    <input type="checkbox" name="" id="" v-model="isScreenSaverOn" />
  </div>
  <!---->
  <div class="centered reset-button">
    <button @click="settingsStore.resetSettings()">reset settings</button>
  </div>
</template>

<style scoped>
.reset-button {
  margin-top: 50px;
}

.reset-button button {
  border: 2px black solid;
  padding: 5px 15px;
  background-color: rgb(133, 133, 133);
  color: white;
  font-family: caveat;
}

.reset-button button:hover {
  background-color: rgb(210, 210, 210);
  color: black;
}
</style>
