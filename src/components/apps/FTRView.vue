<script setup>
import { onMounted, ref } from 'vue'

const prompt = ref('')
const commands = ref([])
const input = ref(null)
const followBlock = ref()

onMounted(() => {
  input.value.focus()
})

async function sendData() {
  try {
    const formattedInput = prompt.value.replace(' ', '%20').replace('/', '~')
    if (formattedInput) {
      const response = await fetch(`http://127.0.0.1:5000/terminal/${formattedInput}`)
      const html = await response.text()
      commands.value.push({ command: prompt.value, html: html })
    }
    prompt.value = ''
  } catch (error) {
    console.log(error)
  }
}

function ftrenter() {
  sendData().then(() => {
    followBlock.value.scrollIntoView({
      behavior: 'smooth'
    })
  })
}

function returnFocus(event) {
  event.target.focus()
}
</script>

<template>
  <div id="terminal">
    <div class="prompt" v-for="(prompt, index) in commands" :key="index" style="display: flex">
      <div>
        FTR:{{ prompt.command }}
        <div style="font-family: system-ui, sans-serif" v-html="prompt.html" />
      </div>
    </div>

    <div class="prompt">
      FTR:
      <input type="text" v-model="prompt" @keyup.enter="ftrenter" @blur="returnFocus" ref="input" />
    </div>
    <div ref="followBlock"></div>
  </div>
</template>

<style scoped>
* {
  font-family: system-ui, sans-serif;
  color: white;
}
#terminal {
  background-color: rgb(41, 41, 41);
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow-y: scroll;
}
input {
  background-color: rgb(41, 41, 41);
  color: white;
  text-decoration: none;
  font-size: medium;
  width: 100%;
  border: 0;
}

.prompt {
  display: flex;
  font-family: system-ui, sans-serif;
}
</style>
