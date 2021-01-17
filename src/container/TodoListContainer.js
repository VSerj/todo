import { connect } from 'react-redux';
import { TodoList } from '../componets/TodoList';

export default connect(state => {
  const { todos } = state;
  return { todos };
})(TodoList);
