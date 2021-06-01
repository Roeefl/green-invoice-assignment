import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    user: {}
  },
  mutations: {
    setUser(state, user = {}) {
      state.isAuthenticated = true
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
