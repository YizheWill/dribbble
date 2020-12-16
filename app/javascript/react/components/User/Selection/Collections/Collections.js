import React from 'react';
import CollectionCard from './CollectionCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 5%',
  },
  item: {
    padding: '1rem',
  },
}));

function Collections({ collections }) {
  console.log('collections', collections);
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {collections?.map((collection) => (
        <Grid key={collection.id} className={classes.item} item xs={6} sm={4} md={3}>
          {console.log('collection in grid', collection)}
          <CollectionCard collection={collection} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Collections;
