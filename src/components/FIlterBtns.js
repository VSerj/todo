import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../store/action-creators/filterActions';
import { Button } from './Button';

export const FilterBtns = ({
  btns,
  numOfTodosForEveryFilter,
  currentFilter,
}) => {
  const dispatch = useDispatch();

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
        handleFilterChange() {
          dispatch(changeFilter(btnsAssignment));
        },
      };
    });
  };

  return createArrPropsForBtns().map(
    ({
      btnsAssignment,
      className,
      contentText,
      numOfTodos,
      handleFilterChange,
    }) => {
      return (
        <Button
          key={btnsAssignment}
          className={className}
          onAction={handleFilterChange}
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
