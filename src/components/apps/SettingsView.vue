<script setup>
import { useSettingsStore } from '@/stores/settings.js'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()

const { brightness } = storeToRefs(settingsStore)
</script>

<template>
  <div class="centered" style="font-size: x-large">Settings</div>
  <div class="centered">Brightness{{ brightness }}</div>
  <div style="display: flex; justify-content: center">
    <input type="range" v-model="brightness" />
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
