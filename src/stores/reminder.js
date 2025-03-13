import { defineStore } from 'pinia'

export const useReminderStore = defineStore('reminder', {
  state: () => {
    return {
      events: []
    }
  },
  actions: {
    addEvent(eventData) {
      this.events.push(eventData)
    }
  }
})
