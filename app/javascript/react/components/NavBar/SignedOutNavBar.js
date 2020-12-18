import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputBase } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShotsWithKeywordAction } from '../../Actions/ShotsActions';

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
  inputRoot: {
    border: '1px solid red',
    borderRadius: 999,
    color: 'pink',
    marginRight: '1rem',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
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

function SignoutBar({ getShots, withSearch }) {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');

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
          </div>
          <div className={classes.buttons}>
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
export default connect(null, (dispatch) => ({
  getShots: (keyword) => dispatch(fetchShotsWithKeywordAction(keyword)),
}))(SignoutBar);
