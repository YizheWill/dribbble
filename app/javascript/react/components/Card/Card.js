import React, { useState } from 'react';
import { serialize } from 'object-to-formdata';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ShotImage from '../../assets/imgs/shot.png';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { ModeComment, Favorite } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { isSignedIn } from '../../components/User/signInSignOut';
const useStyles = makeStyles((theme) => ({
  border: {
    borderRadius: 10,
    minWidth: 200,
    // height: '100%',
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

function CardUI({ src, currentUserId }) {
  const history = useHistory();
  const {
    artistName,
    imageUrl,
    avatarUrl,
    id,
    artistId,
    commentCount,
    likeCount,
    likers,
  } = src;
  const likable = likers?.includes(currentUserId);
  const BackendLikeShot = () => {
    let formData = serialize({ shotlike: { user_id: currentUserId, shot_id: id } });
    fetch('/api/v1/shotlikes', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  };
  console.log('likable', likable);
  const likeShot = () => {
    if (isSignedIn) {
      BackendLikeShot();
      history.push(`/shots/${id}`);
    } else {
      // history.push('/signin');
    }
  };
  const classes = useStyles();
  const pauseMovie = (e) => {
    e.currentTarget.pause();
  };
  const playMovie = (e) => {
    e.currentTarget.play();
  };
  return (
    <div style={{ height: '100%' }}>
      <Box className={`card text-center ${classes.border}`} style={{ height: '100%' }}>
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
            <div
              style={{
                // position: 'relative',
                borderRadius: 6,
                width: 320,
                height: '100%',
                height: 240,
                minHeight: 150,
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => history.push('/shots/' + id)}
            >
              <Link to={`/shots/${id}`}>
                <video
                  style={{
                    width: '100%',
                    height: '100%',
                    // zIndex: -1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: 6,
                    backgroundColor: '#efe3dc',
                  }}
                  muted
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
            <div
              style={{
                borderRadius: 6,
                width: 320,
                height: 240,
                position: 'relative',
                backgroundImage: `url(${imageUrl || ShotImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                cursor: 'pointer',
              }}
              onClick={() => history.push(`/shots/${id}`)}
            >
              <InsertPhotoIcon
                style={{ position: 'absolute', right: 10, top: 10, color: 'white' }}
              />
              {/* </Link> */}
            </div>
          )}
        </div>
      </Box>
      <div className={`text-dark ${classes.cardtext}`} style={{ marginTop: '0.3rem' }}>
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
              <Typography style={{ marginLeft: 4, color: 'gray' }}>
                {likeCount}{' '}
              </Typography>
              <IconButton
                onClick={likable ? () => {} : likeShot}
                style={{ outline: 'none' }}
                size='small'
              >
                <Favorite
                  color={likable ? 'secondary' : 'inherit'}
                  style={{ width: 20, height: 20 }}
                />
              </IconButton>
              <Typography style={{ marginLeft: 4, color: 'gray' }}>
                {commentCount}{' '}
              </Typography>
              <IconButton
                onClick={() => history.push(`/shots/${id}`)}
                style={{ outline: 'none' }}
                size='small'
              >
                <ModeComment style={{ width: 20, height: 20 }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default connect((state) => ({ currentUserId: state.user.id }))(CardUI);
