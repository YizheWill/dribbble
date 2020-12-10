import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
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
  barContent: {
    display: 'flex',
  },
}));

export default function Appbar({ content }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        className={classes.appbar}
        position='static'
        color='transparent'
        elevation={0}
      >
        <Toolbar
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography className={classes.title} variant='h6'>
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
          <Typography
            style={{ textAlign: 'center', fontWeight: 'bold' }}
            className={classes.title}
            variant='h5'
          >
            {content}
          </Typography>
          <div></div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
