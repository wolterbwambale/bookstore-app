import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const booklist = useSelector((state) => state.book.booklist);

  if (!booklist || booklist.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <>
      {booklist.map((book) => (
        <Book key={book.item_id} item={book} />
      ))}
    </>
  );
};

export default BookList;
