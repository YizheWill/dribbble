import React from 'react';
import BottomNavbar from '../NavBar/BottomNavbar';
import UploadCard from '../Card/UploadCard';
import BasicNavbar from '../NavBar/BasicNavbar';
import UploadForm from './UploadForm';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 500,
    transform: 'scale(.9)',
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
        <Grid md={4} sm={12} xs={12} component={Paper} square elevation={0} item>
          <UploadForm />
        </Grid>
      </Grid>
      <BottomNavbar />
    </div>
  );
}

export default Upload;
