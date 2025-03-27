<script setup>

import { computed, onMounted, ref } from 'vue'

const APIkey = '25ea68b1360998239ca904c381978516'
const APIurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

const temp = ref('')
const city = ref('')
const weather = ref('')
const country = ref('')

// const lon = computed(() => navigator.geolocation.getCurrentPosition((position) => position.coords.longitude));
// const lat = computed(() => navigator.geolocation.getCurrentPosition((position) => position.coords.latitude));

const lon = ref(0)
const lat = ref(0)

function getCoords() { 
  return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {lon.value = position.coords.longitude; console.log(position.coords.longitude)})
      navigator.geolocation.getCurrentPosition((position) => {lat.value = position.coords.latitude; console.log(position.coords.latitude)})
      console.log(lon.value, lat.value)
    setTimeout(() => {
      resolve()
    },500)
  })
}

async function getWeatherData() {
  console.log(`&lat=${lat.value}&lon=${lon.value}`)
  const response = await fetch(APIurl + `&appid=${APIkey}&lat=${lat.value}&lon=${lon.value}`)
  var data = await response.json()
  temp.value = data.main.temp
  city.value = data.name
  country.value = data.sys.country
  weather.value = data.weather[0].main 
  return response
}

onMounted(async () => {
  await getCoords()
  await getWeatherData()
  // setInterval(() => getCoords(), 10 * 60 * 1000)
  // setInterval(() => getWeatherData(), 2 * 60 * 1000)
})

</script>

<template>
<main>
  <h3>Weather Forecast</h3>
  <div class="main">
    <img src="@/assets/images/weather/clear.png" width="150px" alt="">
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