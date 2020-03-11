<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif"
      alt="loading"
    >
    <ul v-else>
      <li
        v-for="product in allProducts"
        :key="product.title"
      >
        {{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)">
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      allProducts: state => state.products.items
    }),
    ...mapGetters('products', {
      productIsInStock: 'productIsInStock'
    })
    // products() {
    //   return this.$store.state.products;
    // },
    // productIsInStock() {
    //   return this.$store.getters.productIsInStock
    // }
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
      addProductToCart: 'cart/addProductToCart'
    }),
    // addProductToCart(product){
    //   this.$store.dispatch('addProductToCart', product);
    // }
  },
  created () {
    this.loading = true;
    //this.$store.dispatch('fetchProducts')
    this.fetchProducts()
      .then(() => this.loading = false);
  }
}
</script>

<style>

</style>