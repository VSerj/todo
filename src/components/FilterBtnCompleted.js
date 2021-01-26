import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../store/action-creators/filterActions';
import { ACTIVE_FILTER } from '../store/constants';
import {
  getFilter,
  getNumOfCompletedTOdos,
} from '../store/selectors/selectors';
import { Button } from './Button';

export const FilterBtnCompleted = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const numOfCompletedTOdos = useSelector(getNumOfCompletedTOdos);

  return (
    <Button
      className={`filter-btn filter-btn--completed ${
        filter === ACTIVE_FILTER.completed ? 'isActive' : ''
      }`}
      onAction={() => dispatch(changeFilter('completed'))}
    >
      {'Completed: '}
      {numOfCompletedTOdos}
    </Button>
  );
};
