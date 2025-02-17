<script setup>

import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings';



const settingsStore = useSettingsStore()

onMounted(async () => {
  console.log(JSON.parse(localStorage.getItem('settings')))
  settingsStore.$patch(JSON.parse(localStorage.getItem('settings')))
})

window.onbeforeunload = (e) => {
  console.log("unload")
  localStorage.setItem('settings', JSON.stringify(settingsStore.$state))
}



</script>

<template>
  <RouterView />
</template>

