import { defineStore } from 'pinia'
import { useSettingsStore } from './settings'

export const useStatusesStore = defineStore('statuses', {
  state: () => {
    return {
      isMenuShown: false,
      timer: null,
      isScreenSaverOn: false,
      isUnlocked: false,
      isPasswordCorrect: true
    }
  },
  actions: {
    switchMenuStatus(status = true) {
      this.isMenuShown = status
    },
    startScreenSaverTimer() {
      console.log(this.isScreenSaverOn)
      if (!this.isScreenSaverOn) return
      const settingsStore = useSettingsStore()
      let screenSaverTimer = () => {
        console.log('timer out')
        settingsStore.screenSaver = true
      }
      this.timer = setTimeout(screenSaverTimer, 3000)
    },
    restartScreenSaverTimer() {
      const settingsStore = useSettingsStore()
      clearTimeout(this.timer)
      this.startScreenSaverTimer()
      settingsStore.screenSaver = false
    },
    unlockScreen(passwordInput) {
      const settingsStore = useSettingsStore()
      const { password } = settingsStore
      console.log(passwordInput)
      if (password === passwordInput) {
        this.isUnlocked = true
      } else {
        this.isPasswordCorrect = false
      }
    }
  }
})
