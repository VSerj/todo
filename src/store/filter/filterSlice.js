const FILTER_CHANGE = 'filter/changeFilter';

export const changeFilter = currentFilter => ({
  type: FILTER_CHANGE,
  payload: currentFilter,
});

const filterState = 'all';

export const filterReducer = (state = filterState, { type, payload }) => {
  if (type === FILTER_CHANGE) {
    return payload;
  }

  return state;
};
