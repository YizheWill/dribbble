import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import ShotImage from '../../assets/imgs/shot.png';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { BiMessageRounded, BiHeart } from 'react-icons/bi';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  border: {
    borderRadius: 10,
    minWidth: 210,
  },
  image: {
    width: '100%',
    borderRadius: 6,
  },
  imgbutton: {
    display: 'flex',
  },
  cardtext: {
    marginLeft: 10,
  },
  cardtitle: {
    textAlign: 'left',
    fontSize: '1rem',
  },
  grid: {
    paddingRight: 40,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    display: 'flex',
    flexDirection: 'col',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    margin: theme.spacing(1),
  },
}));

export default function CardUI() {
  const classes = useStyles();
  return (
    <Link to='/shot'>
      <Box className={`card text-center ${classes.border}`}>
        <div className='overflow'>
          <img className={classes.image} src={ShotImage} alt='image 1'></img>
        </div>
        <div className={`text-dark ${classes.cardtext}`}>
          <Grid container className={classes.grid}>
            <Grid item xs={9} sm={8} md={9}>
              <div className={classes.user}>
                <Avatar
                  className={classes.avatar}
                  src='https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=800&q=60'
                />
                <Typography
                  className={`card-title ${classes.cardtitle}`}
                  component='h6'
                  variant='h6'
                >
                  Will Wang
                </Typography>
              </div>
            </Grid>
            <Grid item item xs={1} sm={1} md={1}>
              <div className={classes.imgbutton}>
                <IconButton style={{ outline: 'none' }} size='small'>
                  <BiHeart />
                </IconButton>
                <IconButton style={{ outline: 'none' }} size='small'>
                  <BiMessageRounded />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Link>
  );
}
