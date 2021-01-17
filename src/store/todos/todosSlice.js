const TODOS_TODO_ADD = 'todos/todoAdd';

const todosState = [
  {
    id: 0,
    text: 'todo as todoState (init)',
    completed: false,
  },
];

export const addTodo = text => ({
  type: TODOS_TODO_ADD,
  payload: text,
});

export const todosReducer = (state = todosState, action) => {
  if (action.type === TODOS_TODO_ADD) {
    return [
      ...state,
      {
        id: state.length, //temp id
        text: action.payload,
        completed: false,
      },
    ];
  }

  return state;
};
