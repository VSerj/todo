import { createSelector } from 'reselect';

import { ACTIVE_FILTER } from '../constants';

export const getTodos = ({ todos }) => todos;
export const getFilter = ({ filter }) => filter;
export const getVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case ACTIVE_FILTER.completed:
        return todos.filter(todo => todo.completed);
      case ACTIVE_FILTER.pending:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);

// export const getNumOfTodosForEveryFilter = createSelector([getTodos], todos => {
//   return {
//     [ACTIVE_FILTER.all]: todos.length,
//     [ACTIVE_FILTER.completed]: todos.filter(todo => todo.completed).length,
//     [ACTIVE_FILTER.pending]: todos.filter(todo => !todo.completed).length,
//   };
// });

export const getNumOfAllTOdos = ({ todos }) => todos.length;
export const getNumOfCompletedTOdos = ({ todos }) =>
  todos.filter(todo => todo.completed).length;
export const getNumOfPendingTOdos = ({ todos }) =>
  todos.filter(todo => !todo.completed).length;
