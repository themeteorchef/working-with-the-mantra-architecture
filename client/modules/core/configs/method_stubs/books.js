import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'books.create'(_id, title, author) {
      check(_id, String);
      check(title, String);
      check(author, String);

      const createdAt = new Date();
      const book = {_id, title, author, createdAt};
      Collections.Books.insert(book);
    }
  });
}
