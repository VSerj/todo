import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  const isTodosExist = todos && todos.length > 0;
  const listItems = isTodosExist
    ? todos.map(({ id, text, completed }) => (
        <TodoItem
          key={`todo-${id}`}
          text={text}
          completed={completed}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
          id={id}
        />
      ))
    : 'Todo list is empty';

  return <ul className="todo-list">{listItems}</ul>;
};
