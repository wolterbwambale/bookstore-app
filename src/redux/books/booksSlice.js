import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const urlBase = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SqqGBCphXIsCqtnAZ8YN/books';

const initialState = {
  booklist: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('books/fetchData', async () => {
  try {
    const response = await axios.get(urlBase);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
});

export const addBookToApi = createAsyncThunk('books/addBookToApi', async (bookInfo) => {
  try {
    const response = await axios.post(urlBase, bookInfo);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add book: ${error.message}`);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  try {
    await axios.delete(`${urlBase}/${bookId}`);
    return bookId;
  } catch (error) {
    throw new Error(`Failed to remove book: ${error.message}`);
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async ({ title, author }) => {
  const newBook = {
    item_id: Math.random().toString(),
    title,
    author,
    category: 'Action',
  };
  try {
    await axios.post(urlBase, newBook);
    return newBook;
  } catch (error) {
    throw new Error(`Failed to add book: ${error.message}`);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.booklist = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBookToApi.fulfilled, (state, action) => {
        state.booklist.push(action.payload);
      })
      .addCase(addBookToApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.booklist = state.booklist.filter((book) => book.item_id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.booklist.push(action.payload);
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
