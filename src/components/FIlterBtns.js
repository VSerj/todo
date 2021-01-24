import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getFilter,
  getNumOfTodosForEveryFilter,
} from '../store/selectors/selectors';
import { changeFilter } from '../store/action-creators/filterActions';
import { Button } from './Button';

export const FilterBtns = ({ btns }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = useCallback(
    filter => dispatch(changeFilter(filter)),
    [dispatch]
  );
  const currentFilter = useSelector(getFilter);
  const numOfTodosForEveryFilter = useSelector(getNumOfTodosForEveryFilter);
  const createArrPropsForBtns = () => {
    return btns.map(btnsAssignment => {
      const contentText = `${btnsAssignment[0].toUpperCase()}${btnsAssignment.slice(
        1
      )}`;
      return {
        btnsAssignment,
        className: `filter-btn filter-btn--${btnsAssignment} ${
          btnsAssignment === currentFilter ? 'isActive' : ''
        }`,
        contentText,
        numOfTodos: numOfTodosForEveryFilter[btnsAssignment],
      };
    });
  };

  return createArrPropsForBtns().map(
    ({ btnsAssignment, className, contentText, numOfTodos }) => {
      return (
        <Button
          key={btnsAssignment}
          className={className}
          handleAction={() => handleChangeFilter(btnsAssignment)}
        >
          {' '}
          {contentText}
          {': '}
          {numOfTodos}
        </Button>
      );
    }
  );
};
