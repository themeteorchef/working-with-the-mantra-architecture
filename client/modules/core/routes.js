import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import BooksList from './containers/bookslist';
import Book from './containers/book';
import NewBook from './containers/newbook';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'books.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<BooksList />)
      });
    }
  });

  FlowRouter.route('/books/:bookId', {
    name: 'books.single',
    action({bookId}) {
      mount(MainLayoutCtx, {
        content: () => (<Book bookId={bookId}/>)
      });
    }
  });

  FlowRouter.route('/new-book', {
    name: 'newbook',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewBook />)
      });
    }
  });
}
