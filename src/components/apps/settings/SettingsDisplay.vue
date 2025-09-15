<script setup>
import { useSettingsStore } from '@/stores/settings.js'
import { useStatusesStore } from '@/stores/statuses.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const settingsStore = useSettingsStore()
const statusesStore = useStatusesStore()
const { brightness, brightnessValue, screensaverdelay, launchcenter } = storeToRefs(settingsStore)
const { backgroundId, setBackgroundId } = storeToRefs(settingsStore)
const { isScreenSaverOn,screenSaverStyler } = storeToRefs(statusesStore)

function screenSaverStylerOn() {
  screenSaverStyler.value = true
}

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


</script>

<template>
  <div class="centered" style="font-size: x-large">Settings</div>
  <div class="centered">Brightness: {{ brightnessValue }}</div>
  <div class="centered">
    <input v-model="brightness" type="range" min="20" max="120" step="1" />
  </div>
  <div class="centered">
    Screen Saver:
    <input id="" v-model="isScreenSaverOn" type="checkbox" name="" />
  </div>
  <div class="centered">
    Screen Saver delay: {{ screensaverdelay }}s
    <div class="centered">
      <input v-model="screensaverdelay" type="range" min="60" max="180" step="1">
    </div>
  </div>
  <div class="centered">
    <button class="ScreenSleeper-button" @click="screenSaverStylerOn()">Change Screen Saver Style</button>
  </div>
  <div style="font-size: 20px;" class="centered">
    Wallpaper
    <div class="wallpaper-items">
      <div>
        <img :class="{ 'unactive': !bg1, 'active': bg1 }" src="/src/assets/images/bg1.png" style="margin-right: 10px;" height="100px" alt="" @click="settingsStore.setBackgroundId(1)">
        <img :class="{ 'unactive': !bg2, 'active': bg2 }" src="/src/assets/images/bg2.png" style="margin-top: 10px;" height="100px" alt="" @click="settingsStore.setBackgroundId(2)">
        <img :class="{ 'unactive': !bg3, 'active': bg3 }" src="/src/assets/images/bg3.png" style="margin-left: 10px;" height="100px" alt="" @click="settingsStore.setBackgroundId(3)">
        <img :class="{ 'unactive': !bg4, 'active': bg4 }" src="/src/assets/images/bg4.png" style="margin-left: 10px;" height="100px" alt="" @click="settingsStore.setBackgroundId(4)">
      </div>
    </div>
  </div>
  <div class="centered reset-button">
    <button @click="settingsStore.resetSettings()">reset settings</button>
  </div>
</template>

<style scoped>
.reset-button {
  margin-top: 50px;
}

.ScreenSleeper-button {
  border: 2px black solid;
  padding: 5px 15px;
  background-color: rgb(133, 133, 133);
  color: white;
  font-family: caveat;
  margin-top: 10px;
}

.wallpaper-items {
  display: flex;
  justify-content: center;
  width: 100%;
}



.wallpaper-items img {
  border-radius: 10px;
}

.unactive {
  filter: saturate(0%);
} 

.active {
  filter: saturate(100%);
}

.wallpaper-items .item {
  height: 100%;
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

.ScreenSleeper-button:hover {
  background-color: rgb(210, 210, 210);
  color: black;
}
</style>
