import React from 'react';

const Bookstore = () => {
  const books = [
    {
      id: '1',
      title: 'Book 1',
      author: 'wolter',
    },
    {
      id: '2',
      title: 'Book 2',
      author: 'Gerald',
    },
    {
      id: '3',
      title: 'Book 3',
      author: 'Amos',
    },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Title:</strong>
            {' '}
            {book.title}
            ,
            <strong>Author:</strong>
            {' '}
            {book.author}
            <button type="submit">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookstore;
