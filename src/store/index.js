import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
  },
  mutations: {
    CHANGE_SESSION_STATE (state, value) {
      state.isLogged = value
    }
  },
  actions: {
  },
  modules: {
  }
})
