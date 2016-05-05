const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NewBook from '../newbook';

describe('core.components.newbook', () => {
  it('should display the create book form', () => {
    const el = shallow(<NewBook />);
    const title = el.find('input').first();
    const author = el.find('input').second();
    const form = el.find('form').first();

    expect(title.node.ref).to.be.equal('title');
    expect(author.node.ref).to.be.equal('author');
    expect(form.prop('onSubmit')).to.be.a('function');
  });

  it('should create a new book when we click on the button', done => {
    const title = 'Seeking Wisdom';
    const author = 'Peter Bevelin';

    const onCreate = (t, a) => {
      expect(t).to.be.equal(title);
      expect(a).to.be.equal(author);
      done();
    };

    const el = shallow(<NewBook create={onCreate} />);
    const instance = el.instance();

    instance.refs = {
      title: {value: title},
      author: {value: author}
    };

    el.find('form').simulate('submit');
  });
});
