import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CategoriesShow from './logic/categoriesShow';
import BookShow from './logic/BookShow';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookShow />} />
        <Route path="/categories" element={<CategoriesShow />} />
      </Routes>
    </Provider>
  );
}

export default App;
