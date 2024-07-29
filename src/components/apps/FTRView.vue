<script>
function createNewPrompt() {
  let newpromt = document.getElementById('terminal').createElement('div')
}

document.addEventListener('keydown', () => {
  if (event.key[0] == 'B') {
    document.getElementById('prompt').innerHTML = document
      .getElementById('prompt')
      .innerHTML.slice(0, -1)
    console.log('B!!!')
  } else if (event.key[0] == 'E') {
    alert('hr')
    createNewPrompt()
  } else if (event.key[0] != 'B' || event.key[0] != 'E') {
    document.getElementById('prompt').innerHTML += event.key[0]
    console.log(event.key[0])
  }
})
</script>

<template>
  <div id="terminal">
    <div id="prompt">FTR:</div>
  </div>
</template>

<style scoped>
#terminal {
  background-color: rgb(41, 41, 41);
  width: 100%;
  height: 100%;
  padding: 5px;
}

#prompt {
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
}
</style>
