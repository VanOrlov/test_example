import { createStore } from 'vuex'

export default createStore({
  state: {
    activeUser: {
      type: Object
    }
  },
  getters: {
  },
  mutations: {
    setIsFocus(state, user){
      state.activeUser = user
    },
    removeIsFocus(state){
      state.activeUser = null
    }
  },
  actions: {
  },
  modules: {
  }
})
