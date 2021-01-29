import React from 'react';
import { Modal, Backdrop, makeStyles, Button, Fade } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    fontSize: '12px',
    marginTop: 10,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      marginRight: 15,
      backgroundColor: '#e2e2e2',
    },
  },
}));

export default function DeleteAlert({ deleteShot }) {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant='contained'
        disableElevation
        onClick={handleOpen}
      >
        <DeleteOutline />
      </Button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Delete action is irreversible</h2>
            <p id='transition-modal-description'>
              Are you sure you want to delete this artwork?
            </p>
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button variant='outlined' onClick={handleClose}>
                Cancel
              </Button>
              <Button
                color='secondary'
                onClick={() => {
                  deleteShot();
                  setTimeout(() => {
                    history.goBack(-1);
                  }, 300);
                }}
                variant='contained'
              >
                {' '}
                Delete
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
