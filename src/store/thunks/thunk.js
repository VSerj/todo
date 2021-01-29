import { API } from '../../API/API';
import {
  changeFetchingStatusOff,
  changeFetchingStatusOn,
} from '../action-creators/fentchingActions';
import { addFenchingTodos } from '../action-creators/todosActions';
import { setIdTodo } from '../reducers/todosReducer';

const fetchFakeTodos = async (dispatch) => {
  const response = await API.get();
  const todos = response.data.map(({ title, completed }) => ({
    id: setIdTodo(),
    text: title,
    completed,
  }));
  dispatch(addFenchingTodos(todos));
  dispatch(changeFetchingStatusOff());
};

export const loadFakeTodos = dispatch => {
  dispatch(changeFetchingStatusOn());
  fetchFakeTodos(dispatch);
};
