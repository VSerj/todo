import { useDispatch, useSelector } from 'react-redux';

import {
  deleteAllTodo,
  deleteCompletedTodo,
} from '../../store/action-creators/todosActions';
import {
  getNumOfAllTOdos,
  getNumOfCompletedTOdos,
} from '../../store/selectors/selectors';
import { Button } from '../Button';
import s from './bottomClearBtns.module.scss';

export const BottomClearBtns = () => {
  const dispatch = useDispatch();
  const numOfTodos = useSelector(getNumOfAllTOdos);
  const numOfCompletedTodos = useSelector(getNumOfCompletedTOdos);

  return (
    <div className={s.container}>
      <Button
        onAction={numOfTodos === 0 ? null : () => dispatch(deleteAllTodo())}
      >
        Delete all
      </Button>
      <Button
        onAction={
          numOfCompletedTodos === 0
            ? null
            : () => dispatch(deleteCompletedTodo())
        }
      >
        Delete completed
      </Button>
    </div>
  );
};
