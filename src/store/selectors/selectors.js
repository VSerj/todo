import { createSelector } from 'reselect';

import { ACTIVE_FILTER } from '../constants';

export const getTodos = state => state.todos;
export const getFilter = state => state.filter;
export const getVisibleTodos = createSelector(
  getTodos,
  getFilter,
  (todos, filter) => {
    switch (filter) {
      case ACTIVE_FILTER.all:
        return todos;
      case ACTIVE_FILTER.completed:
        return todos.filter(todo => todo.completed);
      case ACTIVE_FILTER.pending:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);
export const getNumOfTodosForEveryFilter = createSelector(getTodos, todos => {
  return {
    [ACTIVE_FILTER.all]: todos.length,
    [ACTIVE_FILTER.completed]: todos.filter(todo => todo.completed).length,
    [ACTIVE_FILTER.pending]: todos.filter(todo => !todo.completed).length,
  };
});
