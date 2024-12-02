<script setup>
import { useStatusesStore } from '@/stores/statuses'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const statusesStore = useStatusesStore()
const settingsStore = useSettingsStore()
const { unlockScreen } = statusesStore
const { isPasswordCorrect } = storeToRefs(statusesStore)
const { username, userAvatar, userImage } = storeToRefs(settingsStore)

const userPassword = ref('')
</script>

<template>
  <div class="wrapper">
    <img :src="userImage" width="200" height="200" alt="" />
    <h1>{{ username }}</h1>
    <form @submit.prevent="unlockScreen(userPassword)">
      <label for="password"
        ><input
          type="password"
          v-model="userPassword"
          name="password"
          id="password"
          placeholder="password"
        />
      </label>
      <p v-show="!isPasswordCorrect">Incorrect password!</p>
      <button type="submit">unlock</button>
    </form>
  </div>
</template>

<style scoped>
button {
  display: block;
  margin: 30px auto 0;
  width: 100px;
  height: 50px;
  font-size: 30px;
  border: 0;
  border-radius: 10px;
  background-color: white;
}

h1 {
  color: white;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

form {
  margin-top: 30px;
}

img {
  border-radius: 100%;
  margin-bottom: 30px;
}

label {
  display: block;
}

input {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  color: red;
  font-weight: 800;
  text-align: center;
  font-size: 20px;
}
</style>
