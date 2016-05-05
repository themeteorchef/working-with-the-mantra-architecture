import BooksList from '../components/bookslist';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('books.list').ready()) {
    const books = Collections.Books.find().fetch();
    onData(null, {books});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(BooksList);
