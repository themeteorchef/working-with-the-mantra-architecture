const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navigation from '../navigation';

describe('core.components.navigation', () => {
  it('should contain a link to books list', () => {
    const el = shallow(<Navigation />);
    const homeLink = el.find('a').at(0);
    expect(homeLink.text()).to.be.equal('Books');
    expect(homeLink.prop('href')).to.be.equal('/');
  });

  it('should contain a link to create a new book', () => {
    const el = shallow(<Navigation />);
    const newPostLink = el.find('a').at(1);
    expect(newPostLink.text()).to.be.equal('New Book');
    expect(newPostLink.prop('href')).to.be.equal('/new-book');
  });
});
