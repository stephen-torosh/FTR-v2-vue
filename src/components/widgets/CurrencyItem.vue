<script setup>
import { onBeforeMount, computed } from 'vue'
import { ref } from 'vue'


const props = defineProps(['currency'])

const currencyData = ref(null)

const dataReady = ref(false)

onBeforeMount(async () => {
  const response = await fetch(`https://currency-rate-exchange-api.onrender.com/${props.currency.toLowerCase()}`)
  currencyData.value = await response.json()
  dataReady.value = true
})

const flag = computed(() => currencyData.value.flagImage)

const currencyName = computed(() => currencyData.value.currencyName)

const price = computed(() => `${currencyData.value.rates[props.currency.toLowerCase()].uah.toFixed(2)}`)
</script>

<template>
  <div v-if="dataReady" class="currency-item">
    <div>
      <div class="title">
        <img width="25" :src="flag" alt="">
        <span>{{ currency }}</span>
      </div>
      <div class="name">
        {{ currencyName }} to Ukrainian Hryvnia
      </div>
    </div>
    <div class="price">
      {{ price }}&#8372;
    </div>
  </div>
  
</template>

<style scoped>

.title {
  color: white;
  font-size: 20px;
}

.title span {
  margin-left: 10px;
}

.name {
  color: rgb(190, 190, 190);
  font-size: 14px;
}

.currency-item {
  display: flex;
  justify-content: space-between;
}

.price {
  font-size: 30px;
}
</style>