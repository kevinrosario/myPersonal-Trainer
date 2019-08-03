import {
  signIn, signUp, changePassword, signOut
} from '../api/auth';

const signInRequest = () => ({
  type: 'SIGNIN_REQUEST'
});

const signInSuccess = response => ({
  type: 'SIGNIN_SUCCESS',
  user: response.data.user,
  alert: {
    type: 'success',
    heading: 'Success',
    message: 'You\'re signed in... Enjoy!'
  }
});

const signInFailure = () => ({
  type: 'SIGNIN_FAILURE',
  alert: {
    type: 'danger',
    heading: 'Error',
    message: 'Something went wrong while trying to sign you in... Try again.'
  }
});

export const initiateSignIn = credentials => (dispatch) => {
  dispatch(signInRequest());
  return signIn(credentials)
    .then((response) => {
      dispatch(signInSuccess(response));
    })
    .catch(() => dispatch(signInFailure()));
};

const signUpRequest = () => ({
  type: 'SIGNUP_REQUEST'
});

const signUpSuccess = response => ({
  type: 'SIGNUP_SUCCESS',
  user: response.data.user,
  alert: {
    type: 'success',
    heading: 'Success',
    message: 'You signed up successfully and we logged you in!'
  }
});

const signUpFailure = () => ({
  type: 'SIGNUP_FAILURE',
  alert: {
    type: 'danger',
    heading: 'Error',
    message: 'Something went wrong while trying to sign you up... Try again.'
  }
});

export const initiateSignUp = credentials => (dispatch) => {
  dispatch(signUpRequest());
  return signUp(credentials)
    .then((res) => {
      console.log(res);
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
  type: 'CHANGEPW_FAILURE',
  alert: {
    type: 'danger',
    heading: 'Error',
    message: 'Something went wrong while trying to change your password... Try again.'
  }
});

const changePasswordSuccess = () => ({
  type: 'CHANGEPW_SUCCESS',
  alert: {
    type: 'success',
    heading: 'Success',
    message: 'Your password is changed!'
  }
});

export const initiateChangePassword = (passwords, user) => (dispatch) => {
  dispatch(changePasswordRequest());
  return changePassword(passwords, user)
    .then(() => dispatch(changePasswordSuccess()))
    .catch(() => dispatch(changePasswordFailure()));
};

const signOutFailure = () => ({
  type: 'SIGNOUT_FAILURE',
  alert: {
    type: 'danger',
    heading: 'Error',
    message: 'Something went wrong during sign out... Try again.'
  }
});

const signOutSuccess = () => ({
  type: 'SIGNOUT_SUCCESS',
  alert: {
    type: 'info',
    heading: 'You\'ve signed out',
    message: 'We\'ll miss you... comeback soon'
  }
});


export const initiateSignOut = user => (dispatch) => {
  signOut(user)
    .then(() => dispatch(signOutSuccess()))
    .catch(() => dispatch(signOutFailure()));
};
