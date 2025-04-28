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
    },
    checkExpiredEvents() {
      this.events = this.events.map((event) => {
        const eventDate = `${event.date}T${event.time}`
        if (new Date(eventDate).getTime() < Date.now()) {
          event.status = true
        }
        return event
      }) 
    }
  }
})
