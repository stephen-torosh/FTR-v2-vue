<script setup>

function mouseMoved() {
  console.log('MOUSE MOVED!!!!!!!!!!!!!!!!!!!')
}

// const main = document.getElementsByClassName('main')
// main.addEventListener('onmousemove', mouseMoved)
</script>

<template>
  <div class="main" @mousemove="mouseMoved"></div>
</template>

<style scoped>
.main {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
