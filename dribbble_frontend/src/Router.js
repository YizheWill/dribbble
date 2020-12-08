import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './components/SigninSide';
import Cards from './components/Card/cards';
import ShowCard from './components/Card/ShowCard';
import Home from './components/Home';
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/cards'>
            <Cards />
          </Route>
          <Route path='/show'>
            <ShowCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
