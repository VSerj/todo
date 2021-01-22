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
