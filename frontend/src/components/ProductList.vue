<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getProducts } from '@/api/productApi'
import type { Product } from '@/types/Product'

const products = ref<Product[]>([])

const loadProducts = async () => {
  products.value = await getProducts()
}

onMounted(loadProducts)
</script>

<template>
  <table class="product-table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>${{ product.price }}</td>
        <td>{{ product.stock }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.product-table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-top: 20px;
}

.product-table th,
.product-table td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: left;
}

.product-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.product-table tr:nth-child(even) {
  background-color: #fafafa;
}

.product-table tr:hover {
  background-color: #f1f1f1;
}
</style>

