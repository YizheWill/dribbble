import {
  BackendFetchUserCollections,
  BackendFetchCollection,
} from '../Api/CollectionsApi';

export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTIONS';
export const RECEIVE_COLLECTIONS = 'RECEIVE_COLLECTIONS';

export const receiveCollection = (collection) => ({
  type: RECEIVE_COLLECTION,
  payload: collection,
});

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

export const fetchCollectionAction = (collectionId) => (dispatch) =>
  BackendFetchCollection(collectionId).then((res) => {
    if (res.error) {
      console.log('error getting a collection, in collection action', res.error);
    } else {
      return dispatch(receiveCollection(res));
    }
  });
