<template>
  <div class="weather">
    <div class="weather__description weather__item">
      Description: {{ description }}
    </div>
    <div class="weather__rain weather__item">
      <span>Rain: </span>
      <span>{{ rain ? rain : 'no' }}</span>
    </div>
    <div class="weather__snow weather__item">
      <span>Snow: </span>
      <span>{{ snow ? snow : 'no' }}</span>
    </div>
    <div v-if="temp" class="weather__temp weather__item">
      <div class="weather__real">Temperature: {{ temp.tepm }}</div>
      <div class="weather__feels-like">Feels like: {{ temp.feelsLike }}</div>
    </div>
    <div v-if="wind" class="weather__wind weather__item">
      <div class="weather__feels-speed">
        Wind speed: {{ wind.speed }}
      </div>
      <div class="weather__dir">
        Wind direction: {{ wind.dir }}
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
.weather {
  &__item {
    margin-bottom: 5px;
    line-height: 1.5;
  }
  &__description {
    &::first-letter {
      text-transform: uppercase
    }
  }
}
</style>
