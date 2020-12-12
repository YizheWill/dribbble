import React from 'react';
import { Route } from 'react-router-dom';
import { isSignedIn } from './components/User/signInSignOut';
import Signin from './components/SigninSignup/Signin';

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest}>{isSignedIn() ? <Component /> : <Signin />}</Route>;
}

export default PrivateRoute;
