import React, { Component } from 'react';
import Cards from '../Card/Cards';
import LandingPage from './LandingPage';
// import Navbar from '../Navbar/Navbar';
import SignedOutNavBar from '../NavBar/SignedOutNavBar';

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
