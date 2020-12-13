import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeErrors } from '../../Actions/UserActions';
import {
  makeStyles,
  Button,
  Paper,
  Grid,
  Typography,
  fade,
  withStyles,
  InputBase,
} from '@material-ui/core';
import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { signUpUserAction } from '../../Actions/UserActions';
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '170px auto 0 auto',
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
  namebox: {
    display: 'grid',
    gridTemplateColumns: '5fr 0.3fr 5fr',
  },
  errorMessage: {
    listStyle: 'none',
    color: 'red',
    marginTop: '1rem',
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
function Form({ signUpUser, errors, formRemoveErrors }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    signUpUser({ name, username, email, password });
  };
  const renderErrors = () => {
    if (typeof errors === 'object') {
      const res = [];
      for (const key in errors) {
        res.push(errors[key]);
        delete errors[key];
      }
      console.log('removing errors');
      return res.map((e, i) => (
        <li key={i} className={classes.errorMessage}>
          {e}
        </li>
      ));
    }
    console.log('downhere');
    return <li className={classes.errorMessage}>{errors}</li>;
  };
  return (
    <Grid item xs={12} sm={12} md={8} component={Paper} square>
      <div style={{ float: 'right', marginTop: 30, marginRight: 30 }}>
        Already have an account ?
        <Link to='/signin' variant='body2' style={{ marginLeft: '0.3rem' }}>
          Sign in now
        </Link>
      </div>
      <div className={classes.paper}>
        <Typography className='title' component='h3' variant='h5'>
          Sign up for{' '}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span
              style={{
                color: '#E8467F',
                fontFamily: 'Grand Hotel, cursive',
                marginLeft: 5,
              }}
            >
              Willwill
            </span>
          </Link>
        </Typography>
        <div className={classes.buttons}>
          <Button variant='contained' color='primary' className={classes.google}>
            <FaGoogle style={{ width: '1rem', height: '1rem', marginRight: '1rem' }} />
            Sign up with Google
          </Button>
          <div></div>
          <Button variant='contained' className={classes.google}>
            <FaTwitter style={{ width: '1rem', height: '1rem' }} />
          </Button>
        </div>
        <div style={{ display: 'flex', margin: '2rem auto', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#eaeaea', height: 2, width: '50%' }}></div>
          <div style={{ margin: '0 10px' }}>Or</div>
          <div style={{ backgroundColor: '#eaeaea', height: 2, width: '50%' }}></div>
        </div>
        <form className={classes.form} noValidate>
          <div className={classes.namebox}>
            <div>
              <Typography>Name</Typography>
              <BootstrapInput
                className={classes.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div></div>
            <div>
              <Typography>Username</Typography>
              <BootstrapInput
                className={classes.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <Typography>Email</Typography>
          <BootstrapInput
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Typography>Password</Typography>
          <BootstrapInput
            className={classes.input}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            <Typography variant='body2'>Create Account</Typography>
          </Button>
        </form>
        {errors[0] ? renderErrors() : ''}
      </div>
    </Grid>
  );
}

export default connect(
  (state) => ({
    errors: state.errors,
  }),
  (dispatch) => {
    return {
      signUpUser: (user) => dispatch(signUpUserAction(user)),
      formRemoveErrors: () => dispatch(removeErrors()),
    };
  }
)(Form);
