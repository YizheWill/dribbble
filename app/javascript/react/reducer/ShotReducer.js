import { RECEIVE_SHOT, REMOVE_SHOT } from '../Actions/ShotActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_SHOT:
      return action.payload.shot;
    case REMOVE_SHOT:
      const toReturn = { ...preState };
      delete toReturn[action.payload.shotId];
      return toReturn;
    default:
      return preState;
  }
};
