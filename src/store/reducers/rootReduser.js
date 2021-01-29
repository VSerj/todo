import { combineReducers } from 'redux';

import { fetchingReducer } from './fetchingReducer';
import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  fetching: fetchingReducer,
});

export default rootReducer;
