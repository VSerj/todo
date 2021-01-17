export const TodoItem = ({
  text,
  completed,
  deleteTodo,
  completedTodo,
  id,
}) => {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <p className="todo-item__text">{text}</p>
      <time className="todo-item__time">{new Date().toLocaleDateString()}</time>
      <button
        className="todo-item__btn check"
        onClick={() => completedTodo(id)}
      ></button>
      <button className="todo-item__btn delete" onClick={() => deleteTodo(id)}>
        X
      </button>
    </li>
  );
};
