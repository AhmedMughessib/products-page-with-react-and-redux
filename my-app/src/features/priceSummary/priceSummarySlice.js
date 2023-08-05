import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

const priceSummarySlice = createSlice({
  name: 'pricsSummary',
  initialState,
  reducers: {
    priceSummaryChanged (state, action) {
        state.value = action.payload.reduce((acc ,curr) =>{
          return acc + Number(curr.price)
        },0);
      
    },

  }
})

export const {priceSummaryChanged} = priceSummarySlice.actions;

export const selectPriceSummaryChanged = state => state.priceSummary.value;


export default priceSummarySlice.reducer;