import {
  RECEIVE_SHOT_COMMENTS,
  RECEIVE_SHOT_COMMENT,
  REMOVE_SHOT_COMMENT,
} from '../Actions/CommentActions';

const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_SHOT_COMMENTS:
      // console.log('action payload', action.payload);
      return action.payload;
    case RECEIVE_SHOT_COMMENT:
      const newState = {
        ...preState,
        [action.payload.comment.id]: action.payload.comment,
      };
      return newState;
    case REMOVE_SHOT_COMMENT:
      const newStates = {
        ...preState,
      };
      delete newStates[action.payload.commentId];
      return newStates;
    default:
      return preState;
  }
};
