import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '../utils/localStorage'

Vue.use(Vuex)

const TOKEN_INFO_KEY = 'tokenInfo'
export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_INFO_KEY)
  },
  mutations: {
    setUser (state, tokenInfo) {
      state.user = tokenInfo
      setItem(TOKEN_INFO_KEY, tokenInfo)
    }
  },
  actions: {
  },
  modules: {
  }
})
