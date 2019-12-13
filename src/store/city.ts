import * as Types from '@/types/store/city'
import VueGeolocation from 'vue-browser-geolocation'
import googleMaps from '@/api/google-maps'
import getCity from '@/utils/google-maps/get-city'

const geolocation: any = VueGeolocation

export default {
  namespaced: true,
  state: {
    data: '',
    coordinates: {
      lat: 0,
      lng: 0
    }
  },
  mutations: {
    SET_COORDINATES (store: any, coordinates: Types.Coordinates) {
      store.coordinates = coordinates
    },
    SET (store: any, city: string) {
      store.data = city
    }
  },
  actions: {
    /**
     * Set city name to store
     */
    set ({ commit }: any, city: string): void {
      commit('SET', city)
    },
    /**
     * Get current user coordinates
     * and set them to store
     */
    async getCoordinates ({ commit }: any): Promise<void> {
      await geolocation.getLocation().then((coordinates: Types.Coordinates): void => {
        const coords: Types.Coordinates = {
          lat: coordinates.lat,
          lng: coordinates.lng
        }
        commit('SET_COORDINATES', coords)
      })
    },
    /**
     * Get city name by coordinates from store
     */
    async getCityNameByCoordinates ({ dispatch, getters }: any): Promise<void> {
      await dispatch('getCoordinates')
      const rawData = await googleMaps.getData(getters.coordinates)
      const city: string = getCity(rawData)
      dispatch('set', city)
    }
  },
  getters: {
    data: (state: any) => state.data,
    coordinates: (state: any) => state.coordinates
  },
  modules: {
  }
}
