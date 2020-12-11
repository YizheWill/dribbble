import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './components/SigninSignup/Signin';
import Signup from './components/SigninSignup/Signup';
import Cards from './components/Card/Cards';
import ShowCard from './components/Card/ShowCard';
import Upload from './components/User/Upload';
import UserProfile from './components/User/UserProfile';
import Home from './components/Home/Home';
import Collections from './components/User/Selection/Collections/CollectionCard';
const Routes = () => (
  <Router>
    <div>
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
        <Route path='/cards'>
          <Cards />
        </Route>
        <Route path='/shot'>
          <ShowCard />
        </Route>
        <Route path='/user'>
          <UserProfile />
        </Route>
        <Route path='/upload'>
          <Upload />
        </Route>
        <Route path='/collections'>
          <Collections />
        </Route>
      </Switch>
    </div>
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
