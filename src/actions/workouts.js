/* eslint no-underscore-dangle: 0 */
import messages from '../messages/messages';
import { createWorkout, updateWorkout, destroyWorkout } from '../api/workout';

// workouts request actions
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

// Create workout actions
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
      dispatch(workoutCreationFailure());
      console.error(error);
    });
};

// Update workout actions
const updateWorkoutRequest = () => ({
  type: 'UPDATE_WORKOUT_REQUEST'
});

const updateWorkoutFailure = () => ({
  type: 'UPDATE_WORKOUT_FAILURE'
});

export const updateWorkoutSuccess = response => ({
  type: 'UPDATE_WORKOUT_SUCCESS',
  workout: response.data.workout
});

export const initiateUpdateWorkout = (
  workout,
  user,
  enqueueSnackbar
) => (dispatch) => {
  dispatch(updateWorkoutRequest());
  return updateWorkout(workout, user)
    .then(response => dispatch(updateWorkoutSuccess(response)))
    .then(() => enqueueSnackbar(messages.updatedSuccessfully, { variant: 'success' }))
    .catch((error) => {
      enqueueSnackbar(messages.updateFailed, { variant: 'error' });
      dispatch(updateWorkoutFailure());
      console.error(error);
    });
};

// Destroy actions
const destroyWorkoutRequest = () => ({
  type: 'DESTROY_WORKOUT_REQUEST'
});

const destroyWorkoutFailure = () => ({
  type: 'DESTROY_WORKOUT_FAILURE'
});

const destroyWorkoutSuccess = workout => ({
  type: 'DESTROY_WORKOUT_SUCCESS',
  workout
});

export const initiateDestroyWorkout = (
  workout,
  user,
  enqueueSnackbar,
  history
) => (dispatch) => {
  dispatch(destroyWorkoutRequest());
  return destroyWorkout(workout, user)
    .then(() => dispatch(destroyWorkoutSuccess(workout)))
    .then(() => enqueueSnackbar(messages.updatedSuccessfully, { variant: 'success' }))
    .then(() => history.push('/home'))
    .catch((error) => {
      enqueueSnackbar(messages.somethingFailed, { variant: 'error' });
      dispatch(destroyWorkoutFailure());
      console.error(error);
    });
};

// destroyWorkout(workout, user)
//   .then(() => {
//     history.push('/home')
//     setWorkoutTemplate(null)
//     enqueueSnackbar(messages.deletedSuccessfully, { variant: 'error' })
//   })
//   .catch(console.error)

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
