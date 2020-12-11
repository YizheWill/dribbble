import React, { Component } from 'react';
import Cards from '../Card/Cards';
import LandingPage from './LandingPage';
import Navbar from '../NavBar/Navbar';
import SignedOutNavBar from '../NavBar/SignedOutNavBar';
import { isSignedIn } from '../User/signInSignOut';

export default class className extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {isSignedIn() ? <Navbar /> : <SignedOutNavBar />}
        <LandingPage />
        <Cards />
      </div>
    );
  }
}
