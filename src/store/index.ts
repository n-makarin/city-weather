import Vue from 'vue'
import Vuex from 'vuex'
import city from '@/store/city'
import weather from '@/store/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    city,
    weather
  }
})
