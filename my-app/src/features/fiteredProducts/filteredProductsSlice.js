import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

const filteredProductsSlice = createSlice({
  name: 'filteredProducts',
  initialState,
  reducers: {
    productsFiltered(state, action){
      state.value = action.payload.data;
      if (action.payload.filters.length > 0) {
        state.value = action.payload.data.filter((product) => {
          return action.payload.filters.includes(product.category);
        });
      } 
      else if (action.payload.filters.length === 0) {
        state.value = action.payload.data;
      }
    }
  }
})

export const {productsFiltered} = filteredProductsSlice.actions;

export const selectFilteredProducts = state => state.filteredProducts.value;

export default filteredProductsSlice.reducer;