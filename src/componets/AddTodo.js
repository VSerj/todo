import React, { useState } from 'react';

export const AddTodo = props => {
  const [text, setText] = useState('');

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button className="input-filed__submit">Enter</button>
    </div>
  );
};
