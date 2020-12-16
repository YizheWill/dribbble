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

export default function Cards({ urls }) {
  const classes = useStyles();
  console.log('urls', urls);
  return (
    <Grid container className={classes.container} style={{ marginBottom: '5rem' }}>
      {urls?.map((url) => (
        <Grid className={classes.shots} item xs={12} sm={6} md={3} key={url.id}>
          <Card src={url} style={{ height: '100%' }} />
        </Grid>
      ))}
    </Grid>
  );
}
