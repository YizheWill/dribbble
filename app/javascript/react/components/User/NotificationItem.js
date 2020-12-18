import React from 'react';
import TimeAgo from 'react-timeago';
import { makeStyles, Typography, Avatar } from '@material-ui/core';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    minWidth: 300,
    minHeight: 80,
    padding: '2rem 2rem',
    padding: '1rem 0 1rem 1rem',
    borderBottom: '.2px solid #e2e2e2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      padding: '5rem 3rem 5rem 5rem',
    },
  },
  images: {
    width: 200,
    borderRadius: '1rem',
  },
  avatar: {
    display: 'none',
    width: 100,
    height: 100,
    marginRight: '2rem',
    boxShadow: theme.shadows[1],
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

function NotificationItem({ comment }) {
  const pauseMovie = (e) => {
    e.currentTarget.pause();
  };
  const playMovie = (e) => {
    e.currentTarget.play();
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <Avatar className={classes.avatar} src={comment.avatarUrl} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Typography variant='h6' style={{ fontWeight: 700 }}>
            {comment.artistName}
          </Typography>
          <Typography style={{ color: 'gray' }}>
            commented on{' '}
            <Link
              to={`/shots/${comment.shotId}`}
              style={{ color: '#d5547f', textDecoration: 'none' }}
            >
              {comment.shotTitle}
            </Link>{' '}
            <TimeAgo date={comment.createdAt} style={{ color: '#8f8f8f' }} />
          </Typography>
          <Typography style={{ fontWeight: 100 }}>"{comment.body}"</Typography>
        </div>
      </div>
      {['mp4', 'mov'].includes(comment.imageUrl.split('.').slice(-1)[0]) ? (
        <video
          className={classes.images}
          onMouseOver={playMovie}
          onMouseOut={pauseMovie}
          preload='all'
          src={comment.imageUrl}
          loop
        />
      ) : (
        <img className={classes.images} src={comment.imageUrl} alt='image 1'></img>
      )}
    </div>
  );
}

export default NotificationItem;
