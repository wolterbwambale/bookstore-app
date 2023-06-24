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
    <div className="info">
      {Object.keys(booklist).map((category) => (
        <div className="card" key={category}>
          {booklist[category].map((book) => (
            <Book key={book.item_id} item={book} handleRemove={handleRemove} />
          ))}
          <div className="progress-spinner">
            <div className="progress-wheel" />
            <div className="progress-text">40%</div>
            <div className="complete-text">Complete</div>
          </div>

          <div className="progress-info">
            <h3 className="chapter">CURRENT CHAPTER</h3>
            <h4>Introduction</h4>
            <button type="button" className="update-btn">UPDATE PROGRESS</button>
          </div>
        </div>

      ))}
    </div>
  );
};

export default BookList;
