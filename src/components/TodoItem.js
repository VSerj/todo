import { useDispatch } from 'react-redux';
import React from 'react';

import {
  deleteTodo,
  completedTodo,
} from '../store/action-creators/todosActions';
import { Button } from './Button';

export const TodoItem = React.memo(({ text, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <p className="todo-item__text">{text}</p>
      <time className="todo-item__time">{new Date().toLocaleDateString()}</time>
      <Button
        className="todo-item__btn check"
        onAction={() => dispatch(completedTodo(id))}
      >
        {completed && '✔️'}
      </Button>
      <Button
        className="todo-item__btn delete"
        onAction={() => dispatch(deleteTodo(id))}
      >
        {'\u274C'}
      </Button>
    </li>
  );
});
