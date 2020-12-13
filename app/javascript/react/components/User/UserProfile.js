import React, { useState, useEffect } from 'react';
import { connect, useHistory, useParams } from 'react-redux';
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
const toRender = (state) => {
  switch (state) {
    case 0:
      return <Cards />;
    case 1:
      return <Collections />;
    case 2:
      return <Cards likes={1} />;
    case 3:
      return <About />;
    default:
      return <Collections />;
  }
};
function UserProfile({ userApi, shotsApi }) {
  const classes = useStyles();
  const [selection, setSelection] = useState(0);
  // const [user, setUser] = useState({
  // username: 'Will Wang',
  // intro: "designer's website",
  // tags: ['Brand, ', 'Graphic Design, Illustration, UI ', 'Visual Design'],
  // });
  return (
    <>
      <Navbar />
      <div className={classes.profile}>
        <div className={classes.userInfo}>
          <Avatar
            className={classes.avatar}
            src={
              userApi?.avatar_url ||
              'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
          />
          <div className={classes.username}>
            <Typography variant='h3' style={{ fontWeight: 700 }}>
              {userApi?.username}
            </Typography>
            <Typography variant='h5'>{userApi?.bio}</Typography>
            <Typography style={{ color: 'light-gray' }}>{userApi?.bio}</Typography>
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
              Shots{shotsApi?.length}
            </Typography>
          </Button>
          <Button onClick={() => setSelection(1)}>
            <Typography name='collections' className={userApi.bio}>
              Collections{userApi?.bio}
            </Typography>
          </Button>
          <Button onClick={() => setSelection(2)}>
            <Typography name='likedshots' className={classes.tags}>
              liked Shots {userApi?.bio}
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
    userApi: state.user,
    shotsApi: state.user.shots,
  }),
  (dispatch) => ({})
)(UserProfile);
