import { defineStore } from 'pinia'

export const useReminderStore = defineStore('reminder', {
  state: () => {
    return {
      events: [],
    }
  },
  actions: {
    addEvent(eventData) {
      const foundIndex = this.events.findIndex((elem) => elem.name === eventData.name)
      if (foundIndex < 0) this.events.push(eventData)
    },
    checkExpiredEvents() {
      this.events = this.events.map((event) => {
        const eventDate = `${event.date}T${event.time}`
        if (new Date(eventDate).getTime() < Date.now()) {
          event.status = true
        }
        return event
      }) 
    },
    closeEvent(name) {
      this.events.forEach((event) => {
        if (event.name === name) event.isHistory = true
      })
    }
  },
  getters: {
    getReadyEvents(store) {
      return store.events.filter((event) => {
        return event.status && !event.isHistory
      })
    },
    getHistoricalEvents(store) {
      return store.events.filter((event) => {
        return event.isHistory
      })
    },
    getNonHistoricalEvents(store) {
      return store.events.filter((event) => {
        return !event.isHistory
      })
    }
  }
})
