import { useDispatch, useSelector } from 'react-redux';

import { ACTIVE_FILTER } from '../../store/constants';
import { changeFilter } from '../../store/action-creators/filterActions';
import { getFilter, getNumOfAllTOdos } from '../../store/selectors/selectors';
import { Button } from '../Button';
import { sortPendingFirst } from '../../store/action-creators/todosActions';
import s from './filterBtnAll.module.scss';

export const FilterBtnAll = () => {
  const dispatch = useDispatch();
  const numOfAllTOdos = useSelector(getNumOfAllTOdos);
  const filter = useSelector(getFilter);

  return (
    <div className="wrapper-filter-btn">
      <Button
        className={`filter-btn ${s.btn} ${
          filter === ACTIVE_FILTER.all ? s.isActive : ''
        }`}
        onAction={() => dispatch(changeFilter('all'))}
      >
        {'All: '}
        {numOfAllTOdos}
      </Button>
      <Button
        className={`sort-btn ${
          filter !== ACTIVE_FILTER.all ? 'sort-btn--hide' : ''
        }`}
        onAction={() => dispatch(sortPendingFirst())}
      >
        pending first
      </Button>
    </div>
  );
};
