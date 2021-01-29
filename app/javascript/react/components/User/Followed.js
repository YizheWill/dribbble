import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import NotFollowing from '../../assets/imgs/notfollowing';
import FollowedUser from './FollowedUser';

function Users({ userImFollowing }) {
  // console.log('userImFollowing', userImFollowing);
  // debugger;
  const history = useHistory();
  const renderUsers = () => {
    return userImFollowing.map((user) => (
      <FollowedUser
        style={{ cursor: 'pointer' }}
        onClick={() => history.push(`/users/${user.id}`)}
        key={user.id}
        user={user}
      />
    ));
  };
  const renderEmpty = () => {
    return (
      <div
        style={{
          width: '100%',
          marginTop: 100,
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={NotFollowing} style={{ height: '100%' }} />
      </div>
    );
  };
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div>{userImFollowing?.length > 0 ? renderUsers() : renderEmpty()}</div>
    </div>
  );
}

export default connect((state) => ({
  userImFollowing: state.user.followings,
}))(Users);
