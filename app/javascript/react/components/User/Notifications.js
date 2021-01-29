import React, { useEffect } from 'react';
import { fetchUserCommentsAction } from '../../Actions/CommentActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NotificationItem from './NotificationItem';
import Navbar from '../NavBar/Navbar';
import NoNotificationsImage from '../../assets/imgs/noinfo';
import { Typography } from '@material-ui/core';

function Notifications({ userId, comments, fetchUserComments }) {
  const history = useHistory();
  // console.log('userId', userId);
  useEffect(() => {
    fetchUserComments(userId);
  }, []);
  const renderComments = () => {
    return comments.map((comment) => (
      <NotificationItem
        style={{ cursor: 'pointer' }}
        onClick={() => history.push(`/shots/${comment.shotId}`)}
        key={comment.id}
        comment={comment}
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
        <img src={NoNotificationsImage} style={{ height: '100%' }} />
      </div>
    );
  };
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div>{comments?.length > 0 ? renderComments() : renderEmpty()}</div>
    </div>
  );
}

export default connect(
  (state) => ({ comments: state.user.shotComments, userId: state.user.id }),
  (dispatch) => ({
    fetchUserComments: (userId) => dispatch(fetchUserCommentsAction(userId)),
  })
)(Notifications);
