import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Add, MoreHoriz } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  profile: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'col',
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
            <h2 style={{ fontWeight: 700 }}>{user.username}</h2>
            <h6>{user.intro}</h6>
            <p style={{ color: 'light-gray' }}>{user.tags}</p>
            <div className='buttons'>
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
    </>
  );
}

export default UserProfile;
