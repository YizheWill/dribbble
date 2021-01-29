import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Button, Grid } from '@material-ui/core';
import { Facebook, Twitter, InsertLink } from '@material-ui/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import Cards from '../../../Card/Cards';
import Navbar from '../../../NavBar/Navbar';
import { connect } from 'react-redux';
import { fetchCollectionAction } from '../../../../Actions/CollectionActions';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const useStyles = makeStyles((theme) => ({
  top: {
    display: 'flex',
    padding: '2rem 10rem 0 5%',
  },
  topLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: '1rem',
      transform: 'scale(1.2)',
    },
  },
  topLeftItem: {
    marginRight: '5rem',
    margin: '0.5rem 0 0.3rem 0',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '7px 10px',
    margin: '1rem 0.5rem 1rem 0',
    borderRadius: '.7rem',
  },
  icons: {
    marginRight: 5,
  },
  right: {
    // display: 'none',

    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginTop: '.5rem',
    },
  },
}));

function Collection({ collection, fetchCollection, avatarUrl }) {
  const { collectionId } = useParams();
  const [copylink, setCopylink] = useState('copy');
  useEffect(() => {
    fetchCollection(collectionId);
  }, []);
  // console.log('collection', collection);
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid className={classes.top} container>
        <Grid className={classes.topLeft} item>
          <Typography
            className={classes.topLeftItem}
            variant='h4'
            fontWeight={900}
          >
            {collection?.title}
          </Typography>
          <Typography
            className={classes.topLeftItem}
            variant='body2'
            style={{ fontWeight: 100 }}
          >
            {collection?.shots?.length} Shots | {collection?.artistCount}{' '}
            Designers
          </Typography>
          <Link
            style={{ textDecoration: 'none', color: '#4f4f4f' }}
            to={`/users/${collection?.userId}`}
            className={classes.topLeftItem}
          >
            <div className={classes.user}>
              <Avatar
                style={{ marginRight: 10, width: 30, height: 30 }}
                src={avatarUrl}
              />
              <Typography variant='subtitle1'>
                {collection?.username}
              </Typography>
            </div>
          </Link>
        </Grid>
        <Grid className={classes.right} item>
          <a
            href='https://www.facebook.com/'
            style={{ textDecoration: 'none', color: 'black' }}
            target='_blank'
          >
            <Button
              disableElevation
              variant='contained'
              className={classes.button}
            >
              <Facebook className={classes.icons} color='primary' />
              Share
            </Button>
          </a>

          <a
            href='https://www.twitter.com/'
            style={{ textDecoration: 'none', color: 'black' }}
            target='_blank'
          >
            <Button
              disableElevation
              variant='contained'
              className={classes.button}
            >
              <Twitter className={classes.icons} style={{ color: 'blue' }} />
              Tweet
            </Button>
          </a>
          <CopyToClipboard text={window.location.href}>
            <Button
              disableElevation
              variant='contained'
              className={classes.button}
              onClick={() => setCopylink('copied')}
            >
              <InsertLink className={classes.icons} />
              {copylink}
            </Button>
          </CopyToClipboard>
        </Grid>
      </Grid>
      <Cards urls={collection?.shots} />
    </div>
  );
}

export default connect(
  (state) => ({
    collection: state.entities.collection,
    avatarUrl: state.entities.collection.avatarUrl,
  }),
  (dispatch) => ({
    fetchCollection: (id) => dispatch(fetchCollectionAction(id)),
  })
)(Collection);
