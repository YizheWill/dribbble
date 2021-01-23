import React, { useState, useEffect } from 'react';
import { serialize } from 'object-to-formdata';
import {
  Button,
  Avatar,
  Typography,
  Grid,
  Paper,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import Cards from './Cards';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Mail, Sms, CreateNewFolder } from '@material-ui/icons';
import Feedback from '../Card/Feedback';
// TODO remove navbar and put it into router
import Navbar from '../NavBar/Navbar';

import { fetchShotAction } from '../../Actions/ShotActions';

const useStyles = makeStyles((theme) => ({
  showMain: {
    margin: '0 auto',
    paddingTop: 30,
    // backgroundColor: 'gray',
    maxWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
  },
  image: {
    paddingTop: '1%',
    margin: '0 auto',
    maxWidth: '100%',
  },
  showHeader: {
    display: 'flex',
    padding: '20px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 300,
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '80%',
  },
  avatar: {
    marginRight: '13px',
    width: 50,
    height: 50,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  buttons: {
    display: 'block',
    marginLeft: 10,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  username: {
    margin: '0 0.4em',
    fontWeight: 400,
    fontSize: 18,
    [theme.breakpoints.up('sm')]: {
      fontWeight: 700,
      fontSize: 20,
    },
  },
  bio: {
    display: 'none',
    marginLeft: '1rem',
    marginTop: '1rem',
    fontWeight: 100,
    [theme.breakpoints.up('md')]: {
      display: 'block',
      fontSize: 18,
    },
  },
  button: {
    fontSize: '12px',
    marginTop: 10,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
      backgroundColor: '#e2e2e2',
    },
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
  title: {
    fontSize: 20,
    marginBottom: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
      marginBottm: '2rem',
    },
  },
  description: {
    fontSize: 16,
    fontWeight: 100,
    marginBottom: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      marginBottom: '2rem',
    },
  },
}));

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
  currentUserId,
}) {
  const { shotId } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchShot(shotId);
    window.scrollTo(0, 0);
  }, [useParams()]);
  useEffect(() => {
    console.log('shot', shot);
    console.log('artist', artist);
    console.log('title', title);
    console.log('description', description);
    console.log('imageUrl', imageUrl);
    console.log('aritst shots', artist?.artistShots);
    setUser(shot.artist);
  }, [shot]);
  const [likable, setLikable] = useState(null);
  useEffect(() => {
    setLikable(shot.likers?.includes(currentUserId));
    console.log('shot.likers', shot.likers);
    console.log('currentUserId', currentUserId);
  }, [user, shot.likers, currentUserId]);
  console.log('likable of the shot', likable);

  const [fb, setFb] = useState({ right: false });
  const classes = useStyles();
  const toggleDrawer = (bool) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setFb({ right: bool });
  };
  const BackendToggleLike = (likable) => {
    const url = '/api/v1/shotlikes';
    const formData = serialize({ shotlike: { user_id: currentUserId, shot_id: shotId } });
    fetch(url, {
      method: likable ? 'POST' : 'DELETE',
      header: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  };
  const toggleLike = () => {
    let id = shot.likers.indexOf(currentUserId);
    if (id >= 0) {
      shot.likers.splice(id, 1);
      BackendToggleLike(false);
      setLikable(!likable);
    } else {
      shot.likers.push(currentUserId);
      BackendToggleLike(true);
      setLikable(!likable);
    }
  };
  return (
    <div>
      <Navbar />
      <React.Fragment key={'right'}>
        <div
          style={{
            position: 'fixed',
            right: 20,
            top: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 19,
          }}
        >
          <div style={{ backgroundColor: 'pink', height: 20, width: 1 }}></div>
          <Button
            onClick={toggleDrawer(true)}
            style={{
              height: 40,
              width: 40,
              border: '1px solid pink',
              borderRadius: 999,
              backgroundColor: 'white',
              color: 'pink',
            }}
          >
            <Sms />
          </Button>
          <div style={{ backgroundColor: 'pink', height: 100, width: 1 }}></div>
        </div>
        <Drawer
          className={classes.drawer}
          anchor={'right'}
          open={fb.right}
          onClose={toggleDrawer(false)}
        >
          <Feedback toggleDrawer={toggleDrawer} toggleLike={toggleLike} />
        </Drawer>
      </React.Fragment>
      <div className={classes.showMain}>
        <div className={classes.showHeader}>
          <div className={classes.info}>
            <Link to={`/users/${artist?.artistId}`}>
              <Avatar
                className={classes.avatar}
                src={
                  artist?.avatarUrl ||
                  'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
              />
            </Link>
            <div>
              <Link
                to={`/users/${artist?.artistId}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Typography className={classes.username}>{artist?.artistName}</Typography>
                <Typography className={classes.bio} variant='body2'>
                  {artist?.bio.slice(0, 45)}
                </Typography>
              </Link>
            </div>
          </div>
          <div className={classes.buttons}>
            <Button className={classes.button} variant='contained' disableElevation>
              <CreateNewFolder />
            </Button>
            <Button
              onClick={() => toggleLike()}
              className={classes.button}
              variant='contained'
              disableElevation
            >
              <Favorite
                color={likable ? 'secondary' : 'inherit'}
                style={{ marginRight: 3 }}
              />
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
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography>
          By{' '}
          <Link
            to={`/users/${artist?.artistId}`}
            style={{ fontWeight: 400, color: '#d5547f', textDecoration: 'none' }}
          >
            {artist?.artistName}
          </Link>
        </Typography>
      </div>
      <div className={classes.logoContainer}>
        <div style={{ width: '30%', backgroundColor: '#eaeaea', height: 3 }}></div>
        <Link to={`/users/${artist?.artistId}`}>
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
        <Typography
          style={{ marginTop: 10, marginBottom: '2rem', fontSize: 20, fontWeight: 100 }}
        >
          {artist?.bio}
        </Typography>
        <Button variant='contained' color='secondary'>
          <Mail style={{ margin: '3px 7px 3px 0px' }} />
          Hire Us
        </Button>
      </div>

      <div className={classes.studio}>
        <Typography
          variant='h6'
          style={{ marginLeft: '7%', marginBottom: '-1rem', fontWeight: 100 }}
        >
          More by{' '}
          <Link
            to={`/users/${artist?.artistId}`}
            style={{ fontWeight: 400, color: '#d5547f', textDecoration: 'none' }}
          >
            {artist?.artistName}
          </Link>
        </Typography>
        <Cards urls={artist?.artistShots} />
      </div>
    </div>
  );
}
export default connect(
  (state) => ({
    currentUserId: state.user.id,
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
