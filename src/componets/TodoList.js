export const TodoList = props => {
  const listItem = (
    <li className="todo-item">
      <p className="todo-item__text">Test item</p>
      <time className="todo-item__time">{new Date().toLocaleDateString()}</time>
      <button className="todo-item__btn check"></button>
      <button className="todo-item__btn delete">X</button>
    </li>
  );

  return <ul className="todo-list">{listItem}</ul>;
};
