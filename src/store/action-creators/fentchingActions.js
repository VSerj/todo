import { FETCHING_CHANGE_STATUS } from "../constants";

export const changeFetchingStatusOn = () => ({
  type: FETCHING_CHANGE_STATUS,
  payload: true,
});

export const changeFetchingStatusOff = () => ({
  type: FETCHING_CHANGE_STATUS,
  payload: false,
});
