import { signIn, signOut } from '../components/User/signInSignOut';
import {
  BackendSignInUser,
  BackendSignUpUser,
  BackendGetUserInfo,
  BackendGetCurrentUserInfo,
  BackendEditUser,
} from '../Api/UserAuth';
import { receiveUpdateUserError } from '../Actions/ErrorsActions';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: {
    user,
  },
});
export const removeUser = () => ({
  type: REMOVE_USER,
});
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  payload: {
    errors,
  },
});

export const signInUserAction = (usr) => (dispatch) => {
  BackendSignInUser(usr).then((res) => {
    if (res.error) {
      window.localStorage.clear();
      console.log('cleaned storage');
      return dispatch(receiveErrors(res.error));
    } else {
      signIn(res.sessionToken);
      return dispatch(receiveUser(res));
    }
  });
};

export const signOutUserAction = () => (dispatch) => {
  dispatch(removeUser());
};

export const editUserAction = (user) => (dispatch) => {
  BackendEditUser(user).then((res) => {
    if (res.error) {
      return dispatch(receiveUpdateUserError(res.error));
    } else {
      return dispatch(receiveUser(res));
    }
  });
};

export const signUpUserAction = (user) => (dispatch) => {
  BackendSignUpUser(user).then((res) => {
    if (res.error) {
      return dispatch(receiveErrors(res.error));
    } else {
      signIn(res.sessionToken);
      return dispatch(receiveUser(res));
    }
  });
};

export const getCurrentUserInfo = (sessionToken) => (dispatch) => {
  console.log(sessionToken);
  BackendGetCurrentUserInfo(sessionToken).then((res) => {
    if (res.error) {
      console.log('signing out');
      signOut();
    } else {
      dispatch(receiveUser(res));
    }
  });
};

export const getUserInfo = (id) => (dispatch) => {
  console.log('getUserInfo', id);
  BackendGetUserInfo(id).then((user) => {
    console.log('backend user', user);
    dispatch(receiveUser(user));
  });
};

export const removeErrors = () => {
  console.log('here removing errors');
  return {
    type: REMOVE_ERRORS,
  };
};
