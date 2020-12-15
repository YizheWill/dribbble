import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignedOutNavBar from './SignedOutNavBar';

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
}));

function Appbar({ user, signOutUser, getCurrentUserInfo, content }) {
  useEffect(() => {
    console.log('getting the data from backend');
    getCurrentUserInfo(localStorage.getItem('sessionToken'));
  }, []);
  const history = useHistory();
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
    history.push('/user');
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
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

      <MenuItem onClick={() => history.push(`/shots/1`)}>User Shot</MenuItem>
      <MenuItem onClick={() => history.push('/collections')}>Collections</MenuItem>
      <Divider />
      <MenuItem onClick={() => history.push('/upload')}>Upload</MenuItem>
      <MenuItem onClick={handleMenuClose}>Followed</MenuItem>
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
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
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
            {/* <IconButton
              aria-label='show 4 new mails'
              color='inherit'
              style={{ outline: 'none', backgroundColor: 'transparent' }}
            >
              <Badge badgeContent={10} color='secondary'>
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              aria-label='show 17 new notifications'
              color='inherit'
              style={{ outline: 'none', backgroundColor: 'transparent' }}
            >
              <Badge badgeContent={17} color='secondary'>
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
                border: '1px solid #eaeaea',
                margin: 'auto 0 auto 20px',
              }}
              onClick={handleProfileMenuOpen}
            >
              <Avatar
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
              <Button color='secondary' variant='contained'>
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
  })
)(Appbar);
