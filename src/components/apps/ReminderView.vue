<script setup>

import { computed } from 'vue';
import { onMounted, ref } from 'vue';
import RemindItem from './reminder/RemindItem.vue';
import { useReminderStore } from '@/stores/reminder'
import { storeToRefs } from 'pinia';

const { addEvent } = useReminderStore()
const { events } = storeToRefs(useReminderStore())

const name = ref('')
const date = ref('')
const time = ref('')

function submitForm() {
  addEvent({
    name: name.value,
    date: date.value,
    time: time.value,
  })
  
  // console.log(Date.now())
}




const currentDate = new Date()

const fullDate = computed(() => {
  return currentDate.toISOString().split('T')[0];
});

function handleTimeUpdate(event) {
  const inputTime = event.target.value
  const tim = new Date().toISOString().split('T')[0];
  const time = new Date().toISOString().split('T')[1].slice(0,5)
  const dateNow = new Date(tim).getTime()
  const dateInp = new Date(date.value).getTime()
  console.log(dateNow, dateInp)
  if (dateNow === dateInp) {
    console.log(time)
    console.log(dateNow === dateInp)
  } else {
    console.log(inputTime)
  }
}

// const minTime = computed(() => {
//   const time = new Date().toISOString().split('T')[1].slice(0,5)
//   const datenow = Date.now()
//   const dateinp = new Date(date.value).getTime()
//   return datenow === dateinp ? time : "00:00"
// })

</script>

<template>
  <div class="wrapper">
    
    <h2 class="title">Reminder</h2>
    <form @submit.prevent="submitForm">
      <div class="wrapper-main">
        <label for="">
          <input type="text" name="" id="" v-model="name">
        </label>
        <button class="add">+</button>
      </div>
      <div>
        <label for="">
          <input type="date" :min="fullDate" name="" id="" v-model="date">
        </label>
        <label for="">
          <input type="time" name="" id="" @change="handleTimeUpdate($event)">
        </label>
      </div>
    </form>
    <div v-for="event in events" :key="event.id">
      <RemindItem class="reminder-item" :event />
    </div>
    {{ minDate }}
  </div>
</template>

<style scoped>
.wrapper {
  width: 700px;
  height: 100%;
  margin: auto;
  padding-top: 10px;
}

.reminder-item {
  margin-bottom: 15px;
}

form {
  margin-bottom: 30px;
}

.title {
  margin-bottom: 60px;
  font-size: 3em;
}

.add {
  background-color: transparent;
  border: 0;
  font-size: 24px;
  padding: 5px 15px;
}

input {
  border: 0;
  background-color: rgb(194, 194, 194);
  height: 30px;
}

.wrapper-main {
  display: flex;
  align-items: center;
}


</style>