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
// import ProtectedRoute from './PrivateRoute';
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/signin'>
        <Signin />
      </Route>
      <Route exact path='/shot' component={Shot} />
      {/* <Route path='/cards'>
        <Cards />
      </Route>
      <Route path='/user'>
        <UserProfile />
      </Route>
      <Route path='/upload'>
        <Upload />
      </Route>
      <Route path='/collections'>
        <Collections />
      </Route> */}
      {/* <Route path='/userapi'>
        <UserApi />
      </Route> */}
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

{
  /* <ProtectedRoute path='/cards' component={Cards}></ProtectedRoute>
      <ProtectedRoute path='/shot' component={ShowCard}></ProtectedRoute>
      <ProtectedRoute path='/user' component={UserProfile}></ProtectedRoute>
      <ProtectedRoute path='/upload' component={Upload}></ProtectedRoute>
      <ProtectedRoute path='/collections' component={Collections}></ProtectedRoute>
      <ProtectedRoute path='/usersapi' component={UsersApi}></ProtectedRoute>
      <ProtectedRoute path='/userapi/:userId' component={UserApi}></ProtectedRoute> */
}
