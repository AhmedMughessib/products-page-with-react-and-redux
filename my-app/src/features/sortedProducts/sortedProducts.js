import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

const sortedProductsSlice = createSlice({
  name: 'sortedProducts',
  initialState,
  reducers: {

    productsSorted(state, action) {

      const sortByName = (productsArray) => {
        if (productsArray.length <= 1 ) {
          return productsArray;
        }

        const pivot = productsArray[0].name;
        const left = [];
        const right = [];

        for (let i= 1; i< productsArray.length; i++) {
          if (productsArray[i].name < pivot) {
            left.push(productsArray[i]);
           } else {
            right.push(productsArray[i]);
           }
        }

        return [...sortByName(left), productsArray[0], ...sortByName(right)];
      }


      const sortByPrice = (productsArray) => {
        if (productsArray.length <= 1 ) {
          return productsArray;
        }

        const pivot = Number(productsArray[0].price);
        const left = [];
        const right = [];

        for (let i= 1; i< productsArray.length; i++) {
          if (Number(productsArray[i].price) < pivot) {
            left.push(productsArray[i]);
           } else {
            right.push(productsArray[i]);
           }
        }

        return [...sortByPrice(left), productsArray[0], ...sortByPrice(right)];
      }
      


      if (action.payload.sort === 'name') {
        state.value = sortByName(action.payload.data)
      } else if (action.payload.sort === 'price') {
        state.value = sortByPrice(action.payload.data)
      } else {
        state.value = action.payload.data
      }
    }
  }
})

export const {productsSorted} = sortedProductsSlice.actions;

export const selectSortedProducts = state => state.sortedProducts.value;

export default sortedProductsSlice.reducer;