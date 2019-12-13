import Vue from 'vue'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $vueSelect: string
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
  }
}