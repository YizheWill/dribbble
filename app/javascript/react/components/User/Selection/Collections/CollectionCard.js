import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
const Images = [
  'https://cdn.dribbble.com/users/4859/screenshots/14738723/media/ee9ba04d8be6428f5cfd1d6eec7a09ba.jpg?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/1068771/screenshots/14737460/media/981729384557d95f533270aac56a9603.jpg?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/79978/screenshots/14736759/media/d3221353b4076105afafd18b3af6a661.png?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/79978/screenshots/14653713/media/0e11e623c85fa2b8c30cbf622011a89d.png?compress=1&resize=1600x1200',
];
const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffe4f5',
    borderRadius: '1rem',
    cursor: 'pointer',
  },
  topImage: {
    width: '100%',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
  },
  bottomImages: {
    width: '100%',
    maxWidth: '100%',
    paddingTop: '2%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottomImage: {
    width: '32%',
    height: '32%',
  },
  bottomLeft: {
    width: '32%',
    height: '32%',
    borderBottomLeftRadius: '1rem',
  },
  bottomRight: {
    width: '32%',
    height: '32%',
    borderBottomRightRadius: '1rem',
  },
}));

export default function Collection({ collection }) {
  const { id, userId, shots, title, artistCount } = collection;
  const classes = useStyles();
  const history = useHistory();
  const shotscount = shots?.length;
  // console.log('id', id);
  // console.log('userId', userId);
  // console.log('shots', shots);
  // console.log('title', title);
  // console.log('artistCount', artistCount);
  const pauseMovie = (e) => {
    e.currentTarget.pause();
  };
  const playMovie = (e) => {
    e.currentTarget.play();
  };
  const handleClick = () => {
    history.push(`/collections/${id}`);
  };
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={classes.container}>
        {shots && shots[0] && shots[0].split('.').slice(-1)[0] === 'mp4' ? (
          <video
            onMouseOver={playMovie}
            onMouseOut={pauseMovie}
            preload='all'
            loop
            src={shots[0]}
            className={classes.topImage}
          />
        ) : (
          <img
            className={classes.topImage}
            src={(shots && shots[0]) || Images[0]}
            alt='whatever'
          />
        )}

        <div className={classes.bottomImages}>
          {shots && shots[1] && shots[1].split('.').slice(-1)[0] === 'mp4' ? (
            <video
              onMouseOver={playMovie}
              onMouseOut={pauseMovie}
              preload='all'
              loop
              src={shots[1]}
              className={classes.bottomLeft}
            />
          ) : (
            <img
              className={classes.bottomLeft}
              src={(shots && shots[1]) || Images[1]}
              alt='whatever'
            />
          )}
          {shots && shots[2] && shots[2].split('.').slice(-1)[0] === 'mp4' ? (
            <video
              onMouseOver={playMovie}
              onMouseOut={pauseMovie}
              preload='all'
              loop
              src={shots[2]}
              className={classes.bottomImage}
            />
          ) : (
            <img
              className={classes.bottomImage}
              src={(shots && shots[2]) || Images[0]}
              alt='whatever'
            />
          )}
          {shots && shots[3] && shots[3].split('.').slice(-1)[0] === 'mp4' ? (
            <video
              onMouseOver={playMovie}
              onMouseOut={pauseMovie}
              preload='all'
              loop
              src={shots[3]}
              className={classes.bottomRight}
            />
          ) : (
            <img
              className={classes.bottomRight}
              src={(shots && shots[3]) || Images[3]}
              alt='whatever'
            />
          )}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 15 }}>
        <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant='body2' style={{ fontWeight: 'light' }}>
          {shotscount} Shots | {artistCount} Designer
        </Typography>
      </div>
    </div>
  );
}
