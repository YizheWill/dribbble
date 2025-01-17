import {
  BackendFetchAllShots,
  BackendDeleteShot,
  BackendEditShot,
  BackendCreateShot,
  BackendFetchKeywordShots,
} from '../Api/ShotsApi';

import { receiveShotErrors } from '../Actions/ErrorsActions';

export const RECEIVE_SHOTS = 'RECEIVE_SHOTS';

export const receiveShots = (shots) => ({
  type: RECEIVE_SHOTS,
  payload: { shots },
});

export const fetchAllShotsAction = () => (dispatch) =>
  BackendFetchAllShots().then((res) => {
    if (res.error) {
      console.log(res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(receiveShots(res));
    }
  });
export const fetchShotsWithKeywordAction = (keyword) => (dispatch) =>
  BackendFetchKeywordShots(keyword).then((res) => {
    if (res.error) {
      console.log('res.error', res.error);
      return dispatch(receiveShotErrors(res.error));
    } else {
      return dispatch(receiveShots(res));
    }
  });
