import axios from 'axios'
import type { Product } from '@/types/Product'

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
})

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get('/products')
  return response.data
}

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await api.post('/products', product)
  return response.data
}

