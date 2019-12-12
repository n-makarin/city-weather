import * as Types from '@/types/store/city'
import VueGeolocation from 'vue-browser-geolocation'
const geolocation: any = VueGeolocation

export default {
  namespaced: true,
  state: {
    coordinates: {
      lat: 0,
      lng: 0
    }
  },
  mutations: {
    SET_COORDINATES (store: any, coordinates: Types.Coordinates) {
      store.coordinates = coordinates
    }
  },
  actions: {
    getCoordinates ({ commit }: any): void {
      geolocation.getLocation().then((coordinates: Types.Coordinates) => {
        commit('SET_COORDINATES', coordinates)
      })
    }
  },
  getters: {
    coordinates: (state: any) => state.coordinates
  },
  modules: {
  }
}
