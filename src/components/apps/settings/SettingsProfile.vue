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
    !imageFile.value || updateAvatar(imageFile.value)
  }
}

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});

async function getImage($event) {
  avatarImageUrl.value = await toBase64($event.target.files[0])
  imageFile.value = await toBase64($event.target.files[0])
}
</script>

<template>
  <button v-show="isEditShowed" class="edit-button" @click="switchEditMode">Edit info</button>
  <button v-show="!isEditShowed" class="save-button" @click="switchEditMode">Save info</button>
  <div class="centered-flex profile-image">
    <img v-if="!avatarImageUrl" :src="avatar" class="avatar" width="150px" alt="" />
    <img v-else :src="avatarImageUrl" class="avatar" width="150px" height="150px" alt="" />
    <input
      v-show="!isEditShowed"
      id=""
      type="file"
      name=""
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
  font-family: caveat;
}

.edit-button,
.save-button {
  display: block;
  margin: 15px auto 0;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  font-family: caveat;
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
