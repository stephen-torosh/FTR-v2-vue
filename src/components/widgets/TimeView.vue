<script setup>


</script>

<template>

  <main>
    <h1>Global Time</h1>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </main>

</template>

<style scoped>


h1 {
    margin: 0;
    width: 100%;
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: 25px auto 0;
  gap: 20px;
  border-radius: 20px;
  background-color: rgb(33, 33, 33);
  border: 3px rgb(0, 0, 0) solid;
  width: 350px;
  padding: 15px;
  color: white;
}

.item {
    display: flex;
    width: 90px;
    height: 90px;
}
</style>