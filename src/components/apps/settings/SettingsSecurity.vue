<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '@/stores/settings'

const oldpass = ref('')
const newpass = ref('')

const showpass = ref(false)

const errormessage = ref('')
const isSuccess = ref(false)

const { password } = storeToRefs(useSettingsStore())
const { changePassword } = useSettingsStore()

function changepass() {
  if (oldpass.value === '' || newpass.value === '') {
    errormessage.value = 'Please type in something in these inputs!'
    return
  }
  if (oldpass.value === newpass.value) {
    errormessage.value = 'Please enter new password, not the same!'
    return
  }
  if (newpass.value.length < 6) {
    errormessage.value = 'Sorry, but password must be more than 5 symbols'
    return
  }
  if (oldpass.value !== password.value) {
    errormessage.value = 'sorry, but the entered old password is incorrect'
    return
  }

  changePassword(newpass.value)
  oldpass.value = ''
  newpass.value = ''
  errormessage.value = ''
  isSuccess.value = true
  showpass.value = false

  setTimeout(() => {
    isSuccess.value = false
  }, 2000)
}
</script>

<template>
  <div class="title">Security</div>
  <div class="changepass">Change Password</div>
  <form @submit.prevent="changepass">
    <label for="">
      Old Password:
      <input
        name=""
        id=""
        v-model="oldpass"
        :type="showpass ? 'type' : 'password'"
        placeholder="old password"
      />
    </label>
    <label for="">
      New Password:
      <input
        name=""
        id=""
        v-model="newpass"
        :type="showpass ? 'type' : 'password'"
        placeholder="new password"
      />
    </label>
    <label for=""> Show Password <input type="checkbox" v-model="showpass" /></label>
    <button class="buttonsub" type="submit">Change Password</button>
  </form>
  <p class="errormessage">{{ errormessage }}</p>
  <p class="successmessage" v-if="isSuccess">Password changed Successfully!</p>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: x-large;
  margin-bottom: 10px;
}

.changepass {
  text-align: center;
  margin-bottom: 5px;
}

.buttonsub {
  font-family: caveat;
}

input {
  font-family: Arial, Helvetica, sans-serif;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form > label {
  margin-bottom: 5px;
}

p {
  text-align: center;
  font-size: large;
}

.successmessage {
  color: rgb(113, 188, 0);
  animation: fadeout 2s;
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.errormessage {
  color: red;
}
</style>
