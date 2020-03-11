import Vue from 'vue'
import Vuex from 'vuex'
//import shop from '@/api/shop'
import actions from './actions.js'
import cart from './modules/cart.js'
import products from './modules/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // equivalent to data
    
  },
  getters: { // equivalent to computed properties
    
  },
  actions,
  mutations: {
    
  },
  modules: {
    cart,
    products
  }
})
