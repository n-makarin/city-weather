<template>
  <div class="select-city">
    <VueGooglePlaces
      class="select-city__input"
      :api-key="apiKey"
      types="(cities)"
      placeholder="Input your place"
      @placechanged="getAddressData"
      @noresult="onNoResult"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { googleApiKey } from '@/config'

export default Vue.extend({
  components: {
  },
  data () {
    return {
      address: '',
      apiKey: googleApiKey
    }
  },
  watch: {
    address (newValue) {
      this.$store.dispatch('city/set', this.address)
    }
  },
  methods: {
    /**
    * When the location found
    * @param {Object} addressData Data of the found location
    * @param {Object} placeResultData PlaceResult object
    * @param {String} id Input container ID
    */
    getAddressData (addressData: any, placeResultData: any, id: any) {
      this.address = addressData.locality
    },
    onNoResult () {
      this.address = ''
    }
  }
})
</script>

<style lang="scss">
.select-city {

  &__input {
    input {
      width: 300px;
      padding: 5px;
    }
  }
}
</style>
