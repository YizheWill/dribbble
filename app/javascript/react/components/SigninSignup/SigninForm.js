import React, { useState, useEffect, useTheme } from 'react';
import clsx from 'clsx';
import { init } from 'ityped';
import { connect } from 'react-redux';
import { signInUserAction } from '../../Actions/UserActions';
import { Link, useHistory } from 'react-router-dom';
import { removeErrors } from '../../Actions/UserActions';
import { isSignedIn } from '../User/signInSignOut';
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
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '170px auto 0 auto',
    minWidth: 350,
    width: '30%',
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
function Form({ errors, user, signInUser, formRemoveErrors }) {
  const classes = useStyles();
  const [err, setErr] = useState('');
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [demoName, setDemoName] = useState(null);
  const history = useHistory();
  const handleSubmit = () => {
    signInUser({ username: usernameEmail, email: usernameEmail, password });
    console.log(window.localStorage.getItem('sessionToken'));
  };
  useEffect(() => {
    if (user.sessionToken) history.push('/');
  }, [user]);
  useEffect(() => {
    if (typeof errors === 'string') setErr(errors);
  }, [errors]);
  useEffect(() => {
    return () => {
      formRemoveErrors();
    };
  }, []);

  const fetchDemoUser = () => {
    const fetchRequestOption = {
      method: 'GET',
    };
    return fetch(
      `/api/v1/users/${parseInt(Math.random() * 15 + 1)}`,
      fetchRequestOption
    ).then((response) => response.json());
  };
  useEffect(() => {
    fetchDemoUser().then((res) => setDemoName(res.username));
  }, []);

  const type = () => {
    const email = document.getElementById('usernameoremail');
    const data = demoName.split('');
    let index = 0;
    function writing(index) {
      if (index < data.length) {
        email.value += data[index];
        setTimeout(writing, 200, ++index);
      }
    }
    writing(index);
    const password = document.getElementById('password');
    let index1 = 0;
    let pdata = '123456'.split('');
    function writingpass(index1) {
      if (index1 < pdata.length) {
        password.value += pdata[index1];
        setTimeout(writingpass, 200, ++index1);
      }
    }
    writingpass(index1);
    setTimeout(() => {
      const userInfo = {
        username: demoName,
        email: demoName,
        password: '123456',
      };
      signInUser(userInfo);
    }, 3000);
  };
  // work as component will unmount
  const renderErrors = () => {
    console.log('downhere');
    return <li className={classes.errorMessage}>{err}</li>;
  };
  console.log('demoName', demoName);

  return (
    <Grid item xs={12} sm={12} md={8} component={Paper} square>
      <div style={{ float: 'right', marginTop: 30, marginRight: 30 }}>
        Not a member ?
        <Link to='/signup' variant='body2' style={{ marginLeft: '0.3rem' }}>
          Sign up now
        </Link>
      </div>
      <div className={classes.paper}>
        <Typography className='title' component='h3' variant='h5'>
          Sign in to{' '}
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
          {/* <div
            data-onsuccess='onSignIn'
            className={clsx('g-signin2', classes.google)}
            style={{
              width: '280%',
            }}
          > */}
          <Button variant='contained' color='primary' className={classes.google}>
            <FaGoogle style={{ width: '1rem', height: '1rem', marginRight: '1rem' }} />
            Sign in with Google
          </Button>
          {/* </div> */}
          <div></div>
          <Button variant='contained' onClick={type} className={classes.google}>
            <Typography
              style={{
                fontSize: 17,
                fontWeight: 100,
                color: 'black',
              }}
            >
              Demo
            </Typography>
            {/* <FaTwitter style={{ width: '1rem', height: '1rem' }} /> */}
          </Button>
        </div>
        <div style={{ display: 'flex', margin: '2rem auto', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#eaeaea', height: 2, width: '50%' }}></div>
          <div style={{ margin: '0 10px' }}>Or</div>
          <div style={{ backgroundColor: '#eaeaea', height: 2, width: '50%' }}></div>
        </div>
        <form className={classes.form} noValidate>
          <Typography>Username or Email Address</Typography>
          <BootstrapInput
            className={classes.input}
            onChange={(e) => setUsernameEmail(e.target.value)}
            value={usernameEmail}
            id={'usernameoremail'}
          />

          <Grid container>
            <Grid item xs>
              <Typography>Password</Typography>
            </Grid>
            <Grid item>
              <Grid item>
                <Link to='/'>
                  <Typography>Forgot password?</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <BootstrapInput
            className={classes.input}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            id='password'
          />
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='secondary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
        {errors[0] ? renderErrors() : ''}
      </div>
    </Grid>
  );
}

export default connect(
  (state) => ({ user: state.user, errors: state.errors }),
  (dispatch) => ({
    signInUser: (user) => dispatch(signInUserAction(user)),
    formRemoveErrors: () => dispatch(removeErrors()),
  })
)(Form);
