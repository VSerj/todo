import {
  TODOS_ALL_TODO_DEL,
  TODOS_COMPLETED_TODO_DEL,
  TODOS_TODO_ADD,
  TODOS_TODO_COMPLETED,
  TODOS_TODO_DEL,
  TODOS_TODO_SORT_PENDING_FIRST,
} from '../constants';

export const addTodo = text => ({
  type: TODOS_TODO_ADD,
  payload: text,
});

export const completedTodo = id => ({
  type: TODOS_TODO_COMPLETED,
  payload: id,
});

export const deleteTodo = id => ({
  type: TODOS_TODO_DEL,
  payload: id,
});

export const deleteAllTodo = () => ({
  type: TODOS_ALL_TODO_DEL,
});

export const deleteCompletedTodo = () => ({
  type: TODOS_COMPLETED_TODO_DEL,
});

export const sortPendingFirst = () => ({
  type: TODOS_TODO_SORT_PENDING_FIRST,
});
