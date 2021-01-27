import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCopyToClipboard = () => {
    const emailAddress = document.querySelector('#user-email-to-copy');
    console.log('emailAddress', emailAddress);
    emailAddress.select();
    document.execCommand('copy');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={handleClickOpen}>
        Hire Me!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Would Like to Contact Me?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Hi! For work inquiries, please contact me at{' '}
            <textarea
              onChange={() => {}}
              value={user?.email}
              id='user-email-to-copy'
              readOnly
              style={{
                marginTop: '1rem',
                fontSize: 15,
                fontWeight: 100,
                border: 'none',
                resize: 'none',
                padding: 'auto',
                width: '100%',
              }}
            ></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCopyToClipboard} color='primary'>
            copy to clipboard
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
