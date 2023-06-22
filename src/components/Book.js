import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Books = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="matter">
        <div className="app-detail">
          <span className="cat">{item.category}</span>
          <h3 className="title">{item.title}</h3>
          <span className="author">{item.author}</span>
        </div>

        <button type="button">Comment</button>
        <button type="button" onClick={() => dispatch(removeBook(item.item_id))}>
          Remove
        </button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

Books.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
