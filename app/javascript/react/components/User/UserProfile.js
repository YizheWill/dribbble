import React, { useState } from 'react';
import Cards from '../Card/Cards';
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

function UserProfile() {
  const classes = useStyles();
  const [user, setUser] = useState({
    username: 'Will Wang',
    intro: "designer's website",
    tags: ['Brand, ', 'Graphic Design, Illustration, UI ', 'Visual Design'],
  });
  return (
    <>
      <Navbar />
      <div className={classes.profile}>
        <div className={classes.userInfo}>
          <Avatar
            className={classes.avatar}
            src='https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
          />
          <div className={classes.username}>
            <Typography variant='h3' style={{ fontWeight: 700 }}>
              {user.username}
            </Typography>
            <Typography variant='h5'>{user.intro}</Typography>
            <Typography style={{ color: 'light-gray' }}>{user.tags}</Typography>
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
          <Button>
            <Typography name='shots' className={classes.tags}>
              Shots{user.shotsCount}
            </Typography>
          </Button>
          <Button>
            <Typography name='collections' className={classes.tags}>
              Collections{user.collectionCount}
            </Typography>
          </Button>
          <Button>
            <Typography name='likedshots' className={classes.tags}>
              liked Shots {user.likedCount}
            </Typography>
          </Button>
          <Button>
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
        <Cards />
      </div>
    </>
  );
}

export default UserProfile;
