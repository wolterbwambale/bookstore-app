import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction' : state.categories;
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter((category) => category !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
