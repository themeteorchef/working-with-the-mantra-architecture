const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import BooksList from '../bookslist';

describe('core.components.bookslist', () => {
  const books = [
    {title: 'Meditations', _id: '1234'},
    {title: 'The Art of Disappearing', _id: '5678'},
  ];

  it('should list given number of items', () => {
    const el = shallow(<BooksList books={books} />);
    expect(el.find('li').length).to.be.equal(books.length);
  });

  it('should list title for each book', () => {
    const el = shallow(<BooksList books={books}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const aText = li.find('a').first().text();
      expect(aText).to.be.equal(books[index].title);
    });
  });

  it('should list link for each book', () => {
    const el = shallow(<BooksList books={books}/>);
    const lis = el.find('li');
    lis.forEach((li, index) => {
      const href = li.find('a').first().prop('href');
      expect(href).to.be.equal(`/books/${books[index]._id}`);
    });
  });
});
