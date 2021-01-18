import { connect } from 'react-redux';

import { TodoList } from '../componets/TodoList';
import { deleteTodo, completedTodo } from '../store/todos/todosSlice';

export default connect(
  state => {
    const { todos, filter } = state;
    return { todos, filter };
  },
  { deleteTodo, completedTodo }
)(TodoList);
