<script setup>

import { computed } from 'vue';
import { ref } from 'vue';
import RemindItem from './reminder/RemindItem.vue';
import { useReminderStore } from '@/stores/reminder'
import { storeToRefs } from 'pinia';

const { addEvent } = useReminderStore()
const { getNonHistoricalEvents, getHistoricalEvents } = storeToRefs(useReminderStore())

const name = ref('')
const date = ref('')
const time = ref('')

const isError = ref(false)

function clearForm() {
  name.value = ''
  date.value = ''
  time.value = ''
}

function submitForm() {
  isError.value = false
  if (name.value && date.value) {
    addEvent({
      name: name.value,
      date: date.value,
      time: time.value,
      status: false,
      isHistory: false,
    })
    clearForm()
  } else {
    isError.value = true
  }
}

const event = new Date();
const options = {
  hour: "2-digit",
  minute: "2-digit"
};


const currentDate = new Date(); 
const fullDate = computed(() => currentDate.toISOString().split('T')[0]);

const isDateInputSelected = computed(() => !date.value);

function handleTimeUpdate(event) {
  const inputTime = event.target.value
  const currentTime = new Date().toLocaleDateString(undefined, options).split(',')[1].slice(1,6)
  const dateNow = new Date(fullDate.value).getTime()
  const dateInp = new Date(date.value).getTime()
  if (dateNow === dateInp) {
    
    const totalTime = time.value.split(':').reduce((accumulator, element, index) => {
      return Number(index ? accumulator + element : accumulator + element * 60)
    }, 0)
    const totalCurrentTime = currentTime.split(':').reduce((accumulator, element, index) => {
      return Number(index ? accumulator + element : accumulator + element * 60)
    }, 0)

    if (totalTime < totalCurrentTime) {
      time.value = currentTime
    }
    
  } else {
    time.value = event.target.value
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
    <div class="main">
      <h2 class="title">Reminder</h2>
      <form @submit.prevent="submitForm">
        <div class="wrapper-main">
          <label for="">
            <input id="" v-model="name" type="text" name="">
          </label>
          <button class="add">+</button>
          <span v-if="isError" class="error">Please, type something in these inputs</span>
        </div>
        <div>
          <label for="">
            <input id="" v-model="date" type="date" :min="fullDate" name="">
          </label>
          <label for="">
            <input id="" v-model="time" type="time" :disabled="isDateInputSelected" name="" @change="handleTimeUpdate($event)">
          </label>
        </div>
      </form>
      <div v-for="event in getNonHistoricalEvents" :key="event.id">
        <RemindItem class="reminder-item" :event />
      </div>
      <h1 style="margin-bottom: 15px;">History</h1>
      <div v-for="event in getHistoricalEvents" :key="event.id">
        <RemindItem class="reminder-item" :event />
      </div>
      {{ minDate }}
    </div>
    
  </div>
</template>

<style scoped>
.wrapper {
  height: 100%;
  padding-top: 10px;
  overflow-y: scroll;
}

.main {
  width: 700px;
  transform: translateX(50%);
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

.error {
  color: red;
}

</style>