import { defineStore } from 'pinia'
import defaultAvatarImage from '@/assets/images/default-user.jpg'
const defaultSettings = { brightness: 100, screenSaver: false, screenSaverStyle: 1 }

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return {
      ...defaultSettings,
      activeSetting: 'profile',
      username: 'Default User',
      userAvatar: '',
      password: 'default',
      screenSaverStyle: 1
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
    },
    saveUsername(username) {
      this.username = username
    },
    updateAvatar(file) {
      this.userAvatar = file
    },
    changePassword(password) {
      this.password = password
    },
    setScreenSaverStyle(style) {
      this.screenSaverStyle = style
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
