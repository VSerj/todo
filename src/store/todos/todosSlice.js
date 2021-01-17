const TODOS_TODO_ADD = 'todos/todoAdd';
const TODOS_TODO_COMPLETED = 'todos/todoCompleted';
const TODOS_TODO_DEL = 'todos/todoDel';

let idTodoCounter = 1;

const todosState = [
  {
    id: 0,
    text: 'todo init state',
    completed: false,
  },
];

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

export const todosReducer = (state = todosState, action) => {
  if (action.type === TODOS_TODO_ADD) {
    return [
      ...state,
      {
        id: idTodoCounter++, //temp id
        text: action.payload,
        completed: false,
      },
    ];
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