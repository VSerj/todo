import { useSelector } from 'react-redux';

import { getVisibleTodos } from '../store/selectors/selectors';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const isTodosExist = todos && todos.length > 0;

  return (
    <ul className="todo-list">
      {isTodosExist
        ? todos.map(({ id, text, completed }) => (
            <TodoItem
              key={`todo-${id}`}
              id={id}
              text={text}
              completed={completed}
            />
          ))
        : 'The list is empty for the current filter'}
    </ul>
  );
};
