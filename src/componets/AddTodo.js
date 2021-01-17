import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = text => {
    if (text.length < 3) return;
    addTodo(text);
    setText('');
  };

  const handleClick = text => {
    handleAddTodo(text);
  };

  const handleKeyDown = ({ key }, text) => {
    if (key !== 'Enter') return;
    handleAddTodo(text);
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        value={text}
        placeholder="Add todo"
        onChange={({ target }) => setText(target.value)}
        onKeyDown={e => handleKeyDown(e, text)}
      />
      <button className="input-filed__submit" onClick={() => handleClick(text)}>
        Enter
      </button>
    </div>
  );
};
