import React, { useState, useEffect } from 'react';

import { fetchArtist } from '../../Actions/ArtistActions';
import { fetchUserCollections } from '../../Actions/CollectionActions';

import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Cards from '../Card/Cards';
import Collections from './Selection/Collections/Collections';
import Navbar from '../NavBar/Navbar';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Add, MoreHoriz } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  profile: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  avatar: {
    width: '8rem',
    height: '8rem',
    marginRight: '3rem',
  },
  buttons: {
    marginTop: 30,
    marginBottom: 40,
  },
  selection: {
    display: 'flex',
    marginLeft: '6%',
  },
  tags: {
    margin: '0 10px',
  },
}));

function UserProfile({ artist, shots, collections, getArtist, getCollections }) {
  const classes = useStyles();
  const [selection, setSelection] = useState(0);
  const { artistId } = useParams();
  console.log('userid', artistId);
  useEffect(() => {
    getArtist(artistId);
    getCollections(artistId);
  }, []);

  const toRender = (state) => {
    switch (state) {
      case 0:
        console.log('shots here', shots);
        return <Cards urls={shots} />;
      case 1:
        return <Collections collections={Object.values(collections)} />;
      case 2:
        return <Cards urls={shots} />;
      case 3:
        return <About />;
      default:
        return <Collections />;
    }
  };
  return (
    <>
      <Navbar />
      <div className={classes.profile}>
        <div className={classes.userInfo}>
          <Avatar className={classes.avatar} src={artist?.avatarUrl} />
          <div className={classes.username}>
            <Typography variant='h3' style={{ fontWeight: 700 }}>
              {artist?.name?.split(' ')[0]}
            </Typography>
            <Typography variant='h5'>{artist?.bio?.slice(0, 20)}</Typography>
            <Typography style={{ color: 'light-gray' }}>{artist?.bio}</Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                disableElevation
                style={{ height: '3rem', marginRight: '1rem' }}
              >
                <Add style={{ paddingRight: 4 }} />
                Follow
              </Button>
              <Button variant='outlined' disableElevation style={{ height: '3rem' }}>
                <MoreHoriz style={{ paddingRight: 4 }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.shots}>
        <div className={classes.selection}>
          <Button onClick={() => setSelection(0)}>
            <Typography name='shots' className={classes.tags}>
              Shots
            </Typography>
          </Button>
          <Button onClick={() => setSelection(1)}>
            <Typography name='collections' className={artist.bio}>
              Collections
            </Typography>
          </Button>
          <Button onClick={() => setSelection(2)}>
            <Typography name='likedshots' className={classes.tags}>
              liked Shots
            </Typography>
          </Button>
          <Button onClick={() => setSelection(3)}>
            <Typography name='about' className={classes.tags}>
              About
            </Typography>
          </Button>
        </div>
        <div
          style={{
            margin: '25px auto 0 auto',
            backgroundColor: '#eaeaea',
            height: 3,
            width: '87%',
          }}
        ></div>
        {toRender(selection)}
      </div>
    </>
  );
}
export default connect(
  (state) => ({
    artist: state.entities.artist,
    shots: state.entities.artist.shots,
    collections: state.entities.collections,
  }),
  (dispatch) => ({
    getArtist: (id) => dispatch(fetchArtist(id)),
    getCollections: (userId) => dispatch(fetchUserCollections(userId)),
  })
)(UserProfile);
