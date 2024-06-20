import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => {
    return {
      isOpen: false
    }
  },
  getters: {
    showHideModal(state) {
      return state.isOpen ? '' : 'hidden'
    }
  }
})
