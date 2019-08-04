import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import messages from '../../messages/messages';
import { changePassword } from '../../api/auth';

// Functional Component
function AccountConfiguration({
  open,
  history,
  user,
  enqueueSnackbar
}) {
  const [screenStatus, setScreenStatus] = useState(open);
  const [credentials, setCredentials] = useState({ oldPassword: '', newPassword: '' });

  const handleClose = () => {
    setScreenStatus(false);
    history.push('/home');
  };

  // const handleChange = (event) => {
  //   event.persist();
  //   setCredentials(credentials => ({ ...credentials, [event.target.name]: event.target.value }));
  // }

  const handleSubmit = (event) => {
    event.preventDefault();

    changePassword(credentials, user)
      .then(() => enqueueSnackbar(messages.changePasswordSuccess, { variant: 'success' }))
      .then(() => history.push('/home'))
      .catch((error) => {
        console.eror(error);
        setCredentials({ oldPassword: '', newPassword: '' });
        enqueueSnackbar(messages.changePasswordFailure, { variant: 'error' });
      });
  };

  return (
    <div>
      <Dialog open={screenStatus} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <form noValidate>
            <Button
              fullWidth
              onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
            >
              Change
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// <FormTextField
//   handleChangeFunction={handleChange}
//   setValue={credentials.oldPassword}
//   setLabel={'Old Password'}
//   setID={'oldPassword'}
// />
// <FormTextField
//   handleChangeFunction={handleChange}
//   setValue={credentials.newPassword}
//   setLabel={'New Password'}
//   setID={'newPassword'}
// />

export default withSnackbar(withRouter(AccountConfiguration));
