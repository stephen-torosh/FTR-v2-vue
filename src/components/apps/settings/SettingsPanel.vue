<script setup>
import ProfileIcon from '@/assets/images/person-circle.svg'
import SecurityIcon from '@/assets/images/lock-fill.svg'
import DisplayIcon from '@/assets/images/display.svg'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()

const { setActiveSetting } = settingsStore
const { activeSetting } = storeToRefs(settingsStore)

const ButtonNames = [
  { name: 'PROFILE', icon: ProfileIcon },
  { name: 'SECURITY', icon: SecurityIcon },
  { name: 'DISPLAY', icon: DisplayIcon }
]
</script>

<template>
  <aside>
    <nav class="nav">
      <button
        @click="setActiveSetting(item.name)"
        v-for="item in ButtonNames"
        class="nav__item item"
        :key="item.name"
        :class="{ 'nav__item--active': activeSetting === item.name.toLowerCase() }"
      >
        <img class="item__image" :src="item.icon" alt="" />
        <span class="item__text"
          ><b>{{ item.name }}</b></span
        >
      </button>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  width: 230px;
  height: 100%;
  box-shadow: 5px 0px 20px #636363ac;
}

.nav {
  &__item {
    width: 90%;
    height: 30px;
    margin: 10px 5%;
    border: 0;
    background-color: rgb(216, 216, 216);
    border-radius: 6px;
    color: black;

    &--active {
      background-color: rgb(138, 138, 138);
      color: white;
    }
  }
}

.item {
  &__text {
    line-height: 30px;
  }

  &__image {
    transform: translate(-5px, 3px);
  }
}
</style>
