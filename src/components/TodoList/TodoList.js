import { useSelector } from 'react-redux';

import { getVisibleTodos } from '../../store/selectors/selectors';
import { TodoItem } from '../TodoItem/TodoItem';
import s from './todoList.module.scss';

export const TodoList = () => {
  const todos = useSelector(getVisibleTodos);

  return (
    <ul className={s.container}>
      {todos.length > 0
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
