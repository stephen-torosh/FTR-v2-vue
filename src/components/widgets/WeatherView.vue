<script setup>

import { computed, onMounted, ref } from 'vue'

const APIkey = '25ea68b1360998239ca904c381978516'
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

const temp = ref('')
const city = ref('')
const weatherStatus = ref('')
const weatherDescription = ref("")
const country = ref('')

const weatherImg = computed(() => weatherStatus.value && `https://openweathermap.org/img/wn/${weatherStatus.value}@2x.png`)


// const lon = computed(() => navigator.geolocation.getCurrentPosition((position) => position.coords.longitude));
// const lat = computed(() => navigator.geolocation.getCurrentPosition((position) => position.coords.latitude));

const lon = ref(0)
const lat = ref(0)

function getCoords() { 
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {lon.value = position.coords.longitude;})
      navigator.geolocation.getCurrentPosition((position) => {lat.value = position.coords.latitude;})
    setTimeout(() => {
      resolve()
    },500)
  })
}

async function getWeatherData() {
  const response = await fetch(APIurl + `&appid=${APIkey}&lat=${lat.value}&lon=${lon.value}`)
  var data = await response.json()
  const { description, icon } = data.weather[0]
  weatherStatus.value = icon
  weatherDescription.value = description
  temp.value = data.main.temp
  city.value = data.name
  country.value = data.sys.country
  return response
}

onMounted(async () => {
  await getCoords()
  await getWeatherData()
  setInterval(() => getCoords(), 10 * 60 * 1000)
  setInterval(() => getWeatherData(), 2 * 60 * 1000)
})

</script>

<template>
<main>
  <h3>Weather Forecast</h3>
  <div class="main">
    <img :src="weatherImg" width="150px" alt="">
    <p>{{ weatherDescription }}</p>
    <h1 id="temp">{{ Math.round(temp) }}°c</h1>
    <h2 id="region">{{ city }}, {{ country }}</h2>
  </div>
</main>
</template>

<style scoped>

main {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(47deg, rgba(54, 9, 121, 0.8) 14%, rgba(0,212,255,0.8) 100%);
  border-radius: 20px;
  width: 350px;
  height: 350px;
  padding: 20px;
  color: white;
}

.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.main h2, .main h1 {
  font-weight: 500;
}

.main h1 {
  font-size: 70px;
}

.main h2 {
  font-size: 40px;
  font-weight: 300;
}

h3 {
  font-size: 15px;
  font-weight: 400;
  text-align: center;
}

</style>