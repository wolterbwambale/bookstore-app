import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(item.item_id));
  };

  return (
    <div>
      <div className="matter">
        <div className="app-detail">
          <span className="cat">{item.category}</span>
          <h3 className="title">{item.title}</h3>
          <h3 className="author-book">{item.author}</h3>
        </div>
        <button type="button">comment</button>
        <button type="button" onClick={handleRemove}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
