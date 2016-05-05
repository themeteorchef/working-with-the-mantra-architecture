export default {
  create({Meteor, LocalState, FlowRouter}, title, author) {
    if (!title || !author) {
      return LocalState.set('SAVING_ERROR', 'Title & Author are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    const id = Meteor.uuid();
    // There is a method stub for this in the config/method_stubs
    // That's how we are doing latency compensation
    Meteor.call('books.create', id, title, author, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });

    FlowRouter.go(`/books/${id}`);
  },
  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
};
