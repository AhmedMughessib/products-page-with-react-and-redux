import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    paginationChaned (state, action) {
        state.value = action.payload;
      
    },

  }
})

export const {paginationChaned} = paginationSlice.actions;


export default paginationSlice.reducer;