import { RECEIVE_USER, RECEIVE_CURRENT_USER, REMOVE_USER } from '../Actions/UserActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.user;
    case RECEIVE_CURRENT_USER:
      return action.payload.user;
    case REMOVE_USER:
      return _initState;
    default:
      return preState;
  }
};
