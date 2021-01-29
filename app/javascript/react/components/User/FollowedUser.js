import React from 'react';
import TimeAgo from 'react-timeago';
import { makeStyles, Typography, Avatar } from '@material-ui/core';
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

function User({ user }) {
  // console.log('user', user);
  // console.log('user.userShot.image_url', user.userShot.image_url);
  // debugger;
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
        <Avatar className={classes.avatar} src={user.avatarUrl} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Typography variant='h6' style={{ fontWeight: 700 }}>
            <Link
              to={`/users/${user.id}`}
              style={{ color: 'gray', textDecoration: 'none' }}
            >
              {user.name}
            </Link>{' '}
          </Typography>
          <Typography style={{ color: 'gray' }}>
            <Link
              to={`/users/${user.id}`}
              style={{ color: '#d5547f', textDecoration: 'none' }}
            >
              {user.userShot.title}
            </Link>{' '}
          </Typography>
          <Typography style={{ fontWeight: 100 }}>"{user.bio}"</Typography>
        </div>
      </div>
      {['mp4', 'mov'].includes(
        user.userShot.image_url.split('.').slice(-1)[0]
      ) ? (
        <video
          className={classes.images}
          onMouseOver={playMovie}
          onMouseOut={pauseMovie}
          preload='all'
          src={user.userShot.image_url}
          loop
        />
      ) : (
        <img
          className={classes.images}
          src={user.userShot.image_url}
          alt='image 1'
        ></img>
      )}
    </div>
  );
}

export default User;
