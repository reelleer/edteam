<template>
  <select :name="name" class="browser-default" v-model="value">
    <option :value="currency" v-for="(currency, key)  in list" :key="key" >
      {{ currency.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'currency-rates-list',
  data () {
    return {
      value: {}
    }
  },
  watch: {
    initialValue(val, oldVal){
      this.value = val
    },
    value(val, oldVal){
      this.changeRates(val)
    }
  },
  methods: {
    changeRates(val) {
      this.$emit('changeRates', val, this.name)
    }
  },
  props: ['list', 'initialValue', 'name']
}
</script>
