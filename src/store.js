import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: {
      userName: null,
      token: null
    },
    feed: null
  },
  mutations: {
    create(state, auth) {
      this.auth = {
        userName: auth.userName,
        token: auth.token
      } 
      state.auth = this.auth
    },
    destroy(state) {
      state.auth.userName = null
      state.auth.token = null
      state.feed = null
    },
    setFeed(state, feed){
      state.feed = feed
    }
  },
  actions: {
    create(state, auth) {
      state.commit('create',auth)
    },
    destroy(state) {
      state.commit('destroy')
    },
    setFeed(state,feed) {
      state.commit('setFeed',feed)
    }
  },
  getters: {
    auth: (state) => {
      return state.auth
    },
    feed: (state) => {
      return state.feed
    }
  },
  plugins: [createPersistedState({
    key: 'fread_token',
    paths: ['auth.token','auth.userName'],
    storage: window.localStorage
  })]
})
