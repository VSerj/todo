import { createStore } from 'redux';

const todosState = {
  todos: [
    {
      id: 0,
      text: 'todo as todoState (init)',
      completed: false,
    },
  ],
};

const TODOS_TODO_ADD = 'todos/todoAdd';

const addTodo = (text) => ({
  type: TODOS_TODO_ADD,
  payload: text,
});

// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
//   return maxId + 1
// }

const todosReducer = (state = todosState, action) =>  {
  if (action.type === TODOS_TODO_ADD) {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: () => state.todos.length,
          text: action.payload,
          completed: false,
        },
      ],
    };
  }
  return state;
}

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
