import { connect } from 'react-redux';

import { AddTodo } from '../componets/AddTodo';
import { addTodo } from '../store/todos/todosSlice';

export default connect(null, { addTodo })(AddTodo);
