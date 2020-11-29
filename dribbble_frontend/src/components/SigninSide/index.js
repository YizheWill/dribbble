import React from 'react';
import SigninPhoto from '../../assets/imgs/signin.png';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { FaGoogle } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${SigninPhoto})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    postion: 'fixed',
  },
  paper: {
    margin: theme.spacing(30, 4),
    minWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    marginLeft: '25%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: '10px',
  },
  google: {
    height: 32,
    fontSize: 12,
    padding: 4,
    marginTop: '1rem',
    width: '50%',
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    width: '50%',
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
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.secondary.main,
    },
  },
}))(InputBase);
export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />

      <Grid item md={5} className={classes.image} />
      <Grid item xs={12} sm={12} md={7} component={Paper} elevation={30} square>
        <div style={{ float: 'right', marginTop: 30, marginRight: 30 }}>
          Not a member ?
          <Link href='#' variant='body2' style={{ marginLeft: '0.3rem' }}>
            Sign up now
          </Link>
        </div>
        <div className={classes.paper}>
          <Typography className='title' component='h3' variant='h5'>
            Sign in to Willwill
          </Typography>
          {/* <div style={{ width: '50%' }}>
            <Grid container>
              <Grid item md={11}>
                <Button type='submit' variant='contained' color='primary'>
                  <FaGoogle
                    style={{ width: '1rem', height: '1rem', marginRight: '1rem' }}
                  />
                  Sign in with Google
                </Button>
              </Grid>
              <Grid item md={1}>
                <Button type='submit' variant='contained' color='primary'>
                  <FaTwitter
                    style={{ width: '1rem', height: '1rem', marginRight: '1rem' }}
                  />
                </Button>
              </Grid>
            </Grid>
          </div> */}

          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.google}
          >
            <FaGoogle style={{ width: '1rem', height: '1rem', marginRight: '1rem' }} />
            Sign in with Google
          </Button>
          <p style={{ width: '50%', textAlign: 'center', marginTop: '1rem' }}>Or</p>
          <form className={classes.form} noValidate>
            <label className={classes.label}>
              <Typography component='h4' variant='p'>
                Username or Email Address
              </Typography>
              <BootstrapInput />
            </label>

            <label className={classes.label}>
              <Grid container>
                <Grid item xs>
                  <Typography component='h4' variant='p'>
                    Password
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid item xs>
                    <Link href='#' variant='body2'>
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Grid>

              <BootstrapInput />
            </label>
            <Button variant='contained' color='secondary' className={classes.submit}>
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
