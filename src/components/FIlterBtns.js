// import React, { useCallback, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { changeFilter } from '../store/action-creators/filterActions';
// import {
//   // getNumOfAllTOdos,
//   getNumOfCompletedTOdos,
//   getNumOfPendingTOdos,
// } from '../store/selectors/selectors';
// import { Button } from './Button';
// import { FilterBtnAll } from './FilterBtnAll';
// import { FilterBtnCompleted } from './FilterBtnCompleted';
// import { FilterBtnPending } from './FilterBtnPending';
// import {
//   getFilter,
//   // getNumOfTodosForEveryFilter,
// } from '../store/selectors/selectors';

// export const FilterBtns = () => {
  // const dispatch = useDispatch();
  // const currentFilter = useSelector(getFilter);

  // const numOfAllTOdos = useSelector(getNumOfAllTOdos);
  // const numOfCompletedTOdos = useSelector(getNumOfCompletedTOdos);
  // const numOfPendingTOdos = useSelector(getNumOfPendingTOdos);
  // return (

  // );
// };
// const createArrPropsForBtns = () => {
//   return btns.map(btnsAssignment => {
//     const contentText = `${btnsAssignment[0].toUpperCase()}${btnsAssignment.slice(
//       1
//     )}`;
//     return {
//       btnsAssignment,
//       className: `filter-btn filter-btn--${btnsAssignment} ${
//         btnsAssignment === currentFilter ? 'isActive' : ''
//       }`,
//       contentText,
//       numOfTodos: ,
//       handleFilterChange() {
//         dispatch(changeFilter(btnsAssignment));
//       },
//     };
//   });
// };

// return createArrPropsForBtns().map(
//   ({
//     btnsAssignment,
//     className,
//     contentText,
//     numOfTodos,
//     handleFilterChange,
//   }) => {
//     return (
//       <Button
//         key={btnsAssignment}
//         className={className}
//         onAction={handleFilterChange}
//       >
//         {' '}
//         {contentText}
//         {': '}
//         {numOfTodos}
//       </Button>
//     );
//   }
// );
