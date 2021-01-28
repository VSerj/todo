import {
  TODOS_ALL_TODO_DEL,
  TODOS_COMPLETED_TODO_DEL,
  TODOS_TODO_ADD,
  TODOS_TODO_COMPLETED,
  TODOS_TODO_DEL,
  TODOS_TODO_SORT_PENDING_FIRST,
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
  switch (action.type) {
    case TODOS_TODO_ADD: {
      return [
        ...state,
        {
          id: idTodoCounter++,
          text: action.payload,
          completed: false,
        },
      ];
    }
    case TODOS_ALL_TODO_DEL: {
      return [];
    }
    case TODOS_TODO_SORT_PENDING_FIRST: {
      return [...state].sort((a, b) => a.completed - b.completed);
    }
    case TODOS_COMPLETED_TODO_DEL: {
      return state.filter(todo => !todo.completed);
      // return state.filter(todo => todo.completed).length > 0 // ist bad?
      //   ? state.filter(todo => !todo.completed)
      //   : state;
    }
    case TODOS_TODO_COMPLETED: {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case TODOS_TODO_DEL: {
      return state.filter(todo => todo.id !== action.payload); // ist bad?
    }
    default:
      return state;
  }
};
