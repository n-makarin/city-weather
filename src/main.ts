import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGooglePlaces from 'vue-google-places'

Vue.config.productionTip = false

// @ts-ignore
Vue.use(VueGooglePlaces)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
