<script setup lang="ts">
import { ref } from 'vue'
import { createProduct } from '@/api/productApi'
import type { Product } from '@/types/Product'

const emit = defineEmits(['productCreated'])

const product = ref<Product>({
  name: '',
  price: 0,
  stock: 0
})

const submit = async () => {
  await createProduct(product.value)
  emit('productCreated')

  product.value = { name: '', price: 0, stock: 0 }
}
</script>

<template>
  <form class="product-form" @submit.prevent="submit">
    <input v-model="product.name" placeholder="Nombre" required />
    <input v-model.number="product.price" type="number" placeholder="Precio" required />
    <input v-model.number="product.stock" type="number" placeholder="Stock" required />
    <button type="submit">Crear</button>
  </form>
</template>

<style scoped>
.product-form {
  display: flex;
  gap: 10px;
  max-width: 600px;
}

.product-form input {
  padding: 6px;
}

.product-form button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
