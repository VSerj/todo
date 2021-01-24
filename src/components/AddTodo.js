import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../store/action-creators/todosActions';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.length < 3) return;
    dispatch(addTodo(text));
    setText('');
  };

  const handleClick = () => {
    handleAddTodo();
  };

  const handleKeyDown = ({ key }) => {
    if (key !== 'Enter') return;
    handleAddTodo();
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        value={text}
        placeholder="Add todo"
        onChange={({ target }) => setText(target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="input-filed__submit" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
};
