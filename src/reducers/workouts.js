/* eslint no-underscore-dangle: 0 */

const workouts = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_WORKOUTS_SUCCESS':
    return [
      ...state,
      ...action.workouts
    ];
  case 'WORKOUT_CREATION_SUCCESS':
    return [
      action.workout,
      ...state
    ];
  case 'UPDATE_WORKOUT_SUCCESS':
    return state.map(workout => (
      workout._id === action.workout._id
        ? { ...workout, exercises: [...action.workout.exercises] }
        : workout
    ));
  case 'SIGNOUT_SUCCESS':
    return [];
  default:
    return state;
  }
};

export default workouts;
