<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
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
