<script setup lang="ts">
import ProductForm from '@/components/ProductForm.vue'
import ProductList from '@/components/ProductList.vue'
import { ref } from 'vue'

const reload = ref(0)
</script>

<template>
  <h1>Gestión de Productos</h1>

  <ProductForm @productCreated="reload++" />
  <ProductList :key="reload" />
</template>

