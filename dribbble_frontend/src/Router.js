import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './components/SigninSide';
import Cards from './components/Card/cards';
import Home from './components/Home';
export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/cards'>cards</Link>
            </li>
            <li>
              <Link to='/signin'>signin</Link>
            </li>
          </ul>
        </nav> */}
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
        </Switch>
      </div>
    </Router>
  );
}