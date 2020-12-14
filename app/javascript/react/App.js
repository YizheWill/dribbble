import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/SigninSignup/Signin';
import Signup from './components/SigninSignup/Signup';
import Cards from './components/Card/Cards';
import Shot from './components/Card/Shot';
import Upload from './components/User/Upload';
import UserProfile from './components/User/UserProfile';
import Home from './components/Home/Home';
import Collections from './components/User/Selection/Collections/Collections';
import UserApi from './UserApi';
import UsersApi from './UsersApi';
import ProtectedRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <AuthRoute path='/signin' component={Signin} />
      <AuthRoute path='/signup' component={Signup} />
      <ProtectedRoute path='/cards' component={Cards}></ProtectedRoute>
      <ProtectedRoute path='/shots/:shotId' component={Shot}></ProtectedRoute>
      <ProtectedRoute path='/users/:artistId' component={UserProfile}></ProtectedRoute>
      <ProtectedRoute path='/upload' component={Upload}></ProtectedRoute>
      <ProtectedRoute path='/collections' component={Collections}></ProtectedRoute>
      {/* <ProtectedRoute path='/usersapi' component={UsersApi}></ProtectedRoute> */}
      {/* <Route path='/userapi/:userId' component={UserApi}></Route> */}
    </Switch>
  </Router>
);
function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
