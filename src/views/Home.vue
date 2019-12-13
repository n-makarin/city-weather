<template>
  <div class="home">
    <div class="home__data">
      <div class="home__city">City: {{ city }}</div>
      <weather
        :description="weather.description"
        :rain="weather.rain"
        :snow="weather.snow"
        :temp="weather.temp"
        :wind="weather.wind"
        class="home__weather"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Weather from '@/components/views/weather.vue'

export default {
  name: 'home',
  components: {
    Weather
  },
  computed: {
    ...mapGetters({
      city: 'city/data',
      weather: 'weather/data'
    })
  },
  methods: {
    ...mapActions({
      getCityNameByCoordinates: 'city/getCityNameByCoordinates',
      getCurrentByCityName: 'weather/getCurrentByCityName'
    })
  },
  async mounted () {
    await this.getCityNameByCoordinates()
    await this.getCurrentByCityName(this.city)
  }
}
</script>
