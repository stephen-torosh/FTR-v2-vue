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
  border-radius: 20%;
}

.app-icon-wrapper:hover {
  opacity: 0.8;
}
</style>
