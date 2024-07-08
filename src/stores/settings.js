import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return { brigthness: '80' }
  },
  actions: {
    updateBrightness(value) {
      console.log(this.brigthness)
      this.brigthness = value
      console.log(this.brigthness)
    }
  }
})
