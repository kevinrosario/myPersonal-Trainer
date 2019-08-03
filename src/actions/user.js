import {
  signIn, signUp, changePassword, signOut
} from '../api/auth';
import messages from '../messages/messages';

const signInRequest = () => ({
  type: 'SIGNIN_REQUEST'
});

const signInSuccess = response => ({
  type: 'SIGNIN_SUCCESS',
  user: response.data.user,
  workouts: response.data.workouts
});

const signInFailure = () => ({
  type: 'SIGNIN_FAILURE'
});

export const initiateSignIn = (credentials, enqueueSnackbar) => (dispatch) => {
  console.log('User action', credentials);
  dispatch(signInRequest());
  return signIn(credentials)
    .then((response) => {
      enqueueSnackbar(messages.signInSuccess, { variant: 'success' });
      dispatch(signInSuccess(response));
    })
    .catch(() => dispatch(signInFailure()));
};

const signUpRequest = () => ({
  type: 'SIGNUP_REQUEST'
});

const signUpSuccess = response => ({
  type: 'SIGNUP_SUCCESS',
  user: response.data.user
});

const signUpFailure = () => ({
  type: 'SIGNUP_FAILURE'
});

export const initiateSignUp = (credentials, enqueueSnackbar) => (dispatch) => {
  dispatch(signUpRequest());
  return signUp(credentials)
    .then((res) => {
      console.log(res, enqueueSnackbar);
      dispatch(signInRequest());
      return signIn(credentials)
        .then((response) => {
          dispatch(signUpSuccess(response));
        })
        .catch(() => dispatch(signInFailure()));
    })
    .catch(() => dispatch(signUpFailure()));
};

const changePasswordRequest = () => ({
  type: 'CHANGEPW_REQUEST'
});

const changePasswordFailure = () => ({
  type: 'CHANGEPW_FAILURE'
});

const changePasswordSuccess = () => ({
  type: 'CHANGEPW_SUCCESS'
});

export const initiateChangePassword = (passwords, user) => (dispatch) => {
  dispatch(changePasswordRequest());
  return changePassword(passwords, user)
    .then(() => dispatch(changePasswordSuccess()))
    .catch(() => dispatch(changePasswordFailure()));
};

const signOutFailure = () => ({
  type: 'SIGNOUT_FAILURE'
});

const signOutSuccess = () => ({
  type: 'SIGNOUT_SUCCESS'
});

export const initiateSignOut = user => (dispatch) => {
  signOut(user)
    .then(() => dispatch(signOutSuccess()))
    .catch(() => dispatch(signOutFailure()));
};
