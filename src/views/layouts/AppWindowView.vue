<template>
  <div class="app-window">
    <h4 style="margin-left: 10px">${app}</h4>
    <button id="windowClosingButton" style="margin-right: 10px">X</button>
  </div>
</template>

<style scoped>
.app-window {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  height: 30px;
}
</style>
