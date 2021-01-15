const TodoItem = ({ text, completed }) => {
  return (
    <li className={`todo-item ${completed && 'completed'}`}>
      <p className="todo-item__text">{text}</p>
      <time className="todo-item__time">{new Date().toLocaleDateString()}</time>
      <button className="todo-item__btn check"></button>
      <button className="todo-item__btn delete">X</button>
    </li>
  );
};
