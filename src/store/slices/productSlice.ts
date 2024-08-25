// src/store/slices/productSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';
import axios from 'axios';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Async actions
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>('/products');
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (product: Product) => {
    const response = await axios.post<Product>('/products', product);
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (product: Product) => {
    const response = await axios.put<Product>(`/products/${product.id}`, product);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id: number) => {
    await axios.delete(`/products/${id}`);
    return id;
  }
);
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      })
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        const index = state.products.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<number>) => {
        state.products = state.products.filter(product => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
