const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Book from '../book';

describe('core.components.book', () => {
  it('should display the book title', () => {
    const book = {title: 'Meditations'};
    const el = shallow(<Book book={book} />);
    expect(el.find('h2').text()).to.be.match(/Meditations/);
  });

  it('should display the post author', () => {
    const book = {author: 'Marcus Aurelius'};
    const el = shallow(<Post book={book} />);
    expect(el.find('p').text()).to.be.match(/Nice content/);
  });
});
