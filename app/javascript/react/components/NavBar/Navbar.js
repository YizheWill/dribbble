import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchShotsWithKeywordAction } from '../../Actions/ShotsActions';
import {
  Button,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Menu,
  Avatar,
  InputBase,
} from '@material-ui/core';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { signOut, isSignedIn } from '../User/signInSignOut';
import { signOutUserAction } from '../../Actions/UserActions';

import { getCurrentUserInfo } from '../../Actions/UserActions';

const useStyles = makeStyles((theme) => ({
  appbar: {
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: '5%',
    borderBottom: '.2px solid #e2e2e2',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  inputRoot: {
    border: '1px solid #e64B8A',
    borderRadius: 999,
    color: '#e64B8A',
    marginRight: '1rem',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    marginRight: '2rem',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Appbar({
  user,
  signOutUser,
  getCurrentUserInfo,
  content,
  getShots,
  withSearch,
}) {
  useEffect(() => {
    console.log('getting the data from backend');
    getCurrentUserInfo(localStorage.getItem('sessionToken'));
  }, []);
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    signOut();
    signOutUser();
    handleMobileMenuClose();
    history.push('/');
  };
  const editUser = () => {
    history.push('/edit');
  };
  const gotoNotification = () => {
    history.push('/notifications');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => history.push(`/users/${user.id}`)}
        style={{ marginBottom: 10 }}
      >
        User Profile
      </MenuItem>
      <Divider />

      <MenuItem onClick={editUser}>edit profile</MenuItem>
      <Divider />
      <MenuItem onClick={() => history.push('/upload')}>Upload</MenuItem>
      <MenuItem onClick={() => history.push('/followings')}>Followed</MenuItem>
      <Divider />
      <MenuItem onClick={() => handleSignOut()}>
        <Typography color='secondary'>Sign Out</Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={gotoNotification}>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent='' color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <Avatar
            className={classes.avatar}
            style={{ outline: 'none' }}
            src={
              user.avatarUrl ||
              'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
          />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <div style={{ paddingLeft: '30%', textAlign: 'center' }}>
          <p>Sign Out</p>
        </div>
      </MenuItem>
    </Menu>
  );

  const handleKeyPress = (e) => {
    console.log('e.keyCode', e.keyCode);
    if (e.keyCode === 13) {
      console.log('here submited');
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appbar}
        position='static'
        color='transparent'
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link
              to='/'
              style={{
                color: '#E8467F',
                fontSize: '2rem',
                fontFamily: 'Grand Hotel, cursive',
                textDecoration: 'none',
              }}
            >
              Willwill
            </Link>
          </Typography>
          <div className={classes.grow} style={{ textAlign: 'center' }}>
            <Typography color='secondary' variant='h5' style={{ fontWeight: 800 }}>
              {content}
            </Typography>
          </div>
          <div className={classes.sectionDesktop}>
            <InputBase
              style={{ display: withSearch ? '' : 'none' }}
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                console.log('e.key', e.key);
                if (e.key === 'Enter') {
                  getShots(keyword);
                  setKeyword('');
                }
              }}
            />
            <IconButton
              aria-label='show 17 new notifications'
              color='inherit'
              style={{ outline: 'none', backgroundColor: 'transparent' }}
              onClick={gotoNotification}
            >
              <Badge
                badgeContent=''
                style={{
                  color: '#D65B8A',
                  border: '1px solid #D65B8A',
                  padding: 9,
                  borderRadius: 100,
                }}
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              color='inherit'
              style={{
                borderRadius: 999,
                marginLeft: 20,
              }}
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                border={1}
                className={classes.avatar}
                src={
                  user.avatarUrl ||
                  'https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
                }
              />
            </IconButton>
            <Link
              to='/upload'
              style={{ textDecoration: 'none', marginLeft: '3rem', marginRight: '-2rem' }}
            >
              <Button
                variant='contained'
                style={{ backgroundColor: '#e64B8A', color: 'white' }}
              >
                UPLOAD
              </Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
              style={{ outline: 'none' }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default connect(
  (state) => ({ user: state.user }),
  (dispatch) => ({
    signOutUser: () => dispatch(signOutUserAction()),
    getCurrentUserInfo: (session) => dispatch(getCurrentUserInfo(session)),
    getShots: (keyword) => dispatch(fetchShotsWithKeywordAction(keyword)),
  })
)(Appbar);
