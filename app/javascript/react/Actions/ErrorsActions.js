export const RECEIVE_SIGNIN_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_SHOT_ERRORS = 'RECEIVE_SHOT_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveSignInErrors = (errors) => ({
  type: RECEIVE_SIGNIN_ERRORS,
  payload: errors,
});
export const receiveSignUpErrors = (errors) => ({
  type: RECEIVE_SIGNUP_ERRORS,
  payload: errors,
});

export const receiveShotErrors = (errors) => ({
  type: RECEIVE_SHOT_ERRORS,
  payload: errors,
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});
