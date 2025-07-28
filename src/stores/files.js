import { defineStore } from 'pinia'

export const useFileSystem = defineStore('files', {
  state: () => {
    return {
      downloads: {
        new_folder: {name: "New Folder", type: "folder", content: {
          new_folder: {name: "New Folder", type: "folder", content: {}}
        }},
        new_file: {name: "New File", type: "txt", content: "Hello World! This is a file"}
      },
      documents: {
        new_document: {name: "New Document", type: "doc", content: "Hello World! This is a document"}
      },
      apps: {
        snake_game: {name: "Snake Game", type: "ftryapp", content: "app"}
      },
      activeTab: "downloads",
      activeDirectory: "",
      content: null
    }
  },
  actions: {
    setActiveTab(tab) {
      this.activeTab = tab
      this.activeDirectory = ""
      this.content = this[tab]
    },

    // setActiveDir(folder) {
    //   this.activeDirectory = `/${folder}`
    // },

    changeActiveDir(dir) {
      this.activeDirectory += `/${dir}`
      this.content = this.content[dir.replace(" ", "_").toLowerCase()].content
    }
  },
  getters: {
    getDirectoryPath:(state) => {
      return state.activeTab+state.activeDirectory
      // downloads/newfolder/
    },
  }
})
