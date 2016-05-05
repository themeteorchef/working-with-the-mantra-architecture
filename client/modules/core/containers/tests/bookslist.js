const { describe, it } = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../bookslist';

describe('core.containers.bookslist', () => {
  describe('composer', () => {
    it('should subscribe to books.list', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});

      const context = () => ({Meteor});
      const onData = spy();

      composer({context}, onData);
      expect(Meteor.subscribe.args[0]).to.deep.equal([
        'books.list'
      ]);
    });

    describe('after subscribed', () => {
      it('should fetch data from all posts & pass to onData', () => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});

        const books = [ {_id: 'aa'} ];
        const Collections = {Books: {find: stub()}};
        Collections.Books.find.returns({fetch: () => books});

        const context = () => ({Meteor, Collections});
        const onData = spy();

        composer({context}, onData);
        expect(onData.args[0]).to.deep.equal([ null, {books} ]);
      });
    });
  });
});
