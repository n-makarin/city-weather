<template>
  <div class="weather">
    <div class="weather__description weather__item">
      <span>Description: </span>
      <span class="weather__result">{{ description }}</span>
    </div>
    <div v-if="temp" class="weather__temp weather__item">
      <div class="weather__real">
        <span>Temperature: </span>
        <span class="weather__result">{{ temp.tepm }}°C</span>
      </div>
      <div class="weather__feels-like">
        <span>Feels like: </span>
        <span class="weather__result">{{ temp.feelsLike }}°C</span>
      </div>
    </div>
    <div v-if="wind" class="weather__wind weather__item">
      <div class="weather__feels-speed">
        <span>Wind speed: </span>
        <span class="weather__result">{{ wind.speed }} m/s</span>
      </div>
      <div class="weather__dir">
        <span>Wind direction: </span>
        <span class="weather__result">{{ wind.dir }}</span>
      </div>
    </div>
    <div class="weather__rain weather__item">
      <span>Rain: </span>
      <span class="weather__result">{{ rain ? 'yes' : 'no' }}</span>
    </div>
    <div class="weather__snow weather__item">
      <span>Snow: </span>
      <span class="weather__result">{{ snow ? 'yes' : 'no' }}</span>
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
.weather {
  &__item {
    line-height: 2;
  }
  &__description {
    &::first-letter {
      text-transform: uppercase
    }
  }
  &__result {
    font-weight: bold;
  }
}
</style>
