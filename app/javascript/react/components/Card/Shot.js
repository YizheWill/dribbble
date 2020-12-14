import React, { useState, useEffect } from 'react';
import { Button, Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import Cards from './Cards';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Mail } from '@material-ui/icons';
// TODO remove navbar and put it into router
import Navbar from '../NavBar/Navbar';

import { fetchShotAction } from '../../Actions/ShotActions';

const useStyles = makeStyles((theme) => ({
  showMain: {
    margin: '0 auto',
    paddingTop: 30,
    // backgroundColor: 'gray',
    maxWidth: '70%',
  },
  image: {
    paddingTop: '1%',
    margin: '0 auto',
    width: '70%',
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
    marginBottom: 100,
  },
  logoContainer: {
    width: '100%',
    height: 0,
    margin: '0 auto',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  logo: {
    margin: '0 20px',
    height: '5rem',
    width: '5rem',
  },
  studioInfo: {
    margin: '50px auto 70px auto',
    textAlign: 'center',
    maxWidth: '65%',
  },
}));
// shot: state.entities.shot,
// artist: state.entities.shot.artist,
// description: state.entities.shot.description,
// imageUrl: state.entities.shot.imageUrl,
// viewCount: state.entities.shot.viewCount,
// allowComment: state.entities.shot.allowComment,
// price: state.entities.shot.price,

function Shot({
  shot,
  artist,
  title,
  description,
  imageUrl,
  imageOrVideo,
  viewCount,
  allowComment,
  price,
  fetchShot,
}) {
  const { shotId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log('shot', shot);
    console.log('artist', artist);
    console.log('title', title);
    console.log('description', description);
    console.log('imageUrl', imageUrl);
    fetchShot(shotId);
  }, []);
  useEffect(() => {
    console.log('shot', shot);
    console.log('artist', artist);
    console.log('title', title);
    console.log('description', description);
    console.log('imageUrl', imageUrl);
    setUser(shot.artist);
  }, [shot]);

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.showMain}>
        <div className={classes.showHeader}>
          <div className={classes.info}>
            <Avatar
              className={classes.avatar}
              src={
                artist?.avatarUrl ||
                'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
              }
            />
            <div className={classes.username}>
              {artist?.artistName}
              <br />
              {artist?.bio}
            </div>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.button} variant='contained' disableElevation>
              Save
            </Button>
            <Button className={classes.button} variant='contained' disableElevation>
              <Favorite color='secondary' fontSize='small' style={{ marginRight: 3 }} />
              Like
            </Button>
          </div>
        </div>
        <div className={classes.image}>
          {imageOrVideo ? (
            <img
              style={{ borderRadius: 10, maxWidth: '100%', maxHeight: '100%' }}
              src={
                imageUrl ||
                'https://cdn.dribbble.com/users/3178178/screenshots/14718756/media/f2aaf1b36b2567123cec8ce8859a0562.jpg?compress=1&resize=1000x750'
              }
              alt='dribbble image'
            />
          ) : (
            <video src={imageUrl} className={classes.image} />
          )}
        </div>
      </div>

      <div className={classes.details}>
        <Typography variant='h4'>{title}</Typography>
        <br />
        <br />
        <Typography variant='h5'>{description}</Typography>
        <br />
        <br />
        <Typography>
          <Link to={`/users/${artist?.artistId}`}>by {artist?.artistName}</Link>
        </Typography>
      </div>
      <div className={classes.logoContainer}>
        <div style={{ width: '30%', backgroundColor: '#eaeaea', height: 3 }}></div>
        <Link to={`/user/${artist?.artistId}`}>
          <Avatar
            className={classes.logo}
            src={
              artist?.avatarUrl ||
              'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
          />
        </Link>
        <div style={{ width: '30%', backgroundColor: '#eaeaea', height: 3 }}></div>
      </div>
      <div className={classes.studioInfo}>
        <Typography variant='h4'>{artist?.artistName} Studio</Typography>
        <Typography style={{ marginTop: 10, marginBottom: 10 }}>{artist?.bio}</Typography>
        <Button variant='contained' color='secondary'>
          <Mail style={{ margin: '3px 7px 3px 0px' }} />
          Hire Us
        </Button>
      </div>

      <div className={classes.studio}>
        <Typography variant='h6' style={{ marginLeft: '7%', marginBottom: '-1rem' }}>
          More by {artist?.artistName}
        </Typography>
        <Cards />
      </div>
    </>
  );
}
export default connect(
  (state) => ({
    shot: state.entities.shot,
    artist: state.entities.shot.artist,
    title: state.entities.shot.title,
    description: state.entities.shot.description,
    imageUrl: state.entities.shot.imageUrl,
    viewCount: state.entities.shot.viewCount,
    allowComment: state.entities.shot.allowComment,
    imageOrVideo: state.entities.shot.imageOrVideo,
    price: state.entities.shot.price,
  }),
  (dispatch) => ({ fetchShot: (id) => dispatch(fetchShotAction(id)) })
)(Shot);
