import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '.3px solid #eaeaea',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  createButton: {
    padding: '10px 30px',
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
  },
}));

export default function LabelBottomNavigation() {
  const classes = useStyles();
  let history = useHistory();
  const handleCreate = () => {
    history.push('/user');
  };
  const handleCancel = () => {
    history.push('/');
  };

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        icon={
          <div onClick={handleCancel}>
            <Typography>Cancel</Typography>
          </div>
        }
      />
      <BottomNavigationAction
        icon={
          <div onClick={handleCreate} className={classes.createButton} color='secondary'>
            <Typography>Create</Typography>
          </div>
        }
      />
    </BottomNavigation>
  );
}
