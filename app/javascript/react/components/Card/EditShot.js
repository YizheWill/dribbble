import BottomNavbar from '../NavBar/BottomNavbar';
import { connect } from 'react-redux';
import BasicNavbar from '../NavBar/BasicNavbar';
import { Paper, Grid } from '@material-ui/core';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import Navbar from '../NavBar/Navbar';

import { editShotAction, fetchShotAction } from '../../Actions/ShotActions';

import {
  Button,
  makeStyles,
  Typography,
  fade,
  withStyles,
  InputBase,
} from '@material-ui/core';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
const baseStyle = {
  padding: '2rem 0',
  borderWidth: 10,
  borderRadius: 10,
  borderColor: 'pink',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: 'pointer',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 500,
    minHeight: 600,
    transform: 'scale(.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  root: {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderTop: '.3px solid #eaeaea',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  createButton: {
    padding: '10px 30px',
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
  },
  uploadedImage: {
    margin: 'auto 0',
    width: '100%',
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
function Upload({ uploadedShot, errors, user_id, editShot, shot, fetchShot }) {
  const history = useHistory();
  const { shotId } = useParams();
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetchShot(shotId);
  }, []);
  useEffect(() => {
    setTitle(shot?.title);
    setTag(shot?.tag);
    setDescription(shot?.description);
    setImageUrl(shot?.imageUrl);
  }, [shot]);

  const postShot = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'dribbble');
    data.append('cloud_name', 'willwang');
    fetch('https://api.cloudinary.com/v1_1/willwang/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
        console.log('data', data.url);
      })
      .catch((err) => console.log('error', err));
  };
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    postShot(acceptedFiles[0]);
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: 'image/*' });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  const classes = useStyles();
  const handleEdit = () => {
    const shotData = {
      id: shot.id,
      user_id: user_id,
      title,
      // tag,
      description,
      image_url: imageUrl,
    };
    console.log('user_id', user_id);
    editShot({ shot: shotData });
    // console.log('user', user);
    history.push(`/shots/${shotId}`);
  };
  const handleCancel = () => {
    history.push('/');
  };
  const [del, setDel] = useState('none');
  const [opa, setOpa] = useState('1.0');
  const [error, setError] = useState('');
  const handleAddTag = (e) => {
    setTag(tag + e.target.innerHTML + ', ');
  };
  const renderError = () => {
    <div>{errors}</div>;
  };

  return (
    <div>
      <Navbar content='EDIT' />
      {renderError()}
      <Grid className={classes.main} container elevation={0}>
        {imageUrl ? (
          <Grid
            md={7}
            onMouseOver={() => {
              setDel('block');
            }}
            onMouseOut={() => {
              setDel('none');
            }}
            item
            className={classes.card}
          >
            <div
              style={{
                height: '100%',
                postion: 'relative',
                backgroundColor: 'pink',
                padding: '1rem',
                borderRadius: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                className={classes.uploadedImage}
                src={imageUrl}
                style={{ opacity: opa }}
              ></img>
              <div
                className={del}
                onMouseOver={() => setOpa('0.4')}
                onMouseOut={() => setOpa('1.0')}
                style={{
                  display: del,
                  position: 'absolute',
                  right: 30,
                  top: 30,
                  cursor: 'pointer',
                }}
              >
                <Button
                  onClick={() => setImageUrl(null)}
                  variant='contained'
                  color='secondary'
                  style={{ borderRadius: 999, margin: 15 }}
                >
                  Delete
                  <Delete style={{ '&:hover': { backgroundColor: 'gray' } }} />
                </Button>
              </div>
            </div>
          </Grid>
        ) : (
          <Grid className={classes.card} md={7} item>
            <div className='container'>
              <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                    }}
                  >
                    <li
                      style={{
                        display: 'grid',
                        alignItems: 'center',
                        padding: '1rem',
                        justifyContent: 'center',
                        gridTemplateColumns: '1fr 3fr',
                        borderRight: '.3px solid gray',
                      }}
                    >
                      <CropOriginalIcon style={{ fontSize: '3rem' }} />
                      <div>
                        <Typography
                          style={{ marginBottom: 20 }}
                          variant='body2'
                        >
                          One high resolution image
                        </Typography>
                        <div></div>
                        <Typography
                          style={{ color: '#8a8a8a' }}
                          variant='body2'
                        >
                          PNG, JPG, GIF + Cropping
                        </Typography>
                      </div>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        alignItems: 'center',
                        padding: '1rem',
                        justifyContent: 'center',
                        gridTemplateColumns: '1fr 3fr',
                        borderRight: '.3px solid gray',
                      }}
                    >
                      <CropOriginalIcon style={{ fontSize: '3rem' }} />
                      <div>
                        <Typography
                          style={{ marginBottom: 20, lineHeight: '1rem' }}
                          variant='body2'
                        >
                          Animated GIF
                        </Typography>
                        <div></div>
                        <Typography
                          style={{ color: '#8a8a8a' }}
                          variant='body2'
                        >
                          Function Not supported yet
                        </Typography>
                      </div>
                    </li>
                    <li
                      style={{
                        display: 'grid',
                        alignItems: 'center',
                        padding: '1rem',
                        justifyContent: 'center',
                        gridTemplateColumns: '1fr 3fr',
                      }}
                    >
                      <CropOriginalIcon style={{ fontSize: '3rem' }} />
                      <div>
                        <Typography
                          style={{ marginBottom: 20, lineHeight: '1rem' }}
                          variant='body2'
                        >
                          Videos
                        </Typography>
                        <div></div>
                        <Typography
                          style={{ color: '#8a8a8a' }}
                          variant='body2'
                        >
                          has to be less than 10 secs, will be pro feature
                        </Typography>
                      </div>
                    </li>
                  </div>
                  <div style={{}}>
                    <CloudUploadTwoToneIcon
                      style={{ color: 'pink', fontSize: '17rem' }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Typography variant='h4' style={{ fontWeight: 'bold' }}>
                      Drag and drop an image
                    </Typography>
                    <br />
                    <Typography variant='h5'>
                      or <span style={{ color: 'pink' }}>browse</span> to choose
                      a file
                    </Typography>
                    <Typography variant='body2' style={{ lineHeight: '2rem' }}>
                      (1600x1200 or larger recommended, up to 10MB each)
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        )}
        <Grid
          md={4}
          sm={12}
          xs={12}
          component={Paper}
          square
          elevation={0}
          item
        >
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <label>
                <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                  title
                </Typography>
                <BootstrapInput
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={classes.input}
                  placeholder='Add a Title'
                />
              </label>
              <label>
                <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                  Tags
                </Typography>
                <BootstrapInput
                  className={classes.input}
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
              </label>

              <div>
                <Typography
                  variant='body2'
                  style={{ fontWeight: 600, color: '#0a0a0a' }}
                >
                  SUGGESTED TAGS
                </Typography>
                <div className={classes.tags}>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    app
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    arcana
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    buildings
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    card
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    card illustration
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    city
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    daycare
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
                    design
                  </Typography>
                  <Typography
                    onClick={(e) => handleAddTag(e)}
                    className={classes.tag}
                    color='secondary'
                    variant='body2'
                  >
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <Typography variant='body2' style={{ color: 'red' }}>
                {error}
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
      <BottomNavigation className={classes.root}>
        <BottomNavigationAction
          icon={
            <div onClick={handleCancel}>
              <Typography>Cancel</Typography>
            </div>
          }
        />
        <BottomNavigationAction
          icon={
            <div
              onClick={() => {
                if (title && description && imageUrl) handleEdit();
                else {
                  setError(
                    'you will need to upload a image, title it and write a short description'
                  );
                }
              }}
              className={classes.createButton}
              style={{
                backgroundColor:
                  title && description && imageUrl ? 'red' : 'gray',
                // backgroundColor: 'blue',
              }}
              disabled={!!(title && description && imageUrl)}
            >
              <Typography>update</Typography>
            </div>
          }
        />
      </BottomNavigation>
    </div>
  );
}

export default connect(
  (state) => ({
    uploadedShot: state.entities.shot,
    user_id: state.user.id,
    errors: state.errors.shotErrors,
    shot: state.entities.shot,
  }),
  (dispatch) => ({
    editShot: (shot) => dispatch(editShotAction(shot)),
    fetchShot: (id) => dispatch(fetchShotAction(id)),
  })
)(Upload);
