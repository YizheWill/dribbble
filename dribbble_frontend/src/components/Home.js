import React, { Component } from 'react';
import Cards from './Card/cards';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import SignedOutNavBar from './SignedOutNavBar';

export default class className extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <SignedOutNavBar />
        <LandingPage />
        <Cards />
      </div>
    );
  }
}
