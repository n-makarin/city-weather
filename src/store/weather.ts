import openWeather from '@/api/open-weather'
import getStructuredData from '@/utils/open-weather/get-structured-data'
import * as OpenWeatherTypes from '@/types/api/open-weather'

export default {
  namespaced: true,
  state: {
    data: {
      description: '',
      rain: false,
      snow: false,
      temp: {
        feelsLike: 0,
        tepm: 0
      },
      wind: {
        speed: 0,
        dir: ''
      }
    }
  },
  mutations: {
    SET (store: any, data: OpenWeatherTypes.Weather) {
      store.data = data
    }
  },
  actions: {
    /**
     * Get current weather data by city name
     * and set it to the store
     */
    async getCurrentByCityName ({ commit }: any, cityName: string): Promise<void> {
      const rawData = await openWeather.getCurrentByCityName(cityName)
      if (!rawData || !rawData.cod || rawData.cod !== '200') {
        commit('SET', null)
        return
      }
      const weather: OpenWeatherTypes.Weather = getStructuredData(rawData)
      commit('SET', weather)
    }
  },
  getters: {
    data: (state: any) => state.data
  },
  modules: {
  }
}
