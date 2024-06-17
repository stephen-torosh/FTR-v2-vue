import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return { brigthness: '80' }
  },
  actions: {
    updateBrightness(value) {
      this.brigthness = value
    }
  }
})
