import { connect } from 'react-redux';
import { BottomClearBtn } from '../componets/BottomClearBtn';
import {
  deleteAllTodo,
  deleteCompletedTodo,
} from '../store/todos/todosSlice.js';

export default connect(null, { deleteAllTodo, deleteCompletedTodo })(
  BottomClearBtn
);
