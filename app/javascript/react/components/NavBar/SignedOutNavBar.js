import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appbar: {
    borderBottom: '.2px solid #e2e2e2',
    paddingTop: 25,
    paddingBottom: 25,
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
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  links: {
    textDecoration: 'none',
  },
}));

export default function Appbar() {
  const classes = useStyles();

  const menuId = 'primary-search-account-menu';

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
          <div className={classes.sectionDesktop}></div>
          <div className={classes.buttons}>
            <Button style={{ marginRight: '2rem' }}>
              <Link to='/user' className={classes.links}>
                user
              </Link>
            </Button>
            <Button style={{ marginRight: '2rem' }}>
              <Link to='/shot' className={classes.links}>
                Shot
              </Link>
            </Button>
            <Button style={{ marginRight: '2rem' }}>
              <Link to='/signin' className={classes.links}>
                Sign In
              </Link>
            </Button>
            <Button style={{ marginRight: '2rem' }}>
              <Link to='/upload' className={classes.links}>
                upload
              </Link>
            </Button>
            <Button variant='contained' color='secondary'>
              <Link
                to='/signup'
                className={classes.links}
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Sign up
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
