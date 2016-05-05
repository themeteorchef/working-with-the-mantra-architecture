const { describe, it } = global;
import {expect} from 'chai';
import {spy} from 'sinon';
import {depsMapper} from '../newbook';

describe('core.containers.newbook', () => {
  describe('depsMapper', () => {
    describe('actions', () => {
      it('should map books.create', () => {
        const actions = {books: {create: spy()}};
        const deps = depsMapper({}, actions);
        expect(deps.create).to.be.equal(actions.books.create);
      });
    });

    describe('context', () => {
      it('should map the whole context as a function', () => {
        const actions = {books: {create: spy()}};
        const context = spy();
        const deps = depsMapper(context, actions);
        expect(deps.context()).to.be.equal(context);
      });
    });
  });
});
