<script setup>
import ScreenSleep_downerleft from './ScreenSleep/ScreenSleep_downerleft.vue'
import ScreenSleep_downerright from './ScreenSleep/ScreenSleep_downerright.vue'
import ScreenSleep_downercenter from './ScreenSleep/ScreenSleep_downercenter.vue'

import ScreenSleep_upperleft from './ScreenSleep/ScreenSleep_upperleft.vue'
import ScreenSleep_upperright from './ScreenSleep/ScreenSleep_upperright.vue'
import ScreenSleep_uppercenter from './ScreenSleep/ScreenSleep_uppercenter.vue'

import { computed, ref } from 'vue'

import { useSettingsStore } from '@/stores/settings'
import { useStatusesStore } from '@/stores/statuses'
import { storeToRefs } from 'pinia'

const { screenSaverStyle, backgroundId } = storeToRefs(useSettingsStore())
const { screenSaverStyler } = storeToRefs(useStatusesStore())

const option = ref(screenSaverStyle.value)

function optionAdd() {
  if (option.value < 6) {
    option.value++
  }
}

function optionSub() {
  if (option.value > 1) {
    option.value--
  }
}

function saveChanges() {
  screenSaverStyle.value = option.value
  screenSaverStyler.value = false
}

function discardChanges() {
  screenSaverStyler.value = false
}

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 37) {
    optionSub()
  } else if (e.keyCode === 39) {
    optionAdd()
  }
};

const screenSleepOption1 = computed(() => {
  return option.value == 1
})

const screenSleepOption2 = computed(() => {
  return option.value == 2
})

const screenSleepOption3 = computed(() => {
  return option.value == 3
})

const screenSleepOption4 = computed(() => {
  return option.value == 4
})

const screenSleepOption5 = computed(() => {
  return option.value == 5
})

const screenSleepOption6 = computed(() => {
  return option.value == 6
})



const bg1 = computed(() => {
  return backgroundId.value == 1
})

const bg2 = computed(() => {
  return backgroundId.value == 2
})

const bg3 = computed(() => {
  return backgroundId.value == 3
})

const bg4 = computed(() => {
  return backgroundId.value == 4
})

</script>

<template>
  <div class="main2" :class="{ 'bg1': bg1, 'bg2': bg2, 'bg3': bg3, 'bg4': bg4 }"></div>

  <ScreenSleep_downerleft v-if="screenSleepOption1" />
  <ScreenSleep_downerright v-if="screenSleepOption2" />
  <ScreenSleep_downercenter v-if="screenSleepOption3" />

  <ScreenSleep_upperleft v-if="screenSleepOption4" />
  <ScreenSleep_upperright v-if="screenSleepOption5" />
  <ScreenSleep_uppercenter v-if="screenSleepOption6" />

  <div class="optioner">
    <div class="item" :class="{ 'item__active': option==1 }"></div>
    <div class="item" :class="{ 'item__active': option==2 }"></div> 
    <div class="item" :class="{ 'item__active': option==3 }"></div>
    <div class="item" :class="{ 'item__active': option==4 }"></div>
    <div class="item" :class="{ 'item__active': option==5 }"></div>
    <div class="item" :class="{ 'item__active': option==6 }"></div>
  </div>

  <button class="save" @click="saveChanges()">Save changes</button>
  <button class="discard" @click="discardChanges()">Discard changes</button>
</template>

<style scoped>
.main2 {
  position: absolute;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.bg1 {
  background-image: url("../assets/images/bg1.png");
}

.bg2 {
  background-image: url("../assets/images/bg2.png");
}

.bg3 {
  background-image: url("../assets/images/bg3.png");
}

.bg4 {
  background-image: url("../assets/images/bg4.png");
}

.optioner {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 700px;
  height: 10px;
  left: 50%;
  top: calc(100% - 10px);
  transform: translateX(-50%);
  z-index: 2000;
}

.save {
  position: absolute;
  width: 100px;
  height: 40px;
  top: 20px;
  left: calc(100% - 50px);
  transform: translate(-50%,-50%);
  border: 0;
  border-radius: 10px;
  background-color: rgb(36, 91, 255);
  color: white;
}

.discard {
  position: absolute;
  width: 110px;
  height: 40px;
  top: 20px;
  left: calc(100% - 50px);
  transform: translate(-170%,-50%);
  border: 0;
  border-radius: 10px;
  background-color: rgb(170, 170, 170);
  color: white;
}

.item {
  background-color: gray;
  width: 100px;
  height: 10px;
  border-radius: 10px;
}

.item__active {
  background-color: rgb(36, 91, 255);
}
</style>
