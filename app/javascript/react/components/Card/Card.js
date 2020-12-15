import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ShotImage from '../../assets/imgs/shot.png';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BiMessageRounded, BiHeart } from 'react-icons/bi';
import Typography from '@material-ui/core/Typography';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
const useStyles = makeStyles((theme) => ({
  border: {
    borderRadius: 10,
    minWidth: 200,
    height: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
  },
  imgbutton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardtext: {},
  cardtitle: {
    textAlign: 'left',
    fontSize: '1rem',
  },
  grid: {
    // paddingRight: 40,
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  user: {
    display: 'flex',
    // flexDirection: 'col',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: theme.spacing(1),
  },
}));

export default function CardUI({ src }) {
  const { artistName, imageUrl, avatarUrl, id, artistId } = src;
  const classes = useStyles();
  const pauseMovie = (e) => {
    e.currentTarget.pause();
  };
  const playMovie = (e) => {
    e.currentTarget.play();
  };
  return (
    <div style={{ height: '100%' }}>
      <Box className={`card text-center ${classes.border}`} style={{}}>
        <div
          className='overflow'
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {['mp4'].includes(imageUrl?.split('.')?.slice(-1)[0]) ? (
            <div style={{ position: 'relative' }}>
              <Link to={`/shots/${id}`}>
                <video
                  className={classes.image}
                  onMouseOver={playMovie}
                  onMouseOut={pauseMovie}
                  preload='all'
                  src={imageUrl}
                  loop
                />
                <VideocamIcon
                  style={{ position: 'absolute', right: 10, top: 10 }}
                  color='secondary'
                />
              </Link>
            </div>
          ) : (
            <div style={{ position: 'relative' }}>
              <Link to={`/shots/${id}`}>
                <img
                  className={classes.image}
                  src={imageUrl || ShotImage}
                  alt='image 1'
                ></img>
                <InsertPhotoIcon
                  style={{ position: 'absolute', right: 10, top: 10, color: 'white' }}
                />
              </Link>
            </div>
          )}
        </div>
      </Box>
      <div className={`text-dark ${classes.cardtext}`} style={{ marginTop: '-1rem' }}>
        <Grid container className={classes.grid}>
          <Grid item xs={11} sm={11} md={11}>
            <Link
              to={`/users/${artistId}`}
              style={{ textDecoration: 'none', color: '#0e0e0e' }}
            >
              <div
                className={classes.user}
                onClick={() => history.push(`/users/${artistId}`)}
              >
                <Avatar
                  style={{ border: '1px solid pink' }}
                  className={classes.avatar}
                  src={
                    avatarUrl ||
                    'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  }
                />
                <Typography
                  className={`card-title ${classes.cardtitle}`}
                  component='h6'
                  variant='h6'
                >
                  {artistName.split(' ')[0]}
                </Typography>
              </div>
            </Link>
          </Grid>
          <Grid item xs={1} sm={1} md={1} style={{ justifyItems: 'end' }}>
            <div className={classes.imgbutton}>
              <IconButton style={{ outline: 'none' }} size='small'>
                <BiHeart />
              </IconButton>
              <IconButton style={{ outline: 'none' }} size='small'>
                <BiMessageRounded />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
