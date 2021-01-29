import React from 'react';
import LandingImage from '../../assets/imgs/landing.png';
import { makeStyles } from '@material-ui/core';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { isSignedIn } from '../User/signInSignOut';
const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: '10%',
    paddingRight: '2%',
    paddingBottom: '5%',
    backgroundColor: '#efe3dc',
  },
  image: {
    width: '80%',
    height: '80%',
    marginTop: '5vh',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: '5%',
  },
  list: {
    marginTop: 20,
  },
}));
export default function LandingPage() {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container>
      <Grid item md={5}>
        <video
          className={classes.image}
          autoPlay={true}
          src={
            'https://cdn.dribbble.com/users/1145170/screenshots/13914358/media/63c14016a421b6bbcd1fcaac7742bb45.mp4' ||
            LandingImage
          }
          alt='person exploring the forest'
          loop
        ></video>
      </Grid>
      <Grid item xs={12} sm={12} md={7} className={classes.text}>
        <Typography className={classes.list} component='h1' variant='h3'>
          Discover the world’s top designers & creatives
        </Typography>
        <Typography className={classes.list} component='h3' variatn='h5'>
          Willwill is the leading destination to find & showcase creative work and home to
          the world's best design professionals.
        </Typography>
        {isSignedIn() ? (
          ''
        ) : (
          <Button
            className={classes.list}
            color='secondary'
            variant='contained'
            style={{ outline: 'none' }}
          >
            <Link to='/signup' style={{ color: '#FFF' }}>
              Sign up
            </Link>
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
