import React, { useState } from 'react';

export const AddTodo = ({dispatch}) => {
  const [text, setText] = useState('');

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      {/* <button className="input-filed__submit" onClick={()=> dispatch() }>Enter</button> */}
    </div>
  );
};
