import {Books} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'books.create'(_id, title, author) {
      check(_id, String);
      check(title, String);
      check(author, String);

      const createdAt = new Date();
      const book = {_id, title, author, createdAt};
      Books.insert(book);
    }
  });
}
