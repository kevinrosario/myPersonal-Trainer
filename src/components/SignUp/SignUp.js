import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { initiateSignUp } from '../../actions/user';
import useStyles from './SignUpStyles';

function SignUp({ history, enqueueSnackbar, dispatch }) {
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    height: 0,
    weight: 0
  });

  const handleChange = name => (event) => {
    setCredentials({ ...credentials, [name]: event.target.value });
  };

  const handleNumberChange = name => (event) => {
    setCredentials({ ...credentials, [name]: +event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(initiateSignUp(credentials, setCredentials, history, enqueueSnackbar));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                autoFocus
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                id="firstName"
                label="First Name"
                value={credentials.firstName}
                onChange={handleChange('firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={credentials.lastName}
                onChange={handleChange('lastName')}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="weight"
                label="Weight (lbs.)"
                onChange={handleNumberChange('weight')}
                type="number"
                className={classes.textField}
                InputProps={{
                  inputProps: { min: 0 },
                  inputabelprops: { shrink: true }
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="height"
                label="Height (inch)"
                onChange={handleNumberChange('height')}
                type="number"
                className={classes.textField}
                InputProps={{
                  inputProps: { min: 0 },
                  inputabelprops: { shrink: true }
                }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={credentials.email}
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                variant="outlined"
                name="passwordConfirmation"
                label="Password Confirmation"
                type="password"
                id="passwordConfirmation"
                autoComplete="current-password"
                value={credentials.passwordConfirmation}
                onChange={handleChange('passwordConfirmation')}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/sign-in">
                  Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(connect()(withSnackbar(SignUp)));
