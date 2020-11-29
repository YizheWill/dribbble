import React, { Component } from 'react';
import Cards from './Card/cards';
import LandingPage from './LandingPage';
import Navbar from './Navbar';

export default class className extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <Cards />
      </div>
    );
  }
}
