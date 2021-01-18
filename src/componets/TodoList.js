import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, deleteTodo, completedTodo, filter }) => {
  const isTodosExist = todos && todos.length > 0;
  const filtredTodos =
    filter === 'all'
      ? todos
      : filter === 'completed'
      ? todos.filter(todo => todo.completed === true)
      : todos.filter(todo => todo.completed === false);
  const listItems = isTodosExist
    ? filtredTodos.map(({ id, text, completed }) => (
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
