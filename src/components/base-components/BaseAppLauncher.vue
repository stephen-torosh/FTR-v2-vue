<script setup>

defineProps(['name', 'image', 'image-alt'])
</script>

<template>
  <RouterLink :to="'/'+name">
    <div class="app-icon app-icon-wrapper">
      <img class="app-icon__image" :src="image" :alt="image - alt" width="50%" height="50%" />
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
  width: calc(100vw / 16);
  height: calc(100vw / 16);
  font-size: 1em;
  font-family: cursive;
}

.app-icon-wrapper:hover {
  opacity: 0.8;
}
</style>
