import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isSignedIn } from './components/User/signInSignOut';
import Signin from './components/SigninSignup/Signin';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest}>
      {isSignedIn() ? <Component /> : <Redirect to='/signin' />}
    </Route>
  );
}

export default PrivateRoute;
