import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ''
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortAdded(state, action){
      state.value = action.payload
    },
   
  }
})

export const {sortAdded} = sortSlice.actions;

export const sortSelector = state => state.sort.value;


export default sortSlice.reducer;