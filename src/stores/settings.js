import { defineStore } from 'pinia'
import defaultAvatarImage from '@/assets/images/default-user.jpg'
const defaultSettings = { brightness: 100, screenSaver: false }

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      ...defaultSettings,
      activeSetting: 'profile',
      username: 'Default User',
      userAvatar: '',
      password: 'default'
    }
  },
  actions: {
    updateBrightness(value) {
      this.brightness = value
    },
    resetSettings() {
      Object.assign(this, defaultSettings)
    },
    setActiveSetting(settingName) {
      this.activeSetting = settingName.toLowerCase()
      console.log(settingName)
    },
    saveUsername(username) {
      this.username = username
    },
    updateAvatar(URLL) {
      // this.userAvatar = URLL
      // console.log(URL.createObjectURL(URLL))
      const image = URL.createObjectURL(URLL)
      console.log(image)
    }
  },
  getters: {
    brightnessValue: (store) => {
      return `${store.brightness - 20}`
    },
    userImage: (store) => {
      return store.userAvatar ? store.userAvatar : defaultAvatarImage
    }
  }
})
