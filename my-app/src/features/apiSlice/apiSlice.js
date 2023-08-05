import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://fake-products.onrender.com/'}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (pageNumber) => `products?pageNumber=${pageNumber}`
    })
  })
})

export const { useGetProductsQuery } = api

export default api;

