import { RECEIVE_USER_COMMENTS } from '../Actions/CommentActions';

const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_USER_COMMENTS:
      console.log('action payload', action.payload);
      return action.payload;
    default:
      return preState;
  }
};
