<template>
  <div class="home">
    <div class="home__data">
      <div class="home__city">
        <span>City: </span>
        <span class="home__city-name">{{ city }}</span>
      </div>
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

<style lang="scss" scoped>
.home {
  &__data {
    padding: 0 20%;
  }
  &__city {
    font-size: 26px;
    margin-bottom: 15px;
  }
  &__city-name {
    color: rgb(20, 21, 82);
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &__weather {
  }
}
</style>
