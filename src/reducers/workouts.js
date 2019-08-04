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
  case 'SIGNOUT_SUCCESS':
    return [];
  default:
    return state;
  }
};

export default workouts;
