<script setup>
import SettingsPanel from './settings/SettingsPanel.vue'
import SettingsDisplay from './settings/SettingsDisplay.vue'
import SettingsProfile from './settings/SettingsProfile.vue'
import SettingsSecurity from './settings/SettingsSecurity.vue'
import { useSettingsStore } from '@/stores/settings.js'
import { onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()

const { activeSetting } = storeToRefs(settingsStore)

onUnmounted(() => {
  activeSetting.value = 'profile'
})
</script>

<template>
  <div class="wrapper">
    <SettingsPanel />
    <div style="width: 100%">
      <SettingsDisplay v-if="activeSetting === 'display'" />
      <SettingsProfile v-if="activeSetting === 'profile'" />
      <SettingsSecurity v-if="activeSetting === 'security'" />
    </div>
  </div>
</template>

<style scoped>
div {
  font-family: Caveat;
}

.wrapper {
  display: flex;
  height: 100%;
}
</style>
