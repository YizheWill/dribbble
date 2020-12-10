import React from 'react';
import Card from './Card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  shots: {
    padding: theme.spacing(3),
  },
  container: {
    paddingTop: '1%',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
}));

export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
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

// import React from 'react';

// function Cards() {
//   return <div>Just a Card</div>;
// }

// export default Cards;
