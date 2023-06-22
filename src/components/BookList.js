import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Book';

const BookList = () => {
  const books = useSelector((state) => state.book);

  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <>
      {books.map((book) => (
        <Books key={book.id} item={book} />
      ))}
    </>
  );
};

export default BookList;
