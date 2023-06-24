import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const booklist = useSelector((state) => state.book.booklist);
  const isLoading = useSelector((state) => state.book.isLoading);
  const error = useSelector((state) => state.book.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleRemove = (bookId) => {
    dispatch(removeBook(bookId));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }

  if (booklist.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <>
      {Object.keys(booklist).map((category) => (
        <div key={category}>
          {booklist[category].map((book) => (
            <Book key={book.item_id} item={book} handleRemove={handleRemove} />
          ))}
        </div>
      ))}
    </>
  );
};

export default BookList;
