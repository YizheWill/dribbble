import {
  BackendFetchUserComments,
  BackendFetchShotComments,
  BackendCreateShotComment,
} from '../Api/CommentApi';

export const RECEIVE_USER_COMMENTS = 'RECEIVE_USER_COMMENTS';
export const RECEIVE_SHOT_COMMENT = 'RECEIVE_SHOT_COMMENT';
export const RECEIVE_SHOT_COMMENTS = 'RECEIVE_SHOT_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveShotComment = (comment) => ({
  type: RECEIVE_SHOT_COMMENT,
  payload: comment,
});
export const receiveShotComments = (comments) => ({
  type: RECEIVE_SHOT_COMMENTS,
  payload: comments,
});

export const receiveUserComments = (comments) => ({
  type: RECEIVE_USER_COMMENTS,
  payload: comments,
});

export const removeShotComment = (commentId) => ({
  type: REMOVE_SHOT_COMMENT,
  payload: { commentId },
});

export const fetchShotCommentsAction = (shotId) => (dispatch) =>
  BackendFetchShotComments(shotId).then((res) => {
    if (res.error) {
      console.log('error getting comments, in comments action', res.error);
    } else {
      return dispatch(receiveShotComments(res));
    }
  });

export const fetchUserCommentsAction = (userId) => (dispatch) =>
  BackendFetchUserComments(userId).then((res) => {
    if (res.error) {
      console.log('error getting comments, in comments action', res.error);
    } else {
      return dispatch(receiveUserComments(res));
    }
  });
export const removeShotCommentAction = (commentId) => (dispatch) =>
  BackendRemoveShotComment(commentId).then(() => {
    return dispatch(removeShotComment(commentId));
  });

export const createShotCommentAction = (comment) => (dispatch) =>
  BackendCreateShotComment(comment).then((res) => {
    if (res.error) {
      console.log('error creating comments, in comments action');
    } else {
      return dispatch(receiveShotComment(res));
    }
  });
