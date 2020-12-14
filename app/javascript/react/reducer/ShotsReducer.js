import { RECEIVE_SHOTS, RECEIVE_SHOT, REMOVE_SHOT } from '../Actions/ShotsActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_SHOTS:
      return action.payload.shots;
    case RECEIVE_SHOT:
      return { ...preState, [action.payload.shot.id]: action.payload.shot };
    case REMOVE_SHOT:
      const toReturn = { ...preState };
      delete toReturn[action.payload.shotId];
      return toReturn;
    default:
      return preState;
  }
};
