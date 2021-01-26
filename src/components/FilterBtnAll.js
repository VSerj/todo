import { useDispatch, useSelector } from 'react-redux';

import { ACTIVE_FILTER } from '../store/constants';
import { changeFilter } from '../store/action-creators/filterActions';
import { getFilter, getNumOfAllTOdos } from '../store/selectors/selectors';
import { Button } from './Button';

export const FilterBtnAll = () => {
  const dispatch = useDispatch();
  const numOfAllTOdos = useSelector(getNumOfAllTOdos);
  const filter = useSelector(getFilter);

  return (
    <Button
      className={`filter-btn filter-btn--all ${
        filter === ACTIVE_FILTER.all ? 'isActive' : ''
      }`}
      onAction={() => dispatch(changeFilter('all'))}
    >
      {'All: '}
      {numOfAllTOdos}
    </Button>
  );
};
