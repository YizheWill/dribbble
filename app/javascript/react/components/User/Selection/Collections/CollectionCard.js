import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const Images = [
  'https://cdn.dribbble.com/users/4859/screenshots/14738723/media/ee9ba04d8be6428f5cfd1d6eec7a09ba.jpg?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/1068771/screenshots/14737460/media/981729384557d95f533270aac56a9603.jpg?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/79978/screenshots/14736759/media/d3221353b4076105afafd18b3af6a661.png?compress=1&resize=1600x1200',
  'https://cdn.dribbble.com/users/79978/screenshots/14653713/media/0e11e623c85fa2b8c30cbf622011a89d.png?compress=1&resize=1600x1200',
];
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  topImage: {
    backgroundImage: `${Images[0]}`,
    gridArea: 'header',
  },
  bottomImages: {
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  left: {
    backgroundImage: `${Images[3]}`,
    gridArea: 'left',
  },
  mid: {
    backgroundImage: `${Images[2]}`,
    gridArea: 'mid',
  },
  right: {
    backgroundImage: `${Images[1]}`,
    gridArea: 'right',
  },
}));

function Card() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.topImage}>
        <img src={Images[0]} alt='whatever' />
      </div>
      <div className={classes.bottomImages}>
        <img src={Images[1]} alt='whatever' />
        <img src={Images[2]} alt='whatever' />
        <img src={Images[3]} alt='whatever' />
      </div>
    </div>
  );
}

export default Card;
