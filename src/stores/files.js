import { defineStore } from 'pinia'

export const useFileSystem = defineStore('files', {
  state: () => {
    return {
      downloads: {
        new_folder: {name: "New Folder", type: "folder", content: {
          old_folder: {name: "Old Folder", type: "folder", content: {}}
        }},
        new_file: {name: "New File", type: "txt", content: "Hello World! This is a file"}
      },
      documents: {
        new_document: {name: "New Document", type: "doc", content: "Hello World! This is a document"}
      },
      apps: {
        snake_game: {name: "Snake Game", type: "ftryapp", content: "app"}
      },
      desktop: {},
      activeTab: "Main Page",
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

    updateContent() {
      let activeDirectoryList = this.activeDirectory.split("/")
      activeDirectoryList.shift()

      switch (this.activeTab) {
        case "downloads":
          this.content = this.downloads
          break
        case "documents":
          this.content = this.documents
          break
        case "apps":
          this.content = this.apps
          break
        case "desktop":
          this.content = this.desktop
          break
      }

      activeDirectoryList.forEach(element => {
        this.content = this.content[element.replace(" ", "_").toLowerCase()].content
      });
    },

    changeActiveDir(dir) {
      this.activeDirectory += `/${dir.replace(" ", "_")}`
      this.content = this.content[dir.replace(" ", "_").toLowerCase()].content
    }
  },
  getters: {
    getDirectoryPath:(state) => {
      const rawDirectory = state.activeTab+state.activeDirectory
      return rawDirectory.split("/")
      // downloads/newfolder/
    },
  }
})
