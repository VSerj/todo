import { useDispatch } from 'react-redux';
import React from 'react';

import {
  deleteTodo,
  completedTodo,
} from '../../store/action-creators/todosActions';
import { Button } from '../Button';
import s from './todoItem.module.scss';

export const TodoItem = React.memo(({ text, completed, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={`${s.item} ${completed ? s.completed : ''}`}>
      <p className={s.text}>{text}</p>
      <time className={s.time}>{new Date().toLocaleDateString()}</time>
      <Button
        className={s.btnCheck}
        onAction={() => dispatch(completedTodo(id))}
      >
        {completed && '✔️'}
      </Button>
      <Button className={s.btnDelete} onAction={() => dispatch(deleteTodo(id))}>
        {'\u274C'}
      </Button>
    </li>
  );
});
