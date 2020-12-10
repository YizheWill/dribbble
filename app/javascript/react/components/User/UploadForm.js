import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography, fade, withStyles, InputBase } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: '5%',
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
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
        <label>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>
            title
          </Typography>
          <BootstrapInput className={classes.input} placeholder='Add a Title' />
        </label>
        <label>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>
            Tags
          </Typography>
          <BootstrapInput className={classes.input} />
        </label>

        <div>
          <Typography variant='body2' style={{ fontWeight: 600, color: '#0a0a0a' }}>
            SUGGESTED TAGS
          </Typography>
          <div className={classes.tags}>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              app
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              arcana
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              buildings
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              card
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              card illustration
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              city
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              daycare
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              design
            </Typography>
            <Typography className={classes.tag} color='secondary' variant='body2'>
              logo
            </Typography>
          </div>
        </div>
        <label className={classes.description}>
          <Typography variant='h6' style={{ fontWeight: 'bold' }}>
            description
          </Typography>
          <BootstrapInput
            className={classes.input}
            multiline
            rows='4'
            rowsMax='7'
            placeholder='Tell us about your process and how you arrived at this design'
          />
        </label>
      </form>
    </div>
  );
}

export default Form;
