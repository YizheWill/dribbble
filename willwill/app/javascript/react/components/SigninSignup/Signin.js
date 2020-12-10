import React from 'react';
import SigninPhoto from '../../assets/imgs/signin.png';
import Form from './SigninForm';
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${SigninPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    postion: 'fixed',
    height: '100vh',
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item md={4} className={classes.image} />
      <Form />
    </Grid>
  );
}
