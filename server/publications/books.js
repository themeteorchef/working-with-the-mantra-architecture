import {Books} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('books.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1, author: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Books.find(selector, options);
  });

  Meteor.publish('books.single', function (bookId) {
    check(bookId, String);
    const selector = {_id: bookId};
    return Books.find(selector);
  });
}
