import Book from '../components/book';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, bookId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('books.single', bookId).ready()) {
    const book = Collections.Books.findOne(bookId);
    onData(null, {book});
  } else {
    const book = Collections.Books.findOne(bookId);
    if (book) {
      onData(null, {book});
    } else {
      onData();
    }
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Book);
