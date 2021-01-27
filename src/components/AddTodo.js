import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../store/action-creators/todosActions';
import { Button } from './Button';

export const AddTodo = () => {
  const [textTodo, setTextTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = useCallback(() => {
    if (textTodo.length < 3) return;
    dispatch(addTodo(textTodo));
    setTextTodo('');
  });

  return (
    <form
      className="input-container"
      onSubmit={e => {
        e.preventDefault();
        handleAddTodo();
      }}
    >
      <input
        className="input-field"
        type="text"
        value={textTodo}
        placeholder="Add todo"
        onChange={({ target }) => setTextTodo(target.value)}
      />
      <Button className="input-filed__submit" onAction={() => handleAddTodo()}>
        Enter
      </Button>
    </form>
  );
};
