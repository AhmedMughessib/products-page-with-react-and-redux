import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {


  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; // Update products state with the fetched data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export const fetchProducts = createAsyncThunk('products/productsFetched', async (pageNumber) => {
  const response = await axios.get(`http://localhost:5000/products?pageNumber=${pageNumber}`);
  return response.data
}) 


export const selectProducts = state => state.products.products;

export default productsSlice.reducer;