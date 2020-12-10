import React from 'react';
import UploadCard from '../Card/UploadCard';
import BasicNavbar from '../NavBar/BasicNavbar';
import UploadForm from './UploadForm';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 500,
    transform: 'scale(0.8)',
  },
}));
function Upload() {
  const classes = useStyles();
  return (
    <div>
      <BasicNavbar content='Publish Your Shot' />
      <Grid className={classes.main} container elevation={0}>
        <Grid className={classes.card} md={7} item>
          <UploadCard />
        </Grid>
        <UploadForm />
      </Grid>
    </div>
  );
}

export default Upload;
