import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../Actions/UserActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.payload.errors;
    case REMOVE_ERRORS:
      return _initState;
    default:
      return preState;
  }
};
