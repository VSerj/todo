import { FETCHING_CHANGE_STATUS } from '../constants';

const stateFetching = false;

export const fetchingReducer = (state = stateFetching, { type, payload }) => {
  if (type === FETCHING_CHANGE_STATUS) {
    return payload;
  }

  return state;
};
