import { BackendFetchUserCollections } from '../Api/CollectionsApi';

export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';

export const receiveCollections = (collections) => ({
  type: RECEIVE_COLLECTIONS,
  payload: collections,
});

export const fetchUserCollections = (userId) => (dispatch) =>
  BackendFetchUserCollections(userId).then((res) => {
    if (res.error) {
      console.log('error getting collections, in collection action', res.error);
    } else {
      return dispatch(receiveCollections(res));
    }
  });
