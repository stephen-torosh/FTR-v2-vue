import { defineStore } from 'pinia'
import { useSettingsStore } from './settings'

export const useStatusesStore = defineStore('statuses', {
  state: () => {
    return {
      isMenuShown: false,
      timer: null,
      isScreenSaverOn: false,
      isUnlocked: true,
      isPasswordCorrect: true,
      screenSaverStyler: false,
      isWidgetNav: false,
    }
  },
  actions: {
    switchMenuStatus(status = true) {
      this.isMenuShown = status
    },
    startScreenSaverTimer() {
      if (!this.isScreenSaverOn) return
      const settingsStore = useSettingsStore()
      let screenSaverTimer = () => {
        settingsStore.screenSaver = true
      }
      this.timer = setTimeout(screenSaverTimer, settingsStore.screensaverdelay * 1000)
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

      if (password === passwordInput) {
        this.isUnlocked = true
      } else {
        this.isPasswordCorrect = false
      }
    },
    setWidgetNav(status) {
      this.isWidgetNav = status
    }
  }
})
