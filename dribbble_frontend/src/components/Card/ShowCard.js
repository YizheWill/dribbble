import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Cards from './cards';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
// TODO remove navbar and put it into router
import Navbar from '../Navbar';
const useStyles = makeStyles((theme) => ({
  showMain: {
    margin: '0 auto',
    paddingTop: 30,
    // backgroundColor: 'gray',
    maxWidth: '70%',
  },
  image: {
    paddingTop: '1%',
    width: '65%',
    margin: '0 auto',
  },
  showHeader: {
    display: 'flex',
    padding: '20px 5%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '70%',
  },
  avatar: {
    marginRight: '13px',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 30,
  },
  button: {
    fontSize: '12px',
    marginRight: 15,
  },
  details: {
    margin: '0 auto',
    paddingTop: 40,
    // backgroundColor: 'gray',
    maxWidth: '65%',
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  logoContainer: {
    width: 190,
    heigth: 50,
    zIndex: 999,
    margin: '0 auto',
    padding: 40,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  logo: {
    height: '8rem',
    width: '8rem',
  },
}));

export default function ShowCard() {
  const classes = useStyles();
  const [username, setUsername] = useState('Will Wang');
  const [intro, setIntro] = useState('this is just a bio, will add some links later');
  const [detail, setDetail] = useState({
    title: 'Hey Dribbblers! ',
    body:
      "This crazy pic is just a showcase for the aA fsp, which is full stack projects, this dribbble clone will be a pixel perfect clone of the original website, I don't have much to say now",
    username: 'Will Wang',
    // TODO Make this part dynamic
    userId: 'userId',
  });
  return (
    <>
      <Navbar />
      <div className={classes.showMain}>
        <div className={classes.showHeader}>
          <div className={classes.info}>
            <Avatar
              className={classes.avatar}
              src='https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
            />
            <div className={classes.username}>
              {username}
              <br />
              {intro}
            </div>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.button} variant='contained' disableElevation>
              Save
            </Button>
            <Button className={classes.button} variant='contained' disableElevation>
              <FavoriteIcon
                color='secondary'
                fontSize='small'
                style={{ marginRight: 3 }}
              />
              Like
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <img
          style={{ borderRadius: 10, maxWidth: '100%', maxHeight: '100%' }}
          src='https://cdn.dribbble.com/users/3178178/screenshots/14718756/media/f2aaf1b36b2567123cec8ce8859a0562.jpg?compress=1&resize=1000x750'
          alt='dribbble image'
        />
      </div>
      <div className={classes.details}>
        {detail.title}
        <br />
        <br />
        {detail.body}
        <br />
        <br />
        <Link to={`/user/${detail.userId}`}>by {detail.username}</Link>
      </div>
      <div className={classes.logoContainer}>
        <Link to='/user'>
          <Avatar
            className={classes.logo}
            src='https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
          />
        </Link>
      </div>
      <hr
        style={{
          zIndex: -1,
          width: '70%',
          position: 'relative',
          color: '#f0f0f0',
          backgroundColor: '#f0f0f0',
          height: 5.0,
          borderColor: '#f0f0f0',
          top: '-7.5rem',
        }}
      />
      <div className={classes.studio}>
        <Cards />
      </div>
    </>
  );
}
