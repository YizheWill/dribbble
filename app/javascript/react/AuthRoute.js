import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isSignedIn } from './components/User/signInSignOut';

function AuthRoute({ component: Component, ...rest }) {
  return <Route {...rest}>{isSignedIn() ? <Redirect to='/' /> : <Component />}</Route>;
}

export default AuthRoute;
