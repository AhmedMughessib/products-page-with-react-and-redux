import { configureStore } from '@reduxjs/toolkit';
import paginatoinSlice from '../features/pagination/paginatoinSlice';
import filterSlice from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    pagination: paginatoinSlice,
    filter: filterSlice,
  },
});
