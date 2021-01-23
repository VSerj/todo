import { useDispatch } from 'react-redux';

import {
  deleteAllTodo,
  deleteCompletedTodo,
} from '../store/action-creators/todosActions';

export const BottomClearBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className="clear-container">
      <button onClick={() => dispatch(deleteAllTodo())}>Delete all</button>
      <button onClick={() => dispatch(deleteCompletedTodo())}>
        Delete completed
      </button>
    </div>
  );
};
