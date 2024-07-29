import { defineStore } from 'pinia'
const defaultSettings = { brightness: 100, screenSaver: false }

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return { ...defaultSettings }
  },
  actions: {
    updateBrightness(value) {
      this.brightness = value
    },
    resetSettings() {
      Object.assign(this, defaultSettings)
    }
  },
  getters: {
    brightnessValue: (store) => {
      return `${store.brightness - 20}`
    }
  }
})
