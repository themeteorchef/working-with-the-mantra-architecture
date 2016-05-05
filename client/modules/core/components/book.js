import React from 'react';

const Book = ({book}) => (
  <div>
    <h2>{book.title}</h2>
    <p>by {book.author}</p>
  </div>
);

export default Book;
