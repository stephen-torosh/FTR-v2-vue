<script setup>

import { useStatusesStore } from '@/stores/statuses';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { ref } from 'vue';

const { isWidgetNav } = storeToRefs(useStatusesStore())

const date = ref(new Date())

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
        <h1 class="title">{{ fullTime }}</h1>
        <h2 class="date">{{ fullDate }}</h2>
    </div>
</template>

<style scoped>

.container {
  display: flex;
  position: absolute;
  left: 100%;
  font-family: caveat;
  width: 400px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.204);
  transition: 0.15s;
  backdrop-filter: blur(4px);
}

.container-show {
  transform: translateX(-100%);
}

.title {
    margin-top: 10px;
    color: white;
    font-size: 80px;
    font-weight: 400;
    margin-left: 100%;
    transform: translateX(-120%);
}

.date {
    color: white;
    font-size: 40px;
    font-weight: 400;
}
</style>