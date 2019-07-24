<template>
  <div>
    <h1>
      The Portfolio component
    </h1>
    <Stock v-for="stock in stocks" :stock="stock"></Stock>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Stock from './Stock.vue';

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    },
    components: {
      Stock
    }
  }
</script>

<style>

</style>
