import shop from '@/api/shop.js'

export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    availableProducts(state){ //, getters){
      return state.items.filter(product => product.inventory > 0);
    },
    productIsInStock() {
      return (product) => product.inventory > 0
    }
  },
  mutations: {
    setProducts(state, payload){
      /* update products
       */
      state.items = payload
    },
    decrementProductInventory(state, product){
      product.inventory--
    }
  },
  actions: {
    fetchProducts({commit}){
      /* make the call
       * run setProducts mutation
       */
      return new Promise((resolve) => {//, reject) => {
        shop.getProducts(products => {
          commit("setProducts", products);
          resolve();
        })
      })
    }
  }
}