import { FILTER_CHANGE } from "../constants";

export const changeFilter = activeFilter => ({
  type: FILTER_CHANGE,
  payload: activeFilter,
});
