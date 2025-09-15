<script setup>

import { computed } from 'vue'

import checkmark from '@/assets/images/checkmark.png'
import progressmark from '@/assets/images/progressmark.png'
import { useReminderStore } from '@/stores/reminder'
import { ref } from 'vue'
import { onMounted } from 'vue'

const props = defineProps([
  "event"
])

const markImage = computed(() => props.event.status ? checkmark : progressmark)

const { closeEvent } = useReminderStore()

</script>

<template>
  <div class="reminder" :class="{ 'reminder__history-item': event.isHistory }">
    <div class="reminder__status">
      <img width="60%" height="60%" :src="markImage" alt="">
    </div>
    <div class="reminder__data">
      <h3 :class="{ 'h3-small': event.name.length > 16, 'h3-big': event.name.length <= 16 }">{{ event.name }}</h3>
      <p>{{ event.date }} <span v-if="event.time">at {{ event.time }}</span><span v-else>, Whole day</span></p>
    </div>
    <button v-if="!event.isHistory" class="reminder__cross" @click="closeEvent(event.name)">x</button>
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
  width: 145px;
}

.h3-big {
  font-size: 23px;
}

.h3-small {
  font-size: 17px;
}

.reminder__data p {
  font-size: 14px;
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

.reminder__cross {
  background-color: red;
  border: 0;
  border-radius: 5px;
  color: white;
  margin: auto;
  width: 35px;
  height: 35px;
  font-size: 20px;
}

.reminder__history-item {
  opacity: 0.5;
}

</style>