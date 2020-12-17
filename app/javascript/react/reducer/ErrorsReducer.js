import {
  RECEIVE_SHOT_ERRORS,
  RECEIVE_SIGNIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS,
  RECEIVE_UPDATE_USER_ERROR,
} from '../Actions/ErrorsActions';
import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../Actions/UserActions';
const _initState = {};
export default (preState = _initState, action) => {
  Object.freeze(preState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.payload.errors;
    case REMOVE_ERRORS:
      return _initState;
    case RECEIVE_SIGNIN_ERRORS:
      return { signInError: action.payload.errors };
    case RECEIVE_SIGNUP_ERRORS:
      return { signUpError: action.payload.errors };
    case RECEIVE_SHOT_ERRORS:
      return { shotError: action.payload.errors };
    case RECEIVE_UPDATE_USER_ERROR:
      return { updateUserError: action.payload };
    default:
      return preState;
  }
};
