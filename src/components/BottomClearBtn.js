import { useDispatch } from 'react-redux';

import {
  deleteAllTodo,
  deleteCompletedTodo,
} from '../store/action-creators/todosActions';
import { Button } from './Button';

export const BottomClearBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className="clear-container">
      <Button handleAction={() => dispatch(deleteAllTodo())}>Delete all</Button>
      <Button handleAction={() => dispatch(deleteCompletedTodo())}>
        Delete completed
      </Button>
    </div>
  );
};
