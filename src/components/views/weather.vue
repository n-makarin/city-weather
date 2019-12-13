<template>
  <div class="weather">
    <div class="weather__description">
      {{ description }}
    </div>
    <div class="weather__rain">
      {{ rain }}
    </div>
    <div class="weather__snow">
      {{ snow }}
    </div>
    <div class="weather__temp">
      <div class="weather__feels-like">
        {{ temp.feelsLike }}
      </div>
      <div class="weather__tepm">
        {{ temp.tepm }}
      </div>
    </div>
    <div class="weather__wind">
      <div class="weather__feels-speed">
        {{ wind.speed }}
      </div>
      <div class="weather__dir">
        {{ wind.dir }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    description: {
      type: String,
      default: ''
    },
    rain: {
      type: Boolean,
      default: false
    },
    snow: {
      type: Boolean,
      default: false
    },
    temp: {
      type: Object,
      default: () => {}
    },
    wind: {
      type: Object,
      default: () => {}
    }
  }
})
</script>

<style scoped lang="scss">
</style>
