import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return { brightness: '80' }
  },
  actions: {
    updateBrightness(value) {
      this.brightness = value
    }
  }
})
