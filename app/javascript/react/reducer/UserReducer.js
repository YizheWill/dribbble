import { RECEIVE_USER } from '../Actions/UserActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.user;
    default:
      return preState;
  }
};
