<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ProductCard from './components/ProductCard.vue';
</script>

<template>
  <div class="product-list">
    <product-card></product-card>
    <product-card type="disabled"></product-card>
    <product-card size="small"></product-card>
  </div>
</template>

<style scoped>
  .product-list {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    align-items: start;
    margin-right: -6px;
    margin-left: -6px;
  }
</style>