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
    <Grid container className={classes.container}>
      {/* <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/7436097/media/ace865e3971369f929cef4da0eb8c49c.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/125060/screenshots/14737337/media/44c2e084c430e7250a1a199fe1595f14.mp4' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/6051/screenshots/14738275/media/dbf64fc15852541d976bdeebf31ccb23.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/14011423/media/7e58ffee3ad50f3e3e0ace2bbbd106d3.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/78637/screenshots/14736268/media/bc0ae527022b832c3295c41188b3b6d7.mp4' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/7249431/media/d12dfd5c8137dbec123b4a275cc09d35.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/6853214/image.png?compress=1&resize=800x600' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/6671754/learning_a_new_style_4x.png?compress=1&resize=1600x1200' />
      </Grid>
      <Grid className={classes.shots} item xs={12} sm={6} md={3}>
        <Card src='https://cdn.dribbble.com/users/1821723/screenshots/4937888/asset_2.png?compress=1&resize=800x600' />
      </Grid> */}
      {urls?.map((url) => (
        <Grid className={classes.shots} item xs={12} sm={6} md={3} key={url.id}>
          <Card src={url} style={{ height: '100%' }} />
        </Grid>
      ))}
    </Grid>
  );
}

// import React from 'react';

// function Cards() {
//   return <div>Just a Card</div>;
// }

// export default Cards;
