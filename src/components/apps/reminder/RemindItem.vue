<script setup>

import { computed } from 'vue'

import checkmark from '@/assets/images/checkmark.png'
import progressmark from '@/assets/images/progressmark.png'

const props = defineProps([
  "event"
])

const currentTime = new Date().toISOString().split('T')[1].slice(0,5)

const markImage = computed(() => {
  const eventDate = `${props.event.date}T${props.event.time}`
  return new Date(eventDate).getTime() < Date.now() ? checkmark : progressmark
})

</script>

<template>
  <div class="reminder">
    <div class="reminder__status">
      <img width="60%" height="60%" :src="markImage" alt="">
    </div>
    <div class="reminder__data">
      <h3>{{ event.name }}</h3>
      <p>{{ event.date }} <span v-if="event.time">at {{ event.time }}</span><span v-else>, Whole day</span></p>
    </div>
  </div>
</template>

<style scoped>

.reminder {
  display: flex;
  width: 300px;
  height: 80px;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
}

.reminder__data {
  padding: 7px;
}

.reminder__data h3 {
  font-size: 23px;
}

.reminder__data p {
  font-size: 18px;
  font-weight: 600;
  color: rgb(83, 83, 83);
}

.reminder__status {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: rgb(190, 190, 190);
}

</style>