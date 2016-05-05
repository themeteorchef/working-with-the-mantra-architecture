const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../books';

describe('core.actions.books', () => {
  describe('create', () => {
    it('should call Meteor.call to save the post', () => {
      const Meteor = {uuid: () => 'id', call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.create({Meteor, FlowRouter}, 't', 'a');
      const methodArgs = Meteor.call.args[0];

      expect(methodArgs.slice(0, 4)).to.deep.equal([
        'books.create', 'id', 't', 'a'
      ]);
      expect(methodArgs[4]).to.be.a('function');
    });

    it('should redirect user to the post', () => {
      const id = 'dsds';
      const Meteor = {uuid: () => id, call: stub()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      Meteor.call.callsArg(4);

      actions.create({Meteor, FlowRouter}, 't', 'a');
      expect(FlowRouter.go.args[0][0]).to.be.equal(`/books/${id}`);
    });
  });
});
