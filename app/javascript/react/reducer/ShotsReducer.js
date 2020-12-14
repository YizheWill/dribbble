import { RECEIVE_SHOTS } from '../Actions/ShotsActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_SHOTS:
      return action.payload.shots;
    default:
      return preState;
  }
};
