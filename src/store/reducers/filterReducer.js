import { ACTIVE_FILTER, FILTER_CHANGE } from '../constants';

const filterState = ACTIVE_FILTER.all;

export const filterReducer = (state = filterState, { type, payload }) => {
  if (type === FILTER_CHANGE) {
    return payload;
  }

  return state;
};
