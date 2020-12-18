import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Signin from './components/SigninSignup/Signin';
import Signup from './components/SigninSignup/Signup';
import Cards from './components/Card/Cards';
import Shot from './components/Card/Shot';
import Upload from './components/User/Upload';
import UserProfile from './components/User/UserProfile';
import Home from './components/Home/Home';
import Collections from './components/User/Selection/Collections/Collections';
import Collection from './components/User/Selection/Collections/Collection';
import EditUserForm from './components/User/EditUserForm';
import Feedback from './components/Card/Feedback';
import ProtectedRoute from './PrivateRoute';
import Notifications from './components/User/Notifications';
import AuthRoute from './AuthRoute';
import About from './components/User/About';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

const Routes = () => (
  <Router>
    <Scroll>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <AuthRoute path='/signin' component={Signin} />
        <AuthRoute path='/signup' component={Signup} />
        <ProtectedRoute path='/cards' component={Cards}></ProtectedRoute>
        <ProtectedRoute exact path='/shots/:shotId' component={Shot}></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/users/:artistId'
          component={UserProfile}
        ></ProtectedRoute>
        <ProtectedRoute path='/shots/:shotId/feedback' component={Feedback} />
        <ProtectedRoute path='/upload' component={Upload}></ProtectedRoute>
        <ProtectedRoute
          exact
          path='/collections'
          component={Collections}
        ></ProtectedRoute>
        <ProtectedRoute path='/about' component={About}></ProtectedRoute>
        <ProtectedRoute
          path='/collections/:collectionId'
          component={Collection}
        ></ProtectedRoute>
        <ProtectedRoute path='/edit' component={EditUserForm} />
        <ProtectedRoute path='/notifications' component={Notifications} />
      </Switch>
    </Scroll>
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
