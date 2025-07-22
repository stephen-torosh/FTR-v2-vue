import { defineStore } from 'pinia'

export const useFileSystem = defineStore('files', {
  state: () => {
    return {
      downloads: [
        {name: "New Folder", type: "folder", content: []},
        {name: "New File", type: "txt", content: "Hello World! This is a file"}
      ],
      documents: [],
      apps: [],
      activeTab: "downloads",
      activeDirectory: ""
    }
  },
  actions: {
    setActiveTab(tab, tabinfo) {
      this.activeDirectoryInfo = tabinfo
      this.activeTab = tab
      this.activeDirectory = tab
    },

    setActiveDir(folder) {
      this.activeDirectory += `/${folder}`
    },
  },
  getters: {
    getDirectoryPath:(state) => {
      return state.activeTab+state.activeDirectory
      // downloads/newfolder/
    },
    get
  }
})
