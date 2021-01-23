import { useDispatch, useSelector } from 'react-redux';

import { ACTIVE_FILTER } from '../store/constants';
import {
  getFilter,
  getNumOfTodosForEveryFilter,
} from '../store/selectors/selectors';
import { changeFilter } from '../store/action-creators/filterActions';

export const Filter = () => {
  const currentFilter = useSelector(getFilter);
  const numOfTodosForEveryFilter = useSelector(getNumOfTodosForEveryFilter);
  const dispatch = useDispatch();
  const filterIdsForBtns = Object.values(ACTIVE_FILTER).map(el =>
    el.toLowerCase()
  );

  const createArrPropsForBtns = (
    filterIdsForBtns,
    currentFilter,
    numOfTodosForEveryFilter
  ) => {
    return filterIdsForBtns.map(filterId => {
      const contentText = `${filterId[0].toUpperCase()}${filterId.slice(1)}`;
      return {
        filterId,
        className: `filter-btn filter-btn--${filterId} ${
          filterId === currentFilter ? 'isActive' : ''
        }`,
        contentText,
        numOfTodos: numOfTodosForEveryFilter[filterId],
      };
    });
  };

  return (
    <div className="filter-container">
      {createArrPropsForBtns(
        filterIdsForBtns,
        currentFilter,
        numOfTodosForEveryFilter
      ).map(({ filterId, className, contentText, numOfTodos }) => {
        return (
          <button
            key={filterId}
            className={className}
            onClick={() => dispatch(changeFilter(filterId))}
          >
            {' '}
            {contentText}
            {': '}
            {numOfTodos}
          </button>
        );
      })}
    </div>
  );
};
