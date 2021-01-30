import { API } from '../../API/API';
import {
  changeFetchingStatusOff,
  changeFetchingStatusOn,
} from '../action-creators/fentchingActions';
import { addFenchingTodos } from '../action-creators/todosActions';
import { setIdTodo } from '../reducers/todosReducer';

const fetchFakeTodos = async dispatch => {
  try {
    const response = await API.get(); // елаю запрос либа axios
    const todos = response.data.map(({ title, completed }) => ({
      id: setIdTodo(),
      text: title,
      completed,
    })); // перебираю массив на 200 обьектов, адаптирую под свою структуру данны
    dispatch(addFenchingTodos(todos)); // дабавляю в стейт редакса
    dispatch(changeFetchingStatusOff());  // даю знать, что загрузка завершена
  } catch (error) {
    dispatch(changeFetchingStatusOff());
  }
};

export const loadFakeTodos = dispatch => {
  dispatch(changeFetchingStatusOn()); // даю знать, что началась загрузка
  fetchFakeTodos(dispatch);
};
