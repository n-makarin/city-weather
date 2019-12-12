import VueGeolocation from 'vue-browser-geolocation'
const geolocation: any = VueGeolocation

export default {
  namespaced: true,
  state: {
    coordinates: {
      lat: null,
      lng: null
    }
  },
  mutations: {
    SET_COORDINATES (store: any, coordinates: any) {
      store.coordinates = coordinates
    }
  },
  actions: {
    getCoordinates ({ commit }: any): void {
      geolocation.getLocation().then((coordinates: any) => {
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
