import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/booksSlice';

function InputForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewBook({ title, author }))
      .then(() => {
        setTitle('');
        setAuthor('');
      })
      .catch((error) => {
        <p>{error}</p>;
      });
  };

  return (
    <div className="Form">
      <span className="add-newbook">ADD NEW BOOK</span>
      <form onSubmit={addSubmit}>
        <input
          className="title-in"
          placeholder="Book title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author-in"
          placeholder="Book author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="submit" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default InputForm;
