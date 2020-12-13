import React from 'react';
import { Route } from 'react-router-dom';
import { isSignedIn } from './components/User/signInSignOut';
import Home from './components/Home/Home';

function AuthRoute({ component: Component, ...rest }) {
  return <Route {...rest}>{isSignedIn() ? <Home /> : <Component />}</Route>;
}

export default AuthRoute;
