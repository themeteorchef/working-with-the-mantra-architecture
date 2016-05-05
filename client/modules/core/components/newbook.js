import React from 'react';

class NewBook extends React.Component {
  render() {
    const {error} = this.props;

    return (
      <form className="new-book" onSubmit={this.createBook.bind(this)}>
        <h2>Add New Book</h2>
        {error ? <p style={{color: 'red'}}>{error}</p> : null}

        <input ref="title" type="text" placeholder="Book title" /> <br/>
        <input ref="author" type="text" placeholder="Book author" /> <br/>
        <button type="submit">Add New Book</button>
      </form>
    );
  }

  createBook(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    const {create} = this.props;
    const {title, author} = this.refs;

    create(title.value, author.value);
  }
}

export default NewBook;
