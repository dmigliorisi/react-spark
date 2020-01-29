import { compose } from 'recompose';
import { connect } from 'react-redux';
import Page from '../containers/page';
import { addTodo } from '../actions';

const IndexPage = compose()(Page);

IndexPage.getInitialProps = ({ store, req }) => {
  const isServer = !!req;

  // we can add any custom data here
  const { todo } = store.getState();
  store.dispatch(addTodo(Object.assign(todo.item, {
    value: 'Hello World!',
  })));

  return {
    isServer,
  };
}

export default connect()(IndexPage);
