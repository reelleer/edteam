import './helpers/firebase'
import { rtdbPlugin } from 'vuefire'
import Vue from 'vue'
import App from './App.vue'

Vue.use(rtdbPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
