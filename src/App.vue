<script setup>

import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings';
import { useReminderStore } from './stores/reminder';



const settingsStore = useSettingsStore()
const reminderStore = useReminderStore()

onMounted(async () => {
  console.log(JSON.parse(localStorage.getItem('settings')))
  settingsStore.$patch(JSON.parse(localStorage.getItem('settings')))
  reminderStore.$patch(JSON.parse(localStorage.getItem('remindEvents')))
})

window.onbeforeunload = (e) => {
  console.log("unload")
  localStorage.setItem('settings', JSON.stringify(settingsStore.$state))
  localStorage.setItem('remindEvents', JSON.stringify(reminderStore.$state))
}



</script>

<template>
  <RouterView />
</template>

