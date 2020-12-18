import React, { useState, useEffect } from 'react';
import { serialize } from 'object-to-formdata';

import { fetchArtist } from '../../Actions/ArtistActions';
import { fetchUserCollections } from '../../Actions/CollectionActions';
import About from '../User/About';

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

function UserProfile({
  artist,
  shots,
  collections,
  getArtist,
  getCollections,
  likedShots,
  userId,
}) {
  const [followable, setFollowable] = useState(null);
  useEffect(() => {
    setFollowable(artist.followers?.includes(userId));
  }, [artist]);
  const toggleFollow = () => {
    let id = artist.followers.indexOf(userId);
    if (id >= 0) {
      artist.followers.splice(id, 1);
      BackendToggleFollow(false);
    } else {
      artist.followers.push(userId);
      BackendToggleFollow(true);
    }
    setFollowable(!followable);
  };
  const BackendToggleFollow = (followable) => {
    const url = '/api/v1/follows';
    const formData = serialize({
      follow: { follower_id: userId, following_id: artistId },
    });
    fetch(url, {
      method: followable ? 'POST' : 'DELETE',
      header: {
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log('data', data));
  };

  const isMe = () => artist.sessionToken === localStorage.getItem('sessionToken');
  const classes = useStyles();
  const [selection, setSelection] = useState(0);
  const { artistId } = useParams();
  console.log('userid', artistId);
  useEffect(() => {
    getArtist(artistId);
    getCollections(artistId);
  }, [artistId]);

  const toRender = (state) => {
    switch (state) {
      case 0:
        console.log('shots here', shots);
        return <Cards urls={shots} />;
      case 1:
        return <Collections collections={Object.values(collections)} />;
      case 2:
        return <Cards urls={likedShots} />;
      case 3:
        return <About user={artist} />;
      default:
        return <Cards urls={shots} />;
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

            <Typography
              variant='h5'
              style={{ color: 'light-gray', marginTop: '1rem', fontWeight: 100 }}
            >
              {artist?.bio}
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                disableElevation
                style={{
                  height: '3rem',
                  marginRight: '1rem',
                  display: isMe() ? 'none' : '',
                }}
                onClick={toggleFollow}
              >
                {artist.followers?.includes(userId) ? (
                  'Followed'
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>Follow</Typography> <Add style={{ paddingRight: 4 }} />
                  </div>
                )}
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
      </div>
      {toRender(selection)}
    </>
  );
}
export default connect(
  (state) => ({
    artist: state.entities.artist,
    shots: state.entities.artist.shots,
    collections: state.entities.collections,
    likedShots: state.entities.artist.likedShots,
    userId: state.user.id,
  }),
  (dispatch) => ({
    getArtist: (id) => dispatch(fetchArtist(id)),
    getCollections: (userId) => dispatch(fetchUserCollections(userId)),
  })
)(UserProfile);
