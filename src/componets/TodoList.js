import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  const isTodosExist = todos && todos.length > 0;
  const listItems = isTodosExist
    ? todos.map(({ id, text, completed }) => (
        <TodoItem key={`todo-${id}`} text={text} completed={completed} />
      ))
    : 'Todo list is empty';

  return <ul className="todo-list">{listItems}</ul>;
};
