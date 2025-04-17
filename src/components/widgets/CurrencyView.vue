<script setup>

import CurrencyItem from './CurrencyItem.vue';

const currencyList = ["USD", "GBP", "EUR"]


</script>

<template>
  <main>
    <div>
      <h1>Current currency cost</h1>
      <p>To Ukrainain Hryvnia</p>
    </div>
    <CurrencyItem v-for="item in currencyList" :key="item" :currency="item"/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  margin: 25px auto 0;
  gap: 20px;
  border-radius: 20px;
  background-color: rgb(67, 67, 67);
  border: 1.5px rgb(135, 135, 135) solid;
  width: 350px;
  padding: 15px;
  color: white;
}

p {
  color: rgb(190, 190, 190);
}
</style>