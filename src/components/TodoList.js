// import { useCallback } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

// import {
//   deleteTodoAction,
//   completedTodoAction,
// } from '../store/action-creators/todosActions';
import { getVisibleTodos } from '../store/selectors/selectors';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  // const dispatch = useDispatch();
  // const deleteTodo = useCallback((id) => {
  //   dispatch(deleteTodoAction(id));
  // }, [dispatch]);
  // const completedTodo = useCallback((id) => {
  //   dispatch(completedTodoAction(id));
  // }, [dispatch]);

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
              // deleteTodo={deleteTodo}
              // completedTodo={completedTodo}
            />
          ))
        : 'Todo list is empty'}
    </ul>
  );
};
