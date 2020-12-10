import React from 'react';
import { Link } from 'react-router-dom';
import {
  makeStyles,
  Typography,
  Paper,
  Grid,
  fade,
  withStyles,
  InputBase,
} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: 350,
    width: '40%',
    alignItems: 'left',
  },
  form: {
    width: '100%',
  },
  buttons: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: '80% 1fr 9fr',
  },
  google: {
    height: 32,
    fontSize: 10,
    padding: 4,
  },
  twitter: {
    float: 'right',
    height: 32,
    padding: 4,
  },
  submit: {
    marginTop: '1rem',
    backgroundColor: theme.palette.secondary.main,
    width: '50%',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    margin: 'auto 0.3rem',
    lineHeight: 1.3,
    cursor: 'pointer',
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    width: '100%',
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#f1f1f1',
    border: '1px solid #ced4da',
    fontSize: 16,
    height: '10px',
    padding: '10px 12px',
    marginTop: 5,
    marginBottom: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.secondary.main,
    },
  },
}))(InputBase);
function Form() {
  const classes = useStyles();
  return (
    <Grid md={4} component={Paper} square elevation={0}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <label>
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
              title
            </Typography>
            <BootstrapInput className={classes.input} placeholder='Add a Title' />

            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
              Tags
            </Typography>
            <BootstrapInput className={classes.input} />
          </label>
          <label>
            <Typography variant='h6' style={{ fontWeight: 'bold' }}>
              description
            </Typography>
            <BootstrapInput
              className={classes.input}
              multiline
              rows='3'
              rowsMax='5'
              placeholder='Tell us about your process and how you arrived at this design'
            />
          </label>
          <Typography variant='body2' style={{ fontWeight: 600, color: '#0a0a0a' }}>
            SUGGESTED TAGS
          </Typography>
          <div className={classes.tags}>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              app
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              arcana
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              buildings
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              card
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              card illustration
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              city
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              daycare
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              design
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body3'>
              logo
            </Typography>
          </div>
        </form>
      </div>
    </Grid>
  );
}

export default Form;
