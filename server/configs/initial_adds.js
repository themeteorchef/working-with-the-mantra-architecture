import {Books} from '/lib/collections';

export default function () {
  if (!Books.findOne()) {
    for (let i = 1; i <= 5; i++) {
      const title = `Book #${i}`;
      const author = `Author #${i}`;
      Books.insert({title, author});
    }
  }
}
