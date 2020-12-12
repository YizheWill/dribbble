import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../Card/Cards';
import LandingPage from './LandingPage';
import Navbar from '../NavBar/Navbar';
import SignedOutNavBar from '../NavBar/SignedOutNavBar';
import { getCurrentUserInfo } from '../../Actions/UserActions';
import { isSignedIn } from '../User/signInSignOut';

const Home = ({ user, fetchAndSetUser }) => {
  useEffect(() => {
    if (isSignedIn()) {
      fetchAndSetUser(isSignedIn());
    }
  }, []);
  console.log('user', user);
  return (
    <div>
      {user.id ? <Navbar /> : <SignedOutNavBar />}
      <LandingPage />
      <Cards />
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.user,
  }),
  (dispatch) => ({
    fetchAndSetUser: (sessionToken) => dispatch(getCurrentUserInfo(sessionToken)),
  })
)(Home);
