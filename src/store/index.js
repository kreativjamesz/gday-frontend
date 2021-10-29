import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Helpers
const helpers = {
  getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  },
  getCurrentYear() {
    return new Date().getFullYear()
  }
}

export default new Vuex.Store({
  state: {

    app: {
      name: 'G\'Day',
      copyright: helpers.getCurrentYear()
    },

    layout: {
      header: true,
      sidebar: true,
      footer: true
    },

  },
  mutations: {
    setLayout(state, payload) {
      state.layout.header = payload.header
      state.layout.sidebar = payload.sidebar
      state.layout.footer = payload.footer
    },
  },
  actions: {
  },
  modules: {
  }
})
