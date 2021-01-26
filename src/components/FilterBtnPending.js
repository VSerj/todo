import { useDispatch, useSelector } from "react-redux";

import { ACTIVE_FILTER } from '../store/constants';
import { changeFilter } from '../store/action-creators/filterActions';
import {
  getFilter,
  getNumOfPendingTOdos,
} from '../store/selectors/selectors';
import { Button } from "./Button";

export const FilterBtnPending = () => {
  const dispatch = useDispatch()
  const numOfPendingTOdos = useSelector(getNumOfPendingTOdos);
  const filter = useSelector(getFilter);
  
  return (
    <Button
      className={`filter-btn filter-btn--pending ${
        filter === ACTIVE_FILTER.pending ? 'isActive' : ''
      }`}
      onAction={() => dispatch(changeFilter('pending'))}
    >
      {'Pending: '}
      {numOfPendingTOdos}
    </Button>
  );
};
