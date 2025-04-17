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
    })
    clearForm()
  } else {
    isError.value = true
  }
}




const currentDate = new Date(); 
const fullDate = computed(() => currentDate.toISOString().split('T')[0]);

const isDateInputSelected = computed(() => !date.value);

function handleTimeUpdate(event) {
  const inputTime = event.target.value
  const currentTime = new Date().toISOString().split('T')[1].slice(0,5)
  const dateNow = new Date(fullDate.value).getTime()
  const dateInp = new Date(date.value).getTime()
  console.log(dateNow, dateInp)
  console.log(new Date(fullDate.value))
  if (dateNow === dateInp) {
    time.value = currentTime

    const totalTime = time.value.split(':').reduce((accumulator, element, index) => {
      return index ? accumulator + element : accumulator + element * 60
    }, 0)
    const totalCurrentTime = currentTime.split(':').reduce((accumulator, element, index) => {
      return index ? accumulator + element : accumulator + element * 60
    }, 0)
    
    console.log(totalTime, totalCurrentTime)
  } else {
    time.value = event.target.value
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
        <span class="error" v-if="isError">Please, type something in these inputs</span>
      </div>
      <div>
        <label for="">
          <input type="date" :min="fullDate" name="" id="" v-model="date">
        </label>
        <label for="">
          <input type="time" :disabled="isDateInputSelected" name="" id="" v-model="time" @change="handleTimeUpdate($event)">
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

.error {
  color: red;
}

</style>