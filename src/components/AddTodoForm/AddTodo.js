import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../../store/action-creators/todosActions';
import { Button } from '../Button';
import s from './addTodo.module.scss';

export const AddTodo = () => {
  const [textTodo, setTextTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (textTodo.length < 3) return;
    dispatch(addTodo(textTodo));
    setTextTodo('');
  };

  return (
    <form
      className={s.container}
      onSubmit={e => {
        e.preventDefault();
        handleAddTodo();
      }}
    >
      <input
        className={s.input}
        type="text"
        value={textTodo}
        placeholder="Add todo"
        onChange={({ target }) => setTextTodo(target.value)}
      />
      <Button className={s.btn} onAction={() => handleAddTodo()}>
        Enter
      </Button>
    </form>
  );
};
