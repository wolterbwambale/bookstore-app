import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
