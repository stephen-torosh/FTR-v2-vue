<script setup>
import { ref, computed } from 'vue'
import DefaultUserIcon from '@/assets/images/default-user.jpg'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settingsStore = useSettingsStore()
const { saveUsername, updateAvatar } = settingsStore
const { username, userAvatar } = storeToRefs(settingsStore)
const avatarImageUrl = ref('')

const usernameLocal = ref(username.value)
const imageFile = ref(null)
const isEditShowed = ref(true)

const avatar = computed(() => {
  return userAvatar.value === '' ? DefaultUserIcon : userAvatar.value
})

function switchEditMode() {
  isEditShowed.value = !isEditShowed.value

  if (isEditShowed.value) {
    saveUsername(usernameLocal.value)
    updateAvatar(imageFile.value)
  }
}

function getImage($event) {
  avatarImageUrl.value = URL.createObjectURL($event.target.files[0])
  imageFile.value = URL.createObjectURL($event.target.files[0])
}
</script>

<template>
  <button v-show="isEditShowed" @click="switchEditMode" class="edit-button">Edit info</button>
  <button v-show="!isEditShowed" @click="switchEditMode" class="save-button">Save info</button>
  <div class="centered-flex profile-image">
    <img :src="avatar" v-if="!avatarImageUrl" class="avatar" width="150px" alt="" />
    <img :src="avatarImageUrl" class="avatar" v-else width="150px" height="150px" alt="" />
    <input
      v-show="!isEditShowed"
      type="file"
      name=""
      id=""
      accept="image/png, image/jpeg"
      @change="getImage"
    />
  </div>
  <div v-show="isEditShowed" class="profile-title centered">{{ username }}</div>
  <input v-show="!isEditShowed" v-model="usernameLocal" class="profile-title-input" type="text" />
</template>

<style scoped>
.profile-title {
  font-size: 40px;
}

.profile-title-input {
  display: block;
  margin: auto;
  font-size: 40px;
  background-color: transparent;
  text-align: center;
}

.edit-button,
.save-button {
  display: block;
  margin: 15px auto 0;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
}

.profile-image input {
  position: absolute;
  top: 233px;
  right: 233px;
}

.avatar {
  border-radius: 100%;
  margin: 25px;
  width: 150px;
  height: 150px;
}
</style>
