import React, { useMemo, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
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

function StyledDropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
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

  return (
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
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
                <Typography style={{ marginBottom: 20 }} variant='body2'>
                  One high resolution image
                </Typography>
                <div></div>
                <Typography style={{ color: '#8a8a8a' }} variant='body2'>
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
                <Typography style={{ color: '#8a8a8a' }} variant='body2'>
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
                <Typography style={{ color: '#8a8a8a' }} variant='body2'>
                  has to be less than 10 secs, will be pro feature
                </Typography>
              </div>
            </li>
          </div>
          <div style={{}}>
            <CloudUploadTwoToneIcon style={{ color: 'pink', fontSize: '17rem' }} />
          </div>
          <div style={{ textAlign: 'center' }}>
            <Typography variant='h4' style={{ fontWeight: 'bold' }}>
              Drag and drop an image
            </Typography>
            <br />
            <Typography variant='h5'>
              or <span style={{ color: 'pink' }}>browse</span> to choose a file
            </Typography>
            <Typography variant='body2' style={{ lineHeight: '2rem' }}>
              (1600x1200 or larger recommended, up to 10MB each)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StyledDropzone;
