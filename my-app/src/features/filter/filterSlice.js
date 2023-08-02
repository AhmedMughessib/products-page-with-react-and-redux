import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: []
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterAdded(state, action){
      if (action.payload.checked) {
        state.value.push(action.payload.value)
      } else {
        state.value.splice(state.value.indexOf(action.payload.value), 1)
      }

    },
  }
})

export const {filterAdded} = filterSlice.actions;

export default filterSlice.reducer;