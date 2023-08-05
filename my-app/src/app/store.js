import { configureStore } from '@reduxjs/toolkit';
import paginatoinSlice from '../features/pagination/paginatoinSlice';
import filterSlice from '../features/filter/filterSlice';
import productsSlice from '../features/productsData/productsSlice';
import filterProductsSlice from '../features/fiteredProducts/filteredProductsSlice';
import priceSummarySlice from '../features/priceSummary/priceSummarySlice';
import sortReducer from '../features/sort/sort';
import sortedProductsReducer from '../features/sortedProducts/sortedProducts';
import api from '../features/apiSlice/apiSlice';

export const store = configureStore({
  reducer: {
    pagination: paginatoinSlice,
    filter: filterSlice,
    products: productsSlice,
    filteredProducts: filterProductsSlice,
    priceSummary: priceSummarySlice,
    sort: sortReducer,
    sortedProducts: sortedProductsReducer,
    [api.reducerPath]: api.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});
