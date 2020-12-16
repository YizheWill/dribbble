import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar/Navbar';
import { getCurrentUserInfo } from '../../Actions/UserActions';
import { Public, AccountCircle } from '@material-ui/icons';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  makeStyles,
  Button,
  Paper,
  Grid,
  Typography,
  fade,
  withStyles,
  InputBase,
} from '@material-ui/core';
import { connect } from 'react-redux';
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
    fontWeight: 100,
    height: '2rempx',
    padding: '10px 12px',
    marginTop: 20,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.secondary.main,
    },
  },
}))(InputBase);
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      padding: '5rem 10rem',
    },
  },
  title: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  form: {
    padding: '0',
  },
  uploadAvatar: {
    display: 'flex',
    margin: '2rem auto',
  },
  avatar: {
    marginRight: 20,
    width: 50,
    height: 50,
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 100,
    },
  },
  buttons: {
    fontSize: 9,
    height: '2rem',
    padding: '0 .7rem',
    margin: 'auto 1rem',
    [theme.breakpoints.up('sm')]: {
      padding: '0 1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  },
  labels: {
    display: 'block',
    marginTop: '3rem',
  },
  endnote: {
    color: '#3c3c3c',
    fontSize: 14,
    fontWeight: 100,
  },
  formGrid: {
    maxWidth: '70%',
  },
  selector: {
    marginTop: '20vh',
    minWidth: 50,
    width: '70%',
    fontSize: 7,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
      minWidth: 135,
      marginRight: 10,
    },
  },
  listText: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '-1.5rem',
      display: 'block',
    },
  },
}));

function EditUserForm({ user, fetchUser }) {
  useEffect(() => {
    fetchUser(localStorage.getItem('sessionToken'));
  }, []);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [bio, setBio] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [portfolioPassword, setPortfolioPassword] = useState('');
  const [available, setAvailable] = useState('');
  const [personalUrl, setPersonalUrl] = useState('');
  const [tier, setTier] = useState('');
  const [twitter, setTwitter] = useState('');
  const [facebook, setFacebook] = useState('');
  const [github, setGithub] = useState('');
  useEffect(() => {
    setName(user.name);
    setUsername(user.username);
    setLocation(user.location);
    setEmail(user.email);
    setPassword(user.password);
    setAvatarUrl(user.avatarUrl);
    setBio(user.bio);
    setPortfolioUrl(user.portfolioUrl);
    setPortfolioPassword(user.portfolioPassword);
    setAvailable(user.available);
    setPersonalUrl(user.personalUrl);
    setTier(user.tier);
    setTwitter(user.twitter);
    setFacebook(user.facebook);
    setGithub(user.github);
  }, [user]);
  const classes = useStyles();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const selection = (
    <div className={classes.selector}>
      <List component='nav' aria-label='main mailbox folders'>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <Public />
          </ListItemIcon>
          <ListItemText className={classes.listText} secondary='Public Info' />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText className={classes.listText} secondary='Account' />
        </ListItem>
      </List>
    </div>
  );
  const accountForm = (
    <div>
      <label className={classes.labels}>
        <Typography>User Name</Typography>
        <BootstrapInput value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className={classes.labels}>
        <Typography>Email</Typography>

        <BootstrapInput value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className={classes.labels}>
        <Typography>Password</Typography>
        <BootstrapInput type='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
    </div>
  );

  const pubForm = (
    <div>
      <label className={classes.labels}>
        <Typography>
          Name<span style={{ color: 'red' }}>*</span>
        </Typography>
        <BootstrapInput value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className={classes.labels}>
        <Typography>Location</Typography>

        <BootstrapInput value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label className={classes.labels}>
        <Typography>Bio</Typography>
        <BootstrapInput
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          multiline
          rows='3'
          rowsMax='5'
        />
      </label>
      <Typography className={classes.endnote}>
        Brief Description for your profile.
      </Typography>
      <div className={classes.onlinePresence}>
        <Typography style={{ marginTop: '2rem' }}>ONLINE PRESENCE</Typography>
        <hr />
        <label className={classes.labels}>
          <Typography>Personal website</Typography>
          <BootstrapInput
            value={personalUrl}
            onChange={(e) => setPersonalUrl(e.target.value)}
          />
        </label>
        <Typography className={classes.endnote}>
          Your home page, blog, or company site.
        </Typography>
        <div className={classes.portfolioContainer}>
          <div className={classes.portfolio}>
            <label className={classes.labels}>
              <Typography>Portfolio URL</Typography>
              <BootstrapInput
                value={portfolioUrl}
                onChange={(e) => setPortfolioUrl(e.target.value)}
              />
            </label>
            <Typography className={classes.endnote}>
              Only Shared with potential employers
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <label className={classes.labels}>
              <Typography>Portfolio password</Typography>
              <BootstrapInput
                type='password'
                value={portfolioPassword}
                onChange={(e) => setPortfolioPassword(e.target.value)}
              />
            </label>
            <Typography className={classes.endnote}>Only if needed.</Typography>
          </div>
        </div>
      </div>
    </div>
  );

  const publicInfoForm = (
    <Grid item md={8} sm={12} xs={12} className={classes.formGrid}>
      {selectedIndex ? (
        ''
      ) : (
        <div className={classes.uploadAvatar}>
          <Avatar className={classes.avatar} src={user?.avatarUrl} />
          <Button className={classes.buttons} variant='contained' color='secondary'>
            Upload new picture
          </Button>
          <Button className={classes.buttons} variant='contained' color='secondary'>
            Delete
          </Button>
        </div>
      )}
      <div className={classes.info}>
        {selectedIndex ? accountForm : pubForm}
        <Button variant='contained' color='secondary' style={{ marginTop: '2rem' }}>
          <Typography>Save Profile</Typography>
        </Button>
      </div>
    </Grid>
  );
  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <div className={classes.title}>
          <Avatar src={avatarUrl} style={{ marginRight: 10, width: 100, height: 100 }} />
          <div className={classes.wordTitle}>
            <Typography variant='h4' style={{ marginBottom: '1rem' }}>
              {name} / Edit Profile
            </Typography>
            <Typography style={{ fontWeight: 400 }}>
              Set up your Dribbble presence and hiring needs
            </Typography>
          </div>
        </div>
        <Grid container className={classes.form}>
          <Grid item md={4}>
            {selection}
          </Grid>
          {publicInfoForm}
        </Grid>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({ user: state.user }),
  (dispatch) => ({
    fetchUser: (sessionToken) => dispatch(getCurrentUserInfo(sessionToken)),
  })
)(EditUserForm);
