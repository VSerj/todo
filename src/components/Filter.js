import { shallowEqual, useSelector } from 'react-redux';

import { FilterBtns } from './FIlterBtns';
import {
  getFilter,
  getNumOfTodosForEveryFilter,
} from '../store/selectors/selectors';

export const Filter = ({ filterIds }) => {
  const currentFilter = useSelector(getFilter);
  const numOfTodosForEveryFilter = useSelector(
    getNumOfTodosForEveryFilter,
    // shallowEqual
  );

  return (
    <div className="filter-container">
      <FilterBtns
        currentFilter={currentFilter}
        btns={filterIds}
        numOfTodosForEveryFilter={numOfTodosForEveryFilter}
      />
    </div>
  );
};
