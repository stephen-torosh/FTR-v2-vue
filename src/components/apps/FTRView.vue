<script setup>
import { onMounted, ref } from 'vue'

const prompt = ref('')
const commands = ref([])
const input = ref(null)

onMounted(() => {
  input.value.focus()
})

async function ftrenter() {
  try {
    const response = await fetch('http://127.0.0.1:5000/terminal/ls')
    const html = await response.text()
    commands.value.push({ command: prompt.value, html: html })
    console.log(html)

    prompt.value = ''
  } catch (error) {
    console.log(error)
  }
}

function returnFocus(event) {
  event.target.focus()
}
</script>

<template>
  <div id="terminal">
    <div
      class="prompt"
      v-for="(prompt, index) in commands"
      :key="index"
      style="
        display: flex;
        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
        color: white;
      "
    >
      <div>
        FTR:{{ prompt.command }}
        <div>{{ prompt.html }}</div>
      </div>
    </div>

    <div
      style="
        display: flex;
        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
        color: white;
      "
    >
      FTR:
      <input
        type="text"
        v-model="prompt"
        @keyup.enter="ftrenter"
        @blur="returnFocus"
        ref="input"
        style="
          background-color: rgb(41, 41, 41);
          color: white;
          text-decoration: none;
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Open Sans',
            'Helvetica Neue',
            sans-serif;
          font-size: medium;
          width: 100%;
          border: 0;
        "
      />
    </div>
  </div>
</template>

<style scoped>
/* .prompt {
} */
#terminal {
  background-color: rgb(41, 41, 41);
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
