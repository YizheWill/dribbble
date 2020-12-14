import {
  BackendFetchShot,
  BackendDeleteShot,
  BackendEditShot,
  BackendCreateShot,
} from '../Api/ShotsApi';

import { receiveShotErrors } from './ErrorsActions';

export const RECEIVE_SHOT = 'RECEIVE_SHOT';
export const REMOVE_SHOT = 'REMOVE_SHOT';

export const receiveShot = (shot) => ({
  type: RECEIVE_SHOT,
  payload: shot,
});

export const removeShot = (shotId) => ({
  type: REMOVE_SHOT,
  payload: {
    shotId,
  },
});

export const createShotAction = (shot) => (dispatch) =>
  BackendCreateShot(shot).then((res) => {
    if (res.error) {
      console.log(res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(receiveShot(res));
    }
  });

export const fetchShotAction = (shotId) => (dispatch) =>
  BackendFetchShot(shotId).then((res) => {
    if (res.error) {
      console.log(res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(receiveShot(res));
    }
  });

export const editShotAction = (shot) => (dispatch) =>
  BackendEditShot(shot).then((res) => {
    if (res.error) {
      console.log(res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(receiveShot(res));
    }
  });

export const deleteShotAction = (shotId) => (dispatch) =>
  BackendDeleteShot(shotId).then((res) => {
    if (res.error) {
      console.log(res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(removeShot(shotId));
    }
  });
