import { defineStore } from 'pinia'

export const useStatusesStore = defineStore('statuses', {
  state: () => {
    return { isMenuShown: false }
  },
  actions: {
    switchMenuStatus(status = true) {
      this.isMenuShown = status
    }
  }
})
