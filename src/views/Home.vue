<template>
  <div class="home">
    <div class="home__select-city">
      <div class="home__select-title">Choose city:</div>
      <select-city class="home__select" />
    </div>
    <div class="home__data">
      <div class="home__city">
        <span class="home__city-name">{{ city }}</span>
      </div>
      <weather
        v-if="weather"
        :description="weather.description"
        :rain="weather.rain"
        :snow="weather.snow"
        :temp="weather.temp"
        :wind="weather.wind"
        class="home__weather"
      />
      <div class="home__error" v-else>Can't get data</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Weather from '@/components/views/weather.vue'
import SelectCity from '@/components/views/select-city.vue'

export default {
  name: 'home',
  components: {
    Weather,
    SelectCity
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
  watch: {
    async city (newValue) {
      await this.getCurrentByCityName(newValue)
    }
  },
  async mounted () {
    await this.getCityNameByCoordinates()
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 0 20%;
  &__select-city {
    margin-bottom: 25px;
    padding:  15px 0 20px 0;
    border-bottom: 1px solid rgb(206, 206, 206);
  }
  &__select-title {
    font-size: 24px;
    margin-bottom: 10px;
  }
  &__data {
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
  &__error {
    color: rgb(143, 64, 64);
  }
}
</style>
