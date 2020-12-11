import React, { useState } from 'react';
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

function Card() {
  const classes = useStyles();
  const history = useHistory();
  const [shotscount, setShotscount] = useState(0);
  const [designerscount, setDesignerscount] = useState(0);
  const handleClick = () => {
    history.push('/');
  };
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className={classes.container}>
        <img
          className={classes.topImage}
          style={{ width: '100%', height: '100%' }}
          src={Images[0]}
          alt='whatever'
        />
        <div className={classes.bottomImages}>
          <img className={classes.bottomLeft} src={Images[1]} alt='whatever' />
          <img className={classes.bottomImage} src={Images[2]} alt='whatever' />
          <img className={classes.bottomRight} src={Images[3]} alt='whatever' />
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 15 }}>
        <Typography variant='subtitle1' style={{ fontWeight: 'bold' }}>
          Logo and Branding
        </Typography>
        <Typography variant='body2' style={{ fontWeight: 'light' }}>
          {shotscount} Shots | {designerscount} Designer
        </Typography>
      </div>
    </div>
  );
}

export default Card;
