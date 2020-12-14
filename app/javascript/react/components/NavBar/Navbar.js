import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SignedOutNavBar from './SignedOutNavBar';

import { signOut, isSignedIn } from '../User/signInSignOut';
import { signOutUserAction } from '../../Actions/UserActions';

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

function Appbar({ user, signOutUser }) {
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
      <MenuItem onClick={() => history.push(`/user/${1}`)} style={{ marginBottom: 10 }}>
        Profil
      </MenuItem>
      <Divider />

      <MenuItem onClick={editUser}>Edit Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Edit Work Availability</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Popular</MenuItem>
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
      {/* <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
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
          <div className={classes.grow} />
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
  (dispatch) => ({ signOutUser: () => dispatch(signOutUserAction()) })
)(Appbar);
