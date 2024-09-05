<script setup>
import { useStatusesStore } from '@/stores/statuses'
import { computed, ref } from 'vue'

const date = ref(new Date())

const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const YearMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const fullDate = computed(
  () =>
    `${WeekDays[parseInt(date.value.getDay()) - 1]} - ${date.value.getDate()} ${YearMonths[parseInt(date.value.getMonth())]}`
)

setInterval(() => {
  date.value = new Date()
}, 1000)

const fullTime = computed(
  () =>
    `${date.value.getHours()}:${date.value.getMinutes() > 9 ? date.value.getMinutes() : `0${date.value.getMinutes()}`}`
)

const statusStore = useStatusesStore()

// const main = document.getElementsByClassName('main')
// main.addEventListener('onmousemove', mouseMoved)
</script>

<template>
  <div class="main" @mousemove="statusStore.restartScreenSaverTimer()">
    <div class="timesleeperTime">{{ fullTime }}</div>
    <div class="timesleeperDate">{{ fullDate }}</div>
  </div>
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

.timesleeperTime {
  font-size: 7em;
  display: flex;
  width: 100%;
  justify-content: center;
}

.timesleeperDate {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.5em;
}
</style>
