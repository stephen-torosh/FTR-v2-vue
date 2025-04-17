<script setup>

import { ref } from 'vue'

const YearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"  
]


const month = ref('')
const WeekDayMonthStart = ref('')

const date = new Date()
const firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

month.value = YearMonths[parseInt(date.getMonth())]

function SetWeekDayMonthStart() {
    WeekDayMonthStart.value = firstOfMonth.getDay() - 1
}

SetWeekDayMonthStart()

console.log(WeekDayMonthStart.value)

</script>

<template>
  <main>
    <h1>Calendar</h1>
    <p>{{ month }}</p>
    <div class="calendar">
        <div class="item">Mon</div>
        <div class="item">Tue</div>
        <div class="item">Wed</div>
        <div class="item">Thu</div>
        <div class="item">Fri</div>
        <div class="item">Sat</div>
        <div class="item">Sun</div>
        <div class="item" />
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
  </main>
</template>

<style scoped>

main {
  width: 350px;
  margin: 25px auto 0;
  padding: 15px;
  border-width: 10px;
  border: solid black 3px;
  border-radius: 20px;
  background-color: white;
}

p {
  color: rgb(48, 48, 48);
}

.calendar {
    display: flex;
    flex-wrap: wrap;
    width: 245px;
}

.calendar > .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: rgb(255, 255, 255);
}

</style>