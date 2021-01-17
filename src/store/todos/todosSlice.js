const TODOS_TODO_ADD = 'todos/todoAdd';

const todosState = [
  {
    id: 0,
    text: 'todo as todoState (init)',
    completed: false,
  },
];

const addTodo = text => ({
  type: TODOS_TODO_ADD,
  payload: text,
});

// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
//   return maxId + 1
// }

export const todosReducer = (state = todosState, action) => {
  if (action.type === TODOS_TODO_ADD) {
    return [
      ...state,
      {
        id: () => state.todos.length,
        text: action.payload,
        completed: false,
      },
    ];
  }

  return state;
};
