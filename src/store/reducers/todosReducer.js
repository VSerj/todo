import {
  TODOS_ALL_TODO_DEL,
  TODOS_COMPLETED_TODO_DEL,
  TODOS_TODO_ADD,
  TODOS_TODO_COMPLETED,
  TODOS_TODO_DEL,
} from '../constants';

let idTodoCounter = 1;

const todosState = [
  {
    id: 0,
    text: 'todo init state',
    completed: false,
  },
];

export const todosReducer = (state = todosState, action) => {
  if (action.type === TODOS_TODO_ADD) {
    return [
      ...state,
      {
        id: idTodoCounter++,
        text: action.payload,
        completed: false,
      },
    ];
  }

  if (action.type === TODOS_ALL_TODO_DEL) {
    return [];
  }

  if (action.type === TODOS_COMPLETED_TODO_DEL) {
    return [...state].filter(todo => todo.completed === false);
  }

  if (action.type === TODOS_TODO_COMPLETED) {
    return [...state].map(todo => {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
  }

  if (action.type === TODOS_TODO_DEL) {
    return [...state].filter(todo => todo.id !== action.payload);
  }

  return state;
};
