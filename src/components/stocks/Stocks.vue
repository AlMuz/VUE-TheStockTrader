<template>
  <div>
    <Stock v-for="stock in stocks" :stock="stock">

    </Stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';
  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 100 },
          { id: 1, name: 'Google', price: 200 },
          { id: 1, name: 'Apple', price: 50 },
          { id: 1, name: 'Twitter', price: 11 },
        ]
      }
    },
    components: {
      Stock,
    }
  }
</script>

<style>

</style>
