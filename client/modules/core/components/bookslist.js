import React from 'react';

const BooksList = ({books}) => (
  <div className='bookslist'>
    <ul>
      {books.map(book => (
        <li key={book._id}>
          <a href={`/books/${book._id}`}>{book.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default BooksList;
