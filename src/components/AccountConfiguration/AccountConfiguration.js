import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import useStyles from './AccountSettingsStyles';
import { initiateChangePassword } from '../../actions/user';

function AccountConfiguration({
  open,
  history,
  user,
  enqueueSnackbar,
  dispatch
}) {
  const classes = useStyles();
  const [screenStatus, setScreenStatus] = useState(open);
  const [credentials, setCredentials] = useState({
    oldPassword: '',
    newPassword: ''
  });

  const handleClose = () => {
    setScreenStatus(false);
    history.push('/home');
  };

  const handleChange = name => (event) => {
    setCredentials({ ...credentials, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(initiateChangePassword(credentials, user, handleClose, enqueueSnackbar));
  };

  return (
    <div>
      <Dialog open={screenStatus} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Settings
              </Typography>
              <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      variant="outlined"
                      name="oldPassword"
                      label="Old Password"
                      type="password"
                      id="oldPassword"
                      autoComplete="current-password"
                      onChange={handleChange('oldPassword')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      variant="outlined"
                      name="newPassword"
                      label="New Password"
                      type="password"
                      id="newPassword"
                      autoComplete="current-password"
                      onChange={handleChange('newPassword')}
                    />
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className={classes.submit}
            type="submit"
            variant="contained"
            color="primary"
          >
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


// Update User height and weight
// const handleNumberChange = name => (event) => {
//   setCredentials({ ...credentials, [name]: +event.target.value });
// };

// <Grid item xs={6}>
//   <TextField
//     id="weight"
//     label="Weight (lbs.)"
//     onChange={handleNumberChange('weight')}
//     type="number"
//     className={classes.textField}
//     value={credentials.weight}
//     InputLabelProps={{
//       shrink: true,
//     }}
//     margin="normal"
//     variant="outlined"
//   />
// </Grid>
// <Grid item xs={6}>
//   <TextField
//     id="height"
//     label="Height (inch)"
//     onChange={handleNumberChange('height')}
//     type="number"
//     className={classes.textField}
//     value={credentials.height}
//     InputLabelProps={{
//       shrink: true,
//     }}
//     margin="normal"
//     variant="outlined"
//   />
// </Grid>

const mapStateToProps = state => ({ user: state.user });

export default withSnackbar(withRouter(connect(mapStateToProps)(AccountConfiguration)));
