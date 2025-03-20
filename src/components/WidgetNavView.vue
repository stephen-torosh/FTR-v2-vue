<script setup>

import { useStatusesStore } from '@/stores/statuses';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { ref } from 'vue';

import WeatherView from './widgets/WeatherView.vue';

const { isWidgetNav } = storeToRefs(useStatusesStore())

const date = ref(new Date())






setInterval(() => {
  date.value = new Date()
}, 1000)

const fullTime = computed(
  () =>
    `${date.value.getHours()}:${date.value.getMinutes() > 9 ? date.value.getMinutes() : `0${date.value.getMinutes()}`}`
)

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

</script>

<template>
    <div class="container" :class="{ 'container-show': isWidgetNav }">
        <span class="title">{{ fullTime }}</span>
        <span class="date">{{ fullDate }}</span>
        <WeatherView />
    </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 100%;
  font-family: caveat;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.204);
  transition: 0.15s;
  backdrop-filter: blur(4px);

  overflow-y: scroll;
}

.container-show {
  transform: translateX(-100%);
}

.title {
  margin-top: 10px;
  color: white;
  max-height: 100px;
  font-size: 80px;
  font-weight: 400;
  text-align: end;
  margin-right: 30px;
}

.date {
  color: white;
  font-size: 25px;
  font-weight: 400;
  text-align: end;
  margin-right: 25px;
  margin-bottom: 20px;
  
}
</style>