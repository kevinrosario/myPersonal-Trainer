/* eslint no-underscore-dangle: 0 */
import messages from '../messages/messages';
import { createWorkout } from '../api/workout';


export const workoutsRequest = () => ({
  type: 'FETCH_WORKOUTS_REQUEST'
});

export const workoutsRequestSuccess = response => ({
  type: 'FETCH_WORKOUTS_SUCCESS',
  workouts: response.data.workouts
});

export const workoutsRequestFailure = () => ({
  type: 'FETCH_WORKOUTS_FAILURE'
});

const workoutCreationRequest = () => ({
  type: 'WORKOUT_CREATION_REQUEST'
});

const workoutCreationSuccess = response => ({
  type: 'WORKOUT_CREATION_SUCCESS',
  workout: response.data.workout
});

const workoutCreationFailure = () => ({
  type: 'WORKOUT_CREATION_FAILURE'
});

export const initiateWorkoutCreation = (
  selectedExercises,
  user,
  history,
  enqueueSnackbar,
  dialogHandler
) => (dispatch) => {
  dispatch(workoutCreationRequest());
  return createWorkout(selectedExercises, user)
    .then((response) => {
      dispatch(workoutCreationSuccess(response));
      history.push(`/edit-workout/${response.data.workout._id}`);
      enqueueSnackbar(messages.workoutCreated, { variant: 'success' });
    })
    .then(dialogHandler)
    .catch((error) => {
      enqueueSnackbar(messages.createFailed, { variant: 'error' });
      console.error(error);
      dispatch(workoutCreationFailure());
    });
};

// export const initiateWorkoutCreation = (credentials, enqueueSnackbar, history) => (dispatch) => {
//   dispatch(workoutCreationRequest());
//   return signIn(credentials)
//     .then((response) => {
//       dispatch(signInSuccess(response));
//     })
//     .then(() => enqueueSnackbar(messages.signInSuccess, { variant: 'success' }))
//     .then(() => history.push('/home'))
//     .catch(() => dispatch(signInFailure()));
// };

// setWorkoutTemplate(response.data.workoutTemplate)
//
// const changePasswordRequest = () => ({
//   type: 'CHANGEPW_REQUEST'
// });
//
// const changePasswordFailure = () => ({
//   type: 'CHANGEPW_FAILURE'
// });
//
// const changePasswordSuccess = () => ({
//   type: 'CHANGEPW_SUCCESS'
// });
//
// export const initiateChangePassword = (passwords, user) => (dispatch) => {
//   dispatch(changePasswordRequest());
//   return changePassword(passwords, user)
//     .then(() => dispatch(changePasswordSuccess()))
//     .catch(() => dispatch(changePasswordFailure()));
// };
//
// const signOutFailure = () => ({
//   type: 'SIGNOUT_FAILURE'
// });
//
// const signOutSuccess = () => ({
//   type: 'SIGNOUT_SUCCESS'
// });
//
// export const initiateSignOut = (user, enqueueSnackbar) => (dispatch) => {
//   signOut(user)
//     .then(() => dispatch(signOutSuccess()))
//     .then(() => enqueueSnackbar(messages.signOutSuccess, { variant: 'success' }))
//     .catch(() => dispatch(signOutFailure()));
// };
