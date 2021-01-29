import { RECEIVE_COLLECTIONS } from '../Actions/CollectionActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      // console.log('action payload', action.payload);
      return action.payload;
    default:
      return preState;
  }
};
