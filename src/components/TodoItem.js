import { useDispatch } from 'react-redux';

import {
  deleteTodoAction,
  completedTodoAction,
} from '../store/action-creators/todosActions';

export const TodoItem = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <p className="todo-item__text">{text}</p>
      <time className="todo-item__time">{new Date().toLocaleDateString()}</time>
      <button
        className="todo-item__btn check"
        onClick={() => dispatch(completedTodoAction(id))}
      >
        {completed && '✔️'}
      </button>
      <button
        className="todo-item__btn delete"
        onClick={() => dispatch(deleteTodoAction(id))}
      >
        {'\u274C'}
      </button>
    </li>
  );
};