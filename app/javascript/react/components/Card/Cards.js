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
        <Card src='https://cdn.dribbble.com/users/125060/screenshots/14737337/media/44c2e084c430e7250a1a199fe1595f14.mp4' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/6051/screenshots/14738275/media/dbf64fc15852541d976bdeebf31ccb23.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/3862493/screenshots/14739030/media/0d874fced8e3cbb5770b8e109ccba180.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/78637/screenshots/14736268/media/bc0ae527022b832c3295c41188b3b6d7.mp4' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/68544/screenshots/14737108/media/c1ae73236891382a07fe78cfef56adac.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1139587/screenshots/14733985/media/e0474857ca2e7a45638203705806b1cc.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/4859/screenshots/14738723/media/ee9ba04d8be6428f5cfd1d6eec7a09ba.jpg?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={3} md={3}>
        <Card src='https://cdn.dribbble.com/users/311276/screenshots/14734002/media/67ba14846009e5ecd842ccd47f8ce2f2.jpg?compress=1&resize=1600x1200' />
      </Grid>
    </Grid>
  );
}

// import React from 'react';

// function Cards() {
//   return <div>Just a Card</div>;
// }

// export default Cards;
