import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cards from '../Card/Cards';
import LandingPage from './LandingPage';
import Navbar from '../NavBar/Navbar';
import SignedOutNavBar from '../NavBar/SignedOutNavBar';
import { getCurrentUserInfo } from '../../Actions/UserActions';
import { isSignedIn } from '../User/signInSignOut';
import { fetchAllShotsAction } from '../../Actions/ShotsActions';

const Home = ({ user, fetchAndSetUser, fetchShots, shots }) => {
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    fetchShots();
    //   debugger;
    //   console.log('urls', user);
    //   console.log('shots', shots);
    if (isSignedIn()) {
      fetchAndSetUser(isSignedIn());
    }
  }, []);
  useEffect(() => {
    setUrls(shots);
  }, [shots]);
  // shots !== {} && setUrls(urlsAndNamesToRender);
  console.log('shots', shots);
  return (
    <div>
      {user.id ? <Navbar /> : <SignedOutNavBar />}
      <LandingPage />
      <Cards urls={urls ? urls : []} />
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.user,
    shots: Object.values(state.entities.shots),
  }),
  (dispatch) => ({
    fetchShots: () => dispatch(fetchAllShotsAction()),
    fetchAndSetUser: (sessionToken) => dispatch(getCurrentUserInfo(sessionToken)),
  })
)(Home);
