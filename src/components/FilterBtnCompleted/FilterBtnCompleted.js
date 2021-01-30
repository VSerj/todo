import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../store/action-creators/filterActions';
import { ACTIVE_FILTER } from '../../store/constants';
import {
  getFilter,
  getNumOfCompletedTOdos,
} from '../../store/selectors/selectors';
import { Button } from '../Button';
import s from './filterBtnCompleted.module.scss';

export const FilterBtnCompleted = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const numOfCompletedTOdos = useSelector(getNumOfCompletedTOdos);

  return (
    <Button
      className={`filter-btn ${s.btn} ${
        filter === ACTIVE_FILTER.completed ? s.isActive : ''
      }`}
      onAction={() => dispatch(changeFilter('completed'))}
    >
      {'Completed: '}
      {numOfCompletedTOdos}
    </Button>
  );
};
