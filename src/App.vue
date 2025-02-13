<script setup>

import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { useSettingsStore } from './stores/settings';



const settingsStore = useSettingsStore()

onMounted(async () => {
  const base = await indexedDB.open('users', 1)
  
  let transaction = base.transaction("books", "readwrite");

  let book = { id: 'js', price: 10 };

  let request = transaction.objectStore("books").add(book);

  
  
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

