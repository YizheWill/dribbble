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
            <Link to='/user' className={classes.links}>
              <Button style={{ marginRight: '2rem' }}>user</Button>
            </Link>
            <Link to='/shots/1' className={classes.links}>
              <Button style={{ marginRight: '2rem' }}>Shot</Button>
            </Link>
            <Link to='/upload' className={classes.links}>
              <Button style={{ marginRight: '2rem' }}>upload</Button>
            </Link>
            <Link to='/collections' className={classes.links}>
              <Button style={{ marginRight: '2rem' }}>collection</Button>
            </Link>

            <Link to='/signin' className={classes.links}>
              <Button style={{ marginRight: '2rem' }}>Sign In</Button>
            </Link>
            <Link
              to='/signup'
              className={classes.links}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <Button variant='contained' color='secondary'>
                Sign up
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
