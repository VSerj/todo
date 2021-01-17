import { combineReducers } from 'redux';
import { filterReducer } from './todos/filterSlice';
import { todosReducer } from './todos/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

export default rootReducer;
