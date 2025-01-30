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

const isMinutesRotate = ref(false)
const isHoursRotate = ref(false)

setInterval(() => {
  date.value = new Date()
  const currentdate = new Date()

  if (currentdate.getSeconds() == 59) {
    if (currentdate.getMinutes() == 59) {
      isMinutesRotate.value = true
      isHoursRotate.value = true
    } else {
      isMinutesRotate.value = true
    }
    setTimeout(() => {
      isMinutesRotate.value = false
      isHoursRotate.value = false
    }, 2000)
  }
}, 1000)

const minutes = computed(() =>
  date.value.getMinutes() > 9 ? date.value.getMinutes() : `0${date.value.getMinutes()}`
)

//date.value.getHours()

const statusStore = useStatusesStore()

// const main = document.getElementsByClassName('main')
// main.addEventListener('onmousemove', mouseMoved)
</script>

<template>
  <div class="main" @mousemove="statusStore.restartScreenSaverTimer()">
    <div class="content">
      <span class="scene">
        <div class="cube-hours">
          <div class="timesleeperTime" :class="{ 'timesleeperTime-animation': isHoursRotate }">
            {{ date.getHours() }}
          </div>
        </div>
        :
        <div class="cube-minutes">
          <div class="timesleeperTime" :class="{ 'timesleeperTime-animation': isMinutesRotate }">
            {{ minutes }}
          </div>
        </div>
      </span>
      <span class="timesleeperDate">{{ fullDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: end;
  align-items: end;
  position: absolute;
  padding-right: 50px;
  padding-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
}

.cube-hours,
.cube-minutes {
  perspective: 500px;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
}

.scene {
  font-size: 7em;
  display: flex;
  justify-content: end;
}

.timesleeperTime {
  width: 100%;
  justify-content: center;
}

.timesleeperTime-animation {
  animation: clockRotation 2s 1;
}

.timesleeperDate {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 3em;
}
@keyframes clockRotation {
  0% {
    transform: rotateX(0deg);
    transform: translateZ(-100);
  }
  100% {
    transform: rotateX(360deg);
    transform: translateZ(-100);
  }
}
</style>
