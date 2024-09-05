<script setup>
import { onMounted, ref } from 'vue'

// function createNewPrompt() {
//   document.getElementById('terminal').innerHTML += `<div
//       class="prompt"
//       style="
//         display: flex;
//         font-family:
//           system-ui,
//           -apple-system,
//           BlinkMacSystemFont,
//           'Segoe UI',
//           Roboto,
//           Oxygen,
//           Ubuntu,
//           Cantarell,
//           'Open Sans',
//           'Helvetica Neue',
//           sans-serif;
//         color: white;
//       "
//     >
//       FTR:
//     </div>`
// }

// document.addEventListener('keydown', () => {
//   if (event.key[0] == 'B') {
//     document.getElementsByClassName('prompt')[
//       document.getElementsByClassName('prompt').length - 1
//     ].innerHTML = document
//       .getElementsByClassName('prompt')
//       [document.getElementsByClassName('prompt').length - 1].innerHTML.slice(0, -1)
//   } else if (event.key[0] == 'E') {
//     createNewPrompt()
//   } else if (event.key[0] != 'B' || event.key[0] != 'E') {
//     document.getElementsByClassName('prompt')[
//       document.getElementsByClassName('prompt').length - 1
//     ].innerHTML += event.key[0]
//   }
// })

const prompt = ref('')
const commands = ref([])
const input = ref(null)

onMounted(() => {
  input.value.focus()
})

function ftrenter() {
  commands.value.push(prompt.value)
  console.log('123')
  prompt.value = ''
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
      FTR:{{ prompt }}
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
