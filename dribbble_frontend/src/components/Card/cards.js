import React from 'react';
import Card from './card';
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  shots: {
    padding: theme.spacing(3),
  },
}));

export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={3} md={3}>
        <Card />
      </Grid>
    </Grid>
  );
}
