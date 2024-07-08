<script setup>
import { useSettingsStore } from '@/stores/settings.js'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const settingsStore = useSettingsStore()
const { brightness } = storeToRefs(settingsStore)

function handleRangeUpdate($event) {
  settingsStore.updateBrightness($event.target.value)
}

const tupyy = computed(() => {
  return brightness
})
</script>

<template>
  <div>
    <div class="centered" style="font-size: x-large">Settings</div>
    <div class="centered">Brightness</div>
    <div id="tupyy">{{ tupyy }}</div>
    <div style="display: flex; justify-content: center">
      <input type="range" @change="handleRangeUpdate" />
    </div>
  </div>
</template>

<style scope>
div {
  font-family: Caveat;
}

.centered {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
