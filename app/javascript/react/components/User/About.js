import React, { useState, useEffect } from 'react';
import { Typography, Avatar, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  Facebook,
  Twitter,
  Language,
  LocationOn,
  Loyalty,
  CardMembership,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    margin: '0 auto',
    width: '65%',
  },
  leftPanel: {
    height: '100%',
    padding: '2rem 2rem 0 0',
  },
  rightPanel: {
    marginTop: '1rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  leftSub: {
    margin: '1rem auto',
  },
  leftBottom: {
    display: 'flex',
  },
  leftBottomItem: {
    color: 'gray',
    fontSize: '1rem',
    margin: '0 .5rem',
  },
  rightSub: {
    margin: '1rem 0 0 1rem',
  },
  button: {
    fontSize: 10,
    margin: '1rem 0.4rem 0 0',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    color: 'red',
    margin: '0.2rem 0',
    textDecoration: 'none',
    alignItems: 'center',
  },
  linkdiv: {
    display: 'flex',
    cursor: 'pointer',
  },
  rightTop: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0',
  },
  icons: {
    marginRight: '0.5rem',
  },
  infodiv: {
    minWidth: 220,
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#e2e2e2',
    padding: '2rem',
    borderRadius: '1rem',
  },
}));

function About({ user }) {
  console.log('user', user);
  console.log(
    "localStorage.getItem('sessionToken')",
    localStorage.getItem('sessionToken')
  );
  const [edit, setEdit] = useState('none');
  useEffect(() => {
    setEdit(
      user.sessionToken === localStorage.getItem('sessionToken') ? 'block' : 'none'
    );
  }, [user]);
  console.log('edit', edit);
  const { bio, location, tier, createdAt } = user;
  const tierLevels = ['Designer', 'PRO', 'Team'];
  const tierLevel = tierLevels[tier];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let timeString = createdAt.split('-').slice(0, 2);
  console.log('timeString', timeString);
  let memberSince = months[parseInt(timeString[1] - 1)] + ' ' + timeString[0];

  const skills = ['graphic design', 'icon design', 'illustration', 'mobile', 'ui'];
  const [followerCount, followingCount, tagCount] = [100, 100, 10];
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      style={{ position: 'relative', marginTop: '3rem' }}
    >
      <Link to='/edit'>
        <Button
          variant='contained'
          color='secondary'
          style={{ display: edit, position: 'absolute', top: '-1.6rem', right: '-10%' }}
        >
          EDIT PROFILE
        </Button>
      </Link>
      <Grid className={classes.leftPanel} item md={8} sm={6} xs={12}>
        <div className={classes.leftSub}>
          <Typography variant='subtitle1' fontWeight={700}>
            Biography
          </Typography>
          <Typography style={{ fontSize: '0.9rem', fontWeight: 300 }}>{bio}</Typography>
        </div>
        <div className={classes.leftSub}>
          <Typography variant='subtitle1' fontWeight={700}>
            Skills
          </Typography>
          <div>
            {skills.map((skill, idx) => (
              <Button key={idx} className={classes.button} variant='contained'>
                {skill}
              </Button>
            ))}
          </div>
        </div>
        <hr></hr>
        <div className={classes.leftBottom}>
          <div className={classes.leftBottomItem}>{followerCount} followers</div>
          <div className={classes.leftBottomItem}>{followingCount} following</div>
          <div className={classes.leftBottomItem}>{tagCount} tags</div>
        </div>
      </Grid>
      <Grid
        item
        className={classes.rightPanel}
        md={4}
        sm={4}
        xs={12}
        style={{ justifyItems: 'end' }}
      >
        <div className={clsx(classes.rightSub, classes.infodiv)}>
          <div className={classes.rightTop}>
            <LocationOn className={classes.icons} />
            <Typography>{location}</Typography>
          </div>
          <div className={classes.rightTop}>
            <Loyalty className={classes.icons} />
            <Typography>{tierLevel}</Typography>
          </div>
          <div className={classes.rightTop}>
            <CardMembership className={classes.icons} />
            <Typography>{memberSince}</Typography>
          </div>
        </div>
        <div className={classes.rightSub}>
          <Typography variant='subtitle1' fontWeight={700}>
            Members
          </Typography>
          <Avatar />
        </div>

        <div className={classes.rightSub}>
          <Typography variant='subtitle1' fontWeight={700}>
            Social
          </Typography>
          <div className={classes.links}>
            <Link className={classes.link} to='https://www.google.com/'>
              <div className={classes.linkdiv}>
                <Facebook className={classes.icons} />
                <Typography variant='body2'>facebook</Typography>
              </div>
            </Link>
            <Link className={classes.link} to='https://www.google.com/'>
              <div className={classes.linkdiv}>
                <Twitter className={classes.icons} />
                <Typography variant='body2'>Twitter</Typography>
              </div>
            </Link>
            <Link className={classes.link} to='https://www.google.com/'>
              <div className={classes.linkdiv}>
                <Language className={classes.icons} />
                <Typography variant='body2'>portforlio</Typography>
              </div>
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
