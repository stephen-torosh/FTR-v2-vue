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

const transition = ref(false)
const intro = ref(false)
const introVue = ref(true)

setTimeout(() => {
  transition.value = true
}, 2000)

setTimeout(() => {
  intro.value = true
},4000)

setTimeout(() => {
  introVue.value = false
}, 4500)

const userPassword = ref('')
</script>

<template>
  <div class="wrapper">
    <img :src="userImage" width="200" height="200" alt="" />
    <h1>{{ username }}</h1>
    <form @submit.prevent="unlockScreen(userPassword)">
      <label for="password"
        ><input
          id="password"
          v-model="userPassword"
          type="password"
          name="password"
          placeholder="password"
        />
      </label>
      <p v-show="!isPasswordCorrect">Incorrect password!</p>
      <button type="submit">unlock</button>
    </form>
  </div>
  <div v-if="introVue" class="intro" :class="{ transIntro: transition, introEnd: intro }">
    <img class="flareos" :class="{ transImg: transition }" width="200" height="200" src="@/assets/images/fireTR-OS-logo.png" alt="">
    <div class="box" :class="{ transBox: transition}"></div>
    <h1 class="title" :class="{ transTitle: transition }">FlareOS</h1>
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

.title {
  color: black;
  font-size: 100px;
  z-index: 4;
  transition: 0.5s;
}

.transTitle {
  transform: translateX(-370px);
  color: transparent;
}

.transImg {
  transition: 0.5s;
  transform: translateX(175px);
}

.flareos {
  z-index: 6;
  transition: 0.5s;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 45vw;
  height: 100vh;
  background-color: white;
  z-index: 5;
  transition: 0.5s;
}

.transIntro {
  background: #22C1C3;
  background: linear-gradient(90deg,rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}

.transBox {
  background-color: transparent;
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

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  background-color: white;
  transition: 0.5s
}

.introEnd {
  opacity: 0;
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
