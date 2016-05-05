const {describe, it} = global;
import {expect} from 'chai';
import {stub, spy} from 'sinon';
import {composer} from '../book';

describe('core.containers.book', () => {
  describe('composer', () => {
    const Tracker = {nonreactive: cb => cb()};
    const getCollections = (book) => {
      const Collections = {
        Books: {findOne: stub()}
      };
      Collections.Books.findOne.returns(book);
      return Collections;
    };

    it('should subscribe to the given bookId via prop', () => {
      const Meteor = {subscribe: stub()};
      Meteor.subscribe.returns({ready: () => false});
      const Collections = getCollections();

      const context = () => ({Meteor, Tracker, Collections});
      const bookId = 'dwd';
      const onData = spy();

      composer({context, bookId}, onData);
      const args = Meteor.subscribe.args[0];
      expect(args.slice(0, 2)).to.deep.equal([
        'books.single', bookId
      ]);
    });

    describe('before subscription ready', () => {
      describe('with latency componsation', () => {
        it('should call onData with data', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const book = {aa: 10};
          const Collections = getCollections(book);

          const context = () => ({Meteor, Tracker, Collections});
          const bookId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.deep.equal({book});
            done();
          };

          composer({context, bookId}, onData);
        });
      });

      describe('with no latency componsation', () => {
        it('should call onData without nothing', done => {
          const Meteor = {subscribe: stub()};
          Meteor.subscribe.returns({ready: () => false});
          const Collections = getCollections();

          const context = () => ({Meteor, Tracker, Collections});
          const bookId = 'dwd';
          const onData = (err, data) => {
            expect(data).to.be.equal(undefined);
            done();
          };

          composer({context, bookId}, onData);
        });
      });
    });

    describe('after subscription is ready', () => {
      it('should call onData with data', done => {
        const Meteor = {subscribe: stub()};
        Meteor.subscribe.returns({ready: () => true});
        const book = {aa: 10};
        const Collections = getCollections(book);

        const context = () => ({Meteor, Tracker, Collections});
        const bookId = 'dwd';
        const onData = (err, data) => {
          expect(data).to.be.deep.equal({book});
          done();
        };

        composer({context, bookId}, onData);
      });
    });
  });
});
