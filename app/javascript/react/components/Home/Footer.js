import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, makeStyles, Typography, Avatar, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#F8F8F8',
    },
    footer: {
      maginTop: '2rem',
      borderTop: `1px solid #eaeaea`,
      padding: '2rem',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      [theme.breakpoints.up('sm')]: {
        padding: '2rem 5rem',
      },
    },
    footerText: {
      color: 'gray',
      fontSize: 14,
    },
    footerContainer: {
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerContent: {
      display: 'flex',
      margin: '0 0 2rem 0',
    },
    footerLeft: {
      flex: 0.0,
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',

      [theme.breakpoints.up('sm')]: {
        flex: 0.3,
        display: 'flex',
      },
    },
    footerRight: {
      flex: 0.0,
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        flex: 0.3,
      },
    },
    textLogo: {
      fontFamily: 'Futura',
      fontSize: 30,
      fontWeight: 'bold',
    },
    rightCon: {
      padding: '1.5rem 5.5rem',
    },
    footerMid: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
      },
      [theme.breakpoints.up('sm')]: {
        flex: 0.4,
      },
    },
    leftCon: {
      fontSize: 14,
      fontWeight: 700,
      color: 'black',
      lineHeight: '3rem',
    },
    avatars: {
      margin: '2rem 1rem 0 1rem',
    },
    avatarContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'dark-blue',
    },
  }));
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.footerContainer}>
        <div style={{ width: '50%', backgroundColor: '#eaeaea', height: 3 }}></div>
        <div
          style={{
            margin: '3rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            src='https://res.cloudinary.com/willwang/image/upload/v1607723511/avatar_l9tddb.png'
            style={{
              width: 100,
              height: 100,
              opacity: '.9',
              cursor: 'pointer',
            }}
            onClick={() => history.push('/')}
          />
        </div>
        <div style={{ width: '50%', backgroundColor: '#eaeaea', height: 3 }}></div>
      </div>
      <div className={classes.footerContent}>
        <div className={classes.footerLeft}>
          <Typography className={classes.rightCon}>
            Designed and made with <span style={{ color: 'red' }}>♥</span> in
            <br />
            California by{' '}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                href='https://www.linkedin.com/in/will-wang-6b1ba675/'
                target='_blank'
              >
                <Avatar src='https://res.cloudinary.com/willwang/image/upload/v1608278738/Yizhe_Wang_ka3nzg.jpg' />
              </IconButton>
              <a
                href='https://www.linkedin.com/in/will-wang-6b1ba675/'
                target='_blank'
                style={{ color: 'dark-blue', fontWeight: 800 }}
              >
                WillWang
              </a>
            </div>
          </Typography>
        </div>
        <div className={classes.footerMid}>
          <Typography style={{ color: 'dark-blue', fontWeight: 900 }}>CONTACT</Typography>
          <Grid
            container
            className={classes.midAvatars}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Grid item className={classes.avatarContainer}>
              <IconButton
                href='https://www.linkedin.com/in/will-wang-6b1ba675/'
                target='_blank'
              >
                <Avatar
                  // className={classes.avatars}
                  src='https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg'
                />
              </IconButton>
              <Typography className={classes.name}>LinkedIn</Typography>
            </Grid>

            <Grid item className={classes.avatarContainer}>
              <IconButton href='https://www.facebook.com/EWizeros' target='_blank'>
                <Avatar
                  // className={classes.avatars}
                  src='https://cdn.worldvectorlogo.com/logos/facebook-3.svg'
                />
              </IconButton>
              <Typography className={classes.name}>facebook</Typography>
            </Grid>
            <Grid item className={classes.avatarContainer}>
              <IconButton href='https://www.github.com/yizhewill' target='_blank'>
                <Avatar
                  // className={classes.avatars}
                  src='https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
                />
              </IconButton>
              <Typography className={classes.name}>github</Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.footerRight}>
          <Typography className={classes.textLogo}>WillWill</Typography>
          <Typography className={classes.rightCon}>
            WillWill is the home to the best designers of the world. We are here to share
            inspirations and create wonderful artworks.
          </Typography>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.footerText}>
          <span style={{ color: 'dark-blue', fontWeight: 800 }}>©</span> 2021 willwang.
          All rights reserved.
        </Typography>
        <Typography className={classes.footerText}>
          <span style={{ color: 'dark-blue', fontWeight: 800 }}>{38}</span> projects on
          devHUB now
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
