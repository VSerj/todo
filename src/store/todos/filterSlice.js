const filterState = {
  data: true,
};

const FILTER_HIDE_ALL = 'filter/hideAll';

export const filterReducer = (state = filterState, action) => {
  if (action.type === FILTER_HIDE_ALL) {
    return {
      ...state,
      data: false,
    };
  }

  return state;
};
