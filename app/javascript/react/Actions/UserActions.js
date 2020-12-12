import { signIn } from '../components/User/signInSignOut';
import {
  BackendSignInUser,
  BackendSignUpUser,
  BackendGetUserInfo,
  BackendGetCurrentUserInfo,
} from '../Api/UserAuth';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: {
    user,
  },
});
export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  payload: {
    user,
  },
});
export const removeUser = () => ({
  type: REMOVE_USER,
});
export const receiveErrors = (error) => ({});

export const signInUserAction = (usr) => (dispatch) => {
  BackendSignInUser(usr).then(
    (user) => {
      signIn(user.sessionToken);
      dispatch(receiveCurrentUser(user));
    },
    (err) => {
      dispatch(receiveErrors(err));
    }
  );
};

export const signOutUserAction = () => (dispatch) => {
  dispatch(removeUser());
};

export const signUpUserAction = (user) => (dispatch) => {
  BackendSignUpUser(user).then((user) => {
    console.log('backend here', user);
    signIn(user.sessionToken);
    dispatch(receiveCurrentUser(user));
  });
};

export const getCurrentUserInfo = (sessionToken) => (dispatch) => {
  console.log(sessionToken);
  BackendGetCurrentUserInfo(sessionToken).then((user) => {
    console.log(user);
    dispatch(receiveCurrentUser(user));
  });
};

export const getUserInfo = (id) => (dispatch) => {
  console.log('getUserInfo', id);
  BackendGetUserInfo(id).then((user) => {
    console.log('backend user', user);
    dispatch(receiveUser(user));
  });
};
