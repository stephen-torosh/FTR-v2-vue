<script setup>
defineProps(['name', 'image', 'image-alt'])
</script>

<template>
  <RouterLink style="text-decoration: none" :to="{ name: 'app', params: { appname: name } }">
    <div class="app-icon app-icon-wrapper">
      <img class="app-icon__image" :src="image" :alt="image - alt" width="40%" height="40%" />
      {{ name }}
    </div>
  </RouterLink>
</template>

<style scoped>
.app-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  width: calc(100vw / 12);
  height: calc(100vw / 12);
  font-size: 25px;
  font-family: caveat;
}

img {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 20%;
}

.app-icon-wrapper:hover {
  opacity: 0.8;
}
</style>
